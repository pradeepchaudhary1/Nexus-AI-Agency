import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { runAudit, type AuditResult, type Check } from "./audit-engine";
import { generateFixes, type Fix } from "./fix-generator";
import { submitLead } from "./leads.functions";

export interface Lighthouse { performance: number; accessibility: number; bestPractices: number; seo: number }
export interface ScanTeaser {
  auditId: string; url: string; domain: string; score: number; grade: string; lighthouse: Lighthouse | null;
  categories: AuditResult["categories"]; platform: string;
  counts: { fail: number; warn: number; pass: number; total: number };
  topIssues: { title: string; detail: string; category: string }[];
  gaps: { title: string; detail: string }[];
}
export type ScanResponse = { ok: true; teaser: ScanTeaser; cached: boolean } | { ok: false; error: string };
export type UnlockResponse = { ok: true; checks: Check[]; fixes: Fix[] } | { ok: false; error: string };

const MAX_SCANS_PER_HOUR = 5;
const CACHE_MINUTES = 10;
// The generated Supabase types do not know scan_audits yet, so use a loose handle for this one table.
type Loose = { from: (t: string) => any };
const getDb = async () => ((await import("@/integrations/client.server")).supabaseAdmin as unknown as Loose);

// ---------- helpers ----------
function assertPublic(u: URL) {
  if (!/^https?:$/.test(u.protocol)) throw new Error("Only http and https addresses are supported.");
  if (u.port && !["80", "443"].includes(u.port)) throw new Error("That port is not allowed.");
  const h = u.hostname.toLowerCase();
  if (!h.includes(".") || /^\d+\.\d+\.\d+\.\d+$/.test(h) || h.includes(":") || /(\.local|\.internal|\.lan|\.localhost)$/.test(h) || h === "localhost") throw new Error("Please enter a public website address.");
}
async function get(url: string, ms: number, max = 1_500_000) {
  let cur = new URL(url); const t0 = Date.now();
  for (let hop = 0; hop < 5; hop++) {
    assertPublic(cur);
    const res = await fetch(cur.toString(), { redirect: "manual", signal: AbortSignal.timeout(ms), headers: { "user-agent": "NexusAuditBot/1.0 (+https://www.nexusaiagency.in)", accept: "text/html,*/*" } });
    const loc = res.headers.get("location");
    if (res.status >= 300 && res.status < 400 && loc) { cur = new URL(loc, cur); continue; }
    return { res, text: (await res.text()).slice(0, max), finalUrl: cur.toString(), ms: Date.now() - t0 };
  }
  throw new Error("The site redirected too many times.");
}
async function hashIp(): Promise<string | null> {
  const ip = getRequestHeader("cf-connecting-ip") || getRequestHeader("x-forwarded-for")?.split(",")[0]?.trim();
  if (!ip) return null;
  const d = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`nexus-scan:${ip}`));
  return Array.from(new Uint8Array(d), (b) => b.toString(16).padStart(2, "0")).join("");
}
async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env["TURNSTILE_SECRET_KEY"];
  if (!secret || !token) return false; // fail closed
  try {
    const body = new URLSearchParams({ secret, response: token });
    const ip = getRequestHeader("cf-connecting-ip"); if (ip) body.set("remoteip", ip);
    const r = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body, signal: AbortSignal.timeout(8000) });
    return !!((await r.json()) as { success?: boolean }).success;
  } catch { return false; }
}
function toTeaser(id: string, url: string, audit: AuditResult, lighthouse: Lighthouse | null): ScanTeaser {
  const bad = audit.checks.filter((c) => c.status !== "pass").sort((a, b) => (a.status === b.status ? b.weight - a.weight : a.status === "fail" ? -1 : 1));
  return {
    auditId: id, url, domain: new URL(url).hostname, score: audit.score, grade: audit.grade, lighthouse, categories: audit.categories, platform: audit.facts.platform,
    counts: { fail: audit.checks.filter((c) => c.status === "fail").length, warn: audit.checks.filter((c) => c.status === "warn").length, pass: audit.checks.filter((c) => c.status === "pass").length, total: audit.checks.length },
    topIssues: bad.slice(0, 3).map((c) => ({ title: c.title, detail: c.detail, category: c.category })),
    gaps: audit.checks.filter((c) => c.category === "Lead Capture" && c.status !== "pass").map((c) => ({ title: c.title, detail: c.detail })),
  };
}

// ---------- scan ----------
export const scanSite = createServerFn({ method: "POST" })
  .validator((v: { url: string; turnstileToken: string }) => ({ url: String(v.url ?? "").slice(0, 200), turnstileToken: String(v.turnstileToken ?? "").slice(0, 2100) }))
  .handler(async ({ data }): Promise<ScanResponse> => {
    try {
      if (!(await verifyTurnstile(data.turnstileToken))) return { ok: false, error: "Security check failed. Please refresh the page and try again." };
      const raw = data.url.trim();
      if (raw.length < 4) return { ok: false, error: "Please enter a website address." };
      const u = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
      assertPublic(u);
      const db = await getDb();

      // Recent scan of the same domain: reuse it (saves Google quota, instant for the visitor).
      const since = new Date(Date.now() - CACHE_MINUTES * 60_000).toISOString();
      const cachedQ = await db.from("scan_audits").select("id,url,audit,lighthouse").eq("domain", u.hostname.replace(/^www\./, "")).gte("created_at", since).order("created_at", { ascending: false }).limit(1).maybeSingle();
      if (cachedQ?.data) return { ok: true, cached: true, teaser: toTeaser(cachedQ.data.id, cachedQ.data.url, cachedQ.data.audit as AuditResult, cachedQ.data.lighthouse as Lighthouse | null) };

      const ipHash = await hashIp();
      if (ipHash) {
        const hour = new Date(Date.now() - 3600_000).toISOString();
        const { count } = await db.from("scan_audits").select("id", { count: "exact", head: true }).eq("client_ip_hash", ipHash).gte("created_at", hour);
        if ((count ?? 0) >= MAX_SCANS_PER_HOUR) return { ok: false, error: "You have reached the hourly scan limit. Please try again later." };
      }

      const main = await get(u.toString(), 12000);
      const origin = new URL(main.finalUrl).origin;
      const opt = async (p: string) => { try { const r = await get(origin + p, 6000, 200_000); return r.res.ok ? r.text : null; } catch { return null; } };
      const [robotsTxt, llmsTxt, sitemap] = await Promise.all([opt("/robots.txt"), opt("/llms.txt"), opt("/sitemap.xml")]);
      const headers: Record<string, string> = {}; main.res.headers.forEach((v, k) => { headers[k.toLowerCase()] = v; });
      const audit = runAudit({ url: main.finalUrl, html: main.text, headers, responseMs: main.ms, robotsTxt, llmsTxt: llmsTxt && !/<html/i.test(llmsTxt) ? llmsTxt : null, sitemapOk: !!sitemap && /<urlset|<sitemapindex/i.test(sitemap) });

      let lighthouse: Lighthouse | null = null;
      try {
        const key = process.env["PSI_API_KEY"] ?? "";
        const p = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(main.finalUrl)}&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo${key ? `&key=${key}` : ""}`, { signal: AbortSignal.timeout(25000) });
        if (p.ok) { const j = (await p.json()) as { lighthouseResult?: { categories?: Record<string, { score: number | null }> } }; const c = j.lighthouseResult?.categories;
          const n = (k: string) => Math.round((c?.[k]?.score ?? 0) * 100);
          if (c?.["performance"]) lighthouse = { performance: n("performance"), accessibility: n("accessibility"), bestPractices: n("best-practices"), seo: n("seo") }; }
      } catch { /* Lighthouse is optional */ }

      const ins = await db.from("scan_audits").insert({ url: main.finalUrl, domain: new URL(main.finalUrl).hostname.replace(/^www\./, ""), score: audit.score, grade: audit.grade, lighthouse, audit, client_ip_hash: ipHash }).select("id").single();
      if (ins.error || !ins.data) { console.error("scan_audits insert failed:", ins.error); return { ok: false, error: "The scan finished but could not be saved. Please try again." }; }
      return { ok: true, cached: false, teaser: toTeaser(ins.data.id, main.finalUrl, audit, lighthouse) };
    } catch (e) {
      const msg = e instanceof Error ? e.message : "";
      return { ok: false, error: /public website|http and https|port|redirected/.test(msg) ? msg : "We could not reach that website. Check the address and try again." };
    }
  });

// ---------- unlock (lead gate; full report is only ever sent from here) ----------
export const unlockAudit = createServerFn({ method: "POST" })
  .validator((v: { auditId: string; name: string; email: string; phone?: string; website?: string }) => ({ auditId: String(v.auditId ?? ""), name: String(v.name ?? "").slice(0, 100), email: String(v.email ?? "").slice(0, 255), phone: v.phone ? String(v.phone).slice(0, 30) : undefined, website: v.website ? String(v.website).slice(0, 100) : undefined }))
  .handler(async ({ data }): Promise<UnlockResponse> => {
    try {
      if (!/^[0-9a-f-]{36}$/i.test(data.auditId)) return { ok: false, error: "This report link is not valid. Please run the scan again." };
      const db = await getDb();
      const row = await db.from("scan_audits").select("id,url,domain,score,audit").eq("id", data.auditId).maybeSingle();
      if (!row?.data) return { ok: false, error: "This report has expired. Please run the scan again." };
      const lead = await submitLead({ data: { source: "readiness_audit", idempotencyKey: data.auditId, name: data.name, email: data.email, ...(data.phone ? { phone: data.phone } : {}), businessType: String(row.data.domain).slice(0, 100), message: `Website scanner report unlocked. Domain: ${row.data.domain}. Score: ${row.data.score}/100.`, website: data.website ?? "" } });
      if (!lead.success) return { ok: false, error: lead.error };
      await db.from("scan_audits").update({ unlocked_at: new Date().toISOString() }).eq("id", data.auditId);
      const audit = row.data.audit as AuditResult;
      return { ok: true, checks: audit.checks, fixes: generateFixes(audit, String(row.data.url)) };
    } catch (e) { console.error("unlockAudit failed:", e); return { ok: false, error: "Something went wrong. Please try again." }; }
  });
