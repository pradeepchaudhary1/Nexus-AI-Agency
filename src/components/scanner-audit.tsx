import { useState } from "react";
import { Search, ArrowRight, RefreshCw, AlertTriangle, CheckCircle2, XCircle, Cpu, Zap, Lock, Copy, Check } from "lucide-react";
import { scanSite, unlockAudit, type ScanTeaser, type UnlockResponse } from "@/lib/scan.functions";
import { Turnstile } from "@/components/turnstile";

type Filter = "all" | "fail" | "warn" | "pass";
type Unlocked = Extract<UnlockResponse, { ok: true }>;

const scoreColor = (n: number) => (n >= 85 ? "text-emerald-400" : n >= 65 ? "text-amber-400" : "text-rose-400");
const STEPS = ["Fetching your homepage and response headers…", "Checking robots.txt, sitemap.xml and llms.txt…", "Running Google Lighthouse (mobile)…", "Detecting chatbot, CRM, booking and voice AI…", "Saving your report…"];
const input = "w-full bg-[#0a0a0a] border border-[#262626] rounded-xl px-4 py-3 text-sm text-[#ededed] placeholder-slate-600 focus:border-[#fe5000] focus:ring-1 focus:ring-[#fe5000] outline-none";

function CopyButton({ text }: { text: string }) {
  const [done, setDone] = useState(false);
  return (
    <button type="button" onClick={async () => { try { await navigator.clipboard.writeText(text); setDone(true); setTimeout(() => setDone(false), 1800); } catch { /* clipboard blocked */ } }}
      className="px-3 py-1.5 rounded-lg bg-[#111] border border-[#262626] text-slate-200 text-xs font-semibold inline-flex items-center gap-1.5">
      {done ? <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden /> : <Copy className="w-3.5 h-3.5" aria-hidden />}{done ? "Copied" : "Copy"}
    </button>
  );
}

export function ScannerAudit() {
  const [url, setUrl] = useState("");
  const [token, setToken] = useState("");
  const [resetKey, setResetKey] = useState(0);
  const [busy, setBusy] = useState(false);
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");
  const [t, setT] = useState<ScanTeaser | null>(null);
  const [filter, setFilter] = useState<Filter>("all");
  const [lead, setLead] = useState({ name: "", email: "", phone: "", website: "" });
  const [unlocking, setUnlocking] = useState(false);
  const [leadError, setLeadError] = useState("");
  const [full, setFull] = useState<Unlocked | null>(null);

  async function run(e: React.FormEvent) {
    e.preventDefault();
    if (!url.trim() || busy) return;
    if (!token) { setError("Please wait for the security check to finish, then try again."); return; }
    setBusy(true); setError(""); setT(null); setFull(null); setStep(0);
    const timer = setInterval(() => setStep((s) => Math.min(s + 1, STEPS.length - 1)), 3500);
    try {
      const r = await scanSite({ data: { url, turnstileToken: token } });
      if (r.ok) setT(r.teaser); else setError(r.error);
    } catch { setError("The scan could not be completed. Please try again."); }
    finally { clearInterval(timer); setBusy(false); setResetKey((k) => k + 1); }
  }

  async function unlock(e: React.FormEvent) {
    e.preventDefault();
    if (!t || unlocking) return;
    setUnlocking(true); setLeadError("");
    try {
      const r = await unlockAudit({ data: { auditId: t.auditId, name: lead.name, email: lead.email, ...(lead.phone ? { phone: lead.phone } : {}), website: lead.website } });
      if (r.ok) setFull(r); else setLeadError(r.error);
    } catch { setLeadError("Something went wrong. Please try again."); }
    finally { setUnlocking(false); }
  }

  const shown = full ? full.checks.filter((c) => filter === "all" || c.status === filter) : [];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto text-left">
      <div className="bg-black border border-[#262626] rounded-3xl p-6 md:p-12 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111] border border-[#262626] text-slate-300 text-xs font-medium mb-6">
          <Zap className="w-3.5 h-3.5 text-[#fe5000]" aria-hidden /> Live checks · Google Lighthouse · AI visibility · Lead capture
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-[#ededed]">Free SEO, AI Search &amp; Lead Capture Audit</h1>
        <p className="text-sm md:text-base text-[#a1a1a1] max-w-2xl mb-8 leading-relaxed">Enter any website. We fetch the live page, check SEO, security, accessibility, structured data and AI-search readiness, then detect missing chatbot, CRM, booking and 24/7 voice capture. Every number comes from your real page.</p>

        <form onSubmit={run} className="max-w-2xl space-y-3 mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <label htmlFor="scan-url" className="sr-only">Website address</label>
              <Search aria-hidden className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input id="scan-url" name="url" required type="text" inputMode="url" autoComplete="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="yourbusiness.com" className={`${input} pl-12 py-3.5`} />
            </div>
            <button type="submit" disabled={busy} className="px-8 py-3.5 rounded-xl bg-[#fe5000] hover:bg-[#ff6219] disabled:opacity-60 font-bold text-sm text-white flex items-center justify-center gap-2">
              {busy ? "Scanning…" : "Run audit"} <ArrowRight className="w-4 h-4" aria-hidden />
            </button>
          </div>
          <Turnstile onToken={setToken} resetKey={resetKey} />
        </form>

        {busy && <div role="status" aria-live="polite" className="max-w-md py-4 flex items-center gap-2 text-slate-300 text-xs font-semibold"><RefreshCw className="w-4 h-4 animate-spin text-[#fe5000]" aria-hidden /><span>{STEPS[step]}</span></div>}
        {error && <p role="alert" className="text-sm text-rose-400 mb-4">{error}</p>}

        {t && (
          <div className="space-y-8 pt-8 border-t border-[#262626]">
            <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-[#262626] flex flex-wrap items-center justify-between gap-6">
              <div>
                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Audit report</span>
                <h2 className="text-2xl font-extrabold text-[#ededed] mt-1">{t.domain}</h2>
                <p className="text-xs text-slate-400 mt-1">{t.counts.total} live checks · {t.categories.length} categories · detected platform: {t.platform}</p>
                <button type="button" onClick={() => { setT(null); setFull(null); setUrl(""); }} className="mt-4 px-4 py-2 bg-[#111] border border-[#262626] text-slate-300 font-semibold text-xs rounded-lg">Scan another site</button>
              </div>
              <div className="text-center">
                <div className={`text-5xl font-extrabold ${scoreColor(t.score)}`}>{t.score}<span className="text-lg text-slate-500">/100</span></div>
                <div className="text-xs text-slate-400 mt-1">Grade {t.grade} · {t.counts.fail} failed · {t.counts.warn} warnings · {t.counts.pass} passed</div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">Google Lighthouse (mobile)</h3>
              {t.lighthouse ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {([["Performance", t.lighthouse.performance], ["Accessibility", t.lighthouse.accessibility], ["Best practices", t.lighthouse.bestPractices], ["SEO", t.lighthouse.seo]] as const).map(([k, v]) => (
                    <div key={k} className="p-4 rounded-xl bg-[#0a0a0a] border border-[#262626] text-center"><div className={`text-2xl font-extrabold ${scoreColor(v)}`}>{v}</div><span className="text-xs text-slate-400">{k}</span></div>
                  ))}
                </div>
              ) : <p className="text-xs text-slate-500">Lighthouse data was not available for this scan. The checks are unaffected.</p>}
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">Category scores</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {t.categories.map((c) => (
                  <div key={c.name} className="p-4 rounded-xl bg-[#0a0a0a] border border-[#262626] flex items-center justify-between">
                    <div><div className="text-xs font-bold text-white">{c.name}</div><div className="text-[11px] text-slate-400">{c.fail} fail · {c.warn} warn · {c.pass} pass</div></div>
                    <span className={`text-sm font-extrabold ${scoreColor(c.score)}`}>{c.score}</span>
                  </div>
                ))}
              </div>
            </div>

            {t.gaps.length > 0 && (
              <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-600/30">
                <h3 className="text-sm font-bold text-amber-400 flex items-center gap-2 mb-3"><AlertTriangle className="w-4 h-4" aria-hidden /> Missed-lead gaps found</h3>
                <ul className="space-y-1.5 text-xs text-slate-300">{t.gaps.map((g) => <li key={g.title}>• <strong>{g.title}:</strong> {g.detail}</li>)}</ul>
              </div>
            )}

            {!full && (
              <>
                <div>
                  <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">Top issues to fix first</h3>
                  <ul className="divide-y divide-[#1c1c1c] rounded-xl border border-[#262626] overflow-hidden">
                    {t.topIssues.map((c) => <li key={c.title} className="p-3 bg-[#0a0a0a] text-xs"><div className="font-semibold text-white">{c.title} <span className="text-slate-500 font-normal">· {c.category}</span></div><div className="text-slate-400">{c.detail}</div></li>)}
                  </ul>
                </div>
                <form onSubmit={unlock} className="p-6 rounded-2xl bg-[#0a0a0a] border border-[#fe5000]/40 space-y-4">
                  <h3 className="text-base font-bold text-white flex items-center gap-2"><Lock className="w-4 h-4 text-[#fe5000]" aria-hidden /> Unlock the full report and your ready-to-paste fixes</h3>
                  <p className="text-xs text-slate-400">All {t.counts.total} checks with details, plus structured data, llms.txt, security headers and form fixes generated from your own page. We will also email you the report.</p>
                  <div className="grid sm:grid-cols-3 gap-3">
                    <div><label htmlFor="u-name" className="block text-xs text-slate-400 mb-1">Full name *</label><input id="u-name" name="name" required minLength={2} autoComplete="name" value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} className={input} /></div>
                    <div><label htmlFor="u-email" className="block text-xs text-slate-400 mb-1">Work email *</label><input id="u-email" name="email" type="email" required autoComplete="email" value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} className={input} /></div>
                    <div><label htmlFor="u-phone" className="block text-xs text-slate-400 mb-1">WhatsApp number (optional)</label><input id="u-phone" name="phone" type="tel" autoComplete="tel" value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} className={input} /></div>
                  </div>
                  <div className="absolute -left-[9999px]" aria-hidden="true"><label htmlFor="u-site">Website</label><input id="u-site" tabIndex={-1} autoComplete="off" value={lead.website} onChange={(e) => setLead({ ...lead, website: e.target.value })} /></div>
                  {leadError && <p role="alert" className="text-xs text-rose-400">{leadError}</p>}
                  <button type="submit" disabled={unlocking} className="px-6 py-3 rounded-xl bg-[#fe5000] hover:bg-[#ff6219] disabled:opacity-60 font-bold text-sm text-white inline-flex items-center gap-2"><Cpu className="w-4 h-4" aria-hidden />{unlocking ? "Unlocking…" : "Unlock full report"}</button>
                </form>
              </>
            )}

            {full && (
              <>
                <div>
                  <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">Your ready-to-paste fixes</h3>
                  {full.fixes.length === 0 ? <p className="text-xs text-slate-400">No code fixes were needed for this page.</p> : (
                    <div className="space-y-4">
                      {full.fixes.map((f) => (
                        <div key={f.id} className="rounded-xl border border-[#262626] bg-[#0a0a0a] p-4">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2"><h4 className="text-sm font-bold text-white">{f.title}</h4><CopyButton text={f.code} /></div>
                          <p className="text-xs text-slate-400 mb-3">{f.why}</p>
                          <pre className="p-3 bg-black rounded-lg border border-[#1c1c1c] text-[11px] text-cyan-300 overflow-x-auto max-h-56"><code>{f.code}</code></pre>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">All checks</h3>
                    <div role="group" aria-label="Filter checks" className="flex gap-2 text-xs">
                      {(["all", "fail", "warn", "pass"] as Filter[]).map((f) => <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)} className={`px-3 py-1 rounded-lg border ${filter === f ? "bg-[#fe5000] border-[#fe5000] text-white" : "bg-[#111] border-[#262626] text-slate-300"}`}>{f}</button>)}
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
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
export default ScannerAudit;
