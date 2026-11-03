import { useState } from "react";
import { Search, ArrowRight, RefreshCw, AlertTriangle, CheckCircle2, XCircle, Cpu, Zap } from "lucide-react";
import { scanSite, type ScanResponse } from "@/lib/scan.functions";

type Filter = "all" | "fail" | "warn" | "pass";

const scoreColor = (n: number) => (n >= 85 ? "text-emerald-400" : n >= 65 ? "text-amber-400" : "text-rose-400");
const STEPS = [
  "Fetching your homepage and response headers…",
  "Checking robots.txt, sitemap.xml and llms.txt…",
  "Running Google Lighthouse (mobile)…",
  "Detecting chatbot, CRM, booking and voice AI…",
  "Preparing your fixes…",
];

export function ScannerAudit() {
  const [url, setUrl] = useState("");
  const [busy, setBusy] = useState(false);
  const [step, setStep] = useState(0);
  const [data, setData] = useState<ScanResponse | null>(null);
  const [filter, setFilter] = useState<Filter>("all");

  async function run(e: React.FormEvent) {
    e.preventDefault();
    if (!url.trim() || busy) return;
    setBusy(true); setData(null); setStep(0);
    const timer = setInterval(() => setStep((s) => Math.min(s + 1, STEPS.length - 1)), 3500);
    try {
      setData(await scanSite({ data: { url } }));
    } catch {
      setData({ ok: false, error: "The scan could not be completed. Please try again." });
    } finally {
      clearInterval(timer); setBusy(false);
    }
  }

  const a = data?.ok ? data.audit : undefined;
  const shown = a ? a.checks.filter((c) => filter === "all" || c.status === filter) : [];
  const counts = a ? { fail: a.checks.filter((c) => c.status === "fail").length, warn: a.checks.filter((c) => c.status === "warn").length, pass: a.checks.filter((c) => c.status === "pass").length } : null;
  const gaps = a ? a.checks.filter((c) => c.category === "Lead Capture" && c.status !== "pass") : [];
  const lh = data?.lighthouse ?? null;
  const domain = data?.url ? new URL(data.url).hostname : "";

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto text-left">
      <div className="bg-black border border-[#262626] rounded-3xl p-6 md:p-12 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111] border border-[#262626] text-slate-300 text-xs font-medium mb-6">
          <Zap className="w-3.5 h-3.5 text-[#fe5000]" /> Live checks · Google Lighthouse · AI visibility · Lead capture
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-[#ededed]">Free SEO, AI Search &amp; Lead Capture Audit</h1>
        <p className="text-sm md:text-base text-[#a1a1a1] max-w-2xl mb-8 leading-relaxed">
          Enter any website. We fetch the live page, check SEO, security, accessibility, structured data and AI-search readiness, then detect missing chatbot, CRM, booking and 24/7 voice capture. Every number below comes from your real page.
        </p>

        <form onSubmit={run} className="max-w-2xl flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <label htmlFor="scan-url" className="sr-only">Website address</label>
            <Search aria-hidden className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input id="scan-url" name="url" required type="text" inputMode="url" autoComplete="url" value={url} onChange={(e) => setUrl(e.target.value)}
              placeholder="yourbusiness.com"
              className="w-full bg-[#0a0a0a] border border-[#262626] rounded-xl pl-12 pr-4 py-3.5 text-sm text-[#ededed] placeholder-slate-600 focus:border-[#fe5000] focus:ring-1 focus:ring-[#fe5000] outline-none" />
          </div>
          <button type="submit" disabled={busy} className="px-8 py-3.5 rounded-xl bg-[#fe5000] hover:bg-[#ff6219] disabled:opacity-60 font-bold text-sm text-white flex items-center justify-center gap-2">
            {busy ? "Scanning…" : "Run audit"} <ArrowRight className="w-4 h-4" aria-hidden />
          </button>
        </form>

        {busy && (
          <div role="status" aria-live="polite" className="max-w-md py-4 flex items-center gap-2 text-slate-300 text-xs font-semibold">
            <RefreshCw className="w-4 h-4 animate-spin text-[#fe5000]" aria-hidden /> <span>{STEPS[step]}</span>
          </div>
        )}

        {data && !data.ok && (
          <p role="alert" className="text-sm text-rose-400">{data.error}</p>
        )}

        {a && counts && (
          <div className="space-y-8 pt-8 border-t border-[#262626]">
            <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-[#262626] flex flex-wrap items-center justify-between gap-6">
              <div>
                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Audit report</span>
                <h2 className="text-2xl font-extrabold text-[#ededed] mt-1">{domain}</h2>
                <p className="text-xs text-slate-400 mt-1">{a.checks.length} live checks · {a.categories.length} categories · detected platform: {a.facts.platform}</p>
                <div className="flex flex-wrap items-center gap-2 mt-4">
                  <a href={`/solutions-engine?url=${encodeURIComponent(domain)}`} className="px-4 py-2 bg-[#fe5000] hover:bg-[#ff6219] text-white font-bold text-xs rounded-lg inline-flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" aria-hidden /> Get my fixes
                  </a>
                  <button type="button" onClick={() => { setData(null); setUrl(""); }} className="px-4 py-2 bg-[#111] border border-[#262626] text-slate-300 font-semibold text-xs rounded-lg">Scan another site</button>
                </div>
              </div>
              <div className="text-center">
                <div className={`text-5xl font-extrabold ${scoreColor(a.score)}`}>{a.score}<span className="text-lg text-slate-500">/100</span></div>
                <div className="text-xs text-slate-400 mt-1">Grade {a.grade} · {counts.fail} failed · {counts.warn} warnings · {counts.pass} passed</div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">Google Lighthouse (mobile)</h3>
              {lh ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {([["Performance", lh.performance], ["Accessibility", lh.accessibility], ["Best practices", lh.bestPractices], ["SEO", lh.seo]] as const).map(([k, v]) => (
                    <div key={k} className="p-4 rounded-xl bg-[#0a0a0a] border border-[#262626] text-center">
                      <div className={`text-2xl font-extrabold ${scoreColor(v)}`}>{v}</div><span className="text-xs text-slate-400">{k}</span>
                    </div>
                  ))}
                </div>
              ) : <p className="text-xs text-slate-500">Lighthouse data was not available for this scan. The checks below are unaffected.</p>}
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">Category scores</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {a.categories.map((c) => (
                  <div key={c.name} className="p-4 rounded-xl bg-[#0a0a0a] border border-[#262626] flex items-center justify-between">
                    <div><div className="text-xs font-bold text-white">{c.name}</div><div className="text-[11px] text-slate-400">{c.fail} fail · {c.warn} warn · {c.pass} pass</div></div>
                    <span className={`text-sm font-extrabold ${scoreColor(c.score)}`}>{c.score}</span>
                  </div>
                ))}
              </div>
            </div>

            {gaps.length > 0 && (
              <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-600/30">
                <h3 className="text-sm font-bold text-amber-400 flex items-center gap-2 mb-3"><AlertTriangle className="w-4 h-4" aria-hidden /> Missed-lead gaps found</h3>
                <ul className="space-y-1.5 text-xs text-slate-300">{gaps.map((g) => <li key={g.id}>• <strong>{g.title}:</strong> {g.detail}</li>)}</ul>
              </div>
            )}

            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">All checks</h3>
                <div role="group" aria-label="Filter checks" className="flex gap-2 text-xs">
                  {(["all", "fail", "warn", "pass"] as Filter[]).map((f) => (
                    <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}
                      className={`px-3 py-1 rounded-lg border ${filter === f ? "bg-[#fe5000] border-[#fe5000] text-white" : "bg-[#111] border-[#262626] text-slate-300"}`}>{f}</button>
                  ))}
                </div>
              </div>
              <ul className="divide-y divide-[#1c1c1c] rounded-xl border border-[#262626] overflow-hidden">
                {shown.map((c) => (
                  <li key={c.id} className="flex items-start gap-3 p-3 bg-[#0a0a0a] text-xs">
                    {c.status === "pass" ? <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-label="Passed" /> : c.status === "warn" ? <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" aria-label="Warning" /> : <XCircle className="w-4 h-4 text-rose-400 shrink-0" aria-label="Failed" />}
                    <div><div className="font-semibold text-white">{c.title} <span className="text-slate-500 font-normal">· {c.category}</span></div><div className="text-slate-400">{c.detail}</div></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
export default ScannerAudit;
