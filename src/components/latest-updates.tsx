import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/page-sections";
import { ResourceCard } from "@/components/resource-card";
import { resourcesQuery } from "@/lib/resources.functions";

export function LatestUpdates() {
  const { data } = useQuery(resourcesQuery);
  const items = data?.items.slice(0, 3) ?? [];
  if (items.length === 0) return null;
  return (
    <section className="section-pad">
      <div className="site-container">
        <SectionHeading eyebrow="Latest updates" title="Fresh from the Client Hub." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{items.map((item) => <ResourceCard key={item.id} item={item} />)}</div>
        <div className="mt-8"><Button asChild variant="outline"><Link to="/resources">View all resources <ArrowRight /></Link></Button></div>
      </div>
    </section>
  );
}
