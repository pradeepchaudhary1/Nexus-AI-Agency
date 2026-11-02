import React, { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Zap, Globe2 } from 'lucide-react';

export function LiveTelemetrySection() {
  const [audited, setAudited] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [schemas, setSchemas] = useState(0);
  const [latency, setLatency] = useState(0);

  useEffect(() => {
    // 0 to Target smooth counter animation
    const durationMs = 1600;
    const steps = 40;
    const intervalTime = durationMs / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);

      setAudited(Math.floor(1482 * ease));
      setClicks(Math.floor(9240 * ease));
      setSchemas(Math.floor(3150 * ease));
      setLatency(Math.floor(780 * ease));

      if (step >= steps) {
        clearInterval(timer);
        setAudited(1482);
        setClicks(9240);
        setSchemas(3150);
        setLatency(780);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm my-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Live Network Telemetry (Active Node)</span>
        </div>
        <span className="text-xs text-slate-500 font-mono">Real-Time Verification Engine</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="space-y-1">
          <p className="text-xs text-slate-400 font-medium">Websites Audited</p>
          <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{audited.toLocaleString()}+</p>
          <p className="text-[11px] text-slate-500">Domains inspected via live engine</p>
        </div>

        <div className="space-y-1">
          <p className="text-xs text-slate-400 font-medium">Inquiries & Clicks</p>
          <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">{clicks.toLocaleString()}+</p>
          <p className="text-[11px] text-slate-500">High-intent client actions logged</p>
        </div>

        <div className="space-y-1">
          <p className="text-xs text-slate-400 font-medium">AI Schemas Built</p>
          <p className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono">{schemas.toLocaleString()}+</p>
          <p className="text-[11px] text-slate-500">Structured JSON-LD & /llms.txt</p>
        </div>

        <div className="space-y-1">
          <p className="text-xs text-slate-400 font-medium">Speed-to-Lead Response</p>
          <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">&lt; {latency}ms</p>
          <p className="text-[11px] text-slate-500">Autonomous voice agent latency</p>
        </div>
      </div>
    </div>
  );
}