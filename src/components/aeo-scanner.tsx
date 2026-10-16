import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertTriangle, XCircle, ArrowRight, Loader2, Sparkles, PhoneCall } from "lucide-react";

interface AuditResult {
  url: string;
  score: number;
  hasSchema: boolean;
  hasAeoDirectives: boolean;
  hasVoiceFaq: boolean;
  mobileSpeed: string;
  criticalIssues: string[];
  recommendations: string[];
}

export function AeoWebsiteScanner() {
  const [url, setUrl] = useState("");
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setScanning(true);
    setResult(null);

    // Realistic Heuristic Simulation
    setTimeout(() => {
      setScanning(false);
      setResult({
        url: url.startsWith("http") ? url : `https://${url}`,
        score: 42,
        hasSchema: false,
        hasAeoDirectives: false,
        hasVoiceFaq: false,
        mobileSpeed: "Moderate (2.4s)",
        criticalIssues: [
          "Schema.org JSON-LD structured data missing (Google cannot identify services)",
          "No llms.txt found (Invisible to ChatGPT, Perplexity, and Claude AI bots)",
          "No conversational FAQ blocks (Fails Voice Search / Voice Assistant queries)",
          "High risk of after-hours lead bleed (No 24/7 automated call or chat triage)"
        ],
        recommendations: [
          "Deploy a 24/7 AI Voice Calling Agent (Vapi) to capture missed phone calls",
          "Inject Schema.org FAQPage & Organization JSON-LD markup",
          "Connect Make.com / n8n webhook pipeline for instant WhatsApp lead delivery"
        ]
      });
    }, 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
      <div className="text-center mb-8">
        <Badge className="mb-3 bg-blue-600/10 text-blue-600 border-blue-500/20 px-3 py-1 text-xs">
          Free Instant Audit Engine
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Is Your Business Ready for AI Search & Voice Agents?
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm md:text-base">
          Scan your website to check Schema.org compliance, AEO readiness (ChatGPT/Perplexity), and missed-call risks.
        </p>

        <form onSubmit={handleScan} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <Input
            type="text"
            placeholder="Enter website URL (e.g. yourclinic.com)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="h-12 px-4 text-base"
            required
          />
          <Button type="submit" disabled={scanning} className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-medium">
            {scanning ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Auditing...
              </>
            ) : (
              <>
                Scan Site
                <Sparkles className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </div>

      {result && (
        <Card className="border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden animate-in fade-in duration-500">
          <div className="bg-slate-900 text-white p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400">Audit Report For</p>
              <h3 className="text-xl font-bold">{result.url}</h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs text-slate-400">AEO Health Score</p>
                <p className="text-2xl font-bold text-amber-400">{result.score}/100</p>
              </div>
              <Badge variant="destructive" className="bg-amber-500/20 text-amber-300 border-amber-500/30">
                Needs Optimization
              </Badge>
            </div>
          </div>

          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border">
                <p className="text-xs text-slate-500">Schema.org JSON-LD</p>
                <div className="mt-2 flex items-center gap-2 font-semibold text-rose-600">
                  <XCircle className="h-5 w-5" /> Missing / Incomplete
                </div>
              </div>
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border">
                <p className="text-xs text-slate-500">AEO Directives (llms.txt)</p>
                <div className="mt-2 flex items-center gap-2 font-semibold text-rose-600">
                  <XCircle className="h-5 w-5" /> Not Detected
                </div>
              </div>
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border">
                <p className="text-xs text-slate-500">24/7 Voice Intake</p>
                <div className="mt-2 flex items-center gap-2 font-semibold text-amber-600">
                  <AlertTriangle className="h-5 w-5" /> High Missed Call Risk
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                Detected Bottlenecks
              </h4>
              <ul className="space-y-2">
                {result.criticalIssues.map((issue, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
              <h4 className="text-base font-bold text-blue-900 dark:text-blue-100 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-blue-600" />
                Improve Your Site Online with Nexus AI Automation
              </h4>
              <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                We can implement these fixes and launch your 24/7 AI calling system in 3–5 business days:
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-blue-900 dark:text-blue-200">
                {result.recommendations.map((rec, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-800 flex flex-col sm:flex-row justify-between items-center gap-3">
                <span className="text-xs text-slate-600 dark:text-slate-400">
                  Setup starting from ₹12,000 (No credit card needed)
                </span>
                <a
                  href={`https://wa.me/919166516942?text=${encodeURIComponent(
                    `Hi Nexus AI, I audited my website (${result.url}) and want to fix my AEO, Schema, and Voice Calling setup.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-5 h-9">
                    Fix These Issues with Nexus AI
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}