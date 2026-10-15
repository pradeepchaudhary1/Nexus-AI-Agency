import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CheckList, PageHero, ProcessStrip, SectionHeading } from "@/components/page-sections";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({ meta: [
    { title: "How NexusAIAgency Works" },
    { name: "description", content: "A four-step process for auditing, designing, deploying and optimizing AI agents and automation systems." },
    { property: "og:title", content: "How NexusAIAgency Works" },
    { property: "og:description", content: "See how NexusAIAgency turns business bottlenecks into pilot-ready AI automation systems." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://nexus-ai-solution.lovable.app/how-it-works" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "https://nexus-ai-solution.lovable.app/how-it-works" }] }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return <>
    <PageHero eyebrow="How it works" title="From messy workflow to working automation." copy="The process is designed to protect your customer experience while removing repetitive work from your team."><Button asChild size="xl"><Link to="/book-audit">Start with an audit <ArrowRight /></Link></Button></PageHero>
    <section className="section-pad"><div className="site-container"><SectionHeading eyebrow="Process" title="Four steps. Clear decisions at each stage."/><ProcessStrip /></div></section>
    <section className="section-pad border-y border-border bg-surface"><div className="site-container grid gap-8 lg:grid-cols-2"><div className="glass-panel p-7"><h2 className="font-display text-3xl font-semibold">What the audit reviews</h2><CheckList items={["Business type and customer journey", "Team size and current workload", "Lead volume and speed expectations", "Existing tools and data locations", "Highest-risk points for missed response", "Best first pilot for fast learning"]}/></div><div className="glass-panel p-7"><h2 className="font-display text-3xl font-semibold">What deployment includes</h2><CheckList items={["Agent instructions and boundaries", "Integration map for your tools", "Testing scenarios before launch", "Human handoff and escalation", "Data capture and CRM updates", "Optimization plan after release"]}/></div></div></section>
  </>;
}