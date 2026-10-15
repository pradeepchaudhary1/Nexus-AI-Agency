import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { PageHero } from "@/components/page-sections";
import { ResourceCard } from "@/components/resource-card";
import { resourcesQuery } from "@/lib/resources.functions";
import { categories } from "@/lib/resource-meta";

const URL = "https://nexus-ai-solution.lovable.app/resources";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources & Client Hub — NexusAIAgency" },
      { name: "description", content: "Updates, documents, demo recordings, tutorials and client project notes from NexusAIAgency." },
      { property: "og:title", content: "Resources & Client Hub — NexusAIAgency" },
      { property: "og:description", content: "Browse AI automation updates, PDFs, demo recordings, courses and project case studies." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(resourcesQuery),
  errorComponent: () => <div className="site-container section-pad text-muted-foreground">Resources could not load. Please refresh.</div>,
  notFoundComponent: () => <div className="site-container section-pad">Not found.</div>,
  component: ResourcesPage,
});

function ResourcesPage() {
  const { data } = useSuspenseQuery(resourcesQuery);
  const [category, setCategory] = useState("all");
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return data.items.filter((r) => (category === "all" || r.category === category) && (!term || r.title.toLowerCase().includes(term) || r.tags.some((t) => t.toLowerCase().includes(term))));
  }, [data.items, category, q]);

  return <>
    <PageHero eyebrow="Client Hub" title="Resources, demos and project updates." copy="Documents, recordings, tutorials and project notes from the NexusAIAgency team. Client-only and internal items can be requested." />
    <section className="section-pad">
      <div className="site-container">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {[{ value: "all", label: "All" }, ...categories].map((c) => (
              <button key={c.value} onClick={() => setCategory(c.value)} aria-pressed={category === c.value} className={`rounded-md border px-3 py-1.5 text-sm transition-colors ${category === c.value ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}>{c.label}</button>
            ))}
          </div>
          <label className="relative w-full lg:w-72"><span className="sr-only">Search resources</span><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search title or tag" className="pl-9" /></label>
        </div>
        {data.error && <p className="mt-8 text-sm text-destructive">{data.error}</p>}
        {filtered.length === 0 ? (
          <p className="mt-12 rounded-md border border-dashed border-border p-10 text-center text-muted-foreground">No resources here yet. New items will appear as soon as they are published.</p>
        ) : (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((item) => <ResourceCard key={item.id} item={item} />)}</div>
        )}
      </div>
    </section>
  </>;
}
