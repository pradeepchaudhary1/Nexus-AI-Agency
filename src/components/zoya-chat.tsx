import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Bot, Sparkles, Phone, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface Message {
  sender: "bot" | "user";
  text: string;
  chips?: string[];
  ctaLink?: { text: string; url: string };
}

export function ZoyaChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! I'm Zoya, your AI Business Advisor at Nexus AI. What business do you run (Clinic, Real Estate, Salon, Coaching, etc.), and where are you losing customer leads?",
      chips: ["Pricing Plans", "Voice Calling Agents", "Fix Missed Calls", "Book Free Audit"]
    }
  ]);
  const [input, setInput] = useState("");
  const [leadData, setLeadData] = useState({ name: "", phone: "", business: "" });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  // Intelligent Contextual Knowledge Engine
  const generateAiResponse = (userInput: string): Message => {
    const text = userInput.toLowerCase().trim();

    // 1. Phone number or Contact details capture
    const phoneMatch = text.match(/(\+?\d{1,4}[-.\s]?)?(\d{10})/);
    if (phoneMatch) {
      const capturedPhone = phoneMatch[0];
      setLeadData((prev) => ({ ...prev, phone: capturedPhone }));
      return {
        sender: "bot",
        text: `Got your contact number (${capturedPhone})! Pradeep (Founder & AI Architect) will connect with you on WhatsApp to discuss your custom automation roadmap. You can also directly reach him right now:`,
        ctaLink: {
          text: "Chat with Pradeep on WhatsApp",
          url: `https://wa.me/918003469293?text=${encodeURIComponent(`Hi Pradeep, I shared my details (${capturedPhone}) with Zoya on your website. I want to discuss AI automation for my business.`)}`
        }
      };
    }

    // 2. Pricing, Packages & Diwali Offer inquiries
    if (
      text.includes("price") ||
      text.includes("pricing") ||
      text.includes("cost") ||
      text.includes("kitna") ||
      text.includes("fees") ||
      text.includes("rate") ||
      text.includes("package") ||
      text.includes("offer") ||
      text.includes("diwali")
    ) {
      return {
        sender: "bot",
        text: "🪔 **Diwali Festive Special — Nexus AI Packages ($120 to $960 | ₹9,999 to ₹89,999)**:\n\n" +
          "1. **Starter Single Agent ($120 - $220 | ₹9,999 - ₹18,000)**\n" +
          "   • Single 24/7 Voice Calling Agent (Clinic / Real Estate / Salon)\n" +
          "   • Direct Google Sheets booking + 7 days technical support\n" +
          "   • *Diwali Bonus:* Flat 15% OFF + Free call prompt setup\n\n" +
          "2. **Growth Combo: AI Agent + Modern Web ($250 - $480 | ₹21,000 - ₹40,000)**\n" +
          "   • 24/7 Voice Agent + High-Speed Landing Page (Lovable/Framer)\n" +
          "   • Make.com / n8n webhook setup for instant WhatsApp lead delivery\n" +
          "   • *Diwali Bonus:* Free Schema.org & SEO injection\n\n" +
          "3. **Full Enterprise Suite & AEO Engine ($550 - $960+ | ₹45,000 - ₹89,999)**\n" +
          "   • Multi-role Voice Bots (Inbound + Outbound follow-ups)\n" +
          "   • Ultra-realistic low-latency voice models (ElevenLabs Turbo / Vapi)\n" +
          "   • Complete AEO & `llms.txt` setup to get cited in ChatGPT & Perplexity\n" +
          "   • Full CRM integration + 30-60 days dedicated maintenance\n" +
          "   • *Diwali Mega Offer:* Flat ₹10,000 ($120) Festive Discount\n\n" +
          "Which package fits your current business stage?",
        chips: ["Starter ($120 / ₹10k)", "Combo ($290 / ₹24k)", "Enterprise ($960 / ₹89k)", "Why rates differ?", "Talk to Pradeep"]
      };
    }

    // 2.1 Price Justification & "Rate mein itna fark kyun hai / Mehnga kyun hai?"
    if (
      text.includes("kyu") ||
      text.includes("why") ||
      text.includes("fark") ||
      text.includes("differ") ||
      text.includes("expensive") ||
      text.includes("mehnga") ||
      text.includes("discount") ||
      text.includes("kam")
    ) {
      return {
        sender: "bot",
        text: "Rates mein fark 3 main technical reasons ki wajah se hota hai:\n\n" +
          "1. **Voice Quality & Latency (AI Models)**: Entry package standard conversational model use karta hai. Enterprise package mein hum ultra-realistic low-latency (<600ms) models (ElevenLabs Turbo) use karte hain jisme caller ko 1% bhi pata nahi chalta ki wo AI se baat kar raha hai.\n\n" +
          "2. **Automation Pipeline Depth**: Basic agent sirf Google Sheet mein data daalta hai, jabki High-tier package aapke CRM, WhatsApp Business API aur multi-step follow-up sequences ko Make.com/n8n se autonomously synchronize karta hai.\n\n" +
          "3. **AEO & Extended Support**: Enterprise package mein hum aapki site ko ChatGPT aur Perplexity search ke liye optimize (AEO) karte hain aur 30–60 days tak active monitoring aur prompt tuning support dete hain.\n\n" +
          "Aapka monthly call volume aur requirement batayein, hum aapke budget ke hisab se exact custom quote design kar denge!",
        chips: ["Diwali Offer Details", "Combo Package", "Chat with Pradeep"]
      };
    }

    // 3. Problem in Business / General inquiry
    if (text.includes("problem") || text.includes("issue") || text.includes("help") || text.includes("loss") || text.includes("dikkat") || text.includes("pareshan")) {
      return {
        sender: "bot",
        text: "I completely understand. Most businesses lose revenue in two main areas:\n\n1. Missed Customer Calls: Up to 35% of patient, buyer, or client calls drop during peak hours or after-hours.\n2. Invisible in AI Search (AEO): Traditional websites fail to rank when customers search using ChatGPT, Perplexity, or Gemini.\n\nWhat type of business are you running? (e.g. Dental Clinic, Real Estate, Salon, Coaching)",
        chips: ["Doctor / Clinic", "Real Estate Broker", "Salon / Spa", "Coaching / Institute"]
      };
    }

    // 4. Healthcare / Dental Clinic
    if (text.includes("clinic") || text.includes("doctor") || text.includes("hospital") || text.includes("dental") || text.includes("patient")) {
      return {
        sender: "bot",
        text: "For healthcare practices, our AI Receptionist (Sofia) answers calls 24/7 in natural voice, answers teeth cleaning/root canal FAQs, and schedules appointments directly into your Google Calendar—so you never lose after-hours patients.\n\nWould you like to hear a live demo call or calculate how much revenue you lose to missed calls?",
        chips: ["Listen to Clinic Demo", "Scan Clinic Website", "Talk to Founder"]
      };
    }

    // 5. Real Estate
    if (text.includes("real estate") || text.includes("property") || text.includes("broker") || text.includes("flat") || text.includes("plot") || text.includes("builder")) {
      return {
        sender: "bot",
        text: "For real estate brokers, our Aanya Voice Bot screens incoming buyer calls from 99acres, MagicBricks, or hoardings. She qualifies their budget, location preference, and purchase timeline, and immediately pings your WhatsApp with warm buyer leads.\n\nWould you like to see how it works?",
        chips: ["Real Estate Demo", "Calculate Lead Bleed", "WhatsApp Pradeep"]
      };
    }

    // 6. About Agency / Founder
    if (text.includes("agency") || text.includes("nexus") || text.includes("pradeep") || text.includes("founder") || text.includes("kaun") || text.includes("about")) {
      return {
        sender: "bot",
        text: "Nexus AI Agency is founded by Pradeep Chaudhary (Dagur), an accredited AI Solutions Architect certified by Barleti University (Verification ID: D9FB-8ACE98). We combine industrial engineering discipline (up to 600 MW projects) with low-latency Vapi voice agents and Make.com pipelines.\n\nWe serve clients across India, the US, and Europe.",
        chips: ["View Projects", "Scan Your Website", "Talk to Pradeep"]
      };
    }

    // 7. AEO / SEO / Scan questions
    if (text.includes("aeo") || text.includes("seo") || text.includes("scan") || text.includes("audit") || text.includes("schema") || text.includes("rank")) {
      return {
        sender: "bot",
        text: "AEO (Answer Engine Optimization) ensures that when prospective clients ask ChatGPT, Perplexity, or Gemini for recommendations, the AI quotes your business directly. Traditional SEO only ranks blue links on Google; AEO makes AI bots recommend you.\n\nHave you scanned your website on our free audit scanner yet?",
        ctaLink: {
          text: "Scan Your Website Now",
          url: "/book-audit"
        }
      };
    }

    // Default Contextual Guide
    return {
      sender: "bot",
      text: "Thanks for sharing! We can build a custom 24/7 Voice Calling Agent and automated CRM pipeline tailored exactly to your workflow. What is your WhatsApp number or business name so we can send you a quick 60-second video demo?",
      chips: ["Pricing Plans", "Doctor / Clinic", "Real Estate", "Talk on WhatsApp"]
    };
  };

  const handleSend = (textToSend?: string) => {
    const messageText = textToSend || input;
    if (!messageText.trim()) return;

    // Add user message
    const userMsg: Message = { sender: "user", text: messageText };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");

    // Generate smart contextual answer
    setTimeout(() => {
      const botResponse = generateAiResponse(messageText);
      setMessages((prev) => [...prev, botResponse]);
    }, 600);
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
        <button
          onClick={() => setOpen(!open)}
          aria-label="Open AI chat assistant"
          className="size-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 flex items-center justify-center shadow-xl shadow-emerald-500/25 border-2 border-emerald-400/40 transition-transform active:scale-95 group"
        >
          {open ? (
            <X className="size-6 text-slate-950" />
          ) : (
            <div className="relative">
              <MessageSquare className="size-6 text-slate-950 fill-slate-950" />
              <span className="absolute -top-1 -right-1 size-2.5 rounded-full bg-emerald-200 animate-ping" />
            </div>
          )}
        </button>
      </div>

      {/* Real-time Conversational Advisor Window */}
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[94vw] sm:w-[400px] h-[550px] max-h-[82vh] rounded-2xl border border-border bg-card shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="p-4 border-b border-border bg-slate-950 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-8.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-xs">
                <Bot className="size-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold flex items-center gap-1.5 text-white">
                  Zoya <Sparkles className="size-3 text-emerald-400" />
                </h4>
                <p className="text-[10px] text-emerald-400 font-mono">Nexus AI Solutions Advisor • Online</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-md"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs bg-background/50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-2.5 leading-relaxed shadow-sm ${
                    msg.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-xs font-medium"
                      : "bg-card text-foreground border border-border/70 rounded-bl-xs"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Action Link if provided */}
                  {msg.ctaLink && (
                    <a
                      href={msg.ctaLink.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2.5 inline-flex items-center gap-1.5 text-emerald-500 font-bold hover:underline"
                    >
                      <span>{msg.ctaLink.text}</span>
                      <ArrowRight className="size-3.5" />
                    </a>
                  )}
                </div>

                {/* Quick Option Chips */}
                {msg.chips && msg.chips.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                    {msg.chips.map((chip, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(chip)}
                        className="text-[10px] px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 font-medium transition-all"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="p-3 border-t border-border bg-card flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tell me your business bottleneck..."
              className="h-10 text-xs bg-background"
            />
            <Button type="submit" size="sm" className="h-10 px-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold">
              <Send className="size-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}