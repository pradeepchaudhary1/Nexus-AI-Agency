import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitLead, type LeadInput } from "@/lib/leads.functions";

const fieldClass = "h-12 bg-surface/70";

export function LeadForm({ source, demoType, compact = false }: { source: LeadInput["source"]; demoType?: string; compact?: boolean }) {
  const send = useServerFn(submitLead);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  // One key per submission attempt: retries after an error reuse it so the server never stores a duplicate.
  const idempotencyKey = useRef<string | null>(null);
  const inFlight = useRef(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return; // block double submission
    inFlight.current = true;
    idempotencyKey.current ??= crypto.randomUUID();
    // Capture the form element now: React clears event.currentTarget after the first await.
    const formElement = event.currentTarget;
    setStatus("sending");
    setError("");
    const form = new FormData(formElement);
    const value = (name: string) => String(form.get(name) ?? "").trim();
    try {
      const result = await send({ data: { source, demoType, idempotencyKey: idempotencyKey.current, name: value("name"), email: value("email"), phone: value("phone"), businessType: value("businessType"), teamSize: value("teamSize"), bottleneck: value("bottleneck"), leadVolume: value("leadVolume"), existingTools: value("existingTools"), message: value("message"), website: value("website") } });
      if (!result.success) { setError(result.error); setStatus("error"); return; }
    } catch {
      setError("We could not send your request. Please check your connection and try again.");
      setStatus("error");
      return;
    } finally {
      inFlight.current = false;
    }
    idempotencyKey.current = null;
    formElement?.reset();
    setStatus("success");
  }

  if (status === "success") return <div className="success-panel" role="status"><CheckCircle2 className="size-7 text-primary" /><div><h3 className="font-display text-xl font-semibold">Request received</h3><p className="mt-1 text-sm text-muted-foreground">We’ll review your workflow and contact you using the details you provided.</p></div></div>;

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-4 sm:grid-cols-2"><label className="field-label">Name<Input name="name" required minLength={2} maxLength={100} placeholder="Your name" className={fieldClass} /></label><label className="field-label">Work email<Input name="email" required type="email" maxLength={255} placeholder="you@company.com" className={fieldClass} /></label></div>
      <div className="grid gap-4 sm:grid-cols-2"><label className="field-label">Phone<Input name="phone" type="tel" maxLength={30} placeholder="+91..." className={fieldClass} /></label><label className="field-label">Business type<Input name="businessType" maxLength={100} placeholder="Clinic, agency, SaaS..." className={fieldClass} /></label></div>
      {source === "readiness_audit" && <><div className="grid gap-4 sm:grid-cols-2"><label className="field-label">Team size<select name="teamSize" className="form-select" defaultValue=""><option value="" disabled>Select team size</option><option>1–5</option><option>6–20</option><option>21–50</option><option>51+</option></select></label><label className="field-label">Monthly lead volume<select name="leadVolume" className="form-select" defaultValue=""><option value="" disabled>Select lead volume</option><option>Under 50</option><option>50–200</option><option>201–1,000</option><option>1,000+</option></select></label></div><label className="field-label">Biggest bottleneck<Textarea name="bottleneck" maxLength={500} placeholder="Where does work slow down or get missed?" className="min-h-24 bg-surface/70" /></label><label className="field-label">Existing tools<Input name="existingTools" maxLength={500} placeholder="CRM, WhatsApp, calendar, spreadsheets..." className={fieldClass} /></label></>}
      {source !== "readiness_audit" && <label className="field-label">What should the system improve?<Textarea name="message" maxLength={1000} required placeholder="Describe the workflow, problem, or agent you have in mind." className={compact ? "min-h-24 bg-surface/70" : "min-h-32 bg-surface/70"} /></label>}
      {status === "error" && <p className="text-sm text-destructive" role="alert">{error}</p>}
      <Button type="submit" size="lg" disabled={status === "sending"}>{status === "sending" && <LoaderCircle className="animate-spin" />}{source === "readiness_audit" ? "Get My Readiness Review" : source === "demo_request" ? "Request This Demo" : "Request My Free Audit"}</Button>
      <p className="text-xs leading-5 text-muted-foreground">By submitting, you agree to our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>. Your details are used only to respond to your request.</p>
    </form>
  );
}