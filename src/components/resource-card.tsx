import { Link } from "@tanstack/react-router";
import { Download, ExternalLink, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PublicResource } from "@/lib/resources.functions";
import { categoryMeta, formatDate, iconFor } from "@/lib/resource-meta";

export function ResourceCard({ item }: { item: PublicResource }) {
  const Icon = iconFor(item.category, item.mime_type);
  const href = item.download_url ?? item.external_url;
  const locked = item.visibility !== "public";
  return (
    <article className="feature-card flex h-full flex-col">
      <div className="flex items-start justify-between gap-3">
        <div className="icon-box"><Icon className="size-5" aria-hidden /></div>
        <span className="text-xs text-muted-foreground">{formatDate(item.created_at)}</span>
      </div>
      <p className="eyebrow mt-5">{categoryMeta(item.category).label}</p>
      <h3 className="mt-2 font-display text-lg font-semibold">{item.title}</h3>
      {item.description && <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">{item.description}</p>}
      {item.category === "project" && (item.industry || item.outcome) && (
        <dl className="mt-3 space-y-1 text-xs text-muted-foreground">
          {item.industry && <div><dt className="inline font-semibold text-foreground">Industry: </dt><dd className="inline">{item.industry}</dd></div>}
          {item.outcome && <div><dt className="inline font-semibold text-foreground">Outcome: </dt><dd className="inline">{item.outcome}</dd></div>}
        </dl>
      )}
      {item.tags.length > 0 && <div className="mt-4 flex flex-wrap gap-1.5">{item.tags.map((t) => <span key={t} className="rounded-sm border border-border px-2 py-0.5 text-xs text-muted-foreground">#{t}</span>)}</div>}
      <div className="mt-auto pt-6">
        {locked ? (
          <Button asChild variant="outline" size="sm"><Link to="/book-audit"><Lock /> Request Access</Link></Button>
        ) : href ? (
          <Button asChild size="sm"><a href={href} target="_blank" rel="noreferrer">{item.download_url ? <><Download /> {item.mime_type?.startsWith("video/") ? "View" : "Download"}</> : <><ExternalLink /> View</>}</a></Button>
        ) : null}
      </div>
    </article>
  );
}
