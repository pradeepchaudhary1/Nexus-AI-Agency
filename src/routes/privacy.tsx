import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-sections";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [
    { title: "Privacy Policy — NexusAIAgency" },
    { name: "description", content: "How NexusAIAgency collects, uses and protects information submitted through its website." },
    { property: "og:title", content: "Privacy Policy — NexusAIAgency" },
    { property: "og:description", content: "Read the NexusAIAgency privacy policy for audit, booking and demo requests." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://nexus-ai-solution.lovable.app/privacy" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "https://nexus-ai-solution.lovable.app/privacy" }] }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const sections = [
    ["Information we collect", "When you request an audit or demo, we collect the details you submit, such as your name, email, phone number, business type, workflow challenges and current tools."],
    ["How we use information", "We use your information to review your request, contact you, understand your requirements and improve the relevance of our services. We do not sell your personal information."],
    ["Storage and access", "Form submissions are stored in a protected database. Public visitors cannot read, change or delete submissions. Access is limited to operating the agency and responding to enquiries."],
    ["AI and business data", "Business data is not used to build or train a customer-specific agent unless that work is separately agreed. Project-specific terms, access controls and data handling are defined before deployment."],
    ["Retention", "We retain enquiry information while it is needed for business communication, record keeping and legal obligations. You may request correction or deletion where applicable."],
    ["Contact", "For privacy questions or requests, email thenexusaiagency@gmail.com or call +91 80034 69293."],
  ];
  return <><PageHero eyebrow="Privacy" title="Clear handling of your business information." copy="This policy explains how NexusAIAgency handles information submitted through this website."/><section className="section-pad"><div className="site-container max-w-3xl space-y-10">{sections.map(([title, copy]) => <article key={title}><h2 className="font-display text-2xl font-semibold">{title}</h2><p className="mt-3 leading-7 text-muted-foreground">{copy}</p></article>)}<p className="border-t border-border pt-8 text-xs text-muted-foreground">Last updated: 5 October 2026</p></div></section></>;
}