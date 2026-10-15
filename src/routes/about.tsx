import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHeading, TrustPoints } from "@/components/page-sections";
import founderAsset from "@/assets/founder-pradeep.png.asset.json";
import certificateAsset from "@/assets/ai-specialist-certificate.jpeg.asset.json";
import { socials } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Pradeep Chaudhary — NexusAIAgency" },
    { name: "description", content: "Meet Pradeep Chaudhary, founder of NexusAIAgency, and learn the agency’s approach to practical AI automation." },
    { property: "og:title", content: "About Pradeep Chaudhary — NexusAIAgency" },
    { property: "og:description", content: "NexusAIAgency combines business workflow design with practical AI agents and automation." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://nexus-ai-solution.lovable.app/about" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "https://nexus-ai-solution.lovable.app/about" }] }),
  component: AboutPage,
});

function AboutPage() {
  return <>
    <PageHero eyebrow="About NexusAIAgency" title="Human strategy. Machine efficiency. Better business systems." copy="NexusAIAgency was founded to help businesses respond faster, manage customer journeys more clearly and remove repetitive work with responsible automation."><Button asChild size="xl"><Link to="/book-audit">Talk to Pradeep <ArrowRight /></Link></Button></PageHero>
    <section className="section-pad"><div className="site-container grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]"><div className="overflow-hidden rounded-md border border-border bg-card"><img src={founderAsset.url} alt="Pradeep Chaudhary, founder of NexusAIAgency" className="aspect-[4/5] w-full object-cover" /></div><div><p className="eyebrow">Founder</p><h2 className="section-title mt-4">Pradeep Chaudhary</h2><p className="lead-copy mt-5">AI specialist focused on turning real operating problems into clear, connected systems.</p><div className="mt-7 space-y-4 leading-7 text-muted-foreground"><p>The work begins with the business—not the technology. We map where enquiries stall, follow-ups break, calls are missed, records become unreliable or teams repeat the same tasks.</p><p>Then we design a practical AI workforce with defined responsibilities, clear human handoffs and integrations that fit the tools already in use.</p></div><div className="mt-7 flex flex-wrap gap-3">{socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground">{social.label}<ExternalLink className="size-3"/></a>)}</div><TrustPoints /></div></div></section>
    <section className="section-pad border-y border-border bg-surface"><div className="site-container grid items-center gap-12 lg:grid-cols-2"><div><SectionHeading eyebrow="Certified learning" title="AI and management foundations." copy="Pradeep Chaudhary has been recognized for completing an AI specialist program from Canadian Labs of AI and Management, powered by Optume.ai, Umirai.ai and AppDaddy.ai."/><div className="mt-6 flex items-center gap-3 text-sm text-primary"><Award className="size-5"/>Certificate ID D9FB-8ACE98</div></div><a href={certificateAsset.url} target="_blank" rel="noreferrer" className="overflow-hidden rounded-md border border-border bg-card transition-colors hover:border-primary" aria-label="Open AI specialist certificate"><img src={certificateAsset.url} alt="AI specialist program certificate awarded to Pradeep Chaudhary" className="w-full" /></a></div></section>
  </>;
}