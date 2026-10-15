import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoLab, PageHero, SectionHeading } from "@/components/page-sections";

export const Route = createFileRoute("/agent-demos")({
  head: () => ({ meta: [
    { title: "Agent Demo Lab — NexusAIAgency" },
    { name: "description", content: "Explore interactive AI agent demos for support, sales qualification, calling, research and CRM automation." },
    { property: "og:title", content: "Agent Demo Lab — NexusAIAgency" },
    { property: "og:description", content: "Preview how AI agents can support customers, qualify leads, manage calls, research and update CRM workflows." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://nexus-ai-solution.lovable.app/agent-demos" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "https://nexus-ai-solution.lovable.app/agent-demos" }] }),
  component: AgentDemosPage,
});

function AgentDemosPage() {
  return <>
    <PageHero eyebrow="Agent Demo Lab" title="Preview the conversations and actions before you build." copy="These demos show representative workflow behavior so you can choose the agent that fits your first bottleneck."><Button asChild variant="outline" size="xl"><Link to="/solutions">Compare solutions <ArrowRight /></Link></Button></PageHero>
    <section className="section-pad"><div className="site-container"><SectionHeading eyebrow="Request a demo" title="Select a workflow and send your context." copy="Choose a demo, describe your business, and we’ll respond with the best-fit starting point."/><DemoLab showForm /></div></section>
  </>;
}