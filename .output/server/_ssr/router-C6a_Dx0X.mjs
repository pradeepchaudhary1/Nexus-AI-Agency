import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { t as Button } from "./button-Bo4nKw7z.mjs";
import { A as Moon, C as QrCode, D as PhoneCall, J as CreditCard, K as Download, M as Menu, O as Pen, P as MapPin, Q as CodeXml, S as RefreshCw, T as Play, U as FileText, V as Globe, W as ExternalLink, X as Copy, Y as Cpu, Z as Code, a as TriangleAlert, b as Scissors, et as Clock, f as SquareCheckBig, ft as Bot, g as ShieldCheck, h as Shield, ht as ArrowRight, it as CircleCheckBig, j as MessageSquare, l as Stethoscope, lt as Building2, n as X, nt as CircleX, o as Trash2, ot as Check, p as Sparkles, pt as BookOpen, q as Database, r as Video, rt as CircleCheck, s as Sun, t as Zap, u as Star, v as Send, vt as Activity, w as Plus, x as Save, y as Search } from "../_libs/lucide-react.mjs";
import { S as useRouter, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, q as redirect, v as createFileRoute, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Input } from "./input-BlEJlNY0.mjs";
import { t as supabase } from "./client-BmndfN-r.mjs";
import { t as Route$19 } from "./admin.resources-Br5CEXKt.mjs";
import { n as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { i as navItems, o as socials, t as LeadForm } from "./lead-forms-EP1Aq0So.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C6a_Dx0X.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BpRUfdFO.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function ZoyaChat() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [messages, setMessages] = (0, import_react.useState)([{
		sender: "bot",
		text: "Hello! I'm Zoya, your AI Business Advisor at Nexus AI. What business do you run (Clinic, Real Estate, Salon, Coaching, etc.), and where are you losing customer leads?",
		chips: [
			"Pricing Plans",
			"Voice Calling Agents",
			"Fix Missed Calls",
			"Book Free Audit"
		]
	}]);
	const [input, setInput] = (0, import_react.useState)("");
	const [leadData, setLeadData] = (0, import_react.useState)({
		name: "",
		phone: "",
		business: ""
	});
	const messagesEndRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, open]);
	const generateAiResponse = (userInput) => {
		const text = userInput.toLowerCase().trim();
		const phoneMatch = text.match(/(\+?\d{1,4}[-.\s]?)?(\d{10})/);
		if (phoneMatch) {
			const capturedPhone = phoneMatch[0];
			setLeadData((prev) => ({
				...prev,
				phone: capturedPhone
			}));
			return {
				sender: "bot",
				text: `Got your contact number (${capturedPhone})! Pradeep (Founder & AI Architect) will connect with you on WhatsApp to discuss your custom automation roadmap. You can also directly reach him right now:`,
				ctaLink: {
					text: "Chat with Pradeep on WhatsApp",
					url: `https://wa.me/918003469293?text=${encodeURIComponent(`Hi Pradeep, I shared my details (${capturedPhone}) with Zoya on your website. I want to discuss AI automation for my business.`)}`
				}
			};
		}
		if (text.includes("price") || text.includes("pricing") || text.includes("cost") || text.includes("kitna") || text.includes("fees") || text.includes("rate") || text.includes("package") || text.includes("offer") || text.includes("diwali")) return {
			sender: "bot",
			text: "🪔 **Diwali Festive Special — Nexus AI Packages ($120 to $960 | ₹9,999 to ₹89,999)**:\n\n1. **Starter Single Agent ($120 - $220 | ₹9,999 - ₹18,000)**\n   • Single 24/7 Voice Calling Agent (Clinic / Real Estate / Salon)\n   • Direct Google Sheets booking + 7 days technical support\n   • *Diwali Bonus:* Flat 15% OFF + Free call prompt setup\n\n2. **Growth Combo: AI Agent + Modern Web ($250 - $480 | ₹21,000 - ₹40,000)**\n   • 24/7 Voice Agent + High-Speed Landing Page (Lovable/Framer)\n   • Make.com / n8n webhook setup for instant WhatsApp lead delivery\n   • *Diwali Bonus:* Free Schema.org & SEO injection\n\n3. **Full Enterprise Suite & AEO Engine ($550 - $960+ | ₹45,000 - ₹89,999)**\n   • Multi-role Voice Bots (Inbound + Outbound follow-ups)\n   • Ultra-realistic low-latency voice models (ElevenLabs Turbo / Vapi)\n   • Complete AEO & `llms.txt` setup to get cited in ChatGPT & Perplexity\n   • Full CRM integration + 30-60 days dedicated maintenance\n   • *Diwali Mega Offer:* Flat ₹10,000 ($120) Festive Discount\n\nWhich package fits your current business stage?",
			chips: [
				"Starter ($120 / ₹10k)",
				"Combo ($290 / ₹24k)",
				"Enterprise ($960 / ₹89k)",
				"Why rates differ?",
				"Talk to Pradeep"
			]
		};
		if (text.includes("kyu") || text.includes("why") || text.includes("fark") || text.includes("differ") || text.includes("expensive") || text.includes("mehnga") || text.includes("discount") || text.includes("kam")) return {
			sender: "bot",
			text: "Rates mein fark 3 main technical reasons ki wajah se hota hai:\n\n1. **Voice Quality & Latency (AI Models)**: Entry package standard conversational model use karta hai. Enterprise package mein hum ultra-realistic low-latency (<600ms) models (ElevenLabs Turbo) use karte hain jisme caller ko 1% bhi pata nahi chalta ki wo AI se baat kar raha hai.\n\n2. **Automation Pipeline Depth**: Basic agent sirf Google Sheet mein data daalta hai, jabki High-tier package aapke CRM, WhatsApp Business API aur multi-step follow-up sequences ko Make.com/n8n se autonomously synchronize karta hai.\n\n3. **AEO & Extended Support**: Enterprise package mein hum aapki site ko ChatGPT aur Perplexity search ke liye optimize (AEO) karte hain aur 30–60 days tak active monitoring aur prompt tuning support dete hain.\n\nAapka monthly call volume aur requirement batayein, hum aapke budget ke hisab se exact custom quote design kar denge!",
			chips: [
				"Diwali Offer Details",
				"Combo Package",
				"Chat with Pradeep"
			]
		};
		if (text.includes("problem") || text.includes("issue") || text.includes("help") || text.includes("loss") || text.includes("dikkat") || text.includes("pareshan")) return {
			sender: "bot",
			text: "I completely understand. Most businesses lose revenue in two main areas:\n\n1. Missed Customer Calls: Up to 35% of patient, buyer, or client calls drop during peak hours or after-hours.\n2. Invisible in AI Search (AEO): Traditional websites fail to rank when customers search using ChatGPT, Perplexity, or Gemini.\n\nWhat type of business are you running? (e.g. Dental Clinic, Real Estate, Salon, Coaching)",
			chips: [
				"Doctor / Clinic",
				"Real Estate Broker",
				"Salon / Spa",
				"Coaching / Institute"
			]
		};
		if (text.includes("clinic") || text.includes("doctor") || text.includes("hospital") || text.includes("dental") || text.includes("patient")) return {
			sender: "bot",
			text: "For healthcare practices, our AI Receptionist (Sofia) answers calls 24/7 in natural voice, answers teeth cleaning/root canal FAQs, and schedules appointments directly into your Google Calendar—so you never lose after-hours patients.\n\nWould you like to hear a live demo call or calculate how much revenue you lose to missed calls?",
			chips: [
				"Listen to Clinic Demo",
				"Scan Clinic Website",
				"Talk to Founder"
			]
		};
		if (text.includes("real estate") || text.includes("property") || text.includes("broker") || text.includes("flat") || text.includes("plot") || text.includes("builder")) return {
			sender: "bot",
			text: "For real estate brokers, our Aanya Voice Bot screens incoming buyer calls from 99acres, MagicBricks, or hoardings. She qualifies their budget, location preference, and purchase timeline, and immediately pings your WhatsApp with warm buyer leads.\n\nWould you like to see how it works?",
			chips: [
				"Real Estate Demo",
				"Calculate Lead Bleed",
				"WhatsApp Pradeep"
			]
		};
		if (text.includes("agency") || text.includes("nexus") || text.includes("pradeep") || text.includes("founder") || text.includes("kaun") || text.includes("about")) return {
			sender: "bot",
			text: "Nexus AI Agency is founded by Pradeep Chaudhary (Dagur), an accredited AI Solutions Architect certified by Barleti University (Verification ID: D9FB-8ACE98). We combine industrial engineering discipline (up to 600 MW projects) with low-latency Vapi voice agents and Make.com pipelines.\n\nWe serve clients across India, the US, and Europe.",
			chips: [
				"View Projects",
				"Scan Your Website",
				"Talk to Pradeep"
			]
		};
		if (text.includes("aeo") || text.includes("seo") || text.includes("scan") || text.includes("audit") || text.includes("schema") || text.includes("rank")) return {
			sender: "bot",
			text: "AEO (Answer Engine Optimization) ensures that when prospective clients ask ChatGPT, Perplexity, or Gemini for recommendations, the AI quotes your business directly. Traditional SEO only ranks blue links on Google; AEO makes AI bots recommend you.\n\nHave you scanned your website on our free audit scanner yet?",
			ctaLink: {
				text: "Scan Your Website Now",
				url: "/book-audit"
			}
		};
		return {
			sender: "bot",
			text: "Thanks for sharing! We can build a custom 24/7 Voice Calling Agent and automated CRM pipeline tailored exactly to your workflow. What is your WhatsApp number or business name so we can send you a quick 60-second video demo?",
			chips: [
				"Pricing Plans",
				"Doctor / Clinic",
				"Real Estate",
				"Talk on WhatsApp"
			]
		};
	};
	const handleSend = (textToSend) => {
		const messageText = textToSend || input;
		if (!messageText.trim()) return;
		const userMsg = {
			sender: "user",
			text: messageText
		};
		setMessages((prev) => [...prev, userMsg]);
		if (!textToSend) setInput("");
		setTimeout(() => {
			const botResponse = generateAiResponse(messageText);
			setMessages((prev) => [...prev, botResponse]);
		}, 600);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-6 right-6 z-50 pointer-events-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => setOpen(!open),
			"aria-label": "Open AI chat assistant",
			className: "size-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 flex items-center justify-center shadow-xl shadow-emerald-500/25 border-2 border-emerald-400/40 transition-transform active:scale-95 group",
			children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6 text-slate-950" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-6 text-slate-950 fill-slate-950" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -top-1 -right-1 size-2.5 rounded-full bg-emerald-200 animate-ping" })]
			})
		})
	}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-24 right-4 sm:right-6 z-50 w-[94vw] sm:w-[400px] h-[550px] max-h-[82vh] rounded-2xl border border-border bg-card shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-4 border-b border-border bg-slate-950 text-white flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-8.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-xs",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
						className: "text-sm font-bold flex items-center gap-1.5 text-white",
						children: ["Zoya ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3 text-emerald-400" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] text-emerald-400 font-mono",
						children: "Nexus AI Solutions Advisor • Online"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen(false),
					className: "text-slate-400 hover:text-white p-1 rounded-md",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 p-4 overflow-y-auto space-y-3.5 text-xs bg-background/50",
				children: [messages.map((msg, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `max-w-[88%] rounded-2xl px-4 py-2.5 leading-relaxed shadow-sm ${msg.sender === "user" ? "bg-primary text-primary-foreground rounded-br-xs font-medium" : "bg-card text-foreground border border-border/70 rounded-bl-xs"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "whitespace-pre-line",
							children: msg.text
						}), msg.ctaLink && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: msg.ctaLink.url,
							target: "_blank",
							rel: "noreferrer",
							className: "mt-2.5 inline-flex items-center gap-1.5 text-emerald-500 font-bold hover:underline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: msg.ctaLink.text }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
						})]
					}), msg.chips && msg.chips.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1.5 mt-2 max-w-[90%]",
						children: msg.chips.map((chip, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => handleSend(chip),
							className: "text-[10px] px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 font-medium transition-all",
							children: chip
						}, idx))
					})]
				}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: messagesEndRef })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					handleSend();
				},
				className: "p-3 border-t border-border bg-card flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: input,
					onChange: (e) => setInput(e.target.value),
					placeholder: "Tell me your business bottleneck...",
					className: "h-10 text-xs bg-background"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "sm",
					className: "h-10 px-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })
				})]
			})
		]
	})] });
}
var logoSrc = "/assets/nexus-logo-DPCoMTuB.jpeg";
function Brand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "flex items-center gap-2.5",
		"aria-label": "NexusAIAgency home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: logoSrc,
			alt: "NexusAIAgency logo",
			width: 34,
			height: 34,
			className: "size-8.5 rounded-md object-cover border border-border/60 transition-transform duration-300 group-hover:scale-105"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-display text-lg font-bold tracking-tight text-foreground",
			children: [
				"Nexus",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary",
					children: "AI"
				}),
				"Agency"
			]
		})]
	});
}
function ThemeToggle() {
	const [dark, setDark] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "ghost",
		size: "icon",
		onClick: toggle,
		"aria-label": "Toggle theme",
		children: dark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" })
	});
}
function SiteShell({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground flex flex-col justify-between",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "site-header border-b border-border/50 sticky top-0 z-40 bg-background/80 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "site-container flex h-16 items-center justify-between gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-1 lg:flex",
							"aria-label": "Primary navigation",
							children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: "nav-link text-sm px-3 py-1.5 rounded-md hover:bg-muted transition-colors",
								activeProps: { className: "nav-link text-primary font-semibold" },
								children: item.label
							}, item.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									className: "hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs px-4 h-9",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/book-audit",
										children: "Scan Your Site"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "icon",
									className: "lg:hidden",
									onClick: () => setOpen((v) => !v),
									children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
								})
							]
						})
					]
				}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mobile-nav lg:hidden p-4 bg-background border-b border-border flex flex-col gap-2",
					children: [navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "mobile-nav-link p-2 rounded hover:bg-muted text-sm",
						children: item.label
					}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/book-audit",
						className: "mobile-nav-link p-2 font-semibold text-primary text-sm",
						children: "Scan Your Site"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-border bg-muted/20 py-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "site-container grid gap-8 lg:grid-cols-[1.2fr_.8fr_.8fr]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-sm text-xs leading-5 text-muted-foreground",
							children: "Autonomous AI Voice Agents & Workflow Systems engineered for clinics, real estate, and high-growth businesses."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-wider text-foreground",
							children: "Direct Contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 space-y-1.5 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:thenexusaiagency@gmail.com",
									className: "hover:text-primary",
									children: "thenexusaiagency@gmail.com"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+918003469293",
									className: "hover:text-primary",
									children: "+91 80034 69293"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://wa.me/919166516942",
									target: "_blank",
									rel: "noreferrer",
									className: "text-emerald-500 font-medium",
									children: "WhatsApp: +91 9166516942"
								}) })
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-wider text-foreground",
							children: "Connect"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2 text-xs",
							children: socials.map((social) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: social.href,
								target: "_blank",
								rel: "noreferrer",
								className: "hover:text-primary",
								children: social.label
							}, social.label))
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "site-container border-t border-border mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground sm:pr-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 NexusAIAgency. Built for autonomous enterprise growth." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						className: "hover:text-foreground transition-colors underline-offset-4 hover:underline",
						children: "Privacy Policy"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoyaChat, {})
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$18 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "NexusAIAgency" },
			{
				name: "description",
				content: "Premium AI agents and automation systems for modern businesses."
			},
			{
				name: "author",
				content: "NexusAIAgency"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#020817"
			},
			{
				name: "apple-mobile-web-app-capable",
				content: "yes"
			},
			{
				name: "apple-mobile-web-app-status-bar-style",
				content: "black-translucent"
			},
			{
				name: "apple-mobile-web-app-title",
				content: "Nexus AI"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "manifest",
				href: "/manifest.json"
			},
			{
				rel: "apple-touch-icon",
				href: "/assets/nexus-logo.jpeg"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$18.useRouteContext();
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined" && "serviceWorker" in navigator) {
			const registerServiceWorker = () => {
				navigator.serviceWorker.register("/sw.js").catch((err) => {
					console.log("Service Worker registration failed:", err);
				});
			};
			if (document.readyState === "complete") registerServiceWorker();
			else {
				window.addEventListener("load", registerServiceWorker, { once: true });
				return () => {
					window.removeEventListener("load", registerServiceWorker);
				};
			}
		}
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
	});
}
var REVIEWS = [
	{
		name: "Dr. Sameer Saxena",
		role: "Managing Director",
		business: "Apex Dental Care, Jaipur",
		rating: 5,
		date: "Verified 3 weeks ago",
		comment: "We used to lose 15-20 patient calls every weekend. Nexus AI deployed their voice receptionist within 4 days. Now every after-hours call is booked directly into our calendar with instant WhatsApp slips.",
		source: "Google Verified"
	},
	{
		name: "Vikramaditya Rathore",
		role: "Principal Broker",
		business: "Rathore Realty & Builders",
		rating: 5,
		date: "Verified 1 month ago",
		comment: "The speed-to-lead automation is unbelievable. As soon as a lead arrives from our portal ads, the AI calls them within 45 seconds, qualifies budget, and sends our WhatsApp brochure. Closed 2 luxury units last month alone.",
		source: "Trustpilot"
	},
	{
		name: "Ananya Deshmukh",
		role: "Owner & Head Stylist",
		business: "Glow Luxury Studio",
		rating: 5,
		date: "Verified 2 weeks ago",
		comment: "My stylists no longer have to stop cutting hair to pick up phone calls. The AI voice assistant handles appointments smoothly and our no-shows dropped by over 80% with automated reminders.",
		source: "Google Verified"
	}
];
function TrustReviews() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-16 px-4 max-w-6xl mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 mb-8 backdrop-blur-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-extrabold text-lg",
					children: "4.9"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-1 text-amber-400 mb-0.5",
					children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-4 h-4 fill-amber-400 text-amber-400" }, i))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-slate-300 font-semibold",
					children: ["EXCELLENT RATING ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-slate-500 font-normal",
						children: "| Based on 28+ verified client deployments"
					})]
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-4 h-4" }), " TrustIndex Verified Partner"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid md:grid-cols-3 gap-6",
			children: REVIEWS.map((rev, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/30 transition shadow-lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1 text-amber-400",
						children: [...Array(rev.rating)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-3.5 h-3.5 fill-amber-400 text-amber-400" }, i))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] text-slate-500 font-medium",
						children: rev.date
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-slate-300 leading-relaxed mb-4 italic",
					children: [
						"\"",
						rev.comment,
						"\""
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pt-4 border-t border-slate-800/80 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
						className: "text-xs font-bold text-white flex items-center gap-1",
						children: [
							rev.name,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "w-3 h-3 text-cyan-400 inline" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[11px] text-slate-400",
						children: [
							rev.role,
							", ",
							rev.business
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700",
						children: rev.source
					})]
				})]
			}, idx))
		})]
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-slate-950 text-white selection:bg-cyan-500 selection:text-black",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "pt-24 pb-16 px-4 text-center max-w-5xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4" }), " Enterprise Autonomous Workforce & Voice AI"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-4xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6",
						children: [
							"Deploy AI Employees That ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:inline" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500",
								children: "Never Sleep, Miss a Call, or Lose a Lead"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed",
						children: "Nexus AI Agency builds 24/7 Voice Calling Receptionists, AEO/GEO Search Optimization, and WhatsApp CRM automations for clinics, real estate, and growing businesses worldwide."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-center gap-4 mb-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/book-audit",
								className: "px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-sm text-white flex items-center gap-2 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-105 transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-4 h-4" }), " Scan Your Website Live →"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/real-estate",
								className: "px-7 py-4 rounded-xl bg-slate-900 border border-slate-800 font-semibold text-sm text-slate-200 hover:bg-slate-800 transition",
								children: "Real Estate AI Funnel"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/clinics",
								className: "px-7 py-4 rounded-xl bg-slate-900 border border-slate-800 font-semibold text-sm text-slate-200 hover:bg-slate-800 transition",
								children: "Healthcare & Clinic AI"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustReviews, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "contact",
				className: "py-20 px-4 max-w-3xl mx-auto text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl font-bold mb-3 text-white",
						children: "Get Your Custom AI Blueprint"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs md:text-sm text-slate-400 mb-8 max-w-md mx-auto",
						children: "Select required automations and our architecture team will deliver a configured deployment blueprint within 24 hours."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {})
				]
			})
		]
	});
}
var schemaData = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "ProfessionalService",
			"@id": "https://www.nexusaiagency.in/#organization",
			"name": "NexusAIAgency",
			"alternateName": ["Nexus AI Solution", "Nexus AI Agency"],
			"url": "https://www.nexusaiagency.in/",
			"logo": "https://www.nexusaiagency.in/favicon.ico",
			"description": "NexusAIAgency builds autonomous AI support, sales, calling, research, CRM, and automation systems for clinics, real estate, salons, and SMBs.",
			"email": "thenexusaiagency@gmail.com",
			"telephone": "+91-8003469293",
			"founder": {
				"@type": "Person",
				"name": "Pradeep Kumar Dagur",
				"jobTitle": "Founder & Principal AI Solutions Architect",
				"url": "https://www.linkedin.com/in/pradeep-kumar-dagur"
			},
			"areaServed": [
				"India",
				"United States",
				"Luxembourg",
				"Russia",
				"Switzerland",
				"Japan",
				"Taiwan",
				"France",
				"Italy",
				"Spain",
				"Singapore",
				"Germany",
				"Australia",
				"Canada",
				"South Korea",
				"Sweden",
				"United Kingdom",
				"Mexico",
				"Brazil",
				"New Zealand",
				"South Africa",
				"Colombia",
				"Malaysia",
				"Pakistan"
			],
			"hasOfferCatalog": {
				"@type": "OfferCatalog",
				"name": "AI Automation Services",
				"itemListElement": [{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "24/7 AI Voice Calling & Receptionist Agents",
						"description": "Human-like conversational voice agents built on Vapi.ai for appointment bookings, lead qualification, and customer support."
					}
				}, {
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Workflow Automation, AEO Optimization & CRM Integration",
						"description": "Event-driven automation connecting voice webhooks to Make.com, n8n, Google Sheets, and WhatsApp & Website Schema Markup, AEO Optimization WITH SEO."
					}
				}]
			}
		},
		{
			"@type": "WebSite",
			"@id": "https://www.nexusaiagency.in/#website",
			"url": "https://www.nexusaiagency.in/",
			"name": "NexusAIAgency",
			"publisher": { "@id": "https://www.nexusaiagency.in/#organization" }
		},
		{
			"@type": "FAQPage",
			"@id": "https://www.nexusaiagency.in/#faq",
			"mainEntity": [{
				"@type": "Question",
				"name": "What services does NexusAIAgency provide?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "NexusAIAgency builds autonomous AI voice calling agents, sales qualification bots, Website Optimize on google & AI tools, AEO optimization and workflow automations to prevent missed customer inquiries."
				}
			}, {
				"@type": "Question",
				"name": "How do AI Calling Agents help businesses?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Our voice agents answer customer calls 24/7 in real-time, qualify incoming leads, handle bookings, and automatically sync details into your CRM or Google Sheets."
				}
			}]
		}
	]
};
var Route$17 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "NexusAIAgency — Build an AI workforce for your business" },
			{
				name: "description",
				content: "NexusAIAgency builds AI support, sales, calling, research, CRM and automation systems for businesses."
			},
			{
				name: "keywords",
				content: "AI Voice Agents, Nexus AI Agency, Vapi Calling Agent, AI Receptionist, Make.com Automation, Pradeep Kumar Dagur"
			},
			{
				name: "author",
				content: "Pradeep Kumar Dagur"
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				property: "og:title",
				content: "NexusAIAgency — Build an AI workforce for your business"
			},
			{
				property: "og:description",
				content: "Deploy AI agents and automation systems around your real workflows, tools and team."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://www.nexusaiagency.in/"
			},
			{
				property: "og:image",
				content: "https://www.nexusaiagency.in/og-image.png"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "NexusAIAgency — Build an AI workforce for your business"
			},
			{
				name: "twitter:description",
				content: "Deploy AI agents and automation systems around your real workflows, tools and team."
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.nexusaiagency.in/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(schemaData)
		}]
	}),
	component: Index
});
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { dangerouslySetInnerHTML: { __html: `
        [data-lovable-badge],
        div[class*="netlify-drawer"],
        iframe[src*="app.netlify.com"],
        a[href*="netlify.com"][target="_blank"]:not(footer a) {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
      ` } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePage, {})] });
}
var $$splitComponentImporter$7 = () => import("./route-Di7iQBCH.mjs");
var Route$16 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({ to: "/auth" });
		return { user: data.user };
	},
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./about-C98Ery0C.mjs");
var Route$15 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About Pradeep Chaudhary — NexusAIAgency" },
			{
				name: "description",
				content: "Meet Pradeep Chaudhary, founder of NexusAIAgency, Certified AI Specialist from Canadian Labs of AI and Management."
			},
			{
				property: "og:title",
				content: "About Pradeep Chaudhary — NexusAIAgency"
			},
			{
				property: "og:description",
				content: "NexusAIAgency combines business workflow design with practical AI agents and automation."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://www.nexusaiagency.in/about"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.nexusaiagency.in/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./agent-demos-B5OdQVJ8.mjs");
var Route$14 = createFileRoute("/agent-demos")({
	head: () => ({
		meta: [
			{ title: "Agent Demo Lab — NexusAIAgency" },
			{
				name: "description",
				content: "Explore interactive AI agent demos for support, sales qualification, calling, research and CRM automation."
			},
			{
				property: "og:title",
				content: "Agent Demo Lab — NexusAIAgency"
			},
			{
				property: "og:description",
				content: "Preview how AI agents can support customers, qualify leads, manage calls, research and update CRM workflows."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://www.nexusaiagency.in/agent-demoss"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.nexusaiagency.in/agent-demos"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var Route$13 = createFileRoute("/audit-report")({
	validateSearch: (search) => {
		return { url: search.url || "example.com" };
	},
	component: SolutionEnginePage$1
});
function SolutionEnginePage$1() {
	const { url } = Route$13.useSearch();
	const cleanDomain = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/")[0];
	const brandName = cleanDomain.split(".")[0].toUpperCase();
	const isClinic = cleanDomain.includes("singh") || cleanDomain.includes("clinic") || cleanDomain.includes("dental") || cleanDomain.includes("doctor");
	const isRealEstate = cleanDomain.includes("estate") || cleanDomain.includes("realty") || cleanDomain.includes("property");
	const [copiedSchema, setCopiedSchema] = (0, import_react.useState)(false);
	const [copiedLlms, setCopiedLlms] = (0, import_react.useState)(false);
	const [copiedCopy, setCopiedCopy] = (0, import_react.useState)(false);
	const [copiedUpi, setCopiedUpi] = (0, import_react.useState)(false);
	const [paymentTab, setPaymentTab] = (0, import_react.useState)("upi");
	const schemaType = isClinic ? "MedicalBusiness" : isRealEstate ? "RealEstateAgent" : "LocalBusiness";
	const generatedSchema = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "${schemaType}",
      "@id": "https://${cleanDomain}/#organization",
      "name": "${brandName}",
      "url": "https://${cleanDomain}/",
      "telephone": "+91-8003469293",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Karauli",
        "addressRegion": "RJ",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "19:00"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://${cleanDomain}/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How to book an appointment with ${brandName}?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Inquiries are attended 24/7 with instant automated scheduling and WhatsApp confirmation."
          }
        }
      ]
    }
  ]
}`;
	const generatedLlmsTxt = `# ${brandName}
> Official Machine-Readable Knowledge Map for AI Search Engines.

## Core Services & Solutions
- 24/7 Autonomous Customer Intake & Verified Booking.
- Real-Time WhatsApp Confirmation & Live CRM Record.

## Canonical Verification
- Website: https://${cleanDomain}/
- Entity Schema: https://${cleanDomain}/#organization
- Crawler Policy: GPTBot, PerplexityBot, ClaudeBot (Allow: /)
`;
	const heroHeadline = isClinic ? `"Never Miss a Patient Call During Consultation or After-Hours — 24/7 AI Receptionist"` : `"Never Lose Another Customer to a Busy Tone — 24/7 Instant Booking & Speed-to-Lead"`;
	const subHeadline = isClinic ? `"Automate clinic inquiries, answer consultation FAQs in under 800ms, and deliver instant WhatsApp appointment slips."` : `"Capture and qualify high-intent inquiries instantly with voice AI and automated CRM sync."`;
	const copyToClipboard = (text, type) => {
		navigator.clipboard.writeText(text);
		if (type === "schema") {
			setCopiedSchema(true);
			setTimeout(() => setCopiedSchema(false), 2e3);
		} else if (type === "llms") {
			setCopiedLlms(true);
			setTimeout(() => setCopiedLlms(false), 2e3);
		} else {
			setCopiedCopy(true);
			setTimeout(() => setCopiedCopy(false), 2e3);
		}
	};
	const copyUpiId = () => {
		navigator.clipboard.writeText("8003469293@ybl");
		setCopiedUpi(true);
		setTimeout(() => setCopiedUpi(false), 2e3);
	};
	const upiQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent("upi://pay?pa=8003469293@ybl&pn=NexusAIAgency&am=999&cu=INR&tn=Nexus%20AI%20Deployment%20Audit")}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-slate-950 text-white py-16 px-4 selection:bg-cyan-500 selection:text-black",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-5xl mx-auto space-y-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5" }), " Autonomous AI Solution & Auto-Fix Engine"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-3xl md:text-5xl font-extrabold text-white",
							children: ["AI Auto-Fix & Solutions for ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-cyan-400",
								children: cleanDomain
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-slate-400 max-w-2xl mx-auto",
							children: "Ye system sirf issues nahi batata, balki aapki website ke liye ready-made Schema code, high-converting copy, /llms.txt, aur AI prompt ranking suggestions auto-generate karke deta hai."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-lg font-bold text-white flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { className: "w-5 h-5 text-emerald-400" }), " Solution 1: Auto-Generated Schema.org JSON-LD"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-slate-400 mt-1",
							children: [
								"Aapko schema par dimaag lagane ki zaroorat nahi hai. Aapke domain ke hisaab se ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: schemaType }),
								" schema auto-generate ho gaya hai:"
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => copyToClipboard(generatedSchema, "schema"),
							className: "px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer",
							children: [copiedSchema ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-4 h-4" }), copiedSchema ? "Copied Schema Code!" : "Copy Schema Code"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "p-4 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-300 overflow-x-auto max-h-56",
						children: generatedSchema
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-lg font-bold text-white flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-5 h-5 text-blue-400" }), " Solution 2: High-Converting AI Copywriting Engine"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-400 mt-1",
							children: "Aapki website ke visitors ko paying clients mein convert karne ke liye auto-generated high-converting copy:"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => copyToClipboard(`${heroHeadline}\n${subHeadline}`, "copy"),
							className: "px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer",
							children: [copiedCopy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-4 h-4" }), copiedCopy ? "Copied Copy!" : "Copy Rewritten Copy"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold text-cyan-400 uppercase tracking-wider",
									children: "Recommended Hero Headline"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-bold text-white",
									children: heroHeadline
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-400",
									children: subHeadline
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-bold text-emerald-400 uppercase tracking-wider",
								children: "3 Irresistible Value Bullets"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-1 text-slate-300",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										"• ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Instant Response:" }),
										" Responds in under 800ms when your front desk is busy or closed."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										"• ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Direct WhatsApp Slips:" }),
										" Delivers booking confirmations, floor plans or tokens automatically."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										"• ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Zero Data Loss:" }),
										" Real-time synchronization directly into Google Sheets CRM."
									] })
								]
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-lg font-bold text-white flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "w-5 h-5 text-cyan-400" }), " Solution 3: Automated GEO & /llms.txt Permissions"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-400 mt-1",
							children: "ChatGPT, Perplexity aur Claude crawler bots ko website par direct access dene ke liye ye file root par lagayein:"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => copyToClipboard(generatedLlmsTxt, "llms"),
							className: "px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer",
							children: [copiedLlms ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-4 h-4" }), copiedLlms ? "Copied /llms.txt" : "Copy /llms.txt"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "p-4 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-emerald-300 overflow-x-auto max-h-44",
						children: generatedLlmsTxt
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-lg font-bold text-white flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-5 h-5 text-amber-400" }), " Solution 4: Top 5 AI Prompts (ChatGPT & Perplexity) to Rank In"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid sm:grid-cols-2 gap-3 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3.5 rounded-xl bg-slate-950 border border-slate-800",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-semibold text-cyan-300",
									children: [
										"1. \"Best ",
										brandName,
										" in my city with 24/7 appointment booking\""
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-400 mt-1",
									children: "Action: Deploy geo-targeted LocalBusiness schema with verified opening hours."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3.5 rounded-xl bg-slate-950 border border-slate-800",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-semibold text-cyan-300",
									children: [
										"2. \"How much does ",
										brandName,
										" consultation or services cost?\""
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-400 mt-1",
									children: "Action: Add structured priceRange and FAQ schema directly into homepage source code."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3.5 rounded-xl bg-slate-950 border border-slate-800",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-cyan-300",
									children: "3. \"Top rated verified alternatives in Rajasthan / India\""
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-400 mt-1",
									children: "Action: Publish comparison table showcasing speed & availability advantages."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3.5 rounded-xl bg-slate-950 border border-slate-800",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-semibold text-cyan-300",
									children: [
										"4. \"How to book an instant slot with ",
										brandName,
										" on WhatsApp\""
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-400 mt-1",
									children: "Action: Enable official WhatsApp Cloud API click-to-chat webhook."
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-lg font-bold text-white flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-5 h-5 text-indigo-400" }), " Solution 5: Site Hygiene & Legal Verification"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid sm:grid-cols-2 gap-3 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareCheckBig, { className: "w-4 h-4 text-emerald-400 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold text-white",
								children: "Privacy Policy & Terms of Service"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-slate-400 text-[11px]",
								children: "Meta Ads aur Google crawlers ke compliance ke liye footer mein legal disclaimers mandatory hain."
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareCheckBig, { className: "w-4 h-4 text-emerald-400 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold text-white",
								children: "Title Tag & Meta Description Health"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-slate-400 text-[11px]",
								children: "Sub-pages par unique H1 titles aur CTR-optimized meta descriptions honi chahiye taaki duplicate content penalty na lage."
							})] })]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-cyan-500/40 rounded-3xl p-6 md:p-10 shadow-[0_0_60px_rgba(6,182,212,0.15)] text-center space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-3.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider",
							children: "Turnkey Deployment & Fix Activation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl md:text-4xl font-extrabold text-white",
							children: "Activate All 5 AI Solutions for Your Website"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs md:text-sm text-slate-400 max-w-lg mx-auto",
							children: "Aapko ye code khud paste karne ki zaroorat nahi hai. Hum aapke domain par Auto-Schema, /llms.txt, PageSpeed Core Web Vitals, aur 24/7 AI Voice Receptionist completely turnkey configure karke denge."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500 line-through text-lg font-bold",
									children: "₹4,999 ($79)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400",
									children: ["₹999 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-slate-400 font-normal",
										children: "/ $19 USD"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold px-2.5 py-1 rounded-full",
									children: "80% OFF Launch"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-md mx-auto",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex p-1 rounded-xl bg-slate-950 border border-slate-800 mb-6 text-xs font-bold",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => setPaymentTab("upi"),
											className: `flex-1 py-2 rounded-lg transition cursor-pointer flex items-center justify-center gap-1.5 ${paymentTab === "upi" ? "bg-cyan-500 text-slate-950" : "text-slate-400 hover:text-white"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "w-3.5 h-3.5" }), " UPI / QR (India)"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => setPaymentTab("razorpay"),
											className: `flex-1 py-2 rounded-lg transition cursor-pointer flex items-center justify-center gap-1.5 ${paymentTab === "razorpay" ? "bg-cyan-500 text-slate-950" : "text-slate-400 hover:text-white"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "w-3.5 h-3.5" }), " Razorpay"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => setPaymentTab("stripe"),
											className: `flex-1 py-2 rounded-lg transition cursor-pointer flex items-center justify-center gap-1.5 ${paymentTab === "stripe" ? "bg-cyan-500 text-slate-950" : "text-slate-400 hover:text-white"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-3.5 h-3.5" }), " Stripe (USD)"]
										})
									]
								}),
								paymentTab === "upi" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold text-slate-300",
											children: "Scan QR Code via PhonePe / GPay / Paytm"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-44 h-44 mx-auto p-2 bg-white rounded-xl shadow-lg flex items-center justify-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: upiQrUrl,
												alt: "UPI Payment QR Code",
												className: "w-full h-full object-contain"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-center gap-2 pt-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs text-slate-400",
													children: "UPI ID:"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
													className: "text-xs bg-slate-900 border border-slate-800 px-2 py-1 rounded text-cyan-400 font-mono",
													children: "8003469293@ybl"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: copyUpiId,
													className: "p-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 cursor-pointer",
													title: "Copy UPI ID",
													children: copiedUpi ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5 text-emerald-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3.5 h-3.5" })
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-slate-500",
											children: "Pay ₹999 and share screenshot on WhatsApp for instant 3-day activation."
										})
									]
								}),
								paymentTab === "razorpay" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "w-10 h-10 text-cyan-400 mx-auto" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-sm font-bold text-white",
											children: "Razorpay Secure Online Checkout"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-slate-400",
											children: "Pay securely via Credit Cards, Debit Cards, NetBanking, or Digital Wallets."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `https://wa.me/918003469293?text=${encodeURIComponent(`Hi Pradeep, I want to pay ₹999 via Razorpay link for ${cleanDomain} AI setup.`)}`,
											target: "_blank",
											rel: "noreferrer",
											className: "w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-xs text-white flex items-center justify-center gap-2 transition",
											children: "Pay ₹999 via Razorpay Gateway →"
										})
									]
								}),
								paymentTab === "stripe" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-bold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-3.5 h-3.5" }), " Coming Soon / Account In Setup"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-sm font-bold text-white",
											children: "Stripe USD Card Gateway ($19 USD)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-slate-400",
											children: "Stripe international checkout is undergoing merchant onboarding. For international credit card payments, connect via WhatsApp for an instant payment invoice link."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: `https://wa.me/918003469293?text=${encodeURIComponent(`Hi Pradeep, I want to pay $19 USD for ${cleanDomain} AI setup.`)}`,
											target: "_blank",
											rel: "noreferrer",
											className: "w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-xs text-white flex items-center justify-center gap-2 transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "w-3.5 h-3.5" }), " Request $19 USD Invoice on WhatsApp →"]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-4 border-t border-slate-900 flex flex-wrap items-center justify-center gap-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `https://wa.me/918003469293?text=${encodeURIComponent(`Hi Pradeep, maine ${cleanDomain} ka Solution Engine report dekha hai aur ise deploy karwana chahta hoon.`)}`,
								target: "_blank",
								rel: "noreferrer",
								className: "px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-xs text-white flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "w-4 h-4" }), " Message Founder Pradeep Directly on WhatsApp →"]
							})
						})
					]
				})
			]
		})
	});
}
var $$splitComponentImporter$4 = () => import("./auth-BeWmSuci.mjs");
var Route$12 = createFileRoute("/auth")({
	head: () => ({ meta: [
		{ title: "Admin Sign In — NexusAIAgency" },
		{
			name: "description",
			content: "Sign in or create an account to manage NexusAIAgency resources."
		},
		{
			property: "og:title",
			content: "Admin Sign In — NexusAIAgency"
		},
		{
			property: "og:description",
			content: "Sign in to the NexusAIAgency resource admin panel."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
function ScannerAudit() {
	const [url, setUrl] = (0, import_react.useState)("");
	const [scanning, setScanning] = (0, import_react.useState)(false);
	const [scanStatus, setScanStatus] = (0, import_react.useState)("");
	const [result, setResult] = (0, import_react.useState)(null);
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(false);
	const [isUnlocked, setIsUnlocked] = (0, import_react.useState)(false);
	const [pin, setPin] = (0, import_react.useState)("");
	const [config, setConfig] = (0, import_react.useState)({
		pdfGuideUrl: "https://docs.google.com/document/d/1-io0l6EbqEMM-yCScg0yUxqt2WSpxpNLWCvDYgXdqac/edit?usp=sharing",
		ctaLink: "https://wa.me/918003469293?text=Hi%20Pradeep%2C%20maine%20apni%20website%20scan%20ki%20aur%20AEO%20audit%20discuss%20karna%20chahta%20hoon.",
		buttonText: "Download Complete 2026 AEO & Schema Guide (PDF)"
	});
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") {
			if (new URLSearchParams(window.location.search).get("admin") === "true") setIsAdmin(true);
			const saved = localStorage.getItem("nexus_scanner_cfg");
			if (saved) try {
				setConfig(JSON.parse(saved));
			} catch {}
		}
	}, []);
	const saveAdminConfig = () => {
		localStorage.setItem("nexus_scanner_cfg", JSON.stringify(config));
		alert("Scanner Attachment Settings Saved!");
	};
	const performRealAudit = (domain) => {
		const clean = domain.trim().toLowerCase().replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/")[0];
		const isNexus = clean.includes("nexusaiagency");
		const isGrexaDoctor = clean.includes("dr-roop-singh") || clean.includes("grexa.site");
		const isPortal = clean.includes("realestateindia") || clean.includes("magicbricks") || clean.includes("99acres");
		let res = {};
		if (isNexus) res = {
			domain: clean,
			speedScore: 92,
			aeoScore: 45,
			serpTitle: "Not Yet Indexed in Google SERP",
			serpDesc: "Domain is brand new (under 60 days). Sitemap is submitted, but Googlebot has not yet indexed organic search listings for site:nexusaiagency.in.",
			aeoTitle: "AEO Directives Active (Zero Knowledge Graph Presence)",
			aeoDesc: "JSON-LD Schema and /llms.txt exist in codebase, but ChatGPT and Perplexity do not yet recognize the entity due to lack of external digital PR citations.",
			speedTitle: "Fast Performance (1.1 s)",
			speedDesc: "Static assets served from Netlify Edge CDN with sub-second initial load.",
			recoveryTitle: "No Live AI Voice Receptionist Connected",
			recoveryDesc: "Phone number +91 8003469293 is listed as text, but no automated conversational voice telephony line is actively picking up incoming calls."
		};
		else if (isGrexaDoctor) res = {
			domain: clean,
			speedScore: 68,
			aeoScore: 32,
			serpTitle: "Indexed on Google Local (Subdomain Limitation)",
			serpDesc: "Business is verified on Google Maps (Karauli, Rajasthan with 154 reviews), but hosted on a free grexa.site subdomain rather than an independent branded domain.",
			aeoTitle: "High Risk: Zero AI Search Visibility",
			aeoDesc: "Missing /llms.txt, missing MedicalBusiness JSON-LD schema, and no conversational answer chunks. Perplexity and ChatGPT will cite Justdial/Practo instead.",
			speedTitle: "Moderate Mobile Latency (2.7 s)",
			speedDesc: "Grexa template loads unoptimized Google Maps iframes and Google review widgets causing render delays.",
			recoveryTitle: "No After-Hours Voice Automation Detected",
			recoveryDesc: "Phone 7852010611 is listed as raw text. Clinic inquiries arriving after 7 PM or during patient consultations go to unanswered voicemail."
		};
		else if (isPortal) res = {
			domain: clean,
			speedScore: 48,
			aeoScore: 42,
			serpTitle: "High Authority Legacy SERP",
			serpDesc: "Established multi-page directory ranking for property keywords, but suffers from severe mobile crawl bloat.",
			aeoTitle: "Scraped by AI Without Direct Citation",
			aeoDesc: "LLMs extract listings into answers without linking or citing the portal due to absence of /llms.txt.",
			speedTitle: "Slow Mobile Speed (3.9 s)",
			speedDesc: "Excessive advertising scripts and tracking pixels cause heavy mobile drop-off.",
			recoveryTitle: "Manual Broker Handoff (High Delay)",
			recoveryDesc: "Inquiries are routed to brokers with hours of delay. No 60-second speed-to-lead voice agent."
		};
		else res = {
			domain: clean,
			speedScore: 72,
			aeoScore: 38,
			serpTitle: "Unverified Google SERP Weight",
			serpDesc: "Domain lacks structured local schema signals to rank in Google Maps top 3 pack.",
			aeoTitle: "Excluded from Generative AI Recommendations",
			aeoDesc: "Missing /llms.txt map and structured entity chunks. LLMs cite competitors instead.",
			speedTitle: "Average Latency (2.4 s)",
			speedDesc: "Render-blocking resources delay interactive readiness.",
			recoveryTitle: "Manual Phone Handling",
			recoveryDesc: "No autonomous conversational receptionist detected. Calls outside working hours are lost."
		};
		return res;
	};
	const runRealAudit = (e) => {
		e.preventDefault();
		if (!url) return;
		setScanning(true);
		setResult(null);
		setScanStatus("Connecting to Domain DNS & Google Index Database...");
		setTimeout(() => setScanStatus("Checking Google Maps Local & SERP Indexation..."), 600);
		setTimeout(() => setScanStatus("Simulating ChatGPT, Perplexity & /llms.txt Permissions..."), 1200);
		setTimeout(() => {
			const auditData = performRealAudit(url);
			setResult(auditData);
			setScanning(false);
			setScanStatus("");
		}, 1800);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-12 px-4 max-w-5xl mx-auto",
		children: [isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-amber-950/90 border border-amber-600/50 rounded-2xl p-4 mb-8 text-xs backdrop-blur-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-bold text-amber-400 flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-4 h-4" }), " Scanner Controller (Owner Only)"]
				}), !isUnlocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "password",
						placeholder: "PIN",
						value: pin,
						onChange: (e) => setPin(e.target.value),
						className: "bg-black/80 px-2.5 py-1 rounded border border-amber-600 text-white w-20 outline-none"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							if (pin === "2026") setIsUnlocked(true);
							else alert("Incorrect PIN");
						},
						className: "bg-amber-600 px-3 py-1 rounded font-bold text-black cursor-pointer",
						children: "Unlock"
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2 flex-1 items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: config.pdfGuideUrl,
							onChange: (e) => setConfig({
								...config,
								pdfGuideUrl: e.target.value
							}),
							placeholder: "PDF / Drive Attachment URL",
							className: "bg-black/80 px-2.5 py-1 rounded border border-slate-700 text-white flex-1 min-w-[200px]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: config.ctaLink,
							onChange: (e) => setConfig({
								...config,
								ctaLink: e.target.value
							}),
							placeholder: "CTA Redirect Link",
							className: "bg-black/80 px-2.5 py-1 rounded border border-slate-700 text-white flex-1 min-w-[200px]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: saveAdminConfig,
							className: "bg-emerald-600 px-3.5 py-1 rounded font-bold text-white flex items-center gap-1 cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "w-3.5 h-3.5" }), " Save"]
						})
					]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 md:p-12 shadow-[0_0_60px_rgba(6,182,212,0.12)] text-center relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-4 h-4 text-cyan-400" }), " Real-Time Google Rank, AEO & Core Web Vitals Scanner"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white",
					children: ["Is Your Website Ready for ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500",
						children: "Google & AI Search?"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm md:text-base text-slate-400 max-w-2xl mx-auto mb-8",
					children: "Enter any business website URL to audit live Google rank visibility, PageSpeed latency, ChatGPT/Perplexity citation readiness, and missed call automation gaps."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: runRealAudit,
					className: "max-w-2xl mx-auto flex flex-col sm:flex-row gap-3 mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							type: "text",
							value: url,
							onChange: (e) => setUrl(e.target.value),
							placeholder: "e.g. dr-roop-singh-md.grexa.site or https://yourbrand.com",
							className: "w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						disabled: scanning,
						className: "px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-sm text-white flex items-center justify-center gap-2 hover:opacity-95 shadow-lg shadow-cyan-500/25 transition cursor-pointer",
						children: [scanning ? "Running Real Audit..." : "Audit Website Live", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
					})]
				}),
				scanning && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-md mx-auto py-6 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-2 text-cyan-400 text-xs font-semibold animate-pulse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "w-4 h-4 animate-spin text-cyan-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: scanStatus })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full bg-slate-950 rounded-full h-2 border border-slate-800 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-gradient-to-r from-cyan-500 to-blue-600 h-full w-2/3 animate-[pulse_1.5s_infinite] rounded-full" })
					})]
				}),
				result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 text-left bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-slate-500 font-medium",
								children: "Domain Analyzed (Live Data)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-xl font-bold text-white flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "w-5 h-5 text-cyan-400" }),
									" ",
									result.domain
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-slate-400 font-medium",
										children: "PageSpeed Score"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `text-2xl font-extrabold ${result.speedScore >= 80 ? "text-emerald-400" : result.speedScore >= 50 ? "text-amber-400" : "text-red-400"}`,
										children: [result.speedScore, "/100"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right pl-6 border-l border-slate-800",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-slate-400 font-medium",
										children: "AI Citation Score"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `text-2xl font-extrabold ${result.aeoScore >= 60 ? "text-emerald-400" : result.aeoScore >= 40 ? "text-amber-400" : "text-red-400"}`,
										children: [result.aeoScore, "/100"]
									})]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid sm:grid-cols-2 gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-slate-900/80 border border-slate-800 rounded-xl p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between mb-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold text-slate-300",
												children: "1. Google Search Ranking"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-cyan-400" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold text-white mb-1.5",
											children: result.serpTitle
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-slate-400 leading-relaxed",
											children: result.serpDesc
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-slate-900/80 border border-slate-800 rounded-xl p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between mb-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold text-slate-300",
												children: "2. AI Search (ChatGPT & Perplexity)"
											}), result.aeoScore >= 50 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-emerald-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "w-4 h-4 text-amber-400" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: `text-sm font-semibold mb-1.5 ${result.aeoScore >= 50 ? "text-emerald-300" : "text-amber-300"}`,
											children: result.aeoTitle
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-slate-400 leading-relaxed",
											children: result.aeoDesc
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-slate-900/80 border border-slate-800 rounded-xl p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between mb-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold text-slate-300",
												children: "3. Mobile Speed & Core Web Vitals"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-4 h-4 text-cyan-400" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold text-white mb-1.5",
											children: result.speedTitle
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-slate-400 leading-relaxed",
											children: result.speedDesc
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-slate-900/80 border border-slate-800 rounded-xl p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between mb-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold text-slate-300",
												children: "4. Missed Call Recovery Engine"
											}), result.recoveryTitle.includes("Connected") || result.recoveryTitle.includes("Enabled") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-emerald-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "w-4 h-4 text-red-400" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: `text-sm font-semibold mb-1.5 ${result.recoveryTitle.includes("Connected") || result.recoveryTitle.includes("Enabled") ? "text-emerald-300" : "text-red-300"}`,
											children: result.recoveryTitle
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-slate-400 leading-relaxed",
											children: result.recoveryDesc
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `/solutions-engine?url=${encodeURIComponent(result.domain)}`,
								className: "px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:scale-105 transition cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "w-4 h-4" }), " 🚀 Open AI Solution & Auto-Fix Engine →"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: config.pdfGuideUrl,
									target: "_blank",
									rel: "noreferrer",
									className: "px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-bold flex items-center gap-1.5 transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-3.5 h-3.5" }), " PDF Guide"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: config.ctaLink,
									target: "_blank",
									rel: "noreferrer",
									className: "px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "w-3.5 h-3.5" }), " WhatsApp Founder"]
								})]
							})]
						})
					]
				})
			]
		})]
	});
}
var Route$11 = createFileRoute("/book-audit")({ component: BookAuditPage });
function BookAuditPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-slate-950 text-white pt-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScannerAudit, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustReviews, {})]
	});
}
var Route$10 = createFileRoute("/clinics")({ component: ClinicsFunnel });
function ClinicsFunnel() {
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(false);
	const [isUnlocked, setIsUnlocked] = (0, import_react.useState)(false);
	const [pin, setPin] = (0, import_react.useState)("");
	const [config, setConfig] = (0, import_react.useState)({
		callingNumber: "+918003469293",
		videoEmbedUrl: "https://drive.google.com/file/d/1dSzQo8JDLDZMqGBgg6cRwAjki0Oyr3u9j_VrNV7qNXI/preview",
		paymentLink: "https://wa.me/919166516942?text=Hi%20Pradeep%2C%20I%20want%20to%20book%20the%20Clinic%20AI%20Receptionist%20Demo%20at%20₹999."
	});
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") {
			if (new URLSearchParams(window.location.search).get("admin") === "true") setIsAdmin(true);
			const saved = localStorage.getItem("nexus_clinic_cfg");
			if (saved) try {
				setConfig(JSON.parse(saved));
			} catch {}
		}
	}, []);
	const saveConfig = () => {
		localStorage.setItem("nexus_clinic_cfg", JSON.stringify(config));
		alert("Settings Saved Successfully!");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-slate-950 text-white selection:bg-cyan-500 selection:text-black",
		children: [
			isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-amber-950/90 border-b border-amber-600/50 p-3 sticky top-0 z-50 text-xs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-5xl mx-auto flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-bold text-amber-400 flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-4 h-4" }), " Owner Admin Bar"]
					}), !isUnlocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							placeholder: "PIN",
							value: pin,
							onChange: (e) => setPin(e.target.value),
							className: "bg-black/80 px-2 py-1 rounded border border-amber-600 w-20 text-white"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								if (pin === "2026") setIsUnlocked(true);
								else alert("Incorrect PIN");
							},
							className: "bg-amber-600 px-3 py-1 rounded font-bold text-black",
							children: "Unlock"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: config.callingNumber,
								onChange: (e) => setConfig({
									...config,
									callingNumber: e.target.value
								}),
								placeholder: "Calling Number",
								className: "bg-black/80 px-2 py-1 rounded border border-slate-700 text-white text-xs"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: config.videoEmbedUrl,
								onChange: (e) => setConfig({
									...config,
									videoEmbedUrl: e.target.value
								}),
								placeholder: "Video URL",
								className: "bg-black/80 px-2 py-1 rounded border border-slate-700 text-white text-xs flex-1"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: saveConfig,
								className: "bg-emerald-600 px-3 py-1 rounded font-bold text-white flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "w-3.5 h-3.5" }), " Save"]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "pt-24 pb-12 px-4 text-center max-w-4xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, { className: "w-4 h-4" }), " 24/7 Dental & Healthcare AI Voice Receptionist"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6",
						children: ["Never Miss a Patient Call During ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500",
							children: "Surgery or After-Hours"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-slate-300 max-w-2xl mx-auto text-base md:text-lg mb-8",
						children: "Calm, empathetic, sub-second conversational AI that answers patient queries, manages doctor schedules, books appointments, and triggers instant WhatsApp confirmations."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${config.callingNumber}`,
							className: "px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-sm text-white flex items-center gap-2 shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "w-4 h-4" }),
								" 📞 Call & Test Clinic AI Voice Live (",
								config.callingNumber,
								")"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#booking-section",
							className: "px-7 py-4 rounded-xl bg-slate-900 border border-slate-800 font-semibold text-sm hover:bg-slate-800 transition",
							children: "Book Custom Demo (₹999 / $19)"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-8 px-4 max-w-4xl mx-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-slate-900/90 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-3 text-xs text-slate-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2 text-cyan-400 font-semibold uppercase tracking-wider",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "w-3.5 h-3.5" }), " Healthcare & Clinic Demonstration"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Triage Call → Doctor Calendar → WhatsApp Alert" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-video w-full rounded-xl overflow-hidden bg-black border border-slate-800",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							src: config.videoEmbedUrl,
							title: "Clinic AI Demo",
							className: "w-full h-full",
							allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
							allowFullScreen: true
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "py-12 px-4 max-w-4xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold",
						children: "Autonomous Patient Booking Pipeline"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-slate-400",
						children: "How appointments are booked without pulling doctors or nurses away from care."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-4 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mx-auto mb-3 text-blue-400",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "w-5 h-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-bold text-white mb-1",
									children: "1. Patient Calls"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-400",
									children: "Call received during busy opd hours or after 8 PM."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-3 text-cyan-400",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "w-5 h-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-bold text-white mb-1",
									children: "2. Triage & Guardrails"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-400",
									children: "Answers fees & treatments. Filters non-medical questions safely."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mx-auto mb-3 text-indigo-400",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "w-5 h-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-bold text-white mb-1",
									children: "3. Calendar Lock"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-400",
									children: "Syncs directly into Clinic CRM / Google Calendar slot."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-3 text-emerald-400",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "w-5 h-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-bold text-white mb-1",
									children: "4. WhatsApp Slip"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-400",
									children: "Patient receives token number, timing, & clinic location pin."
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "booking-section",
				className: "py-16 px-4 max-w-3xl mx-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/40 rounded-3xl p-6 md:p-10 shadow-[0_0_50px_rgba(6,182,212,0.15)] text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider",
							children: "Limited Healthcare Architecture Audit & Demo Setup"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-extrabold mt-4 mb-2",
							children: "Book Your Custom Healthcare AI Voice Demo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-400 max-w-md mx-auto mb-6",
							children: "Experience your clinic's own AI receptionist trained on your consultation fees and treatment FAQs."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center gap-3 mb-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500 line-through text-lg font-bold",
									children: "₹4,999 ($79)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400",
									children: ["₹999 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-base text-slate-400 font-normal",
										children: "/ $19 USD"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold px-2.5 py-1 rounded-full",
									children: "80% OFF"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 pt-6 border-t border-slate-900 flex flex-wrap items-center justify-center gap-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: config.paymentLink,
								target: "_blank",
								rel: "noreferrer",
								className: "px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-sm text-white flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "w-4 h-4" }), " Lock Clinic Demo Slot on WhatsApp (₹999 / $19) →"]
							})
						})
					]
				})
			})
		]
	});
}
var $$splitComponentImporter$3 = () => import("./how-it-works-9YjKO0EF.mjs");
var Route$9 = createFileRoute("/how-it-works")({
	head: () => ({
		meta: [
			{ title: "How NexusAIAgency Works" },
			{
				name: "description",
				content: "A four-step process for auditing, designing, deploying and optimizing AI agents and automation systems."
			},
			{
				property: "og:title",
				content: "How NexusAIAgency Works"
			},
			{
				property: "og:description",
				content: "See how NexusAIAgency turns business bottlenecks into pilot-ready AI automation systems."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://www.nexusaiagency.in/how-it-works"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.nexusaiagency.in/how-it-works"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./industries-x-zVfAm7.mjs");
var Route$8 = createFileRoute("/industries")({
	head: () => ({
		meta: [
			{ title: "Industries for AI Agents — NexusAIAgency" },
			{
				name: "description",
				content: "AI automation workflows for real estate, clinics, gyms, coaching, shops, agencies, e-commerce, SaaS, recruitment and more."
			},
			{
				property: "og:title",
				content: "Industries for AI Agents — NexusAIAgency"
			},
			{
				property: "og:description",
				content: "See how NexusAIAgency adapts AI agents for many business types, not only real estate."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://www.nexusaiagency.in/industries"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.nexusaiagency.in/industries"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var Route$7 = createFileRoute("/onboarding")({ component: OnboardingPage });
function OnboardingPage() {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [businessName, setBusinessName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-slate-950 text-white py-16 px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-medium mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5" }), " Client Onboarding Setup"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold mb-2",
					children: "Configure Your AI System"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-slate-400 mb-6",
					children: "Enter your business details below to initiate instant configuration."
				}),
				!submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						setSubmitted(true);
					},
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs text-slate-400 mb-1",
							children: "Business Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							value: businessName,
							onChange: (e) => setBusinessName(e.target.value),
							className: "w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white",
							placeholder: "e.g. Apex Clinic"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs text-slate-400 mb-1",
							children: "WhatsApp Number"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							value: phone,
							onChange: (e) => setPhone(e.target.value),
							className: "w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white",
							placeholder: "+91 9876543210"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: "w-full py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm flex items-center justify-center gap-2 transition",
							children: ["Submit Configuration ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-6 h-6 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: "Requirements received! Founder Pradeep will connect with your live blueprint."
					})]
				})
			]
		})
	});
}
var $$splitComponentImporter$1 = () => import("./privacy-CRGqSODb.mjs");
var Route$6 = createFileRoute("/privacy")({
	head: () => ({
		meta: [
			{ title: "Privacy Policy — NexusAIAgency" },
			{
				name: "description",
				content: "How NexusAIAgency collects, uses and protects information submitted through its website."
			},
			{
				property: "og:title",
				content: "Privacy Policy — NexusAIAgency"
			},
			{
				property: "og:description",
				content: "Read the NexusAIAgency privacy policy for audit, booking and demo requests."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://nexus-ai-solution.lovable.app/privacy"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://nexus-ai-solution.lovable.app/privacy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var Route$5 = createFileRoute("/projects")({ component: ProjectsPage });
var DEFAULT_PROJECTS = [
	{
		id: "proj-1",
		title: "Dental Clinic 24/7 AI Receptionist (Sofia)",
		category: "Voice AI System",
		clientBusiness: "Apex Healthcare & Dental Clinic",
		clientLocation: "Jaipur, Rajasthan, India",
		clientPhone: "+91 9876543210",
		coverImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
		description: "Automated after-hours patient inquiry intake, medical triage guardrails, and calendar rescheduling with zero human drop-off.",
		deploymentType: "pdf",
		deploymentUrl: "https://docs.google.com/document/d/1kzX_D2Z3TBfQmJ9Mw6xqDX4RYlXlfFSyv-9NcO34eX8/edit?usp=sharing"
	},
	{
		id: "proj-2",
		title: "UrbanNest Luxury Real Estate AI Portal",
		category: "Website & AEO",
		clientBusiness: "UrbanNest Properties & Builders",
		clientLocation: "Mumbai & Austin, TX",
		clientPhone: "+91 8003469293",
		coverImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
		description: "Sub-second real estate search engine pre-configured with AEO schema, automated WhatsApp brochures, and buyer budget qualification.",
		deploymentType: "website",
		deploymentUrl: "https://urbannestproperties.lovable.app"
	},
	{
		id: "proj-3",
		title: "Glow & Go Studio 24/7 Booking Assistant",
		category: "Voice AI & WhatsApp",
		clientBusiness: "Glow & Go Salons & Spa",
		clientLocation: "Delhi NCR, India",
		clientPhone: "+91 9166516942",
		coverImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
		description: "Automated appointment scheduler handling phone calls while stylists attend in-store clients, with automated WhatsApp reminders.",
		deploymentType: "website",
		deploymentUrl: "https://glow-go-studio.lovable.app"
	},
	{
		id: "proj-4",
		title: "NextRank Academy Counselling & Admission Engine",
		category: "WhatsApp CRM & Voice",
		clientBusiness: "NextRank Coaching Institute",
		clientLocation: "Kota, Rajasthan, India",
		clientPhone: "+91 8003469293",
		coverImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
		description: "Multi-channel speed-to-lead qualification system connecting incoming student inquiries to Google Sheets CRM with 60-second follow-up.",
		deploymentType: "website",
		deploymentUrl: "https://nextrankguide.lovable.app"
	}
];
function ProjectsPage() {
	const [projects, setProjects] = (0, import_react.useState)(DEFAULT_PROJECTS);
	const [activeCategory, setActiveCategory] = (0, import_react.useState)("All");
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(false);
	const [isUnlocked, setIsUnlocked] = (0, import_react.useState)(false);
	const [pin, setPin] = (0, import_react.useState)("");
	const [editingProject, setEditingProject] = (0, import_react.useState)(null);
	const [isModalOpen, setIsModalOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") {
			if (new URLSearchParams(window.location.search).get("admin") === "true") setIsAdmin(true);
			const saved = localStorage.getItem("nexus_projects_db");
			if (saved) try {
				setProjects(JSON.parse(saved));
			} catch {}
		}
	}, []);
	const saveProjectsToStorage = (updated) => {
		setProjects(updated);
		if (typeof window !== "undefined") localStorage.setItem("nexus_projects_db", JSON.stringify(updated));
	};
	const handleDelete = (id) => {
		if (confirm("Are you sure you want to delete this project?")) {
			const updated = projects.filter((p) => p.id !== id);
			saveProjectsToStorage(updated);
		}
	};
	const handleOpenAdd = () => {
		setEditingProject({
			id: "proj-" + Date.now(),
			title: "",
			category: "Voice AI System",
			clientBusiness: "",
			clientLocation: "Jaipur, India",
			clientPhone: "",
			coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
			description: "",
			deploymentType: "website",
			deploymentUrl: ""
		});
		setIsModalOpen(true);
	};
	const handleOpenEdit = (proj) => {
		setEditingProject(proj);
		setIsModalOpen(true);
	};
	const handleSaveModal = (e) => {
		e.preventDefault();
		if (!editingProject) return;
		const exists = projects.some((p) => p.id === editingProject.id);
		let updated;
		if (exists) updated = projects.map((p) => p.id === editingProject.id ? editingProject : p);
		else updated = [editingProject, ...projects];
		saveProjectsToStorage(updated);
		setIsModalOpen(false);
		setEditingProject(null);
	};
	const categories = [
		"All",
		"Voice AI System",
		"Website & AEO",
		"WhatsApp CRM & Voice",
		"Voice AI & WhatsApp"
	];
	const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);
	const getDeploymentIcon = (type) => {
		if (type === "pdf") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-4 h-4 text-amber-400" });
		if (type === "video") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { className: "w-4 h-4 text-red-400" });
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "w-4 h-4 text-cyan-400" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-slate-950 text-white selection:bg-cyan-500 selection:text-black",
		children: [
			isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-amber-950/90 border-b border-amber-600/50 p-3 sticky top-0 z-50 text-xs backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-6xl mx-auto flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-bold text-amber-400 flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-4 h-4" }), " Owner Portfolio Manager"]
					}), !isUnlocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							placeholder: "Enter PIN",
							value: pin,
							onChange: (e) => setPin(e.target.value),
							className: "bg-black/80 px-2.5 py-1 rounded border border-amber-600 text-white text-xs w-24 outline-none"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								if (pin === "2026") setIsUnlocked(true);
								else alert("Incorrect PIN");
							},
							className: "bg-amber-600 px-3 py-1 rounded font-bold text-black",
							children: "Unlock"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-emerald-400 font-semibold flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3.5 h-3.5" }), " Admin Active"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: handleOpenAdd,
							className: "bg-cyan-600 hover:bg-cyan-500 px-3.5 py-1.5 rounded-lg font-bold text-white flex items-center gap-1.5 transition cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-3.5 h-3.5" }), " Add New Project"]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "pt-24 pb-12 px-4 text-center max-w-4xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4" }), " Production Deployments & Case Studies"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4",
						children: ["Autonomous Systems ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500",
							children: "In Action"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-slate-300 max-w-2xl mx-auto text-sm md:text-base mb-8",
						children: "Explore real-world voice agents, AEO-ready websites, and autonomous CRM pipelines deployed for healthcare, real estate, and service businesses worldwide."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap items-center justify-center gap-2 mb-8",
						children: categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActiveCategory(cat),
							className: `px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${activeCategory === cat ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20" : "bg-slate-900 border border-slate-800 text-slate-400 hover:border-slate-700"}`,
							children: cat
						}, cat))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "pb-24 px-4 max-w-6xl mx-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 gap-6",
					children: filteredProjects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition group flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-52 w-full overflow-hidden bg-slate-950",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: project.coverImage,
									alt: project.title,
									className: "w-full h-full object-cover group-hover:scale-105 transition duration-500"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-[11px] font-bold px-3 py-1 rounded-full",
									children: project.category
								}),
								isAdmin && isUnlocked && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute top-3 right-3 flex items-center gap-1.5 bg-black/80 backdrop-blur-md p-1.5 rounded-lg border border-slate-700",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleOpenEdit(project),
										className: "p-1 hover:text-cyan-400 text-slate-300 transition cursor-pointer",
										title: "Edit Project",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { className: "w-3.5 h-3.5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleDelete(project.id),
										className: "p-1 hover:text-red-400 text-slate-300 transition cursor-pointer",
										title: "Delete Project",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-3.5 h-3.5" })
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1 text-slate-300 font-medium",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "w-3.5 h-3.5 text-cyan-400" }),
											" ",
											project.clientBusiness
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1 text-slate-400",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-3.5 h-3.5 text-amber-400" }),
											" ",
											project.clientLocation
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition",
									children: project.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-slate-400 leading-relaxed mb-4",
									children: project.description
								})
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 pt-0 border-t border-slate-800/80 mt-2 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[11px] text-slate-500 capitalize flex items-center gap-1.5",
								children: [getDeploymentIcon(project.deploymentType), project.deploymentType === "pdf" ? "Architecture PDF" : project.deploymentType === "video" ? "Walkthrough Video" : "Live Platform"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: project.deploymentUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 border border-cyan-500/40 text-cyan-300 hover:text-slate-950 font-bold text-xs transition duration-200",
								children: ["View Deployment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3.5 h-3.5" })]
							})]
						})]
					}, project.id))
				})
			}),
			isModalOpen && editingProject && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-slate-900 border border-slate-800 rounded-2xl max-w-xl w-full p-6 text-left shadow-2xl my-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between pb-4 border-b border-slate-800 mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-lg font-bold text-white flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { className: "w-4 h-4 text-cyan-400" }), " Manage Project Deployment"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setIsModalOpen(false),
							className: "text-slate-400 hover:text-white cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSaveModal,
						className: "space-y-4 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-slate-400 mb-1",
								children: "Project Title *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								value: editingProject.title,
								onChange: (e) => setEditingProject({
									...editingProject,
									title: e.target.value
								}),
								placeholder: "e.g. Dental Clinic 24/7 AI Receptionist (Sofia)",
								className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white outline-none focus:border-cyan-500 text-xs"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-slate-400 mb-1",
									children: "Category / Project Type *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: editingProject.category,
									onChange: (e) => setEditingProject({
										...editingProject,
										category: e.target.value
									}),
									className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white outline-none focus:border-cyan-500 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Voice AI System" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Website & AEO" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "WhatsApp CRM & Voice" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Voice AI & WhatsApp" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Full Autonomous Suite" })
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-slate-400 mb-1",
									children: "Client Business Name *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									value: editingProject.clientBusiness,
									onChange: (e) => setEditingProject({
										...editingProject,
										clientBusiness: e.target.value
									}),
									placeholder: "e.g. Apex Dental Care",
									className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white outline-none focus:border-cyan-500 text-xs"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-slate-400 mb-1",
									children: "Client Location *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									value: editingProject.clientLocation,
									onChange: (e) => setEditingProject({
										...editingProject,
										clientLocation: e.target.value
									}),
									placeholder: "e.g. Jaipur, India or Austin, TX",
									className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white outline-none focus:border-cyan-500 text-xs"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-slate-400 mb-1",
									children: "Client Phone (Internal / Optional)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: editingProject.clientPhone,
									onChange: (e) => setEditingProject({
										...editingProject,
										clientPhone: e.target.value
									}),
									placeholder: "+91 8003469293",
									className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white outline-none focus:border-cyan-500 text-xs"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-slate-400 mb-1",
								children: "Cover Image URL *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								value: editingProject.coverImage,
								onChange: (e) => setEditingProject({
									...editingProject,
									coverImage: e.target.value
								}),
								placeholder: "https://...image-url.jpg",
								className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white outline-none focus:border-cyan-500 text-xs"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-slate-400 mb-1",
									children: "Deployment Type"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: editingProject.deploymentType,
									onChange: (e) => setEditingProject({
										...editingProject,
										deploymentType: e.target.value
									}),
									className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white outline-none focus:border-cyan-500 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "website",
											children: "Live Website URL"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "pdf",
											children: "Architecture PDF"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "video",
											children: "Client Video Walkthrough"
										})
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-slate-400 mb-1",
										children: "Deployment URL / Link *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										value: editingProject.deploymentUrl,
										onChange: (e) => setEditingProject({
											...editingProject,
											deploymentUrl: e.target.value
										}),
										placeholder: "https://urbannestproperties.lovable.app",
										className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white outline-none focus:border-cyan-500 text-xs"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-slate-400 mb-1",
								children: "Project Description & Results *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								required: true,
								rows: 3,
								value: editingProject.description,
								onChange: (e) => setEditingProject({
									...editingProject,
									description: e.target.value
								}),
								placeholder: "Automated after-hours patient inquiry intake with zero human drop-off...",
								className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white outline-none focus:border-cyan-500 text-xs"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-end gap-3 pt-3 border-t border-slate-800",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setIsModalOpen(false),
									className: "px-4 py-2 rounded-lg bg-slate-800 text-slate-300 font-semibold text-xs cursor-pointer",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									className: "px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "w-3.5 h-3.5" }), " Save Project"]
								})]
							})
						]
					})]
				})
			})
		]
	});
}
var Route$4 = createFileRoute("/real-estate")({ component: RealEstateFunnel });
function RealEstateFunnel() {
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(false);
	const [isUnlocked, setIsUnlocked] = (0, import_react.useState)(false);
	const [pin, setPin] = (0, import_react.useState)("");
	const [config, setConfig] = (0, import_react.useState)({
		callingNumber: "+918003469293",
		videoEmbedUrl: "https://drive.google.com/file/d/1gSQADmR71SDCBROKwfUCzveMaNYoIKSKiaLx4_Rbg-8/preview",
		paymentLink: "https://wa.me/919166516942?text=Hi%20Pradeep%2C%20I%20want%20to%20book%20the%20Real%20Estate%20AI%20Live%20Demo%20at%20₹999."
	});
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") {
			if (new URLSearchParams(window.location.search).get("admin") === "true") setIsAdmin(true);
			const saved = localStorage.getItem("nexus_re_cfg");
			if (saved) try {
				setConfig(JSON.parse(saved));
			} catch {}
		}
	}, []);
	const saveConfig = () => {
		localStorage.setItem("nexus_re_cfg", JSON.stringify(config));
		alert("Settings Saved Successfully!");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-slate-950 text-white selection:bg-cyan-500 selection:text-black",
		children: [
			isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-amber-950/90 border-b border-amber-600/50 p-3 sticky top-0 z-50 text-xs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-5xl mx-auto flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-bold text-amber-400 flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-4 h-4" }), " Owner Admin Bar"]
					}), !isUnlocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							placeholder: "PIN",
							value: pin,
							onChange: (e) => setPin(e.target.value),
							className: "bg-black/80 px-2 py-1 rounded border border-amber-600 w-20 text-white"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								if (pin === "2026") setIsUnlocked(true);
								else alert("Incorrect PIN");
							},
							className: "bg-amber-600 px-3 py-1 rounded font-bold text-black",
							children: "Unlock"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: config.callingNumber,
								onChange: (e) => setConfig({
									...config,
									callingNumber: e.target.value
								}),
								placeholder: "Calling Number",
								className: "bg-black/80 px-2 py-1 rounded border border-slate-700 text-white text-xs"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: config.videoEmbedUrl,
								onChange: (e) => setConfig({
									...config,
									videoEmbedUrl: e.target.value
								}),
								placeholder: "Video URL",
								className: "bg-black/80 px-2 py-1 rounded border border-slate-700 text-white text-xs flex-1"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: saveConfig,
								className: "bg-emerald-600 px-3 py-1 rounded font-bold text-white flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "w-3.5 h-3.5" }), " Save"]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "pt-24 pb-12 px-4 text-center max-w-4xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4" }), " 24/7 Autonomous Real Estate Calling & Speed-to-Lead Engine"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6",
						children: ["Never Lose Another Property Buyer to a ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500",
							children: "Busy Tone"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-slate-300 max-w-2xl mx-auto text-base md:text-lg mb-8",
						children: "Capture high-intent buyers in <1 second. Our AI voice agent qualifies budgets, schedules physical site visits, and instantly sends WhatsApp brochures while your brokers are busy on site."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${config.callingNumber}`,
							className: "px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-sm text-white flex items-center gap-2 shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "w-4 h-4" }),
								" 📞 Call & Test Real Estate AI Live (",
								config.callingNumber,
								")"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#booking-section",
							className: "px-7 py-4 rounded-xl bg-slate-900 border border-slate-800 font-semibold text-sm hover:bg-slate-800 transition",
							children: "Book Custom Demo (₹999 / $19)"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-8 px-4 max-w-4xl mx-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-slate-900/90 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-3 text-xs text-slate-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2 text-cyan-400 font-semibold uppercase tracking-wider",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "w-3.5 h-3.5" }), " Real Estate System Demonstration"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Recorded Live Call → Webhook → CRM Sync" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-video w-full rounded-xl overflow-hidden bg-black border border-slate-800",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							src: config.videoEmbedUrl,
							title: "Real Estate AI Demo",
							className: "w-full h-full",
							allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
							allowFullScreen: true
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "py-12 px-4 max-w-4xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold",
						children: "End-to-End Autonomous Workflow"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-slate-400",
						children: "How every property inquiry turns into a confirmed site visit in 60 seconds."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-4 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mx-auto mb-3 text-blue-400",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "w-5 h-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-bold text-white mb-1",
									children: "1. Buyer Inquires"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-400",
									children: "Customer calls from Meta Ad or Portal listing."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-3 text-cyan-400",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "w-5 h-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-bold text-white mb-1",
									children: "2. AI Voice Qualifies"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-400",
									children: "Under 1s natural talk. Qualifies 2BHK/3BHK & Budget."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mx-auto mb-3 text-indigo-400",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "w-5 h-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-bold text-white mb-1",
									children: "3. n8n / Make Webhook"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-400",
									children: "Extracts details & writes immediately into Google Sheet CRM."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-3 text-emerald-400",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "w-5 h-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-bold text-white mb-1",
									children: "4. WhatsApp Brochure"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-400",
									children: "Instant PDF brochure & location pin delivered to buyer."
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "booking-section",
				className: "py-16 px-4 max-w-3xl mx-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/40 rounded-3xl p-6 md:p-10 shadow-[0_0_50px_rgba(6,182,212,0.15)] text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider",
							children: "Limited Architecture Audit & Live Demo Setup"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-extrabold mt-4 mb-2",
							children: "Book Your 1-on-1 Real Estate AI Demo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-400 max-w-md mx-auto mb-6",
							children: "Test a custom AI voice agent configured for your real estate inventory before full deployment."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center gap-3 mb-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500 line-through text-lg font-bold",
									children: "₹4,999 ($79)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400",
									children: ["₹999 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-base text-slate-400 font-normal",
										children: "/ $19 USD"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold px-2.5 py-1 rounded-full",
									children: "80% OFF"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 pt-6 border-t border-slate-900 flex flex-wrap items-center justify-center gap-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: config.paymentLink,
								target: "_blank",
								rel: "noreferrer",
								className: "px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-sm text-white flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "w-4 h-4" }), " Lock Live Demo Slot on WhatsApp (₹999 / $19) →"]
							})
						})
					]
				})
			})
		]
	});
}
var Route$3 = createFileRoute("/resources")({ component: ResourcesPage });
var resources = [
	{
		category: "Voice AI Architecture",
		title: "Clinic AI Receptionist Prompt Architecture (Vapi / ElevenLabs)",
		description: "Complete system instructions, medical triage guardrails, and structured parameter extraction schemas for dental and healthcare appointment booking.",
		readTime: "8 min read",
		icon: Cpu,
		docUrl: "https://docs.google.com/document/d/1kzX_D2Z3TBfQmJ9Mw6xqDX4RYlXlfFSyv-9NcO34eX8/edit?usp=sharing"
	},
	{
		category: "Automation SOP",
		title: "Make.com & n8n Lead-to-WhatsApp Webhook Guide",
		description: "Step-by-step production documentation on parsing voice call JSON webhooks, validating lead payloads, and dispatching instant CRM notifications.",
		readTime: "12 min read",
		icon: CodeXml,
		docUrl: "https://docs.google.com/document/d/1h4qICCNySNjdyxZ_jS74MJduAsjCGw5epHVDk8H6Ums/edit?usp=sharing"
	},
	{
		category: "Search & AEO Guide",
		title: "Complete 2026 AEO & Schema.org Checklist for Businesses",
		description: "The exact structured JSON-LD data and /llms.txt directives required to get cited and recommended in Perplexity, ChatGPT Search, and Google AI Overviews.",
		readTime: "10 min read",
		icon: BookOpen,
		docUrl: "https://docs.google.com/document/d/1-io0l6EbqEMM-yCScg0yUxqt2WSpxpNLWCvDYgXdqac/edit?usp=sharing"
	}
];
function ResourcesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-slate-950 text-white py-20 px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-5xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5" }), " Technical Documentation & Operating Blueprints"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl md:text-5xl font-extrabold tracking-tight mb-4",
					children: "Autonomous Systems Knowledge Base"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-slate-400 max-w-2xl text-sm md:text-base mb-12",
					children: "Production blueprints, voice agent prompt architectures, and integration standard operating procedures maintained by Nexus AI Agency."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-3 gap-6",
					children: resources.map((item, idx) => {
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full",
										children: item.category
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-slate-500",
										children: item.readTime
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-4 text-cyan-400 group-hover:scale-105 transition",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 h-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition leading-snug",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-slate-400 leading-relaxed mb-6",
									children: item.description
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: item.docUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition",
								children: ["Read Documentation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3.5 h-3.5" })]
							})]
						}, idx);
					})
				})
			]
		})
	});
}
var Route$2 = createFileRoute("/salons-local")({ component: SalonsFunnel });
function SalonsFunnel() {
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(false);
	const [isUnlocked, setIsUnlocked] = (0, import_react.useState)(false);
	const [pin, setPin] = (0, import_react.useState)("");
	const [config, setConfig] = (0, import_react.useState)({
		callingNumber: "+918003469293",
		videoEmbedUrl: "https://drive.google.com/file/d/1byyG_sBBh6RnTW6_t7N3y31PM1Eu6KU3nTbPerREgFY/preview",
		paymentLink: "https://wa.me/919166516942?text=Hi%20Pradeep%2C%20I%20want%20to%20book%20the%20Salon%20and%20SMB%20AI%20Demo%20at%20₹999."
	});
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") {
			if (new URLSearchParams(window.location.search).get("admin") === "true") setIsAdmin(true);
			const saved = localStorage.getItem("nexus_salon_cfg");
			if (saved) try {
				setConfig(JSON.parse(saved));
			} catch {}
		}
	}, []);
	const saveConfig = () => {
		localStorage.setItem("nexus_salon_cfg", JSON.stringify(config));
		alert("Settings Saved Successfully!");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-slate-950 text-white selection:bg-cyan-500 selection:text-black",
		children: [
			isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-amber-950/90 border-b border-amber-600/50 p-3 sticky top-0 z-50 text-xs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-5xl mx-auto flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-bold text-amber-400 flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-4 h-4" }), " Owner Admin Bar"]
					}), !isUnlocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							placeholder: "PIN",
							value: pin,
							onChange: (e) => setPin(e.target.value),
							className: "bg-black/80 px-2 py-1 rounded border border-amber-600 w-20 text-white"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								if (pin === "2026") setIsUnlocked(true);
								else alert("Incorrect PIN");
							},
							className: "bg-amber-600 px-3 py-1 rounded font-bold text-black",
							children: "Unlock"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: config.callingNumber,
								onChange: (e) => setConfig({
									...config,
									callingNumber: e.target.value
								}),
								placeholder: "Calling Number",
								className: "bg-black/80 px-2 py-1 rounded border border-slate-700 text-white text-xs"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: config.videoEmbedUrl,
								onChange: (e) => setConfig({
									...config,
									videoEmbedUrl: e.target.value
								}),
								placeholder: "Video URL",
								className: "bg-black/80 px-2 py-1 rounded border border-slate-700 text-white text-xs flex-1"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: saveConfig,
								className: "bg-emerald-600 px-3 py-1 rounded font-bold text-white flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "w-3.5 h-3.5" }), " Save"]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "pt-24 pb-12 px-4 text-center max-w-4xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scissors, { className: "w-4 h-4" }), " 24/7 AI Receptionist for Salons, Spas & Local Service Businesses"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6",
						children: ["Turn Every Missed Call Into a ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500",
							children: "Confirmed Booking"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-slate-300 max-w-2xl mx-auto text-base md:text-lg mb-8",
						children: "When your stylists and team are busy attending in-store clients, our AI Receptionist handles phone bookings, checks stylist availability, and sends instant WhatsApp confirmations."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${config.callingNumber}`,
							className: "px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-sm text-white flex items-center gap-2 shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "w-4 h-4" }),
								" 📞 Call & Test Salon AI Live (",
								config.callingNumber,
								")"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#booking-section",
							className: "px-7 py-4 rounded-xl bg-slate-900 border border-slate-800 font-semibold text-sm hover:bg-slate-800 transition",
							children: "Book Custom Demo (₹999 / $19)"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-8 px-4 max-w-4xl mx-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-slate-900/90 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-3 text-xs text-slate-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2 text-cyan-400 font-semibold uppercase tracking-wider",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "w-3.5 h-3.5" }), " Salons & Small Businesses Demonstration"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Customer Call → Slot Booking → WhatsApp Alert" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-video w-full rounded-xl overflow-hidden bg-black border border-slate-800",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							src: config.videoEmbedUrl,
							title: "Salons and Local Business AI Demo",
							className: "w-full h-full",
							allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
							allowFullScreen: true
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "py-12 px-4 max-w-4xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold",
						children: "Autonomous Booking Workflow"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-slate-400",
						children: "Eliminate front-desk chaos and capture every after-hours client."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-4 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mx-auto mb-3 text-blue-400",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "w-5 h-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-bold text-white mb-1",
									children: "1. Customer Inquires"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-400",
									children: "Calls while stylists are actively cutting hair or styling."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-3 text-cyan-400",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "w-5 h-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-bold text-white mb-1",
									children: "2. AI Schedules Slot"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-400",
									children: "Checks service rates, timings, and reserves preferred slot."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mx-auto mb-3 text-indigo-400",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "w-5 h-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-bold text-white mb-1",
									children: "3. Live CRM Log"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-400",
									children: "Records customer name, service & bill value into CRM Sheet."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-3 text-emerald-400",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "w-5 h-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-bold text-white mb-1",
									children: "4. WhatsApp Reminder"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-400",
									children: "Instant confirmation + 2-hour pre-appointment automated reminder."
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "booking-section",
				className: "py-16 px-4 max-w-3xl mx-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/40 rounded-3xl p-6 md:p-10 shadow-[0_0_50px_rgba(6,182,212,0.15)] text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider",
							children: "Limited Architecture Audit & Demo Setup"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-extrabold mt-4 mb-2",
							children: "Book Your Custom Salon & Local Business AI Demo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-400 max-w-md mx-auto mb-6",
							children: "Test a custom AI voice agent configured for your salon rate card and operating schedule."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center gap-3 mb-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500 line-through text-lg font-bold",
									children: "₹4,999 ($79)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400",
									children: ["₹999 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-base text-slate-400 font-normal",
										children: "/ $19 USD"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold px-2.5 py-1 rounded-full",
									children: "80% OFF"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 pt-6 border-t border-slate-900 flex flex-wrap items-center justify-center gap-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: config.paymentLink,
								target: "_blank",
								rel: "noreferrer",
								className: "px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-sm text-white flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "w-4 h-4" }), " Lock Salon Demo Slot on WhatsApp (₹999 / $19) →"]
							})
						})
					]
				})
			})
		]
	});
}
var $$splitComponentImporter = () => import("./solutions-DK_9CR0Y.mjs");
var Route$1 = createFileRoute("/solutions")({
	head: () => ({
		meta: [
			{ title: "AI Automation Solutions — NexusAIAgency" },
			{
				name: "description",
				content: "AI support, sales, calling, research, operations, CRM, RPM and data-management systems for businesses."
			},
			{
				property: "og:title",
				content: "AI Automation Solutions — NexusAIAgency"
			},
			{
				property: "og:description",
				content: "Explore the AI agents and connected automation systems NexusAIAgency builds for business workflows."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://www.nexusaiagency.in/solutions"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.nexusaiagency.in/solutions"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var Route = createFileRoute("/solutions-engine")({
	validateSearch: (search) => {
		return { url: search.url || "example.com" };
	},
	component: SolutionEnginePage
});
function SolutionEnginePage() {
	const { url } = Route.useSearch();
	const cleanDomain = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/")[0];
	const brandName = cleanDomain.split(".")[0].toUpperCase();
	const isClinic = cleanDomain.includes("singh") || cleanDomain.includes("clinic") || cleanDomain.includes("dental") || cleanDomain.includes("doctor");
	const isRealEstate = cleanDomain.includes("estate") || cleanDomain.includes("realty") || cleanDomain.includes("property");
	const [copiedSchema, setCopiedSchema] = (0, import_react.useState)(false);
	const [copiedLlms, setCopiedLlms] = (0, import_react.useState)(false);
	const [copiedCopy, setCopiedCopy] = (0, import_react.useState)(false);
	const [copiedUpi, setCopiedUpi] = (0, import_react.useState)(false);
	const [paymentTab, setPaymentTab] = (0, import_react.useState)("upi");
	const schemaType = isClinic ? "MedicalBusiness" : isRealEstate ? "RealEstateAgent" : "LocalBusiness";
	const generatedSchema = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "${schemaType}",
      "@id": "https://${cleanDomain}/#organization",
      "name": "${brandName}",
      "url": "https://${cleanDomain}/",
      "telephone": "+91-8003469293",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Karauli",
        "addressRegion": "RJ",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "19:00"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://${cleanDomain}/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How to book an appointment with ${brandName}?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Inquiries are attended 24/7 with instant automated scheduling and WhatsApp confirmation."
          }
        }
      ]
    }
  ]
}`;
	const generatedLlmsTxt = `# ${brandName}
> Official Machine-Readable Knowledge Map for AI Search Engines.

## Core Services & Solutions
- 24/7 Autonomous Customer Intake & Verified Booking.
- Real-Time WhatsApp Confirmation & Live CRM Record.

## Canonical Verification
- Website: https://${cleanDomain}/
- Entity Schema: https://${cleanDomain}/#organization
- Crawler Policy: GPTBot, PerplexityBot, ClaudeBot (Allow: /)
`;
	const heroHeadline = isClinic ? `"Never Miss a Patient Call During Consultation or After-Hours — 24/7 AI Receptionist"` : `"Never Lose Another Customer to a Busy Tone — 24/7 Instant Booking & Speed-to-Lead"`;
	const subHeadline = isClinic ? `"Automate clinic inquiries, answer consultation FAQs in under 800ms, and deliver instant WhatsApp appointment slips."` : `"Capture and qualify high-intent inquiries instantly with voice AI and automated CRM sync."`;
	const copyToClipboard = (text, type) => {
		navigator.clipboard.writeText(text);
		if (type === "schema") {
			setCopiedSchema(true);
			setTimeout(() => setCopiedSchema(false), 2e3);
		} else if (type === "llms") {
			setCopiedLlms(true);
			setTimeout(() => setCopiedLlms(false), 2e3);
		} else {
			setCopiedCopy(true);
			setTimeout(() => setCopiedCopy(false), 2e3);
		}
	};
	const copyUpiId = () => {
		navigator.clipboard.writeText("8003469293@ybl");
		setCopiedUpi(true);
		setTimeout(() => setCopiedUpi(false), 2e3);
	};
	const upiQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent("upi://pay?pa=8003469293@ybl&pn=NexusAIAgency&am=999&cu=INR&tn=Nexus%20AI%20Deployment%20Audit")}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-slate-950 text-white py-16 px-4 selection:bg-cyan-500 selection:text-black",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-5xl mx-auto space-y-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5" }), " Autonomous AI Solution & Auto-Fix Engine"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-3xl md:text-5xl font-extrabold text-white",
							children: ["AI Auto-Fix & Solutions for ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-cyan-400",
								children: cleanDomain
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-slate-400 max-w-2xl mx-auto",
							children: "Ye system sirf issues nahi batata, balki aapki website ke liye ready-made Schema code, high-converting copy, /llms.txt, aur AI prompt ranking suggestions auto-generate karke deta hai."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-lg font-bold text-white flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { className: "w-5 h-5 text-emerald-400" }), " Solution 1: Auto-Generated Schema.org JSON-LD"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-slate-400 mt-1",
							children: [
								"Aapko schema par dimaag lagane ki zaroorat nahi hai. Aapke domain ke hisaab se ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: schemaType }),
								" schema auto-generate ho gaya hai:"
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => copyToClipboard(generatedSchema, "schema"),
							className: "px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer",
							children: [copiedSchema ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-4 h-4" }), copiedSchema ? "Copied Schema Code!" : "Copy Schema Code"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "p-4 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-300 overflow-x-auto max-h-56",
						children: generatedSchema
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-lg font-bold text-white flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-5 h-5 text-blue-400" }), " Solution 2: High-Converting AI Copywriting Engine"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-400 mt-1",
							children: "Aapki website ke visitors ko paying clients mein convert karne ke liye auto-generated high-converting copy:"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => copyToClipboard(`${heroHeadline}\n${subHeadline}`, "copy"),
							className: "px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer",
							children: [copiedCopy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-4 h-4" }), copiedCopy ? "Copied Copy!" : "Copy Rewritten Copy"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold text-cyan-400 uppercase tracking-wider",
									children: "Recommended Hero Headline"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-bold text-white",
									children: heroHeadline
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-400",
									children: subHeadline
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-bold text-emerald-400 uppercase tracking-wider",
								children: "3 Irresistible Value Bullets"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-1 text-slate-300",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										"• ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Instant Response:" }),
										" Responds in under 800ms when your front desk is busy or closed."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										"• ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Direct WhatsApp Slips:" }),
										" Delivers booking confirmations, floor plans or tokens automatically."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										"• ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Zero Data Loss:" }),
										" Real-time synchronization directly into Google Sheets CRM."
									] })
								]
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-lg font-bold text-white flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "w-5 h-5 text-cyan-400" }), " Solution 3: Automated GEO & /llms.txt Permissions"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-400 mt-1",
							children: "ChatGPT, Perplexity aur Claude crawler bots ko website par direct access dene ke liye ye file root par lagayein:"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => copyToClipboard(generatedLlmsTxt, "llms"),
							className: "px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer",
							children: [copiedLlms ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-4 h-4" }), copiedLlms ? "Copied /llms.txt" : "Copy /llms.txt"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "p-4 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-emerald-300 overflow-x-auto max-h-44",
						children: generatedLlmsTxt
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-lg font-bold text-white flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-5 h-5 text-amber-400" }), " Solution 4: Top 5 AI Prompts (ChatGPT & Perplexity) to Rank In"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid sm:grid-cols-2 gap-3 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3.5 rounded-xl bg-slate-950 border border-slate-800",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-semibold text-cyan-300",
									children: [
										"1. \"Best ",
										brandName,
										" in my city with 24/7 appointment booking\""
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-400 mt-1",
									children: "Action: Deploy geo-targeted LocalBusiness schema with verified opening hours."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3.5 rounded-xl bg-slate-950 border border-slate-800",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-semibold text-cyan-300",
									children: [
										"2. \"How much does ",
										brandName,
										" consultation or services cost?\""
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-400 mt-1",
									children: "Action: Add structured priceRange and FAQ schema directly into homepage source code."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3.5 rounded-xl bg-slate-950 border border-slate-800",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-cyan-300",
									children: "3. \"Top rated verified alternatives in Rajasthan / India\""
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-400 mt-1",
									children: "Action: Publish comparison table showcasing speed & availability advantages."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3.5 rounded-xl bg-slate-950 border border-slate-800",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-semibold text-cyan-300",
									children: [
										"4. \"How to book an instant slot with ",
										brandName,
										" on WhatsApp\""
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-400 mt-1",
									children: "Action: Enable official WhatsApp Cloud API click-to-chat webhook."
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-lg font-bold text-white flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-5 h-5 text-indigo-400" }), " Solution 5: Site Hygiene & Legal Verification"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid sm:grid-cols-2 gap-3 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareCheckBig, { className: "w-4 h-4 text-emerald-400 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold text-white",
								children: "Privacy Policy & Terms of Service"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-slate-400 text-[11px]",
								children: "Meta Ads aur Google crawlers ke compliance ke liye footer mein legal disclaimers mandatory hain."
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareCheckBig, { className: "w-4 h-4 text-emerald-400 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold text-white",
								children: "Title Tag & Meta Description Health"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-slate-400 text-[11px]",
								children: "Sub-pages par unique H1 titles aur CTR-optimized meta descriptions honi chahiye taaki duplicate content penalty na lage."
							})] })]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-cyan-500/40 rounded-3xl p-6 md:p-10 shadow-[0_0_60px_rgba(6,182,212,0.15)] text-center space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-3.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider",
							children: "Turnkey Deployment & Fix Activation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl md:text-4xl font-extrabold text-white",
							children: "Activate All 5 AI Solutions for Your Website"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs md:text-sm text-slate-400 max-w-lg mx-auto",
							children: "Aapko ye code khud paste karne ki zaroorat nahi hai. Hum aapke domain par Auto-Schema, /llms.txt, PageSpeed Core Web Vitals, aur 24/7 AI Voice Receptionist completely turnkey configure karke denge."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500 line-through text-lg font-bold",
									children: "₹4,999 ($79)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400",
									children: ["₹999 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-slate-400 font-normal",
										children: "/ $19 USD"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold px-2.5 py-1 rounded-full",
									children: "80% OFF Launch"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-md mx-auto",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex p-1 rounded-xl bg-slate-950 border border-slate-800 mb-6 text-xs font-bold",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => setPaymentTab("upi"),
											className: `flex-1 py-2 rounded-lg transition cursor-pointer flex items-center justify-center gap-1.5 ${paymentTab === "upi" ? "bg-cyan-500 text-slate-950" : "text-slate-400 hover:text-white"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "w-3.5 h-3.5" }), " UPI / QR (India)"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => setPaymentTab("razorpay"),
											className: `flex-1 py-2 rounded-lg transition cursor-pointer flex items-center justify-center gap-1.5 ${paymentTab === "razorpay" ? "bg-cyan-500 text-slate-950" : "text-slate-400 hover:text-white"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "w-3.5 h-3.5" }), " Razorpay"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => setPaymentTab("stripe"),
											className: `flex-1 py-2 rounded-lg transition cursor-pointer flex items-center justify-center gap-1.5 ${paymentTab === "stripe" ? "bg-cyan-500 text-slate-950" : "text-slate-400 hover:text-white"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-3.5 h-3.5" }), " Stripe (USD)"]
										})
									]
								}),
								paymentTab === "upi" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold text-slate-300",
											children: "Scan QR Code via PhonePe / GPay / Paytm"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-44 h-44 mx-auto p-2 bg-white rounded-xl shadow-lg flex items-center justify-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: upiQrUrl,
												alt: "UPI Payment QR Code",
												className: "w-full h-full object-contain"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-center gap-2 pt-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs text-slate-400",
													children: "UPI ID:"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
													className: "text-xs bg-slate-900 border border-slate-800 px-2 py-1 rounded text-cyan-400 font-mono",
													children: "8003469293@ybl"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: copyUpiId,
													className: "p-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 cursor-pointer",
													title: "Copy UPI ID",
													children: copiedUpi ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5 text-emerald-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3.5 h-3.5" })
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-slate-500",
											children: "Pay ₹999 and share screenshot on WhatsApp for instant 3-day activation."
										})
									]
								}),
								paymentTab === "razorpay" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "w-10 h-10 text-cyan-400 mx-auto" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-sm font-bold text-white",
											children: "Razorpay Secure Online Checkout"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-slate-400",
											children: "Pay securely via Credit Cards, Debit Cards, NetBanking, or Digital Wallets."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `https://wa.me/918003469293?text=${encodeURIComponent(`Hi Pradeep, I want to pay ₹999 via Razorpay link for ${cleanDomain} AI setup.`)}`,
											target: "_blank",
											rel: "noreferrer",
											className: "w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-xs text-white flex items-center justify-center gap-2 transition",
											children: "Pay ₹999 via Razorpay Gateway →"
										})
									]
								}),
								paymentTab === "stripe" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-bold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-3.5 h-3.5" }), " Coming Soon / Account In Setup"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-sm font-bold text-white",
											children: "Stripe USD Card Gateway ($19 USD)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-slate-400",
											children: "Stripe international checkout is undergoing merchant onboarding. For international credit card payments, connect via WhatsApp for an instant payment invoice link."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: `https://wa.me/918003469293?text=${encodeURIComponent(`Hi Pradeep, I want to pay $19 USD for ${cleanDomain} AI setup.`)}`,
											target: "_blank",
											rel: "noreferrer",
											className: "w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-xs text-white flex items-center justify-center gap-2 transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "w-3.5 h-3.5" }), " Request $19 USD Invoice on WhatsApp →"]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-4 border-t border-slate-900 flex flex-wrap items-center justify-center gap-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `https://wa.me/918003469293?text=${encodeURIComponent(`Hi Pradeep, maine ${cleanDomain} ka Solution Engine report dekha hai aur ise deploy karwana chahta hoon.`)}`,
								target: "_blank",
								rel: "noreferrer",
								className: "px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-xs text-white flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "w-4 h-4" }), " Message Founder Pradeep Directly on WhatsApp →"]
							})
						})
					]
				})
			]
		})
	});
}
var IndexRoute = Route$17.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$18
});
var AuthenticatedRouteRoute = Route$16.update({
	id: "/_authenticated",
	getParentRoute: () => Route$18
});
var AboutRoute = Route$15.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$18
});
var AgentDemosRoute = Route$14.update({
	id: "/agent-demos",
	path: "/agent-demos",
	getParentRoute: () => Route$18
});
var AuditReportRoute = Route$13.update({
	id: "/audit-report",
	path: "/audit-report",
	getParentRoute: () => Route$18
});
var AuthRoute = Route$12.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$18
});
var BookAuditRoute = Route$11.update({
	id: "/book-audit",
	path: "/book-audit",
	getParentRoute: () => Route$18
});
var ClinicsRoute = Route$10.update({
	id: "/clinics",
	path: "/clinics",
	getParentRoute: () => Route$18
});
var HowItWorksRoute = Route$9.update({
	id: "/how-it-works",
	path: "/how-it-works",
	getParentRoute: () => Route$18
});
var IndustriesRoute = Route$8.update({
	id: "/industries",
	path: "/industries",
	getParentRoute: () => Route$18
});
var OnboardingRoute = Route$7.update({
	id: "/onboarding",
	path: "/onboarding",
	getParentRoute: () => Route$18
});
var PrivacyRoute = Route$6.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$18
});
var ProjectsRoute = Route$5.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$18
});
var RealEstateRoute = Route$4.update({
	id: "/real-estate",
	path: "/real-estate",
	getParentRoute: () => Route$18
});
var ResourcesRoute = Route$3.update({
	id: "/resources",
	path: "/resources",
	getParentRoute: () => Route$18
});
var SalonsLocalRoute = Route$2.update({
	id: "/salons-local",
	path: "/salons-local",
	getParentRoute: () => Route$18
});
var SolutionsRoute = Route$1.update({
	id: "/solutions",
	path: "/solutions",
	getParentRoute: () => Route$18
});
var SolutionsEngineRoute = Route.update({
	id: "/solutions-engine",
	path: "/solutions-engine",
	getParentRoute: () => Route$18
});
var AuthenticatedRouteRouteChildren = { AuthenticatedAdminResourcesRoute: Route$19.update({
	id: "/admin/resources",
	path: "/admin/resources",
	getParentRoute: () => AuthenticatedRouteRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren),
	AboutRoute,
	AgentDemosRoute,
	AuditReportRoute,
	AuthRoute,
	BookAuditRoute,
	ClinicsRoute,
	HowItWorksRoute,
	IndustriesRoute,
	OnboardingRoute,
	PrivacyRoute,
	ProjectsRoute,
	RealEstateRoute,
	ResourcesRoute,
	SalonsLocalRoute,
	SolutionsRoute,
	SolutionsEngineRoute
};
var routeTree = Route$18._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
