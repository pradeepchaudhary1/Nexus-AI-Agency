import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.nexusaiagency.in/#organization",
      "name": "NexusAIAgency",
      "alternateName": ["Nexus AI Solution", "Nexus AI Agency"],
      "url": "https://www.nexusaiagency.in/",
      "logo": "https://www.nexusaiagency.in/favicon.ico",
      "description": "NexusAIAgency builds autonomous AI support, sales, calling, research, CRM, and automation systems for clinics, real estate, salons, and SMBs.",
      "email": "thenexusaiagency@gmail.com",
      "telephone": "+91-8003469293",
      "founder": {
        "@type": "Person",
        "name": "Pradeep Kumar Dagur",
        "jobTitle": "Founder & Principal AI Solutions Architect",
        "url": "https://www.linkedin.com/in/pradeep-kumar-dagur"
      },
      "areaServed": ["India", "United States", "Luxembourg", "Russia", "Switzerland", "Japan", "Taiwan", "France", "Italy", "Spain", "Singapore", "Germany", "Australia", "Canada", "South Korea", "Sweden", "United Kingdom", "Mexico", "Brazil", "New Zealand", "South Africa", "Colombia", "Malaysia", "Pakistan"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Automation Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "24/7 AI Voice Calling & Receptionist Agents",
              "description": "Human-like conversational voice agents built on Vapi.ai for appointment bookings, lead qualification, and customer support."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Workflow Automation, AEO Optimization & CRM Integration",
              "description": "Event-driven automation connecting voice webhooks to Make.com, n8n, Google Sheets, and WhatsApp & Website Schema Markup, AEO Optimization WITH SEO."
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.nexusaiagency.in/#website",
      "url": "https://www.nexusaiagency.in/",
      "name": "NexusAIAgency",
      "publisher": {
        "@id": "https://www.nexusaiagency.in/#organization"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.nexusaiagency.in/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does NexusAIAgency provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "NexusAIAgency builds autonomous AI voice calling agents, sales qualification bots, Website Optimize on google & AI tools, AEO optimization and workflow automations to prevent missed customer inquiries."
          }
        },
        {
          "@type": "Question",
          "name": "How do AI Calling Agents help businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our voice agents answer customer calls 24/7 in real-time, qualify incoming leads, handle bookings, and automatically sync details into your CRM or Google Sheets."
          }
        }
      ]
    }
  ]
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NexusAIAgency — Build an AI workforce for your business" },
      { name: "description", content: "NexusAIAgency builds AI support, sales, calling, research, CRM and automation systems for businesses." },
      { name: "keywords", content: "AI Voice Agents, Nexus AI Agency, Vapi Calling Agent, AI Receptionist, Make.com Automation, Pradeep Kumar Dagur" },
      { name: "author", content: "Pradeep Kumar Dagur" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "NexusAIAgency — Build an AI workforce for your business" },
      { property: "og:description", content: "Deploy AI agents and automation systems around your real workflows, tools and team." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.nexusaiagency.in/" },
      { property: "og:image", content: "https://www.nexusaiagency.in/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "NexusAIAgency — Build an AI workforce for your business" },
      { name: "twitter:description", content: "Deploy AI agents and automation systems around your real workflows, tools and team." },
    ],
    links: [
      { rel: "canonical", href: "https://www.nexusaiagency.in/" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(schemaData),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <HomePage />;
}