import { useEffect, useRef, useState } from "react";

declare global { interface Window { turnstile?: { render: (el: HTMLElement, o: Record<string, unknown>) => string; reset: (id?: string) => void; remove: (id?: string) => void } } }

const SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

function loadScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.turnstile) return resolve();
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SRC}"]`);
    const s = existing ?? Object.assign(document.createElement("script"), { src: SRC, async: true, defer: true });
    s.addEventListener("load", () => resolve()); s.addEventListener("error", () => reject(new Error("turnstile script blocked")));
    if (!existing) document.head.appendChild(s);
  });
}

function hint(code: string): string {
  if (code.startsWith("1102")) return "This website address is not allowed for this security widget. In Cloudflare, open Turnstile, select the widget and add this hostname (for local testing add localhost, or use Cloudflare's test keys).";
  if (code.startsWith("1101") || code.startsWith("6000")) return "The security widget is not configured correctly (site key or hostname).";
  if (code === "110500") return "This browser is not supported by the security check.";
  if (code === "script-blocked") return "The security script could not load. Disable ad blockers or privacy extensions for this site and check your connection.";
  return "The check could not finish. Turn off VPN or privacy extensions, make sure your device clock is correct, then try again.";
}

/** Cloudflare Turnstile. `resetKey` changes -> widget resets and requests a fresh token. */
export function Turnstile({ onToken, resetKey }: { onToken: (t: string) => void; resetKey: number }) {
  const box = useRef<HTMLDivElement>(null);
  const id = useRef<string | undefined>(undefined);
  const [errorCode, setErrorCode] = useState<string | null>(null);
  const siteKey = import.meta.env["VITE_TURNSTILE_SITE_KEY"] as string | undefined;

  useEffect(() => {
    if (!siteKey || !box.current) return;
    let dead = false;
    loadScript().then(() => {
      if (dead || !box.current || !window.turnstile) return;
      id.current = window.turnstile.render(box.current, {
        sitekey: siteKey, theme: "dark", retry: "auto", "retry-interval": 4000, "refresh-expired": "auto",
        callback: (t: string) => { setErrorCode(null); onToken(t); },
        "expired-callback": () => onToken(""),
        "error-callback": (code: unknown) => { const c = String(code ?? "unknown"); console.warn("[turnstile] widget error", c); setErrorCode(c); onToken(""); },
      });
    }).catch(() => { setErrorCode("script-blocked"); onToken(""); });
    return () => { dead = true; if (id.current && window.turnstile) window.turnstile.remove(id.current); id.current = undefined; };
  }, [siteKey]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { if (resetKey > 0 && id.current && window.turnstile) { onToken(""); window.turnstile.reset(id.current); } }, [resetKey]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!siteKey) return <p className="text-xs text-rose-400">Security check is not configured (missing VITE_TURNSTILE_SITE_KEY).</p>;
  return (
    <div>
      <div ref={box} aria-label="Security check" />
      {errorCode && (
        <div role="alert" className="mt-2 max-w-xl text-xs text-rose-400 space-y-1">
          <p>Security check error <span className="font-mono">{errorCode}</span>. {hint(errorCode)}</p>
          <button type="button" onClick={() => { setErrorCode(null); if (id.current && window.turnstile) window.turnstile.reset(id.current); }} className="underline text-slate-300">Try the security check again</button>
        </div>
      )}
    </div>
  );
}
