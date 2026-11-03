// Generates REAL, copy-paste fixes from the facts actually scraped from the client's page.
import type { AuditResult } from "./audit-engine";

export interface Fix { id: string; title: string; why: string; language: string; code: string; }

export function generateFixes(r: AuditResult, url: string): Fix[] {
  const f = r.facts, origin = new URL(url).origin, fail = new Set(r.checks.filter((c) => c.status !== "pass").map((c) => c.id));
  const fixes: Fix[] = [];
  const name = f.siteName || new URL(url).hostname;

  if (fail.has("schema") || fail.has("org") || fail.has("faq")) {
    const graph: any[] = [{
      "@type": "ProfessionalService", "@id": `${origin}/#org`, name, url: origin + "/",
      ...(f.phone && { telephone: f.phone }), ...(f.email && { email: f.email }),
      ...(f.description && { description: f.description }),
      ...(f.socials.length && { sameAs: f.socials.map((s) => `https://${s}.com/`) }), // TODO: replace with exact profile URLs
    }, { "@type": "WebSite", "@id": `${origin}/#website`, url: origin + "/", name, publisher: { "@id": `${origin}/#org` } }];
    graph.push({ "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "TODO: real customer question", acceptedAnswer: { "@type": "Answer", text: "TODO: real answer shown on the page" } }] });
    fixes.push({ id: "schema", title: "Organization + WebSite + FAQ JSON-LD", why: "Entity data for Google & AI answers. Replace TODO fields with content that is visible on the page (schema must match visible text).", language: "json", code: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 2) });
  }
  if (fail.has("llms")) fixes.push({ id: "llms", title: "/llms.txt", why: "Gives AI crawlers a clean map of your business. Edit the bullet points to match reality.", language: "markdown",
    code: `# ${name}\n\n> ${f.description || "One-sentence description of what you do and for whom."}\n\n## Key pages\n- [Home](${origin}/): overview\n- [Contact](${origin}/contact): ${f.phone || "phone"} ${f.email || ""}\n\n## Facts\n- Website: ${origin}\n` });
  if (fail.has("title") || fail.has("desc")) fixes.push({ id: "meta", title: "Title & meta description to review", why: `Current title ${f.title.length} chars, description ${f.description.length} chars. Write for humans: benefit + audience + location.`, language: "html",
    code: `<title>${f.title.slice(0, 60) || "Primary keyword – Brand"}</title>\n<meta name="description" content="TODO: 120–160 chars, mention service + city + call-to-action">` });
  const hdr = ["strict-transport-security", "x-content-type-options", "x-frame-options", "referrer-policy", "permissions-policy", "content-security-policy"].filter((k) => fail.has(k));
  if (hdr.length) fixes.push({ id: "headers", title: "Security headers (Cloudflare Pages/Workers `_headers`)", why: `Missing: ${hdr.join(", ")}.`, language: "text",
    code: `/*\n  Strict-Transport-Security: max-age=31536000; includeSubDomains\n  X-Content-Type-Options: nosniff\n  X-Frame-Options: SAMEORIGIN\n  Referrer-Policy: strict-origin-when-cross-origin\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n  Content-Security-Policy: default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; connect-src 'self' https:; frame-ancestors 'self'\n` });
  if (fail.has("labels")) fixes.push({ id: "labels", title: "Form labels", why: `${f.formInputsNoLabel} inputs have no label.`, language: "html", code: `<label for="email">Email</label>\n<input id="email" name="email" type="email" autocomplete="email" required>` });
  if (fail.has("canon")) fixes.push({ id: "canon", title: "Single canonical host", why: "Canonical and served host differ → duplicate-host risk. Pick one and 301 the other.", language: "text", code: `Cloudflare → Rules → Redirect Rules: ${new URL(url).hostname} → ${new URL(f.canonical || url, url).host}` });
  if (fail.has("voice")) fixes.push({ id: "voice", title: "After-hours voice/WhatsApp capture", why: "Calls & enquiries outside working hours are lost. This is the service we deploy.", language: "text", code: "Nexus AI: 24/7 AI voice receptionist + WhatsApp follow-up → book a setup call." });
  return fixes;
}
