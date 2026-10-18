import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText } from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Free AI Resources & Blueprints — NexusAIAgency" },
      { name: "description", content: "Download free prompt packs, AI voice receptionist templates, and automation guides by Nexus AI." },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  const resources = [
    {
      title: "Clinic AI Receptionist Prompt Architecture (Vapi/ElevenLabs)",
      category: "Voice AI Blueprint",
      description: "Complete system instructions and triage prompt template for dental and healthcare appointment booking.",
      downloadLink: "https://docs.google.com/document/d/1eVNmPV1-1C4CPP5DUI6aXKQjpm6jJsG7EjVMGRlQ2qk/edit"
    },
    {
      title: "Make.com & n8n Lead-to-WhatsApp Webhook Guide",
      category: "Automation SOP",
      description: "Step-by-step documentation on parsing voice call JSON webhooks and dispatching instant CRM notifications.",
      downloadLink: "https://docs.google.com/document/d/1eVNmPV1-1C4CPP5DUI6aXKQjpm6jJsG7EjVMGRlQ2qk/edit"
    },
    {
      title: "Complete 2026 AEO & Schema.org Checklist for Businesses",
      category: "SEO/AEO Guide",
      description: "The exact structured data and llms.txt directives required to get cited in Perplexity and ChatGPT search.",
      downloadLink: "https://docs.google.com/document/d/1eVNmPV1-1C4CPP5DUI6aXKQjpm6jJsG7EjVMGRlQ2qk/edit"
    }
  ];

  return (
    <div className="site-container py-12 max-w-5xl">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
          <BookOpen className="w-3.5 h-3.5 mr-1 inline" /> Free Agency Knowledge Vault
        </Badge>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          AI Toolkits, SOPs &amp; Blueprints
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Free operational templates to help business owners understand voice AI and autonomous workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resources.map((res, i) => (
          <Card key={i} className="border hover:shadow-md transition-all flex flex-col justify-between">
            <CardHeader className="pb-2">
              <Badge variant="outline" className="w-fit text-[10px] mb-2">{res.category}</Badge>
              <CardTitle className="text-sm font-bold leading-snug">{res.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
              <p className="text-xs text-muted-foreground">{res.description}</p>
              <a href={res.downloadLink} target="_blank" rel="noreferrer" className="block w-full">
                <Button variant="outline" size="sm" className="w-full text-xs gap-1.5">
                  <FileText className="w-3.5 h-3.5" /> Read Documentation
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}