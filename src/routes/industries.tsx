import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatureGrid, PageHero, SectionHeading } from "@/components/page-sections";
import { industries } from "@/lib/site-data";

export const Route = createFileRoute("/industries")({
  head: () => ({ meta: [
    { title: "Industries for AI Agents — NexusAIAgency" },
    { name: "description", content: "AI automation workflows for real estate, clinics, gyms, coaching, shops, agencies, e-commerce, SaaS, recruitment and more." },
    { property: "og:title", content: "Industries for AI Agents — NexusAIAgency" },
    { property: "og:description", content: "See how NexusAIAgency adapts AI agents for many business types, not only real estate." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.nexusaiagency.in/industries" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "https://www.nexusaiagency.in/industries" }] }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return <>
    <PageHero eyebrow="Industries" title="Automation for businesses with leads, calls, bookings and customers." copy="Real estate is included as one use case alongside clinics, gyms, coaching, institutes, local shops, digital shops, agencies and modern service businesses."><Button asChild size="xl"><Link to="/book-audit">Find my industry workflow <ArrowRight /></Link></Button></PageHero>
    <section className="section-pad"><div className="site-container"><SectionHeading eyebrow="Use cases" title="Same intelligence. Different operating details." copy="Each business needs different language, handoffs and tools. We begin by mapping those details before building."/><FeatureGrid items={industries} /></div></section>
  </>;
}