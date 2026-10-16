import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessagesSquare, PhoneCall } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/page-sections";
import { AeoWebsiteScanner } from "@/components/aeo-scanner";

export const Route = createFileRoute("/book-audit")({
  head: () => ({
    meta: [
      { title: "Free AEO & Website Audit Scanner — NexusAIAgency" },
      { name: "description", content: "Scan your website for Schema.org, AEO readiness (ChatGPT/Perplexity), voice search compliance, and missed-call risks with NexusAIAgency." },
      { property: "og:title", content: "Free AEO & Website Audit Scanner — NexusAIAgency" },
      { property: "og:description", content: "Instant website audit for AI search engine optimization, Schema markup, and automation recommendations." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.nexusaiagency.in/book-audit" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.nexusaiagency.in/book-audit" }],
  }),
  component: BookAuditPage,
});

function BookAuditPage() {
  return (
    <>
      <PageHero
        eyebrow="Instant Website Audit"
        title="Check if your website is ready for AI search engines & voice agents."
        copy="Scan your site in seconds to identify Schema.org gaps, AEO ranking issues, and missed customer opportunities."
      />

      {/* Interactive AEO Scanner Section */}
      <section className="py-10 bg-slate-50/50 dark:bg-slate-900/40">
        <AeoWebsiteScanner />
      </section>

      {/* Direct Contact Options */}
      <section className="section-pad border-t border-border">
        <div className="site-container max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Direct Assistance"
            title="Want a custom automation audit?"
            copy="Prefer to speak directly with our solutions architect? Connect through any channel below."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-3 text-sm">
            <a className="feature-card flex items-center gap-3 p-4 rounded-xl border bg-card" href="tel:+918003469293">
              <PhoneCall className="size-5 text-primary shrink-0" />
              <span>+91 80034 69293</span>
            </a>
            <a className="feature-card flex items-center gap-3 p-4 rounded-xl border bg-card" href="https://wa.me/919166516942" target="_blank" rel="noreferrer">
              <MessagesSquare className="size-5 text-primary shrink-0" />
              <span>WhatsApp Us</span>
            </a>
            <a className="feature-card flex items-center gap-3 p-4 rounded-xl border bg-card" href="mailto:thenexusaiagency@gmail.com">
              <Mail className="size-5 text-primary shrink-0" />
              <span className="truncate">thenexusaiagency@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}