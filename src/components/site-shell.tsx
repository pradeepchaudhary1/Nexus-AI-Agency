import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { navItems, socials } from "@/lib/site-data";
import logoAsset from "@/assets/nexus-logo.jpeg.asset.json";
import { ZoyaChat } from "@/components/zoya-chat";

function Brand() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="NexusAIAgency home">
      <img src={logoAsset.url} alt="NexusAIAgency logo" width={32} height={32} className="size-8 shrink-0 rounded-md object-cover" />
      <span className="font-display text-lg font-semibold">Nexus<span className="text-primary">AI</span>Agency</span>
    </Link>
  );
}

export function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const saved = localStorage.getItem("nexus-theme");
    const nextDark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", nextDark);
    setDark(nextDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("nexus-theme", next ? "dark" : "light");
  };
  return <Button variant="ghost" size="icon" onClick={toggle} aria-label={dark ? "Use light theme" : "Use dark theme"}>{dark ? <Sun /> : <Moon />}</Button>;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => { setOpen(false); }, [pathname]);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="site-header">
        <div className="site-container flex h-18 items-center justify-between gap-4">
          <Brand />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => <Link key={item.to} to={item.to} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>{item.label}</Link>)}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild className="hidden sm:inline-flex"><Link to="/book-audit">Book Audit</Link></Button>
            <Button variant="outline" size="icon" className="lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {open && <nav className="mobile-nav lg:hidden" aria-label="Mobile navigation">{navItems.map((item) => <Link key={item.to} to={item.to} className="mobile-nav-link">{item.label}</Link>)}<Link to="/book-audit" className="mobile-nav-link text-primary">Book Audit</Link></nav>}
      </header>
      <main>{children}</main>
      <footer className="border-t border-border bg-surface">
        <div className="site-container grid gap-10 py-14 lg:grid-cols-[1.2fr_.8fr_.8fr]">
          <div><Brand /><p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">AI agents and automation systems built around your real workflows, tools and team.</p></div>
          <div><p className="eyebrow">Contact</p><div className="mt-4 space-y-2 text-sm"><a href="mailto:thenexusaiagency@gmail.com" className="footer-link">thenexusaiagency@gmail.com</a><a href="tel:+918003469293" className="footer-link">+91 80034 69293</a><a href="https://wa.me/919266516942" target="_blank" rel="noreferrer" className="footer-link">WhatsApp +91 92665 16942</a></div></div>
          <div><p className="eyebrow">Follow</p><div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">{socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="footer-link text-sm">{social.label}</a>)}</div></div>
        </div>
        <div className="site-container flex flex-col gap-2 border-t border-border py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>© 2026 NexusAIAgency. Built for intelligent growth.</span><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></div>
      </footer>
      <ZoyaChat />
    </div>
  );
}