import React from 'react'
import { Activity, Globe2, MousePointerClick, Cpu, Zap } from 'lucide-react'

export function LiveMetrics() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Live Network Telemetry</span>
          </div>
          <span className="text-[11px] text-cyan-400 font-semibold bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Real-Time System Activity
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
            <div className="flex items-center gap-2 text-cyan-400 mb-2">
              <Globe2 className="w-4 h-4" />
              <span className="text-xs text-slate-400 font-medium">Websites Audited</span>
            </div>
            <div className="text-2xl md:text-3xl font-extrabold text-white">1,482+</div>
            <p className="text-[11px] text-slate-500 mt-1">Domains inspected via live AEO engine</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
            <div className="flex items-center gap-2 text-emerald-400 mb-2">
              <MousePointerClick className="w-4 h-4" />
              <span className="text-xs text-slate-400 font-medium">Inquiries & Clicks</span>
            </div>
            <div className="text-2xl md:text-3xl font-extrabold text-white">9,240+</div>
            <p className="text-[11px] text-slate-500 mt-1">High-intent client actions logged</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
            <div className="flex items-center gap-2 text-blue-400 mb-2">
              <Cpu className="w-4 h-4" />
              <span className="text-xs text-slate-400 font-medium">AI Schemas Built</span>
            </div>
            <div className="text-2xl md:text-3xl font-extrabold text-white">3,150+</div>
            <p className="text-[11px] text-slate-500 mt-1">Structured JSON-LD & /llms.txt maps</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
            <div className="flex items-center gap-2 text-amber-400 mb-2">
              <Zap className="w-4 h-4" />
              <span className="text-xs text-slate-400 font-medium">Speed-to-Lead Response</span>
            </div>
            <div className="text-2xl md:text-3xl font-extrabold text-emerald-400">&lt; 780ms</div>
            <p className="text-[11px] text-slate-500 mt-1">Autonomous conversational voice latency</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default LiveMetrics