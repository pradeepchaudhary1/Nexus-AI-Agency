import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Bot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ZoyaChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I'm Zoya, your AI workforce assistant at Nexus AI. How can I help your business automate today?" }
  ]);
  const [input, setInput] = useState("");

  // ==========================================
  // NOURSABI-STYLE MAGNETIC CURSOR TRACKING
  // ==========================================
  const buttonRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current || open) {
        targetX = 0;
        targetY = 0;
        return;
      }

      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Distance from cursor to button center
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const distance = Math.hypot(distX, distY);

      // Magnetic Pull Zone (Within 250px radius)
      if (distance < 250) {
        const pull = (1 - distance / 250) * 26; // Smooth pull up to 26px
        targetX = (distX / distance) * pull;
        targetY = (distY / distance) * pull;
      } else {
        // Ambient subtle parallax across whole screen
        const normX = (e.clientX / window.innerWidth) - 0.5;
        const normY = (e.clientY / window.innerHeight) - 0.5;
        targetX = normX * 14;
        targetY = normY * 14;
      }
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    // Smooth physics damping loop
    const animate = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      setOffset({ x: currentX, y: currentY });
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [open]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Thank you for reaching out! You can also connect directly with Pradeep on WhatsApp at +91 80034 69293 or click 'Scan Your Site' to audit your AEO readiness."
        }
      ]);
    }, 800);
  };

  return (
    <>
      {/* Floating Magnetic Chat Trigger Button */}
      <div
        ref={buttonRef}
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          transition: "transform 0.08s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
        className="fixed bottom-6 right-6 z-50 pointer-events-auto"
      >
        <button
          onClick={() => setOpen(!open)}
          aria-label="Open AI chat assistant"
          className="size-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 flex items-center justify-center shadow-xl shadow-emerald-500/25 border-2 border-emerald-400/40 transition-transform active:scale-95 group"
        >
          {open ? (
            <X className="size-6 text-slate-950 transition-transform group-hover:rotate-90 duration-200" />
          ) : (
            <div className="relative">
              <MessageSquare className="size-6 text-slate-950 fill-slate-950 transition-transform group-hover:scale-110 duration-200" />
              <span className="absolute -top-1 -right-1 size-2.5 rounded-full bg-emerald-200 animate-ping" />
            </div>
          )}
        </button>
      </div>

      {/* Chat Dialog Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[92vw] sm:w-[380px] h-[500px] max-h-[80vh] rounded-2xl border border-border bg-card shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="p-4 border-b border-border bg-muted/40 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="size-8 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
                <Bot className="size-4.5" />
              </div>
              <div>
                <h4 className="text-sm font-bold flex items-center gap-1.5 text-foreground">
                  Zoya <Sparkles className="size-3 text-emerald-500" />
                </h4>
                <p className="text-[11px] text-muted-foreground">Nexus AI Solutions Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground p-1 rounded-md"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-xs"
                      : "bg-muted text-foreground border border-border/50 rounded-bl-xs"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 border-t border-border bg-card flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about AI voice agents..."
              className="h-10 text-xs"
            />
            <Button type="submit" size="sm" className="h-10 px-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold">
              <Send className="size-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}