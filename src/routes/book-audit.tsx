import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessagesSquare, PhoneCall } from "lucide-react";
import { LeadForm } from "@/components/lead-forms";
import { PageHero, SectionHeading } from "@/components/page-sections";

export const Route = createFileRoute("/book-audit")({
  head: () => ({ meta: [
    { title: "Book a Free AI Workflow Audit — NexusAIAgency" },
    { name: "description", content: "Request a free AI workflow audit with NexusAIAgency for automation, AI agents, CRM and revenue systems." },
    { property: "og:title", content: "Book a Free AI Workflow Audit — NexusAIAgency" },
    { property: "og:description", content: "Share your workflow bottleneck and get a practical recommendation for your first AI automation system." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://nexus-ai-solution.lovable.app/book-audit" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "https://nexus-ai-solution.lovable.app/book-audit" }] }),
  component: BookAuditPage,
});

function BookAuditPage() {
  return <>
    <PageHero eyebrow="Book audit" title="Get your free AI workflow audit." copy="Tell us where leads, calls, CRM or support work slow down. We’ll review the request and respond with a focused next step." />
    <section className="section-pad"><div className="site-container grid gap-10 lg:grid-cols-[.9fr_1.1fr]"><div><SectionHeading eyebrow="Direct contact" title="Prefer to talk now?" copy="Use the direct channels below, or send the form so your workflow details are stored clearly."/><div className="mt-8 grid gap-3 text-sm"><a className="feature-card flex items-center gap-4" href="tel:+918003469293"><PhoneCall className="size-5 text-primary"/>+91 80034 69293</a><a className="feature-card flex items-center gap-4" href="https://wa.me/919266516942" target="_blank" rel="noreferrer"><MessagesSquare className="size-5 text-primary"/>WhatsApp +91 92665 16942</a><a className="feature-card flex items-center gap-4" href="mailto:thenexusaiagency@gmail.com"><Mail className="size-5 text-primary"/>thenexusaiagency@gmail.com</a></div></div><div className="glass-panel p-6 sm:p-8"><LeadForm source="booking" /></div></div></section>
  </>;
}