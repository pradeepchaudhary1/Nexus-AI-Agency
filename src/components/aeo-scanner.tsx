import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { auditWebsiteServerFn, type AuditData } from "@/lib/scanner.functions";
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ArrowRight,
  Loader2,
  Sparkles,
  PhoneCall,
  Code2,
  Bot,
  Globe,
  Info
} from "lucide-react";

export function AeoWebsiteScanner() {
  const [inputUrl, setInputUrl] = useState("");
  const [scanning, setScanning] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [result, setResult] = useState<AuditData | null>(null);

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputUrl.trim()) return;

    let target = inputUrl.trim().toLowerCase();

    if (target.includes("localhost") || target.includes("127.0.0.1")) {
      setErrorMsg("Localhost is a private offline environment. Please enter a live public domain.");
      return;
    }

    setScanning(true);
    setErrorMsg("");
    setResult(null);

    try {
      // Direct Server-Side Inspection (Zero CORS, Zero AllOrigins Proxy Failures)
      const data = await auditWebsiteServerFn({ data: target });
      if (!data.isReachable) {
        setErrorMsg("Could not connect to this domain. Please verify it is live and accessible.");
      } else {
        setResult(data);
      }
    } catch (err: any) {
      console.error("Scanner Error:", err);
      setErrorMsg("Audit request failed. Please check the domain format and try again.");
    } finally {
      setScanning(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
      <div className="text-center mb-8">
        <Badge className="mb-3 bg-emerald-500/10 text-emerald-500 border-emerald-500/20 px-3 py-1 text-xs font-semibold">
          Live Server-Side Audit Engine
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Scan Your Website for AI &amp; Voice Readiness
        </h2>
        <p className="mt-2 text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
          Inspect live Schema.org JSON-LD tags, AI Search Engine compatibility (AEO), and missed-call risks.
        </p>

        <form onSubmit={handleScan} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <Input
            type="text"
            placeholder="e.g. warrenbehan.com or yourclinic.com"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            className="h-12 px-4 text-sm bg-background border-border"
            required
          />
          <Button type="submit" disabled={scanning} className="h-12 px-8 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold shadow-md">
            {scanning ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Auditing...
              </>
            ) : (
              <>
                Audit Now
                <Sparkles className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>

        {errorMsg && (
          <div className="mt-4 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs max-w-lg mx-auto flex items-start gap-2.5 text-left">
            <Info className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{errorMsg}</span>
          </div>
        )}
      </div>

      {result && result.isReachable && (
        <Card className="border border-border shadow-2xl overflow-hidden animate-in fade-in duration-300">
          <div className="bg-slate-950 text-white p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border/40">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">Live Audit Result</p>
              <h3 className="text-xl font-bold text-white break-all flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                {result.url}
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-[11px] text-slate-400">Technical Readiness Score</p>
                <p className={`text-3xl font-extrabold ${result.score >= 80 ? "text-emerald-400" : result.score >= 60 ? "text-amber-400" : "text-rose-400"}`}>
                  {result.score}<span className="text-sm font-normal text-slate-500">/100</span>
                </p>
              </div>
              <Badge className={`px-3 py-1 font-bold ${result.score >= 80 ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-300"}`}>
                {result.statusText}
              </Badge>
            </div>
          </div>

          <CardContent className="p-6 md:p-8 space-y-8 bg-card">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border bg-muted/20 space-y-1">
                <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-primary" /> Schema.org Status
                </span>
                {result.hasSchema ? (
                  <p className="text-sm font-bold text-emerald-500 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Detected ({result.schemaTypes.slice(0, 2).join(", ")})
                  </p>
                ) : (
                  <p className="text-sm font-bold text-rose-500 flex items-center gap-1">
                    <XCircle className="w-4 h-4" /> Missing / Incomplete
                  </p>
                )}
              </div>

              <div className="p-4 rounded-xl border bg-muted/20 space-y-1">
                <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5 text-primary" /> AEO Answer Readiness
                </span>
                {result.hasLlmsTxt || result.score >= 70 ? (
                  <p className="text-sm font-bold text-emerald-500 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> AI Directive Ready
                  </p>
                ) : (
                  <p className="text-sm font-bold text-amber-500 flex items-center gap-1">
                    <AlertTriangle className="w-4 h-4" /> Gaps in Structured Data
                  </p>
                )}
              </div>

              <div className="p-4 rounded-xl border bg-muted/20 space-y-1">
                <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-primary" /> 24/7 Voice Intake
                </span>
                {result.hasVoiceAgent ? (
                  <p className="text-sm font-bold text-emerald-500 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> AI Voice Active
                  </p>
                ) : result.hasPhone ? (
                  <p className="text-sm font-bold text-amber-500 flex items-center gap-1">
                    <AlertTriangle className="w-4 h-4" /> Missed Call Risk (Standard Phone)
                  </p>
                ) : (
                  <p className="text-sm font-bold text-rose-500 flex items-center gap-1">
                    <XCircle className="w-4 h-4" /> No Direct Phone Found
                  </p>
                )}
              </div>
            </div>

            {/* Strengths */}
            {result.foundStrengths.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Detected Strengths
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {result.foundStrengths.map((item, i) => (
                    <div key={i} className="text-xs p-2.5 rounded-lg border bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottlenecks */}
            {result.detectedBottlenecks.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-500" /> Operational &amp; AEO Gaps Identified
                </h4>
                <ul className="space-y-2">
                  {result.detectedBottlenecks.map((gap, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2 p-2 rounded-md bg-muted/30">
                      <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                      <span>{gap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Recommendations & CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-primary/5 to-transparent border border-emerald-500/30">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-emerald-500" />
                <h4 className="text-base font-bold">Custom Recommendations</h4>
              </div>
              <div className="space-y-2 mb-6">
                {result.recommendations.map((rec, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{rec}</span>
                  </div>
                ))}
              </div>
              <a
                href={`https://wa.me/918003469293?text=${encodeURIComponent(
                  `Hi Pradeep, I audited ${result.url} on Nexus AI (Score:${result.score}/100). I want to discuss fixing the Schema and AI Voice gaps.`
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs px-6 h-10 shadow-lg">
                  Implement Fixes with Nexus AI <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}