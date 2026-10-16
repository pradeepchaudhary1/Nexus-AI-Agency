import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { navItems, socials } from "@/lib/site-data";
import { ZoyaChat } from "@/components/zoya-chat";

// Original Logo Import
import logoAsset from "@/assets/nexus-logo.jpeg";

// Universal Safe Resolver (Har format me 100% chalega)
const logoSrc = typeof logoAsset === "string" ? logoAsset : (logoAsset as any)?.default || (logoAsset as any)?.url || logoAsset;

function Brand() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="NexusAIAgency home">
      <img
        src={logoSrc}
        alt="NexusAIAgency logo"
        width={34}
        height={34}
        className="size-8.5 rounded-md object-cover border border-border/60 transition-transform duration-300 group-hover:scale-105"
      />
      <span className="font-display text-lg font-bold tracking-tight text-foreground">
        Nexus<span className="text-primary">AI</span>Agency
      </span>
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

  return (
    <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
      {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <header className="site-header border-b border-border/50 sticky top-0 z-40 bg-background/80 backdrop-blur-md">
        <div className="site-container flex h-16 items-center justify-between gap-4">
          <Brand />
          
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to as any}
                className="nav-link text-sm px-3 py-1.5 rounded-md hover:bg-muted transition-colors"
                activeProps={{ className: "nav-link text-primary font-semibold" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs px-4 h-9">
              <Link to="/book-audit">Scan Your Site</Link>
            </Button>
            <Button variant="outline" size="icon" className="lg:hidden" onClick={() => setOpen((v) => !v)}>
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        {open && (
          <nav className="mobile-nav lg:hidden p-4 bg-background border-b border-border flex flex-col gap-2">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to as any} className="mobile-nav-link p-2 rounded hover:bg-muted text-sm">
                {item.label}
              </Link>
            ))}
            <Link to="/book-audit" className="mobile-nav-link p-2 font-semibold text-primary text-sm">
              Scan Your Site
            </Link>
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-muted/20 py-12">
        <div className="site-container grid gap-8 lg:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <Brand />
            <p className="mt-3 max-w-sm text-xs leading-5 text-muted-foreground">
              Autonomous AI Voice Agents & Workflow Systems engineered for clinics, real estate, and high-growth businesses.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Direct Contact</p>
            <div className="mt-3 space-y-1.5 text-xs text-muted-foreground">
              <p><a href="mailto:thenexusaiagency@gmail.com" className="hover:text-primary">thenexusaiagency@gmail.com</a></p>
              <p><a href="tel:+918003469293" className="hover:text-primary">+91 80034 69293</a></p>
              <p><a href="https://wa.me/919166516942" target="_blank" rel="noreferrer" className="text-emerald-500 font-medium">WhatsApp: +91 9166516942</a></p>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Connect</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="hover:text-primary">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Bottom Bar: sm:pr-28 gives 112px clearance from right corner so chatbot never overlaps Privacy Policy */}
        <div className="site-container border-t border-border mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground sm:pr-28">
          <span>© 2026 NexusAIAgency. Built for autonomous enterprise growth.</span>
          <Link to="/privacy" className="hover:text-foreground transition-colors underline-offset-4 hover:underline">
            Privacy Policy
          </Link>
        </div>
      </footer>

      {/* Magnetic Interactive Chatbot Bubble */}
      <ZoyaChat />
    </div>
  );
}