import { n as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Bo4nKw7z.mjs";
import { C as Menu, a as Sun, b as MessageSquare, c as Sparkles, f as Send, lt as ArrowRight, ot as Bot, t as X, y as Moon } from "../_libs/lucide-react.mjs";
import { S as useRouter, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, q as redirect, v as createFileRoute, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Input } from "./input-BlEJlNY0.mjs";
import { t as supabase } from "./client-BmndfN-r.mjs";
import { t as Route$13 } from "./admin.resources-CvgOEDYK.mjs";
import { r as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { o as socials, r as navItems } from "./site-data-7jYqz378.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-OkjtS284.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BZyrKc1H.css";
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
var Route$12 = createRootRouteWithContext()({
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
	const { queryClient } = Route$12.useRouteContext();
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
var $$splitComponentImporter$11 = () => import("./routes-CHvFuFdL.mjs");
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
var Route$11 = createFileRoute("/")({
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
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./route-Di7iQBCH.mjs");
var Route$10 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({ to: "/auth" });
		return { user: data.user };
	},
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./about-BE2rA_IH.mjs");
var Route$9 = createFileRoute("/about")({
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
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./agent-demos-DI1BB_UU.mjs");
var Route$8 = createFileRoute("/agent-demos")({
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
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./auth-BeWmSuci.mjs");
var Route$7 = createFileRoute("/auth")({
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
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./book-audit-C4OZjnID.mjs");
var Route$6 = createFileRoute("/book-audit")({
	head: () => ({
		meta: [
			{ title: "Free AEO & Website Audit Scanner — NexusAIAgency" },
			{
				name: "description",
				content: "Scan your website for Schema.org, AEO readiness (ChatGPT/Perplexity), voice search compliance, and missed-call risks with NexusAIAgency."
			},
			{
				property: "og:title",
				content: "Free AEO & Website Audit Scanner — NexusAIAgency"
			},
			{
				property: "og:description",
				content: "Instant website audit for AI search engine optimization, Schema markup, and automation recommendations."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://www.nexusaiagency.in/book-audit"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.nexusaiagency.in/book-audit"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./how-it-works-yY6gtI1C.mjs");
var Route$5 = createFileRoute("/how-it-works")({
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
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./industries-CNsnThHT.mjs");
var Route$4 = createFileRoute("/industries")({
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
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./privacy-D6ogZQHn.mjs");
var Route$3 = createFileRoute("/privacy")({
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
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./projects-BLquehQw.mjs");
var Route$2 = createFileRoute("/projects")({
	head: () => ({ meta: [{ title: "Our Projects & Verified Reviews — NexusAIAgency" }, {
		name: "description",
		content: "Explore real AI client deliverables, sheets, demos, and authentic client feedback for Nexus AI."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./resources-BfCTGgoH.mjs");
var Route$1 = createFileRoute("/resources")({
	head: () => ({ meta: [{ title: "Free AI Resources & Blueprints — NexusAIAgency" }, {
		name: "description",
		content: "Download free prompt packs, AI voice receptionist templates, and automation guides by Nexus AI."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./solutions-Blh-RJdM.mjs");
var Route = createFileRoute("/solutions")({
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
var IndexRoute = Route$11.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$12
});
var AuthenticatedRouteRoute = Route$10.update({
	id: "/_authenticated",
	getParentRoute: () => Route$12
});
var AboutRoute = Route$9.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$12
});
var AgentDemosRoute = Route$8.update({
	id: "/agent-demos",
	path: "/agent-demos",
	getParentRoute: () => Route$12
});
var AuthRoute = Route$7.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$12
});
var BookAuditRoute = Route$6.update({
	id: "/book-audit",
	path: "/book-audit",
	getParentRoute: () => Route$12
});
var HowItWorksRoute = Route$5.update({
	id: "/how-it-works",
	path: "/how-it-works",
	getParentRoute: () => Route$12
});
var IndustriesRoute = Route$4.update({
	id: "/industries",
	path: "/industries",
	getParentRoute: () => Route$12
});
var PrivacyRoute = Route$3.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$12
});
var ProjectsRoute = Route$2.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$12
});
var ResourcesRoute = Route$1.update({
	id: "/resources",
	path: "/resources",
	getParentRoute: () => Route$12
});
var SolutionsRoute = Route.update({
	id: "/solutions",
	path: "/solutions",
	getParentRoute: () => Route$12
});
var AuthenticatedRouteRouteChildren = { AuthenticatedAdminResourcesRoute: Route$13.update({
	id: "/admin/resources",
	path: "/admin/resources",
	getParentRoute: () => AuthenticatedRouteRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren),
	AboutRoute,
	AgentDemosRoute,
	AuthRoute,
	BookAuditRoute,
	HowItWorksRoute,
	IndustriesRoute,
	PrivacyRoute,
	ProjectsRoute,
	ResourcesRoute,
	SolutionsRoute
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
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
