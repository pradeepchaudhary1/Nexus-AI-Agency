import { useEffect, useRef, useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitChatLead } from "@/lib/chatbot.functions";

type Field = "business_type" | "business_name" | "contact_name" | "phone" | "email" | "city" | "pain_point" | "requirement" | "preferred_contact_time";
type Msg = { from: "bot" | "user"; text: string };

const steps: { field: Field; q: string }[] = [
  { field: "business_type", q: "What's your business type?" },
  { field: "business_name", q: "Great! What's your business name?" },
  { field: "contact_name", q: "And your name, please?" },
  { field: "phone", q: "What's the best phone number to reach you?" },
  { field: "email", q: "Your email address? (type 'skip' if you prefer not to share)" },
  { field: "city", q: "Which city and country are you in?" },
  { field: "pain_point", q: "What's the main problem you're facing right now?" },
  { field: "requirement", q: "What would you like automated? (e.g. calling agent, website chatbot, lead follow-up)" },
  { field: "preferred_contact_time", q: "What's your preferred callback time?" },
];

const GREETING = "Hello! This is Zoya, virtual assistant for support to you. I can guide you about AI calling agents, website chatbots and lead automation.";
const CONSENT = "Ok then, I'm sharing your details with the Nexus AI team, so that you can get a callback for an automation plan. Would you like to see an automation / calling agent demo? (yes / no)";
const SUCCESS = "Done! Your inquiry has been sent to Nexus AI Agency. Our team will contact you shortly.";
const FAILURE = "We could not submit the form right now. Please submit the form manually or WhatsApp us at +91 92665 16942.";
const STOP = "Understood. I won't share your details and our team will not contact you. Take care!";
const SENSITIVE = /\b(otp|password|passcode|pin|cvv|card number|aadhaar|aadhar|pan card|bank account|ifsc|api key|login)\b/i;

export function ZoyaChat() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ from: "bot", text: GREETING }, { from: "bot", text: steps[0]!.q }]);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Record<Field, string>>>({});
  const [phase, setPhase] = useState<"collect" | "consent" | "sending" | "done">("collect");
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const send = useServerFn(submitChatLead);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, open]);
  const bot = (text: string) => setMsgs((m) => [...m, { from: "bot", text }]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || phase === "sending" || phase === "done") return;
    setInput("");
    setMsgs((m) => [...m, { from: "user", text }]);

    if (/\b(stop|don'?t contact|do not contact)\b/i.test(text)) { setPhase("done"); bot(STOP); return; }
    if (SENSITIVE.test(text)) { bot("For your safety, please never share OTPs, passwords, card, bank, Aadhaar/PAN or login details here. " + (phase === "consent" ? CONSENT : steps[step]!.q)); return; }
    if (/\b(price|cost|how much|deadline|guarantee)\b/i.test(text) && phase === "collect") bot("Pricing, timelines and results are confirmed by our team after understanding your needs.");

    if (phase === "collect") {
      const field = steps[step]!.field;
      if (field === "phone" && text.replace(/\D/g, "").length < 7) { bot("That doesn't look like a valid phone number. Could you re-enter it?"); return; }
      const next = { ...answers, [field]: field === "email" && /^skip$/i.test(text) ? "" : text };
      setAnswers(next);
      if (step + 1 < steps.length) { setStep(step + 1); bot(steps[step + 1]!.q); }
      else { setPhase("consent"); bot(CONSENT); }
      return;
    }

    if (phase === "consent") {
      if (/^(n|no|nope|nahi|nah)\b/i.test(text)) { setPhase("done"); bot("No problem — I won't share your details. Feel free to message me anytime."); return; }
      setPhase("sending");
      bot("Sending your details…");
      try {
        const res = await send({ data: { ...(answers as Record<Field, string>), consent: true, do_not_contact: false } });
        bot(res.success ? SUCCESS : FAILURE);
      } catch { bot(FAILURE); }
      setPhase("done");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="glass-panel flex h-[min(520px,75vh)] w-[min(360px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl">
          <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-3">
            <div><p className="font-display font-semibold">Zoya</p><p className="text-xs text-muted-foreground">Nexus AI virtual assistant</p></div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close chat"><X /></Button>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto p-4 text-sm">
            {msgs.map((m, i) => (
              <div key={i} className={`max-w-[85%] rounded-2xl px-3 py-2 leading-5 ${m.from === "bot" ? "bg-muted text-foreground" : "ml-auto bg-primary text-primary-foreground"}`}>{m.text}</div>
            ))}
            <div ref={endRef} />
          </div>
          <form onSubmit={onSubmit} className="flex gap-2 border-t border-border p-3">
            <input value={input} onChange={(e) => setInput(e.target.value)} disabled={phase === "done" || phase === "sending"} placeholder={phase === "done" ? "Chat ended" : "Type your answer…"} maxLength={500} className="form-select h-10 flex-1" aria-label="Message Zoya" />
            <Button type="submit" size="icon" disabled={phase === "done" || phase === "sending"} aria-label="Send"><Send /></Button>
          </form>
        </div>
      )}
      <Button size="icon" onClick={() => setOpen((v) => !v)} className="size-14 rounded-full shadow-glow" aria-label={open ? "Close Zoya chat" : "Chat with Zoya"}>
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </Button>
    </div>
  );
}
