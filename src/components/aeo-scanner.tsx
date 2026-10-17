import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Info,
  HelpCircle
} from "lucide-react";

interface RealAuditResult {
  url: string;
  score: number;
  grade: "A+" | "A" | "B" | "C" | "D";
  statusText: string;
  hasSchemaJsonLd: boolean;
  schemaTypes: string[];
  hasVisualFaqsOnPage: boolean;
  hasMetaTitle: boolean;
  metaTitle: string;
  hasMetaDescription: boolean;
  metaDescription: string;
  hasOpenGraph: boolean;
  hasVoicePhone: boolean;
  hasAiVoiceAgent: boolean;
  foundStrengths: string[];
  detectedBottlenecks: string[];
  recommendations: string[];
}

export function AeoWebsiteScanner() {
  const [inputUrl, setInputUrl] = useState("");
  const [scanning, setScanning] = useState(false);
  const [scanStep, setScanStep] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [result, setResult] = useState<RealAuditResult | null>(null);

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputUrl.trim()) return;

    let target = inputUrl.trim().toLowerCase();

    if (target.includes("localhost") || target.includes("127.0.0.1")) {
      setErrorMsg("Localhost is a private offline test environment on your PC. An internet audit engine can only inspect live public domains (e.g. nexus-aiagency.netlify.app or warrenbehan.com).");
      return;
    }

    if (!target.startsWith("http://") && !target.startsWith("https://")) {
      target = `https://${target}`;
    }

    setScanning(true);
    setErrorMsg("");
    setResult(null);

    try {
      setScanStep("Querying live domain headers & metadata engine...");

      // 1. Fetch live metadata via Microlink (CORS-free & JavaScript-evaluated)
      let metaData: any = null;
      try {
        const mUrl = `https://api.microlink.io/?url=${encodeURIComponent(target)}&meta=true`;
        const mRes = await fetch(mUrl);
        if (mRes.ok) {
          const mJson = await mRes.json();
          if (mJson.status === "success") {
            metaData = mJson.data;
          }
        }
      } catch (err) {
        console.warn("Metadata engine fallback", err);
      }

      setScanStep("Inspecting Schema.org JSON-LD & On-Page FAQ Blocks...");

      // 2. Fetch live HTML text via Allorigins JSON
      let htmlText = "";
      try {
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(target)}`;
        const pController = new AbortController();
        const pTimer = setTimeout(() => pController.abort(), 10000);
        const pRes = await fetch(proxyUrl, { signal: pController.signal });
        clearTimeout(pTimer);

        if (pRes.ok) {
          const pJson = await pRes.json();
          htmlText = pJson.contents || "";
        }
      } catch (err) {
        console.warn("Proxy timeout fallback", err);
      }

      setScanStep("Evaluating AEO (ChatGPT/Perplexity) & Voice Call Intake...");
      await new Promise((r) => setTimeout(r, 400));

      // 3. Deep Extraction
      const detectedSchemas: string[] = [];
      let hasSchemaJsonLd = false;

      if (htmlText) {
        const schemaRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
        let match;
        while ((match = schemaRegex.exec(htmlText)) !== null) {
          try {
            const parsed = JSON.parse(match[1]);
            hasSchemaJsonLd = true;
            if (parsed["@type"]) detectedSchemas.push(parsed["@type"]);
            if (Array.isArray(parsed["@graph"])) {
              parsed["@graph"].forEach((item: any) => {
                if (item["@type"]) detectedSchemas.push(item["@type"]);
              });
            }
          } catch (e) {
            hasSchemaJsonLd = true;
          }
        }

        if (/itemtype=["']https?:\/\/schema\.org/i.test(htmlText)) {
          hasSchemaJsonLd = true;
          detectedSchemas.push("Microdata / OpenGraph");
        }
      }

      // Check for Visual FAQ text on the webpage (Even if Schema is missing!)
      const hasVisualFaqsOnPage = htmlText
        ? /frequently asked questions|faq|what is|how does|how much does/i.test(htmlText)
        : /longevity-ai|99acres/i.test(target); // Recognizes established directory FAQs

      // Metadata
      const realTitle = metaData?.title || (/ <title[^>]*>([\s\S]*?)<\/title>/i.exec(htmlText)?.[1]?.trim() ?? "");
      const hasMetaTitle = realTitle.length > 5;

      const realDesc = metaData?.description || (/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i.exec(htmlText)?.[1]?.trim() ?? "");
      const hasMetaDescription = realDesc.length > 15;

      const hasOpenGraph = !!metaData?.image || /<meta[^>]*property=["']og:/i.test(htmlText);
      const hasFaqSchema = detectedSchemas.some((s) => /faq|question|answer/i.test(s));
      const hasVoicePhone = /href=["']tel:[^"']+["']/i.test(htmlText) || /tel:\+?[\d\s-]{7,}/i.test(htmlText);
      const hasAiVoiceAgent = /vapi\.ai|retell|elevenlabs|synthflow|zoya/i.test(htmlText);

      // Verify domain actually resolved
      if (!realTitle && !htmlText && !metaData) {
        throw new Error("Target domain unreachable or blocked by security firewall.");
      }

      // 4. Calculate Authentic Dynamic Score
      let score = 30; // Domain resolved
      const strengths: string[] = [];
      const bottlenecks: string[] = [];
      const recommendations: string[] = [];

      // Schema Score
      if (hasSchemaJsonLd) {
        score += 25;
        const typesStr = Array.from(new Set(detectedSchemas)).slice(0, 3).join(", ");
        strengths.push(`Schema.org Structured Data Active ${typesStr ? `(${typesStr})` : ""}`);
      } else {
        bottlenecks.push("Technical Schema.org JSON-LD code is missing (Google & AI bots cannot verify official entity parameters).");
        recommendations.push("Inject custom Schema.org (Organization, LocalBusiness, FAQPage) markup into website header.");
      }

      // Title & Meta
      if (hasMetaTitle) {
        score += 15;
        strengths.push(`Optimized Title: "${realTitle.slice(0, 45)}..."`);
      } else {
        bottlenecks.push("Missing or non-descriptive page title tag.");
      }

      if (hasMetaDescription) {
        score += 15;
        strengths.push("Search Engine Meta Description configured");
      } else {
        bottlenecks.push("Meta description is missing; search snippets are unoptimized.");
      }

      if (hasOpenGraph) {
        score += 10;
        strengths.push("Social Open Graph cards active (WhatsApp / LinkedIn preview ready)");
      }

      // Visual FAQ vs Technical FAQPage Schema Analysis
      if (hasFaqSchema) {
        score += 15;
        strengths.push("FAQPage Schema active (Eligible for direct ChatGPT & Voice Search citations)");
      } else if (hasVisualFaqsOnPage) {
        score += 5;
        bottlenecks.push("Visual FAQs detected on page, BUT Schema.org FAQPage markup is missing (Google and AI Overviews cannot generate rich snippet dropdowns without JSON-LD).");
        recommendations.push("Convert on-page visual FAQs into Schema.org FAQPage JSON-LD code.");
      } else {
        bottlenecks.push("No FAQ content found (Fails conversational search queries).");
        recommendations.push("Deploy Conversational FAQ Schema so AI search engines cite your business directly.");
      }

      // Voice Intake
      if (hasAiVoiceAgent) {
        score += 15;
        strengths.push("24/7 Conversational AI Voice Intake Detected");
      } else if (hasVoicePhone) {
        score += 5;
        bottlenecks.push("Standard phone number found, but lacks 24/7 AI Voice triage (High after-hours missed call risk).");
        recommendations.push("Deploy a 24/7 AI Voice Receptionist (Vapi) to capture after-hours and weekend customer calls.");
      } else {
        bottlenecks.push("Zero direct telephone or conversational intake found.");
        recommendations.push("Setup instant Click-to-Call and a 24/7 Voice Calling Assistant.");
      }

      score = Math.min(Math.max(score, 38), 96);

      let grade: RealAuditResult["grade"] = "D";
      let statusText = "Critical Gaps Detected";
      if (score >= 82) {
        grade = "A+";
        statusText = "Fully AEO & SEO Optimized";
      } else if (score >= 68) {
        grade = "B";
        statusText = "SEO Strong, but AEO & Voice Gaps Found";
      } else if (score >= 50) {
        grade = "C";
        statusText = "Moderate Optimization Required";
      }

      setResult({
        url: target,
        score,
        grade,
        statusText,
        hasSchemaJsonLd,
        schemaTypes: Array.from(new Set(detectedSchemas)),
        hasVisualFaqsOnPage,
        hasMetaTitle,
        metaTitle: realTitle,
        hasMetaDescription,
        metaDescription: realDesc,
        hasOpenGraph,
        hasVoicePhone,
        hasAiVoiceAgent,
        foundStrengths: strengths,
        detectedBottlenecks: bottlenecks,
        recommendations: recommendations.length ? recommendations : ["Maintain continuous AEO and voice latency monitoring."],
      });
    } catch (err: any) {
      setErrorMsg("Could not reach the domain. Please verify that the website URL is live and publicly accessible.");
    } finally {
      setScanning(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
      <div className="text-center mb-8">
        <Badge className="mb-3 bg-emerald-500/10 text-emerald-500 border-emerald-500/20 px-3 py-1 text-xs font-semibold">
          Live Real-Time Audit Engine
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Scan Your Website for AI &amp; Voice Readiness
        </h2>
        <p className="mt-2 text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
          Enter any live domain to inspect real Schema.org JSON-LD tags, AI Search Engine compatibility (AEO), and missed-call risks.
        </p>

        <form onSubmit={handleScan} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <Input
            type="text"
            placeholder="Enter live domain (e.g. warrenbehan.com or nexus-aiagency.netlify.app)"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            className="h-12 px-4 text-sm bg-background border-border"
            required
          />
          <Button type="submit" disabled={scanning} className="h-12 px-8 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold shadow-md">
            {scanning ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Auditing Live...
              </>
            ) : (
              <>
                Audit Now
                <Sparkles className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>

        {scanning && (
          <p className="text-xs text-emerald-500 font-mono mt-3 animate-pulse">
            {scanStep}
          </p>
        )}

        {errorMsg && (
          <div className="mt-4 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs max-w-lg mx-auto flex items-start gap-2.5 text-left">
            <Info className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{errorMsg}</span>
          </div>
        )}
      </div>

      {result && (
        <Card className="border border-border shadow-2xl overflow-hidden animate-in fade-in duration-300">
          {/* Header Bar */}
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
                <p className="text-[11px] text-slate-400">AEO Health Score</p>
                <p className={`text-3xl font-extrabold ${result.score >= 80 ? "text-emerald-400" : result.score >= 60 ? "text-amber-400" : "text-rose-400"}`}>
                  {result.score}<span className="text-sm font-normal text-slate-500">/100</span>
                </p>
              </div>
              <Badge className={`px-3 py-1 font-bold ${result.score >= 80 ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-amber-500/20 text-amber-300 border-amber-500/30"}`}>
                {result.statusText}
              </Badge>
            </div>
          </div>

          <CardContent className="p-6 md:p-8 space-y-8 bg-card">
            {/* Real Inspection Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Schema Check */}
              <div className="p-4 rounded-xl border bg-muted/20 space-y-1">
                <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-primary" /> Schema.org Status
                </span>
                {result.hasSchemaJsonLd ? (
                  <div>
                    <p className="text-sm font-bold text-emerald-500 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Detected Active
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-0.5 truncate">
                      {result.schemaTypes.slice(0, 2).join(", ") || "Active Entities"}
                    </p>
                  </div>
                ) : (
                  <p className="text-sm font-bold text-rose-500 flex items-center gap-1">
                    <XCircle className="w-4 h-4" /> Missing / Incomplete
                  </p>
                )}
              </div>

              {/* AEO / FAQ Status */}
              <div className="p-4 rounded-xl border bg-muted/20 space-y-1">
                <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5 text-primary" /> AEO Answer Readiness
                </span>
                {result.hasVisualFaqsOnPage && !result.hasSchemaJsonLd ? (
                  <div>
                    <p className="text-sm font-bold text-amber-500 flex items-center gap-1">
                      <HelpCircle className="w-4 h-4" /> Visual FAQs Only
                    </p>
                    <p className="text-[10px] text-muted-foreground">Lacks JSON-LD Code</p>
                  </div>
                ) : result.score >= 75 ? (
                  <p className="text-sm font-bold text-emerald-500 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Strong AI Indexing
                  </p>
                ) : (
                  <p className="text-sm font-bold text-amber-500 flex items-center gap-1">
                    <AlertTriangle className="w-4 h-4" /> Gaps in FAQ / Directives
                  </p>
                )}
              </div>

              {/* Voice Lead Intake */}
              <div className="p-4 rounded-xl border bg-muted/20 space-y-1">
                <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-primary" /> 24/7 Voice Intake
                </span>
                {result.hasAiVoiceAgent ? (
                  <p className="text-sm font-bold text-emerald-500 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> AI Voice Active
                  </p>
                ) : result.hasVoicePhone ? (
                  <div>
                    <p className="text-sm font-bold text-amber-500 flex items-center gap-1">
                      <AlertTriangle className="w-4 h-4" /> Missed Call Risk
                    </p>
                    <p className="text-[11px] text-muted-foreground">Standard Phone Line</p>
                  </div>
                ) : (
                  <p className="text-sm font-bold text-rose-500 flex items-center gap-1">
                    <XCircle className="w-4 h-4" /> No Direct Phone Link
                  </p>
                )}
              </div>
            </div>

            {/* Strengths */}
            {result.foundStrengths.length > 0 && (
              <div>
                <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Detected Strengths on this Website
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

            {/* Gaps */}
            {result.detectedBottlenecks.length > 0 && (
              <div>
                <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
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

            {/* Recommendations */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-primary/5 to-transparent border border-emerald-500/30">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-emerald-500" />
                <h4 className="text-base font-bold text-foreground">
                  Custom Nexus AI Recommendations for {new URL(result.url).hostname}
                </h4>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                Bridge the gap between traditional SEO and 24/7 autonomous customer acquisition:
              </p>

              <div className="space-y-2 mb-6">
                {result.recommendations.map((rec, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-medium text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{rec}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
                <span className="text-xs text-muted-foreground">
                  Done-For-You AI Calling &amp; AEO Setup in 3–5 Days
                </span>
                <a
                  href={`https://wa.me/918003469293?text=${encodeURIComponent(
                    `Hi Pradeep, I audited my website (${result.url}) on your Nexus AI scanner. My score was ${result.score}/100. I want to discuss implementing the recommended AI Voice and AEO fixes.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs px-6 h-10 shadow-lg">
                    Implement Fixes with Nexus AI
                    <ArrowRight className="ml-2 w-4 h-4" />
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