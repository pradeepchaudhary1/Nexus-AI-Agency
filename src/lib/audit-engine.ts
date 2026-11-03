// Pure, runtime-agnostic audit engine (works on Cloudflare Workers: no Node APIs, no headless Chrome).
// Input = what the server fetched. Output = real checks + data used to generate real fixes.

export type Status = "pass" | "warn" | "fail";
export interface Check { id: string; category: string; status: Status; title: string; detail: string; weight: number; }
export interface AuditInput {
  url: string;                       // final URL after redirects
  html: string;
  headers: Record<string, string>;   // lower-cased response header names
  responseMs: number;
  robotsTxt: string | null;
  llmsTxt: string | null;
  sitemapOk: boolean;
}
export interface PageFacts {
  title: string; description: string; canonical: string; lang: string; h1: string[]; headings: string[];
  wordCount: number; images: number; imagesNoAlt: number; schemaTypes: string[]; hasPhone: boolean; phone: string;
  email: string; hasVoiceWidget: boolean; hasChatWidget: boolean; hasWhatsApp: boolean; socials: string[];
  ogImage: string; hasViewport: boolean; hasFavicon: boolean; internalLinks: number; externalLinks: number;
  blankNoRel: number; hasCRM: boolean; hasBooking: boolean; hasAnalytics: boolean; hasForm: boolean; platform: string; formInputsNoLabel: number; hasSkipLink: boolean; hasFaq: boolean; siteName: string;
}
export interface AuditResult { score: number; grade: string; checks: Check[]; facts: PageFacts; categories: { name: string; score: number; fail: number; warn: number; pass: number }[]; }

const m = (re: RegExp, s: string) => (re.exec(s)?.[1] ?? "").trim();
const strip = (s: string) => s.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>/gi, " ").replace(/&nbsp;|&amp;/g, " ").replace(/\s+/g, " ").trim();
const attr = (tag: string, name: string) => m(new RegExp(`${name}\\s*=\\s*["']([^"']*)["']`, "i"), tag);

export function extractFacts(html: string, url: string): PageFacts {
  const origin = new URL(url).origin;
  const metas = [...html.matchAll(/<meta\b[^>]*>/gi)].map((x) => x[0]);
  const metaBy = (key: string, val: string) => { const t = metas.find((x) => attr(x, key).toLowerCase() === val); return t ? attr(t, "content") : ""; };
  const links = [...html.matchAll(/<link\b[^>]*>/gi)].map((x) => x[0]);
  const body = (/<body[\s\S]*<\/body>/i.exec(html)?.[0]) ?? html;
  const text = strip(body);
  const imgs = [...html.matchAll(/<img\b[^>]*>/gi)].map((x) => x[0]);
  const anchors = [...html.matchAll(/<a\b[^>]*>/gi)].map((x) => x[0]);
  const schemaTypes: string[] = [];
  for (const s of html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const walk = (n: any) => { if (!n || typeof n !== "object") return; if (Array.isArray(n)) return n.forEach(walk);
        if (n["@type"]) [].concat(n["@type"]).forEach((t: string) => schemaTypes.push(String(t))); Object.values(n).forEach(walk); };
      walk(JSON.parse(s[1] ?? ""));
    } catch { schemaTypes.push("INVALID_JSON"); }
  }
  const tel = m(/href=["']tel:([^"']+)["']/i, html);
  const inputs = [...html.matchAll(/<(input|textarea|select)\b[^>]*>/gi)].map((x) => x[0]).filter((t) => !/type=["'](hidden|submit|button)["']/i.test(t));
  const labelFors = new Set([...html.matchAll(/<label[^>]*for=["']([^"']+)["']/gi)].map((x) => x[1]));
  const noLabel = inputs.filter((t) => { const id = attr(t, "id"); return !(id && labelFors.has(id)) && !attr(t, "aria-label"); }).length;
  return {
    title: strip(m(/<title[^>]*>([\s\S]*?)<\/title>/i, html)),
    description: metaBy("name", "description"),
    canonical: attr(links.find((l) => /rel=["']canonical["']/i.test(l)) ?? "", "href"),
    lang: m(/<html[^>]*\blang=["']([^"']+)["']/i, html),
    h1: [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((x) => strip(x[1] ?? "")),
    headings: [...html.matchAll(/<h([1-6])\b/gi)].map((x) => x[1] ?? ""),
    wordCount: text ? text.split(" ").length : 0,
    images: imgs.length, imagesNoAlt: imgs.filter((t) => !/\balt=/i.test(t)).length,
    schemaTypes, hasPhone: !!tel, phone: tel,
    email: m(/href=["']mailto:([^"'?]+)/i, html),
    hasVoiceWidget: /vapi|retell|synthflow|elevenlabs|bland\.ai|voiceflow/i.test(html),
    hasChatWidget: /tawk\.to|crisp\.chat|intercom|drift|tidio|hubspot|zoya|chat-widget/i.test(html),
    hasWhatsApp: /wa\.me|api\.whatsapp\.com/i.test(html),
    socials: [...new Set([...html.matchAll(/https?:\/\/(?:www\.)?(instagram|facebook|linkedin|x|twitter|youtube)\.com[^"'\s<]*/gi)].map((x) => (x[1] ?? "").toLowerCase()))],
    ogImage: metaBy("property", "og:image"),
    hasViewport: !!metaBy("name", "viewport"), hasFavicon: links.some((l) => /rel=["'](shortcut )?icon["']/i.test(l)),
    internalLinks: anchors.filter((a) => { const h = attr(a, "href"); return h.startsWith("/") || h.startsWith(origin); }).length,
    externalLinks: anchors.filter((a) => /^https?:\/\//i.test(attr(a, "href")) && !attr(a, "href").startsWith(origin)).length,
    blankNoRel: anchors.filter((a) => /target=["']_blank["']/i.test(a) && !/rel=["'][^"']*noopener/i.test(a)).length,
    formInputsNoLabel: noLabel,
    hasSkipLink: /href=["']#(main|content|main-content)["']/i.test(html),
    hasCRM: /hubspot|zoho|salesforce|pipedrive|gohighlevel|leadsquared|freshsales|activecampaign|kommo/i.test(html),
    hasBooking: /calendly|cal\.com|setmore|acuity|savvycal|bookings\.microsoft/i.test(html),
    hasAnalytics: /googletagmanager|gtag\(|google-analytics|plausible|posthog|clarity\.ms|mixpanel/i.test(html),
    hasForm: /<form\b/i.test(html),
    platform: /wp-content|wordpress/i.test(html) ? "WordPress" : /cdn\.shopify|shopify/i.test(html) ? "Shopify" : /wixstatic|wix\.com/i.test(html) ? "Wix" : /webflow/i.test(html) ? "Webflow" : /squarespace/i.test(html) ? "Squarespace" : /__NEXT_DATA__|_next\//i.test(html) ? "Next.js" : /tanstack|__TSR|vite/i.test(html) ? "React (Vite/TanStack)" : "Unknown",
    hasFaq: /FAQPage/.test(schemaTypes.join(",")),
    siteName: metaBy("property", "og:site_name") || (strip(m(/<title[^>]*>([\s\S]*?)<\/title>/i, html)).split(/[|\-—–]/)[0] ?? "").trim(),
  };
}

export function runAudit(i: AuditInput): AuditResult {
  const f = extractFacts(i.html, i.url);
  const h = i.headers;
  const checks: Check[] = [];
  const add = (category: string, id: string, ok: boolean | "warn", title: string, detail: string, weight = 1) =>
    checks.push({ id, category, status: ok === true ? "pass" : ok === "warn" ? "warn" : "fail", title, detail, weight });

  // --- Core SEO
  add("Core SEO", "title", f.title.length >= 30 && f.title.length <= 60 ? true : f.title ? "warn" : false, "Title tag", `${f.title.length} chars (ideal 30–60): “${f.title.slice(0, 70)}”`, 3);
  add("Core SEO", "desc", f.description.length >= 120 && f.description.length <= 160 ? true : f.description ? "warn" : false, "Meta description", `${f.description.length} chars (ideal 120–160)`, 3);
  add("Core SEO", "h1", f.h1.length === 1 ? true : f.h1.length === 0 ? false : "warn", "Single H1", `${f.h1.length} H1 found`, 3);
  add("Core SEO", "canon", f.canonical ? (new URL(f.canonical, i.url).host === new URL(i.url).host ? true : "warn") : false, "Canonical", f.canonical ? `canonical host ${new URL(f.canonical, i.url).host} vs page host ${new URL(i.url).host} — choose ONE host (www or apex) and 301-redirect the other` : "missing", 2);
  add("Core SEO", "lang", !!f.lang, "html lang", f.lang || "missing", 1);
  add("Core SEO", "viewport", f.hasViewport, "Viewport meta", f.hasViewport ? "ok" : "missing", 2);
  add("Core SEO", "favicon", f.hasFavicon, "Favicon", f.hasFavicon ? "ok" : "missing", 1);
  const levels = f.headings.map(Number); const skipped = levels.some((l, k) => k > 0 && l - (levels[k - 1] ?? 0) > 1);
  add("Content", "hier", !skipped, "Heading hierarchy", skipped ? "heading levels skipped (e.g. h1→h4)" : "ok", 1);
  add("Content", "words", f.wordCount >= 600 ? true : f.wordCount >= 300 ? "warn" : false, "Content depth", `${f.wordCount} words (aim 600+ on money pages)`, 2);
  add("Content", "alt", f.imagesNoAlt === 0, "Image alt text", `${f.imagesNoAlt}/${f.images} images without alt`, 1);
  // --- Performance
  add("Performance", "ttfb", i.responseMs < 500 ? true : i.responseMs < 1000 ? "warn" : false, "Server response", `${i.responseMs} ms (target < 500)`, 2);
  add("Performance", "gzip", /gzip|br|zstd/.test(h["content-encoding"] ?? "") ? true : "warn", "Compression", h["content-encoding"] || "none seen by this fetch", 1);
  add("Performance", "cache", !!h["cache-control"], "Cache-Control", h["cache-control"] || "missing", 1);
  // --- Security
  for (const [k, label, w] of [["strict-transport-security", "HSTS", 1], ["x-content-type-options", "X-Content-Type-Options", 1], ["x-frame-options", "X-Frame-Options (or CSP frame-ancestors)", 1], ["referrer-policy", "Referrer-Policy", 1], ["permissions-policy", "Permissions-Policy", 1], ["content-security-policy", "Content-Security-Policy", 2]] as const)
    add("Security", k, k === "x-frame-options" ? !!(h[k] || /frame-ancestors/.test(h["content-security-policy"] ?? "")) : !!h[k], label, h[k] ? "present" : "missing", w);
  const csp = h["content-security-policy"] ?? "";
  if (csp) add("Security", "csp-strength", /unsafe-eval/.test(csp) ? "warn" : true, "CSP strength", /unsafe-eval/.test(csp) ? "'unsafe-eval' present — weakens CSP" : "no unsafe-eval", 1);
  add("Security", "blank", f.blankNoRel === 0, "target=_blank rel=noopener", `${f.blankNoRel} links missing rel`, 1);
  // --- Accessibility
  add("Accessibility", "labels", f.formInputsNoLabel === 0, "Form labels", `${f.formInputsNoLabel} inputs without label/aria-label`, 2);
  add("Accessibility", "skip", f.hasSkipLink, "Skip-to-content link", f.hasSkipLink ? "ok" : "missing", 1);
  // --- Structured data
  add("Structured Data", "schema", f.schemaTypes.length > 0 && !f.schemaTypes.includes("INVALID_JSON"), "JSON-LD", f.schemaTypes.join(", ") || "none", 3);
  add("Structured Data", "org", f.schemaTypes.some((t) => /Organization|LocalBusiness|ProfessionalService/.test(t)), "Organization/LocalBusiness", "entity markup", 2);
  add("Structured Data", "faq", f.hasFaq, "FAQPage", f.hasFaq ? "ok" : "none on this page", 1);
  // --- Social
  add("Social", "og", !!f.ogImage, "og:image", f.ogImage || "missing", 1);
  // --- AI / GEO
  const blocked = ["gptbot", "claudebot", "perplexitybot", "google-extended"].filter((b) => new RegExp(`user-agent:\\s*${b}[\\s\\S]*?disallow:\\s*/\\s*(\\n|$)`, "i").test(i.robotsTxt ?? ""));
  add("AI/GEO", "robots", i.robotsTxt === null ? "warn" : blocked.length === 0, "AI crawler access", blocked.length ? `blocked: ${blocked.join(", ")}` : i.robotsTxt === null ? "no robots.txt" : "no AI bot blocked", 2);
  add("AI/GEO", "llms", !!i.llmsTxt && !/<html/i.test(i.llmsTxt), "/llms.txt", i.llmsTxt ? "present" : "missing", 1);
  add("AI/GEO", "sitemap", i.sitemapOk, "sitemap.xml", i.sitemapOk ? "ok" : "missing", 2);
  // --- Business conversion (our differentiator)
  add("Lead Capture", "phone", f.hasPhone, "Click-to-call link", f.phone || "none", 2);
  add("Lead Capture", "wa", f.hasWhatsApp, "WhatsApp link", f.hasWhatsApp ? "ok" : "none", 1);
  add("Lead Capture", "voice", f.hasVoiceWidget ? true : f.hasPhone ? "warn" : false, "24/7 AI voice/chat intake", f.hasVoiceWidget ? "voice widget detected" : f.hasChatWidget ? "chat widget only — no voice AI" : "no after-hours capture detected", 3);
  add("Lead Capture", "chatbot", f.hasChatWidget || f.hasVoiceWidget, "AI chatbot / live chat", f.hasChatWidget ? "chat widget detected" : "no chatbot detected on this page", 2);
  add("Lead Capture", "crm", f.hasCRM, "CRM / marketing automation", f.hasCRM ? "CRM script detected" : "no CRM tracking or forms detected", 2);
  add("Lead Capture", "booking", f.hasBooking, "Online booking", f.hasBooking ? "booking tool detected" : "no booking tool detected", 1);
  add("Lead Capture", "form", f.hasForm, "Lead form on page", f.hasForm ? "form present" : "no form on this page", 1);
  add("Lead Capture", "analytics", f.hasAnalytics, "Analytics / conversion tracking", f.hasAnalytics ? "analytics detected" : "no analytics detected", 2);
  // --- Scoring
  const pts = { pass: 1, warn: 0.5, fail: 0 } as const;
  const total = checks.reduce((a, c) => a + c.weight, 0);
  const got = checks.reduce((a, c) => a + c.weight * pts[c.status], 0);
  const score = Math.round((got / total) * 100);
  const cats = [...new Set(checks.map((c) => c.category))].map((name) => {
    const cs = checks.filter((c) => c.category === name); const t = cs.reduce((a, c) => a + c.weight, 0);
    return { name, score: Math.round((cs.reduce((a, c) => a + c.weight * pts[c.status], 0) / t) * 100), fail: cs.filter((c) => c.status === "fail").length, warn: cs.filter((c) => c.status === "warn").length, pass: cs.filter((c) => c.status === "pass").length };
  });
  return { score, grade: score >= 90 ? "A" : score >= 80 ? "B" : score >= 65 ? "C" : "D", checks, facts: f, categories: cats };
}
