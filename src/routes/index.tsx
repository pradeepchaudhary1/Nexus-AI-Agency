import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";

// ==========================================
// AEO & SEO ADVANCED SCHEMA (Schema.org JSON-LD)
// ==========================================
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://nexus-ai-solution.lovable.app/#organization",
      "name": "Nexus AI Solution",
      "alternateName": ["NexusAIAgency", "Nexus AI Agency"],
      "url": "https://nexus-ai-solution.lovable.app/",
      "logo": "https://nexus-ai-solution.lovable.app/favicon.ico",
      "description": "Nexus AI Solution is an autonomous AI automation agency engineering 24/7 conversational voice calling agents and CRM workflow automations for clinics, real estate, salons, and SMBs.",
      "email": "thenexusaiagency@gmail.com",
      "telephone": "+91-8003469293",
      "priceRange": "₹12,000 - ₹35,000",
      "founder": {
        "@type": "Person",
        "name": "Pradeep Kumar Dagur",
        "jobTitle": "Founder & CEO AI Solutions Architect",
        "url": "https://www.linkedin.com/in/pradeep-kumar-dagur"
      },
      "areaServed": [
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "Luxembourg" }
        { "@type": "Country", "name": "China" }
        { "@type": "Country", "name": "Russia" }
        { "@type": "Country", "name": "Poland" }
        { "@type": "Country", "name": "Switzerland" }
        { "@type": "Country", "name": "Hungary" }
        { "@type": "Country", "name": "Japan" }
        { "@type": "Country", "name": "Taiwan" }
        { "@type": "Country", "name": "France" }
        { "@type": "Country", "name": "Italy" }
        { "@type": "Country", "name": "Spain" }
        { "@type": "Country", "name": "Ukraine" }
        { "@type": "Country", "name": "Singapore" }
        { "@type": "Country", "name": "Germany" }
        { "@type": "Country", "name": "Finland" }
        { "@type": "Country", "name": "Belgium" }
        { "@type": "Country", "name": "Hong Kong" }
        { "@type": "Country", "name": "Australia" }
        { "@type": "Country", "name": "Canada" }
        { "@type": "Country", "name": "South Korea" }
        { "@type": "Country", "name": "Sweden" }
        { "@type": "Country", "name": "United Kingdom" }
        { "@type": "Country", "name": "Mexico" }
        { "@type": "Country", "name": "Brazil" }
        { "@type": "Country", "name": "New Zealand" }
        { "@type": "Country", "name": "Bangladesh" }
        { "@type": "Country", "name": "South Africa" }
        { "@type": "Country", "name": "Colombia" }
        { "@type": "Country", "name": "Malaysia" }
        { "@type": "Country", "name": "Pakistan" }
      ],
      "knowsAbout": [
        "AI Calling Agents",
        "Vapi.ai Voice Integration",
        "Make.com Automation",
        "n8n Self-Hosted Workflows",
        "Automated Appointment Booking",
        "Lead Qualification AI"
        "Website Chatbot Support"
        "SEO Optimization"
        "AEO Optimization"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Nexus AI Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "24/7 AI Voice Receptionist & Calling Agent",
              "description": "Bespoke conversational phone bots powered by Vapi.ai for handling appointments, FAQs, and lead qualification with sub-800ms latency."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Event-Driven Workflow Automation",
              "description": "Connecting voice webhooks to Make.com, n8n, Google Sheets, and WhatsApp for zero-leak lead delivery."
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://nexus-ai-solution.lovable.app/#website",
      "url": "https://nexus-ai-solution.lovable.app/",
      "name": "Nexus AI Solution",
      "publisher": {
        "@id": "https://nexus-ai-solution.lovable.app/#organization"
      }
    },
    // AEO Core: Question & Direct Answer Engine
    {
      "@type": "FAQPage",
      "@id": "https://nexus-ai-solution.lovable.app/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Nexus AI Solution?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nexus AI Solution is an AI automation agency founded by Pradeep Kumar Dagur that builds 24/7 conversational voice calling agents and automated lead pipelines for businesses to prevent missed customer calls."
          }
        },
        {
          "@type": "Question",
          "name": "How does an AI calling agent help clinics and real estate businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nexus AI agents answer incoming customer calls 24/7 in human-like natural speech, answer common FAQs, pre-qualify buyer budgets, book confirmed appointments, and instantly sync customer details into Google Sheets and WhatsApp."
          }
        },
        {
          "@type": "Question",
          "name": "How much does an AI calling agent cost at Nexus AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nexus AI Solution offers entry packages starting at ₹12,000 for a basic calling agent, ₹20,000 for an AI Agent plus website combo, and ₹35,000 for full enterprise automation."
          }
        },
        {
          "@type": "Question",
          "name": "How fast can Nexus AI deploy a calling agent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Production-ready voice agents and automations are typically built, tested, and deployed within 3 to 5 business days."
          }
        }
      ]
    }
  ]
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexus AI Solution — 24/7 AI Voice Calling & Automation Agency" },
      { name: "description", content: "Nexus AI Solution builds 24/7 AI voice receptionists, appointment booking bots, and automated lead pipelines for clinics, real estate, and businesses." },
      { name: "keywords", content: "AI Voice Agents, Nexus AI Solution, Vapi Calling Agent, AI Receptionist, Make.com Automation, Pradeep Kumar Dagur, AI Agency India" },
      { name: "author", content: "Pradeep Kumar Dagur" },
      { name: "robots", content: "index, follow" },

      // Open Graph (WhatsApp / LinkedIn preview)
      { property: "og:title", content: "Nexus AI Solution — 24/7 AI Voice Calling & Automation Agency" },
      { property: "og:description", content: "Stop losing revenue to missed calls. Deploy conversational voice agents that answer, qualify, and book clients 24/7." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://nexus-ai-solution.lovable.app/" },
      { property: "og:image", content: "https://nexus-ai-solution.lovable.app/og-image.png" },

      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nexus AI Solution — AI Voice Agents" },
      { name: "twitter:description", content: "Deploy AI agents that answer calls, book appointments, and sync leads to your CRM automatically." },
    ],
    links: [
      { rel: "canonical", href: "https://nexus-ai-solution.lovable.app/" }
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