import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/client";

export const Route = createFileRoute("/auth")({
  head: () => ({ meta: [
    { title: "Admin Sign In — NexusAIAgency" },
    { name: "description", content: "Sign in or create an account to manage NexusAIAgency resources." },
    { property: "og:title", content: "Admin Sign In — NexusAIAgency" },
    { property: "og:description", content: "Sign in to the NexusAIAgency resource admin panel." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
    { name: "robots", content: "noindex" },
  ] }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") ?? "").trim();
    const password = String(fd.get("password") ?? "");
    if (password.length < 8) return setMsg({ ok: false, text: "Password must be at least 8 characters." });
    setBusy(true); setMsg(null);
    if (mode === "signup") {
      const { data, error } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/auth` } });
      setBusy(false);
      if (error) return setMsg({ ok: false, text: error.message });
      if (data.session) return navigate({ to: "/admin/resources" });
      return setMsg({ ok: true, text: "Account created. Check your email and click the confirmation link, then sign in." });
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) return setMsg({ ok: false, text: error.message });
    navigate({ to: "/admin/resources" });
  }

  return (
    <section className="section-pad">
      <div className="site-container max-w-md">
        <div className="glass-panel p-6 sm:p-8">
          <p className="eyebrow">Admin access</p>
          <h1 className="mt-3 font-display text-2xl font-semibold">{mode === "signin" ? "Sign in" : "Create account"}</h1>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" autoComplete="email" required /></div>
            <div className="space-y-2"><Label htmlFor="password">Password</Label><Input id="password" name="password" type="password" autoComplete={mode === "signin" ? "current-password" : "new-password"} required minLength={8} /></div>
            {msg && <p role="status" className={`text-sm ${msg.ok ? "text-primary" : "text-destructive"}`}>{msg.text}</p>}
            <Button type="submit" className="w-full" disabled={busy}>{busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Sign up"}</Button>
          </form>
          <button type="button" onClick={() => { setMode(mode === "signin" ? "signup" : "signin"); setMsg(null); }} className="mt-5 text-sm text-muted-foreground hover:text-foreground">
            {mode === "signin" ? "No account yet? Sign up" : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </section>
  );
}
