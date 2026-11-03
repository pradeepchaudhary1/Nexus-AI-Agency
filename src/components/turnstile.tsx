import { useEffect, useRef } from "react";

declare global { interface Window { turnstile?: { render: (el: HTMLElement, o: Record<string, unknown>) => string; reset: (id?: string) => void; remove: (id?: string) => void } } }

const SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

function loadScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.turnstile) return resolve();
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SRC}"]`);
    const s = existing ?? Object.assign(document.createElement("script"), { src: SRC, async: true, defer: true });
    s.addEventListener("load", () => resolve()); s.addEventListener("error", () => reject(new Error("turnstile")));
    if (!existing) document.head.appendChild(s);
  });
}

/** Cloudflare Turnstile. `resetKey` changes -> widget resets and requests a fresh token. */
export function Turnstile({ onToken, resetKey }: { onToken: (t: string) => void; resetKey: number }) {
  const box = useRef<HTMLDivElement>(null);
  const id = useRef<string | undefined>(undefined);
  const siteKey = import.meta.env["VITE_TURNSTILE_SITE_KEY"] as string | undefined;

  useEffect(() => {
    if (!siteKey || !box.current) return;
    let dead = false;
    loadScript().then(() => {
      if (dead || !box.current || !window.turnstile) return;
      id.current = window.turnstile.render(box.current, { sitekey: siteKey, theme: "dark", callback: onToken, "expired-callback": () => onToken(""), "error-callback": () => onToken("") });
    }).catch(() => onToken(""));
    return () => { dead = true; if (id.current && window.turnstile) window.turnstile.remove(id.current); };
  }, [siteKey]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { if (resetKey > 0 && id.current && window.turnstile) { onToken(""); window.turnstile.reset(id.current); } }, [resetKey]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!siteKey) return <p className="text-xs text-rose-400">Security check is not configured (missing VITE_TURNSTILE_SITE_KEY).</p>;
  return <div ref={box} aria-label="Security check" />;
}
