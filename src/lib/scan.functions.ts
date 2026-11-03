import { createServerFn } from "@tanstack/react-start";
import { runAudit, type AuditResult } from "./audit-engine";
import { generateFixes, type Fix } from "./fix-generator";

export interface Lighthouse { performance: number; accessibility: number; bestPractices: number; seo: number }
export interface ScanResponse { ok: boolean; error?: string; url?: string; audit?: AuditResult; fixes?: Fix[]; lighthouse?: Lighthouse | null; }

// SSRF guard: public http(s) hostnames only; no IP literals, no internal TLDs, no odd ports.
function assertPublic(u: URL) {
  if (!/^https?:$/.test(u.protocol)) throw new Error("Only http/https allowed");
  if (u.port && !["80", "443"].includes(u.port)) throw new Error("Port not allowed");
  const h = u.hostname.toLowerCase();
  if (!h.includes(".") || /^\d+\.\d+\.\d+\.\d+$/.test(h) || h.includes(":") || /(\.local|\.internal|\.lan|\.localhost)$/.test(h) || h === "localhost") throw new Error("Public domain names only");
}
async function get(url: string, ms: number, max = 1_500_000) {
  let cur = new URL(url); const t0 = Date.now();
  for (let hop = 0; hop < 5; hop++) { // manual redirects so every hop is re-validated
    assertPublic(cur);
    const res = await fetch(cur.toString(), { redirect: "manual", signal: AbortSignal.timeout(ms), headers: { "user-agent": "NexusAuditBot/1.0 (+https://www.nexusaiagency.in/audit-bot)", accept: "text/html,*/*" } });
    if (res.status >= 300 && res.status < 400 && res.headers.get("location")) { cur = new URL(res.headers.get("location")!, cur); continue; }
    const text = (await res.text()).slice(0, max);
    return { res, text, finalUrl: cur.toString(), ms: Date.now() - t0 };
  }
  throw new Error("Too many redirects");
}

export const scanSite = createServerFn({ method: "POST" })
  .inputValidator((v: { url: string }) => v)
  .handler(async ({ data }): Promise<ScanResponse> => {
    try {
      const raw = data.url.trim().slice(0, 200); const u = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
      const main = await get(u.toString(), 12000);
      const origin = new URL(main.finalUrl).origin;
      const opt = async (p: string) => { try { const r = await get(origin + p, 6000, 200_000); return r.res.ok ? r.text : null; } catch { return null; } };
      const [robotsTxt, llmsTxt, sitemap] = await Promise.all([opt("/robots.txt"), opt("/llms.txt"), opt("/sitemap.xml")]);
      const headers: Record<string, string> = {}; main.res.headers.forEach((v, k) => (headers[k.toLowerCase()] = v));
      const audit = runAudit({ url: main.finalUrl, html: main.text, headers, responseMs: main.ms, robotsTxt, llmsTxt: llmsTxt && !/<html/i.test(llmsTxt) ? llmsTxt : null, sitemapOk: !!sitemap && /<urlset|<sitemapindex/i.test(sitemap) });
      // Real Lighthouse via Google PageSpeed Insights API (free; set PSI_API_KEY secret for quota)
      let lighthouse: Lighthouse | null = null;
      try {
        const key = (globalThis as any).process?.env?.PSI_API_KEY ?? "";
        const p = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(main.finalUrl)}&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo${key ? `&key=${key}` : ""}`, { signal: AbortSignal.timeout(25000) });
        if (p.ok) { const j: any = await p.json(); const c = j.lighthouseResult?.categories; if (c) lighthouse = { performance: Math.round(c.performance.score * 100), accessibility: Math.round(c.accessibility.score * 100), bestPractices: Math.round(c["best-practices"].score * 100), seo: Math.round(c.seo.score * 100) }; }
      } catch { /* PSI optional */ }
      return { ok: true, url: main.finalUrl, audit, fixes: generateFixes(audit, main.finalUrl), lighthouse };
    } catch (e: any) { return { ok: false, error: e?.message?.slice(0, 160) ?? "Scan failed" }; }
  });
