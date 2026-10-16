import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, CheckCircle2, Linkedin, ShieldCheck, Mail, Phone, Cpu } from "lucide-react";

// Original Founder Photo aur Certificate Imports
import founderAsset from "@/assets/founder-pradeep.png";
import certAsset from "@/assets/ai-specialist-certificate.jpeg";

// Universal Safe Resolvers (Never Crashes)
const founderSrc = typeof founderAsset === "string" ? founderAsset : (founderAsset as any)?.default || (founderAsset as any)?.url || founderAsset;
const certSrc = typeof certAsset === "string" ? certAsset : (certAsset as any)?.default || (certAsset as any)?.url || certAsset;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Pradeep Chaudhary — NexusAIAgency" },
      { name: "description", content: "Meet Pradeep Chaudhary, founder of NexusAIAgency, Certified AI Specialist from Canadian Labs of AI and Management." },
      { property: "og:title", content: "About Pradeep Chaudhary — NexusAIAgency" },
      { property: "og:description", content: "NexusAIAgency combines business workflow design with practical AI agents and automation." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.nexusaiagency.in/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.nexusaiagency.in/about" }],
  }),
  component: AboutPage,
});

export function AboutPage() {
  return (
    <div className="site-container py-12 max-w-5xl">
      {/* ======================================================== */}
      {/* 1. TOP HEADER SECTION (Screenshot 2 wala Hero Section)   */}
      {/* ======================================================== */}
      <div className="mb-20 border-b border-border/50 pb-14 pt-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3">
          ABOUT NEXUSAIAGENCY
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.15] mb-5">
          Human strategy. Machine efficiency. Better business systems.
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed mb-8">
          NexusAIAgency was founded to help businesses respond faster, manage customer journeys more clearly and remove repetitive work with responsible automation.
        </p>
        
        {/* WhatsApp Direct Button with 8003469293 */}
        <a
          href="https://wa.me/918003469293?text=Hi%20Pradeep,%20I%20want%20to%20discuss%20an%20AI%20automation%20project%20for%20my%20business."
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-500 text-slate-950 font-semibold px-6 py-3.5 rounded-lg text-sm transition-all shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20"
        >
          <span>Talk to Founder</span>
          <ArrowRight className="size-4" />
        </a>
      </div>

      {/* ======================================================== */}
      {/* 2. FOUNDER SECTION (Aapka Current Working Section)       */}
      {/* ======================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 items-center mb-20">
        <div className="relative group mx-auto w-full max-w-sm">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-muted shadow-xl">
            <img
              src={founderSrc}
              alt="Pradeep Chaudhary"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute -bottom-3 -right-3 bg-card border border-border rounded-xl p-3 shadow-lg flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <div className="text-[11px] leading-tight">
              <p className="font-bold text-foreground">Verified AI Specialist</p>
              <p className="text-muted-foreground">Barleti University Accredited</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
            Founder &amp; AI Solutions Architect
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Pradeep Chaudhary
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            AI specialist focused on turning real operating problems into autonomous, reliable systems. We map where customer inquiries stall, follow-ups break, and calls are missed—then engineer a practical AI workforce with defined responsibilities and zero lead leakage.
          </p>
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
            Engineering background combining mega-scale industrial operations (up to 600 MW projects) with cutting-edge Agentic AI, Website AEO Optimization, Chatbot's, Voice Calling Agents, and event-driven webhook pipelines.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <a href="https://www.linkedin.com/in/pradeep-kumar-dagur-a49a86239/">
              <Button variant="outline" size="sm" className="text-xs gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-blue-500" /> Connect on LinkedIn
              </Button>
            </a>
            <a href="mailto:thenexusaiagency@gmail.com">
              <Button variant="outline" size="sm" className="text-xs gap-1.5">
                <Mail className="w-3.5 h-3.5" /> Email Direct
              </Button>
            </a>
            <a href="https://wa.me/919166516942" target="_blank" rel="noreferrer">
              <Button size="sm" className="text-xs gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold">
                <Phone className="w-3.5 h-3.5" /> WhatsApp Call
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. CERTIFICATE SECTION (Screenshot 1 wala Exact Layout)  */}
      {/* ======================================================== */}
      <div className="border-t border-border/50 pt-14 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Text Column */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3">
              CERTIFIED LEARNING
            </p>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-5">
              AI and management foundations.
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
              Pradeep Chaudhary has been recognized for completing an AI specialist program from Canadian Labs of AI and Management, powered by Optume.ai, Umirai.ai and AppDaddy.ai.
            </p>
            
            <div className="flex items-center gap-2.5 text-sm font-medium text-emerald-400">
              <Award className="size-5 shrink-0" />
              <span>Certificate ID D9FB-8ACE98</span>
            </div>
          </div>

          {/* Right Certificate Preview Column (Same Size & Framed Layout) */}
          <div className="rounded-xl overflow-hidden border border-border shadow-2xl aspect-[16/10] bg-muted flex items-center justify-center">
            <img
              src={certSrc}
              alt="AI Specialist Program Certificate awarded to Pradeep Chaudhary"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>

    </div>
  );
}