import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CheckList, PageHero, SectionHeading, ServicePreview, WorkflowVisual } from "@/components/page-sections";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/solutions")({
  head: () => ({ meta: [
    { title: "AI Automation Solutions — NexusAIAgency" },
    { name: "description", content: "AI support, sales, calling, research, operations, CRM, RPM and data-management systems for businesses." },
    { property: "og:title", content: "AI Automation Solutions — NexusAIAgency" },
    { property: "og:description", content: "Explore the AI agents and connected automation systems NexusAIAgency builds for business workflows." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.nexusaiagency.in/solutions" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "https://www.nexusaiagency.in/solutions" }] }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return <>
    <PageHero eyebrow="Solutions" title="AI systems for response, revenue and operations." copy="NexusAIAgency designs agents that work across the full customer journey: first enquiry, qualification, calls, support, CRM records, follow-ups and reporting."><Button asChild size="xl"><Link to="/book-audit">Map my workflow <ArrowRight /></Link></Button></PageHero>
    <section className="section-pad"><div className="site-container"><SectionHeading eyebrow="Agent stack" title="Choose the role your business needs most." copy="Start with one high-value bottleneck, then connect adjacent systems as the process proves itself."/><ServicePreview /></div></section>
    <section className="section-pad border-y border-border bg-surface"><div className="site-container grid gap-10 lg:grid-cols-2"><div><SectionHeading eyebrow="Revenue process management" title="RPM keeps leads, tasks and outcomes aligned." copy="Instead of leaving revenue work across calls, chats, sheets and memory, we connect the stages into a clear operating rhythm."/><CheckList items={["Lead source capture and enrichment", "Qualification and routing rules", "Follow-up tasks and reminders", "CRM stage updates and notes", "Calendar, WhatsApp, email and calling flows", "Data stored for reporting and future decisions"]}/></div><WorkflowVisual /></div></section>
    <section className="section-pad"><div className="site-container"><SectionHeading eyebrow="Delivery model" title="Every system gets a job description."/><div className="mt-10 grid gap-4 lg:grid-cols-3">{services.slice(0,3).map((service) => <article key={service.title} className="feature-card"><h3 className="font-display text-2xl font-semibold">{service.title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">We define what it can answer, what it must ask, where it sends data and when a human should take over.</p></article>)}</div></div></section>
  </>;
}