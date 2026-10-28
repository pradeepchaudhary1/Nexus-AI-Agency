import { n as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Bo4nKw7z.mjs";
import { B as ExternalLink, H as Download, Q as CircleCheck, S as MessageSquare, T as Menu, W as CreditCard, a as Sun, c as Sparkles, ct as Bot, dt as ArrowRight, h as Save, k as Lock, p as Send, st as Braces, t as X, u as Shield, x as Moon, y as PhoneCall, z as FileText } from "../_libs/lucide-react.mjs";
import { S as useRouter, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, q as redirect, v as createFileRoute, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as Input } from "./input-BlEJlNY0.mjs";
import { a as formatDate, i as categoryMeta, s as iconFor, t as Route$15 } from "./admin.resources-DrwCE_TL.mjs";
import { t as createSsrRpc } from "./createSsrRpc-fQERfvAR.mjs";
import { t as supabase } from "./client-BmndfN-r.mjs";
import { n as useQuery, r as QueryClientProvider, t as queryOptions } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { _ as navItems, c as OfferCards, d as ProcessStrip, f as SectionHeading, h as WorkflowVisual, i as Faq, m as TrustPoints, o as IndustryPreview, p as ServicePreview, r as DemoLab, s as LeadForm, t as BookingBand, u as ProblemGrid, y as socials } from "./page-sections-Js0CCVme.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D9ItklmM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-D0-jo4kH.css";
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
var Route$14 = createRootRouteWithContext()({
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
	const { queryClient } = Route$14.useRouteContext();
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
function ResourceCard({ item }) {
	const Icon = iconFor(item.category, item.mime_type);
	const href = item.download_url ?? item.external_url;
	const locked = item.visibility !== "public";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "feature-card flex h-full flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "icon-box",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "size-5",
						"aria-hidden": true
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground",
					children: formatDate(item.created_at)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mt-5",
				children: categoryMeta(item.category).label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-2 font-display text-lg font-semibold",
				children: item.title
			}),
			item.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground",
				children: item.description
			}),
			item.category === "project" && (item.industry || item.outcome) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-3 space-y-1 text-xs text-muted-foreground",
				children: [item.industry && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "inline font-semibold text-foreground",
					children: "Industry: "
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "inline",
					children: item.industry
				})] }), item.outcome && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "inline font-semibold text-foreground",
					children: "Outcome: "
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "inline",
					children: item.outcome
				})] })]
			}),
			item.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-1.5",
				children: item.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "rounded-sm border border-border px-2 py-0.5 text-xs text-muted-foreground",
					children: ["#", t]
				}, t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-auto pt-6",
				children: locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					size: "sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/book-audit",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {}), " Request Access"]
					})
				}) : href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						target: "_blank",
						rel: "noreferrer",
						children: item.download_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}),
							" ",
							item.mime_type?.startsWith("video/") ? "View" : "Download"
						] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {}), " View"] })
					})
				}) : null
			})
		]
	});
}
var listPublicResources = createServerFn({ method: "GET" }).handler(createSsrRpc("402f694f19553d6aa73fed205462858f62628d92549c8a319fb6fc3044458ce6"));
var resourcesQuery = queryOptions({
	queryKey: ["public-resources"],
	queryFn: () => listPublicResources(),
	staleTime: 6e4
});
function LatestUpdates() {
	const { data } = useQuery(resourcesQuery);
	const items = data?.items.slice(0, 3) ?? [];
	if (items.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-pad",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "site-container",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Latest updates",
					title: "Fresh from the Client Hub."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceCard, { item }, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/resources",
							children: ["View all resources ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					})
				})
			]
		})
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[calc(100vh-4.5rem)] overflow-hidden border-b border-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "page-grid absolute inset-0 opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-container relative grid min-h-[calc(100vh-4.5rem)] items-center gap-12 py-16 lg:grid-cols-[1.15fr_.85fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "AI systems agency · India"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "display-title mt-6",
						children: [
							"Build an ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "AI workforce"
							}),
							" for your business."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lead-copy mt-7 max-w-3xl",
						children: "Deploy AI Support Agents, Sales Agents, Calling Agents, Research Agents, CRM automations and revenue systems—built around your real workflows, tools and team."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/book-audit",
								children: ["Get My Free AI Workflow Audit ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/agent-demos",
								children: "See Agent Demos"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-primary" }), "Custom workflow design"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "size-4 text-primary" }), "Calling & follow-up"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Braces, { className: "size-4 text-primary" }), "Connected operations"]
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-panel relative overflow-hidden p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Live system map"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2 text-xs text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-primary pulse-soft" }), "Ready"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-7 signal-line" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: [
								[
									"01",
									"Capture",
									"Website · WhatsApp · Calls"
								],
								[
									"02",
									"Understand",
									"Intent · Fit · Urgency"
								],
								[
									"03",
									"Act",
									"Book · Update · Follow up"
								]
							].map(([n, t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-[2.5rem_1fr] gap-3 rounded-md border border-border bg-surface p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-primary",
									children: n
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: t
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: d
								})] })]
							}, n))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center gap-3 rounded-md bg-primary p-4 text-primary-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold",
								children: "One coordinated AI workforce"
							})]
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-pad",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-container grid gap-10 lg:grid-cols-[.8fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "AI Readiness Audit",
					title: "Where is manual work costing you momentum?",
					copy: "Answer five practical questions. We’ll use them to identify where an AI agent or automation could create the clearest operational gain."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "glass-panel p-6 sm:p-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, { source: "readiness_audit" })
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-pad border-y border-border bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "The friction",
					title: "Revenue leaks hide inside ordinary work.",
					copy: "NexusAIAgency finds the moments where leads wait, context disappears and teams repeat work that software should handle."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProblemGrid, {})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-pad",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Meet your AI workforce",
					title: "Specialist agents. One connected operation.",
					copy: "Each system owns a clear job and works within defined guardrails, so automation supports your people rather than creating another tool to manage."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicePreview, {})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-pad border-y border-border bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Connected revenue system",
					title: "Turn scattered tools into one responsive workflow.",
					copy: "Forms, conversations, calls and data become coordinated signals—then the right follow-up happens in the right system."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkflowVisual, {})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-pad",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Agent Demo Lab",
						title: "See how the system thinks through the work.",
						copy: "Explore representative workflows. These are demonstrations, not claims about deployed client results."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoLab, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/agent-demos",
								children: ["Open the full demo lab ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-pad border-y border-border bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Industries",
						title: "Flexible systems, shaped to your operating reality.",
						copy: "Real estate is one of many industries we support—not the centre of the agency."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndustryPreview, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/industries",
								children: "Explore all industries"
							})
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-pad",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "How it works",
					title: "A disciplined path from bottleneck to working system."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessStrip, {})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-pad border-y border-border bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Ways to work together",
					title: "Start focused. Expand with evidence."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfferCards, {})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-pad",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-container grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Proof, honestly presented",
					title: "Built to become measurable—not dressed up with borrowed claims.",
					copy: "Until approved client case studies are available, every example is clearly marked as a demo workflow or pilot-ready system."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustPoints, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-panel p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Pilot-ready system"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-display text-2xl font-semibold",
							children: "Lead response orchestration"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 leading-7 text-muted-foreground",
							children: "A practical model connecting enquiry capture, qualification, CRM updates, human escalation and follow-up across the tools your team uses."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 rounded-md border border-dashed border-primary p-5 text-sm text-muted-foreground",
							children: "Demonstration architecture · Final scope depends on your tools, process and data readiness."
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LatestUpdates, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingBand, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-pad",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-container max-w-4xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "FAQ",
					title: "Questions before we map your workflow."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {})]
			})
		})
	] });
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
var Route$13 = createFileRoute("/")({
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
var $$splitComponentImporter$10 = () => import("./route-Di7iQBCH.mjs");
var Route$12 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({ to: "/auth" });
		return { user: data.user };
	},
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./about-BE2rA_IH.mjs");
var Route$11 = createFileRoute("/about")({
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
var $$splitComponentImporter$8 = () => import("./agent-demos-DnZ22Srj.mjs");
var Route$10 = createFileRoute("/agent-demos")({
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
var Route$9 = createFileRoute("/auth")({
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
var $$splitComponentImporter$6 = () => import("./book-audit-BKIssWHu.mjs");
var Route$8 = createFileRoute("/book-audit")({
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
var $$splitComponentImporter$5 = () => import("./how-it-works-DdbWXdRI.mjs");
var Route$7 = createFileRoute("/how-it-works")({
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
var $$splitComponentImporter$4 = () => import("./industries-mu74sfeQ.mjs");
var Route$6 = createFileRoute("/industries")({
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
var Route$5 = createFileRoute("/onboarding")({ component: OnboardingPage });
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
var $$splitComponentImporter$3 = () => import("./privacy-DNrdz8hg.mjs");
var Route$4 = createFileRoute("/privacy")({
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
var Route$3 = createFileRoute("/projects")({
	head: () => ({ meta: [{ title: "Our Projects & Verified Reviews — NexusAIAgency" }, {
		name: "description",
		content: "Explore real AI client deliverables, sheets, demos, and authentic client feedback for Nexus AI."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var Route$2 = createFileRoute("/real-estate")({ component: RealEstateFunnel });
function RealEstateFunnel() {
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(false);
	const [pinEntered, setPinEntered] = (0, import_react.useState)("");
	const [isUnlocked, setIsUnlocked] = (0, import_react.useState)(false);
	const [config, setConfig] = (0, import_react.useState)({
		callingNumber: "+918003469293",
		loomEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
		pdfDriveLink: "https://docs.google.com/document/d/1XZj1rZR7fBl3evCj52-BprzLBV92cMLgcf8rMLhGHM0/edit",
		paymentLink: "https://wa.me/918003469293?text=Hi%20Pradeep%2C%20I%20want%20to%20activate%20the%20Real%20Estate%20AI%20Suite."
	});
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") {
			if (new URLSearchParams(window.location.search).get("admin") === "true") setIsAdmin(true);
			const savedConfig = localStorage.getItem("nexus_re_config");
			if (savedConfig) try {
				setConfig(JSON.parse(savedConfig));
			} catch {}
		}
	}, []);
	const saveAdminConfig = () => {
		localStorage.setItem("nexus_re_config", JSON.stringify(config));
		alert("Settings saved successfully!");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-slate-950 text-white selection:bg-cyan-500 selection:text-black",
		children: [
			isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-amber-950/90 border-b border-amber-600/50 p-4 sticky top-0 z-50 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-4 h-4" }), " Owner Admin Control"]
					}), !isUnlocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							placeholder: "Enter PIN",
							value: pinEntered,
							onChange: (e) => setPinEntered(e.target.value),
							className: "bg-black/60 border border-amber-600/50 rounded px-2 py-1 text-xs text-white w-24 outline-none"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								if (pinEntered === "2026") setIsUnlocked(true);
								else alert("Incorrect PIN");
							},
							className: "px-3 py-1 bg-amber-600 text-black font-bold rounded text-xs",
							children: "Unlock"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3 text-xs w-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: config.callingNumber,
								onChange: (e) => setConfig({
									...config,
									callingNumber: e.target.value
								}),
								placeholder: "Calling Number",
								className: "bg-black/70 border border-slate-700 rounded px-2.5 py-1 text-slate-200"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: config.loomEmbedUrl,
								onChange: (e) => setConfig({
									...config,
									loomEmbedUrl: e.target.value
								}),
								placeholder: "Loom Embed URL",
								className: "bg-black/70 border border-slate-700 rounded px-2.5 py-1 text-slate-200 flex-1 min-w-[200px]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: config.pdfDriveLink,
								onChange: (e) => setConfig({
									...config,
									pdfDriveLink: e.target.value
								}),
								placeholder: "PDF Link",
								className: "bg-black/70 border border-slate-700 rounded px-2.5 py-1 text-slate-200"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: saveAdminConfig,
								className: "px-3.5 py-1 bg-emerald-600 hover:bg-emerald-500 font-bold text-white rounded flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "w-3.5 h-3.5" }), " Save Changes"]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "pt-20 pb-12 px-4 text-center max-w-4xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4" }), " 24/7 Real Estate Lead Capture & Calling Engine"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6",
						children: [
							"Never Lose Another Property Buyer to a",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500",
								children: "Busy Tone"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-8",
						children: "Jab aapke brokers site par hote hain, hamari AI Receptionist har buyer call 1 second mein attend karke unka budget qualify karti hai, site visits book karti hai aur WhatsApp par brochure deliver karti hai."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${config.callingNumber}`,
							className: "px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-sm text-white flex items-center gap-2 shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "w-4 h-4" }),
								" 📞 Call & Test Real Estate AI Live (",
								config.callingNumber,
								")"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: config.pdfDriveLink,
							target: "_blank",
							rel: "noreferrer",
							className: "px-6 py-4 rounded-xl bg-slate-900 border border-slate-700 font-semibold text-sm flex items-center gap-2 hover:bg-slate-800 transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-4 h-4 text-cyan-400" }), " View System Architecture PDF"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-10 px-4 max-w-4xl mx-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-slate-900/90 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-wider text-slate-300",
								children: "Live System Demonstration"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-cyan-400",
							children: "Phone Call → CRM → WhatsApp Sync"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-video w-full rounded-xl overflow-hidden bg-black border border-slate-800",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							src: config.loomEmbedUrl,
							title: "Real Estate AI Demonstration",
							className: "w-full h-full",
							allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
							allowFullScreen: true
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "py-12 px-4 max-w-3xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl md:text-3xl font-bold mb-2",
						children: "Configure Your Real Estate AI Workforce"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-slate-400",
						children: "Select modules and get your custom blueprint within 10 minutes."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "py-12 px-4 text-center max-w-2xl mx-auto border-t border-slate-900",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-bold mb-2",
						children: "Ready to Launch Your 24/7 AI Sales Desk?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-slate-400 mb-6",
						children: "Setup live in 3 to 5 business days with direct founder support."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: config.paymentLink,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-sm text-white shadow-lg shadow-emerald-600/30 transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "w-4 h-4" }), " Activate Real Estate AI Setup Now →"]
					})
				]
			})
		]
	});
}
var $$splitComponentImporter$1 = () => import("./resources-BfCTGgoH.mjs");
var Route$1 = createFileRoute("/resources")({
	head: () => ({ meta: [{ title: "Free AI Resources & Blueprints — NexusAIAgency" }, {
		name: "description",
		content: "Download free prompt packs, AI voice receptionist templates, and automation guides by Nexus AI."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./solutions-DjEtrE8B.mjs");
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
var IndexRoute = Route$13.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$14
});
var AuthenticatedRouteRoute = Route$12.update({
	id: "/_authenticated",
	getParentRoute: () => Route$14
});
var AboutRoute = Route$11.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$14
});
var AgentDemosRoute = Route$10.update({
	id: "/agent-demos",
	path: "/agent-demos",
	getParentRoute: () => Route$14
});
var AuthRoute = Route$9.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$14
});
var BookAuditRoute = Route$8.update({
	id: "/book-audit",
	path: "/book-audit",
	getParentRoute: () => Route$14
});
var HowItWorksRoute = Route$7.update({
	id: "/how-it-works",
	path: "/how-it-works",
	getParentRoute: () => Route$14
});
var IndustriesRoute = Route$6.update({
	id: "/industries",
	path: "/industries",
	getParentRoute: () => Route$14
});
var OnboardingRoute = Route$5.update({
	id: "/onboarding",
	path: "/onboarding",
	getParentRoute: () => Route$14
});
var PrivacyRoute = Route$4.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$14
});
var ProjectsRoute = Route$3.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$14
});
var RealEstateRoute = Route$2.update({
	id: "/real-estate",
	path: "/real-estate",
	getParentRoute: () => Route$14
});
var ResourcesRoute = Route$1.update({
	id: "/resources",
	path: "/resources",
	getParentRoute: () => Route$14
});
var SolutionsRoute = Route.update({
	id: "/solutions",
	path: "/solutions",
	getParentRoute: () => Route$14
});
var AuthenticatedRouteRouteChildren = { AuthenticatedAdminResourcesRoute: Route$15.update({
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
	OnboardingRoute,
	PrivacyRoute,
	ProjectsRoute,
	RealEstateRoute,
	ResourcesRoute,
	SolutionsRoute
};
var routeTree = Route$14._addFileChildren(rootRouteChildren)._addFileTypes();
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
