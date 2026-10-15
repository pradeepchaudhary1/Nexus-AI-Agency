import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight, Network, Play, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/lead-forms";
import { demos, industries, problems, services, stack, steps, type Feature } from "@/lib/site-data";

export function SectionHeading({ eyebrow, title, copy, centered = false }: { eyebrow: string; title: string; copy?: string; centered?: boolean }) {
  return <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}><p className="eyebrow">{eyebrow}</p><h2 className="section-title mt-4">{title}</h2>{copy && <p className="lead-copy mt-5">{copy}</p>}</div>;
}

export function FeatureGrid({ items, columns = 3 }: { items: Feature[]; columns?: 2 | 3 | 4 }) {
  const cols = columns === 4 ? "lg:grid-cols-4" : columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";
  return <div className={`mt-10 grid gap-4 sm:grid-cols-2 ${cols}`}>{items.map((item) => <article key={item.title} className="feature-card"><div className="icon-box"><item.icon className="size-5" /></div><h3 className="mt-6 font-display text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p></article>)}</div>;
}

export function PageHero({ eyebrow, title, copy, children }: { eyebrow: string; title: string; copy: string; children?: React.ReactNode }) {
  return <section className="relative overflow-hidden border-b border-border"><div className="page-grid absolute inset-0 opacity-45" /><div className="site-container relative section-pad"><div className="max-w-4xl"><p className="eyebrow">{eyebrow}</p><h1 className="page-title mt-6">{title}</h1><p className="lead-copy mt-7 max-w-3xl">{copy}</p>{children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}</div></div></section>;
}

export function WorkflowVisual() {
  return <div className="mt-12 glass-panel p-5 sm:p-8"><div className="grid items-center gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr]"><div className="rounded-md border border-border bg-surface p-5"><p className="eyebrow">Signals in</p><div className="mt-4 flex flex-wrap gap-2">{stack.slice(0, 4).map((item) => <span key={item} className="rounded border border-border bg-background px-3 py-2 text-xs">{item}</span>)}</div></div><ChevronRight className="mx-auto hidden text-primary lg:block" /><div className="rounded-md border border-primary bg-accent p-6 text-center"><Network className="mx-auto size-8 text-primary-strong" /><p className="mt-3 font-display font-semibold">Nexus orchestration</p><p className="mt-1 text-xs text-muted-foreground">Qualify · decide · route</p></div><ChevronRight className="mx-auto hidden text-primary lg:block" /><div className="rounded-md border border-border bg-surface p-5"><p className="eyebrow">Actions out</p><div className="mt-4 flex flex-wrap gap-2">{stack.slice(4).map((item) => <span key={item} className="rounded border border-border bg-background px-3 py-2 text-xs">{item}</span>)}</div></div></div></div>;
}

export function DemoLab({ showForm = false }: { showForm?: boolean }) {
  const [active, setActive] = useState(0);
  const current = demos[active];
  if (!current) return null;
  return <div className="mt-10 grid gap-5 lg:grid-cols-[.85fr_1.15fr]"><div className="space-y-2">{demos.map((demo, index) => <button key={demo.title} onClick={() => setActive(index)} className={`flex w-full items-center justify-between rounded-md border p-4 text-left transition-colors ${active === index ? "border-primary bg-accent" : "border-border bg-card hover:border-primary"}`}><span className="flex items-center gap-3"><span className="grid size-8 place-items-center rounded bg-surface"><Play className="size-4" /></span><span className="font-medium">{demo.title}</span></span><ChevronRight className="size-4 text-muted-foreground" /></button>)}</div><div className="glass-panel p-6 sm:p-8"><div className="flex items-center justify-between"><p className="eyebrow">Interactive preview</p><span className="flex items-center gap-2 text-xs text-primary"><span className="size-2 rounded-full bg-primary pulse-soft" />Demo workflow</span></div><div className="mt-8 space-y-4"><div className="ml-auto max-w-[85%] rounded-md bg-secondary p-4 text-sm leading-6">{current.prompt}</div><div className="max-w-[88%] rounded-md border border-primary bg-accent p-4 text-sm leading-6"><span className="mb-2 block text-xs font-semibold text-primary-strong">AI AGENT</span>{current.response}</div></div>{showForm && <div className="mt-8 border-t border-border pt-6"><LeadForm source="demo_request" demoType={current.title} compact /></div>}</div></div>;
}

export function ProcessStrip() {
  return <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-4">{steps.map((step) => <article key={step.n} className="bg-card p-6"><span className="font-display text-3xl font-semibold text-primary">{step.n}</span><h3 className="mt-8 font-display text-xl font-semibold">{step.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p></article>)}</div>;
}

export function BookingBand() {
  return <section className="border-y border-border bg-surface"><div className="site-container grid gap-8 py-14 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="eyebrow">Your first automation move</p><h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Find the workflow worth fixing first.</h2><p className="mt-3 max-w-2xl text-muted-foreground">Bring one bottleneck. Leave with a clearer view of the right agent, integrations and next step.</p></div><Button asChild size="xl"><Link to="/book-audit">Get My Free AI Workflow Audit <ArrowRight /></Link></Button></div></section>;
}

export function Faq() {
  const faqs = [
    ["Do I need to replace my current tools?", "Usually not. We design around the systems your team already uses, then recommend changes only where they remove real friction."],
    ["Can an AI agent hand work to a person?", "Yes. Clear escalation and human approval points are part of a responsible workflow design."],
    ["Is every system custom?", "The architecture and integrations are shaped around your workflow. Reusable patterns help us move faster without forcing your business into a template."],
    ["What happens after the audit?", "You receive a practical recommended starting point. If there is a strong fit, we can scope a pilot together."],
  ];
  return <Accordion type="single" collapsible className="mt-8">{faqs.map(([q, a], index) => <AccordionItem value={`item-${index}`} key={q}><AccordionTrigger className="py-5 text-base">{q}</AccordionTrigger><AccordionContent className="max-w-3xl pb-5 leading-6 text-muted-foreground">{a}</AccordionContent></AccordionItem>)}</Accordion>;
}

export function OfferCards() {
  const offers = [
    ["AI Opportunity Audit", "Map bottlenecks, readiness and the strongest first use case.", "Assessment"],
    ["AI Agent Pilot", "Build and test one focused agent against a real workflow.", "Pilot-ready"],
    ["CRM & Revenue System", "Connect lead capture, follow-up, pipeline and reporting.", "Connected system"],
    ["AI Operations Retainer", "Improve, monitor and expand your automations over time.", "Ongoing optimization"],
  ];
  return <div className="mt-10 grid gap-4 md:grid-cols-2">{offers.map(([title, copy, label]) => <article key={title} className="feature-card flex min-h-52 flex-col"><span className="eyebrow">{label}</span><h3 className="mt-8 font-display text-2xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p><Link to="/book-audit" className="mt-auto flex items-center gap-2 pt-8 text-sm font-semibold text-primary">Discuss this offer <ArrowRight className="size-4" /></Link></article>)}</div>;
}

export function TrustPoints() {
  return <div className="mt-10 grid gap-4 sm:grid-cols-3">{["Built around your workflow", "Human handoff by design", "Clear scope before deployment"].map((item) => <div key={item} className="flex items-center gap-3 rounded-md border border-border bg-card p-4 text-sm"><ShieldCheck className="size-5 text-primary" />{item}</div>)}</div>;
}

export function IndustryPreview() { return <FeatureGrid items={industries.slice(0, 8)} columns={4} />; }
export function ServicePreview() { return <FeatureGrid items={services} />; }
export function ProblemGrid() { return <FeatureGrid items={problems} />; }

export function CheckList({ items }: { items: string[] }) {
  return <ul className="mt-6 grid gap-3">{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground"><Check className="mt-1 size-4 shrink-0 text-primary" />{item}</li>)}</ul>;
}