import { n as __toESM } from "../_runtime.mjs";
import { S as useRouter, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, q as redirect, v as createFileRoute, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Input, r as cn, t as Button } from "./input-CoMjb9dx.mjs";
import { t as supabase } from "./client-BYORb8J2.mjs";
import { t as Textarea } from "./textarea-eWIi0ObL.mjs";
import { t as Route$13 } from "./admin.resources-YJkHxNlP.mjs";
import { F as ExternalLink, N as FolderGit2, O as Linkedin, P as FileText, S as Menu, W as CirclePlus, a as Sun, b as MessageSquare, c as Sparkles, f as Send, g as Phone, i as Trash2, it as ArrowRight, nt as BookOpen, rt as Award, s as Star, t as X, tt as Bot, u as ShieldCheck, w as Mail, y as Moon } from "../_libs/lucide-react.mjs";
import { r as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { o as socials, r as navItems } from "./site-data-7jYqz378.mjs";
import { a as CardTitle, i as CardHeader, n as Card, r as CardContent, t as Badge } from "./card-nfBv1DmC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-bHTPK-II.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CCCxvmnD.css";
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
		text: "Hello! I'm Zoya, your AI workforce assistant at Nexus AI. How can I help your business automate today?"
	}]);
	const [input, setInput] = (0, import_react.useState)("");
	const buttonRef = (0, import_react.useRef)(null);
	const [offset, setOffset] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	(0, import_react.useEffect)(() => {
		let animId;
		let targetX = 0;
		let targetY = 0;
		let currentX = 0;
		let currentY = 0;
		const handleMouseMove = (e) => {
			if (!buttonRef.current || open) {
				targetX = 0;
				targetY = 0;
				return;
			}
			const rect = buttonRef.current.getBoundingClientRect();
			const centerX = rect.left + rect.width / 2;
			const centerY = rect.top + rect.height / 2;
			const distX = e.clientX - centerX;
			const distY = e.clientY - centerY;
			const distance = Math.hypot(distX, distY);
			if (distance < 250) {
				const pull = (1 - distance / 250) * 26;
				targetX = distX / distance * pull;
				targetY = distY / distance * pull;
			} else {
				const normX = e.clientX / window.innerWidth - .5;
				const normY = e.clientY / window.innerHeight - .5;
				targetX = normX * 14;
				targetY = normY * 14;
			}
		};
		const handleMouseLeave = () => {
			targetX = 0;
			targetY = 0;
		};
		const animate = () => {
			currentX += (targetX - currentX) * .12;
			currentY += (targetY - currentY) * .12;
			setOffset({
				x: currentX,
				y: currentY
			});
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
	const handleSend = (e) => {
		e.preventDefault();
		if (!input.trim()) return;
		const userText = input;
		setMessages((prev) => [...prev, {
			sender: "user",
			text: userText
		}]);
		setInput("");
		setTimeout(() => {
			setMessages((prev) => [...prev, {
				sender: "bot",
				text: "Thank you for reaching out! You can also connect directly with Pradeep on WhatsApp at +91 80034 69293 or click 'Scan Your Site' to audit your AEO readiness."
			}]);
		}, 800);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: buttonRef,
		style: {
			transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
			transition: "transform 0.08s cubic-bezier(0.2, 0.8, 0.2, 1)"
		},
		className: "fixed bottom-6 right-6 z-50 pointer-events-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => setOpen(!open),
			"aria-label": "Open AI chat assistant",
			className: "size-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 flex items-center justify-center shadow-xl shadow-emerald-500/25 border-2 border-emerald-400/40 transition-transform active:scale-95 group",
			children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6 text-slate-950 transition-transform group-hover:rotate-90 duration-200" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-6 text-slate-950 fill-slate-950 transition-transform group-hover:scale-110 duration-200" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -top-1 -right-1 size-2.5 rounded-full bg-emerald-200 animate-ping" })]
			})
		})
	}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-24 right-6 z-50 w-[92vw] sm:w-[380px] h-[500px] max-h-[80vh] rounded-2xl border border-border bg-card shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-4 border-b border-border bg-muted/40 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-8 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "size-4.5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
						className: "text-sm font-bold flex items-center gap-1.5 text-foreground",
						children: ["Zoya ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3 text-emerald-500" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted-foreground",
						children: "Nexus AI Solutions Assistant"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen(false),
					className: "text-muted-foreground hover:text-foreground p-1 rounded-md",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 p-4 overflow-y-auto space-y-3 text-xs",
				children: messages.map((msg, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${msg.sender === "user" ? "bg-primary text-primary-foreground rounded-br-xs" : "bg-muted text-foreground border border-border/50 rounded-bl-xs"}`,
						children: msg.text
					})
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSend,
				className: "p-3 border-t border-border bg-card flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: input,
					onChange: (e) => setInput(e.target.value),
					placeholder: "Ask about AI voice agents...",
					className: "h-10 text-xs"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "sm",
					className: "h-10 px-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold",
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
	});
}
var $$splitComponentImporter$8 = () => import("./routes-Cv-uzg_-.mjs");
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
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./route-Di7iQBCH.mjs");
var Route$10 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({ to: "/auth" });
		return { user: data.user };
	},
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var founder_pradeep_default = "/assets/founder-pradeep-Dp1Pnjpv.png";
var ai_specialist_certificate_default = "/assets/ai-specialist-certificate-C6xoD2pD.jpeg";
var founderSrc = founder_pradeep_default;
var certSrc = ai_specialist_certificate_default;
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
	component: AboutPage
});
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "site-container py-12 max-w-5xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-20 border-b border-border/50 pb-14 pt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3",
						children: "ABOUT NEXUSAIAGENCY"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.15] mb-5",
						children: "Human strategy. Machine efficiency. Better business systems."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed mb-8",
						children: "NexusAIAgency was founded to help businesses respond faster, manage customer journeys more clearly and remove repetitive work with responsible automation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://wa.me/918003469293?text=Hi%20Pradeep,%20I%20want%20to%20discuss%20an%20AI%20automation%20project%20for%20my%20business.",
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-500 text-slate-950 font-semibold px-6 py-3.5 rounded-lg text-sm transition-all shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Talk to Founder" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 items-center mb-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative group mx-auto w-full max-w-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-muted shadow-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: founderSrc,
							alt: "Pradeep Chaudhary",
							className: "w-full h-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -bottom-3 -right-3 bg-card border border-border rounded-xl p-3 shadow-lg flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-5 h-5 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-[11px] leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold text-foreground",
								children: "Verified AI Specialist"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: "Barleti University Accredited"
							})]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							className: "bg-primary/10 text-primary border-primary/20 text-xs",
							children: "Founder & AI Solutions Architect"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl md:text-5xl font-bold tracking-tight text-foreground",
							children: "Pradeep Chaudhary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm md:text-base text-muted-foreground leading-relaxed",
							children: "AI specialist focused on turning real operating problems into autonomous, reliable systems. We map where customer inquiries stall, follow-ups break, and calls are missed—then engineer a practical AI workforce with defined responsibilities and zero lead leakage."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs md:text-sm text-muted-foreground leading-relaxed",
							children: "Engineering background combining mega-scale industrial operations (up to 600 MW projects) with cutting-edge Agentic AI, Website AEO Optimization, Chatbot's, Voice Calling Agents, and event-driven webhook pipelines."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-2 flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.linkedin.com/in/pradeep-kumar-dagur-a49a86239/",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										size: "sm",
										className: "text-xs gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "w-3.5 h-3.5 text-blue-500" }), " Connect on LinkedIn"]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:thenexusaiagency@gmail.com",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										size: "sm",
										className: "text-xs gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-3.5 h-3.5" }), " Email Direct"]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://wa.me/919166516942",
									target: "_blank",
									rel: "noreferrer",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										className: "text-xs gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-3.5 h-3.5" }), " WhatsApp Call"]
									})
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border/50 pt-14 pb-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3",
							children: "CERTIFIED LEARNING"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-5",
							children: "AI and management foundations."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm md:text-base text-muted-foreground leading-relaxed mb-6",
							children: "Pradeep Chaudhary has been recognized for completing an AI specialist program from Canadian Labs of AI and Management, powered by Optume.ai, Umirai.ai and AppDaddy.ai."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5 text-sm font-medium text-emerald-400",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Certificate ID D9FB-8ACE98" })]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl overflow-hidden border border-border shadow-2xl aspect-[16/10] bg-muted flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: certSrc,
							alt: "AI Specialist Program Certificate awarded to Pradeep Chaudhary",
							className: "w-full h-full object-cover"
						})
					})]
				})
			})
		]
	});
}
var $$splitComponentImporter$6 = () => import("./agent-demos-lk03PrJB.mjs");
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
				content: "https://nexus-ai-solution.lovable.app/agent-demos"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://nexus-ai-solution.lovable.app/agent-demos"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./auth-H8Q3uUwq.mjs");
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
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./book-audit-Bfq_Oc-1.mjs");
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
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./how-it-works-BoxNG2xE.mjs");
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
				content: "https://nexus-ai-solution.lovable.app/how-it-works"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://nexus-ai-solution.lovable.app/how-it-works"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./industries-xpPNpjTW.mjs");
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
				content: "https://nexus-ai-solution.lovable.app/industries"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://nexus-ai-solution.lovable.app/industries"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./privacy-C-cWt0It.mjs");
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
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var Route$2 = createFileRoute("/projects")({
	head: () => ({ meta: [{ title: "Our Projects & Client Work — NexusAIAgency" }, {
		name: "description",
		content: "Explore our real AI client deliverables, sheets, videos, and verified reviews."
	}] }),
	component: ProjectsPage
});
function ProjectsPage() {
	const [items, setItems] = (0, import_react.useState)([]);
	const [title, setTitle] = (0, import_react.useState)("");
	const [type, setType] = (0, import_react.useState)("Video / Demo Call");
	const [link, setLink] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const saved = localStorage.getItem("nexus_client_projects");
		if (saved) try {
			setItems(JSON.parse(saved));
		} catch (e) {
			console.error(e);
		}
	}, []);
	const handleAdd = (e) => {
		e.preventDefault();
		if (!title.trim() || !link.trim()) return;
		const updated = [{
			id: Date.now().toString(),
			title,
			type,
			link,
			notes
		}, ...items];
		setItems(updated);
		localStorage.setItem("nexus_client_projects", JSON.stringify(updated));
		setTitle("");
		setLink("");
		setNotes("");
		setOpen(false);
	};
	const handleDelete = (id) => {
		const updated = items.filter((x) => x.id !== id);
		setItems(updated);
		localStorage.setItem("nexus_client_projects", JSON.stringify(updated));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "site-container py-12 max-w-6xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 pb-6 border-b border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						className: "mb-2 bg-primary/10 text-primary border-primary/20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderGit2, { className: "w-3.5 h-3.5 mr-1 inline" }), " Projects Vault"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl md:text-4xl font-bold tracking-tight text-foreground",
						children: "Our Projects & Deliverables"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Manage and view live project deliverables, client sheets, and video demonstrations."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
					open,
					onOpenChange: setOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "bg-primary text-primary-foreground text-xs gap-1.5 h-9",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlus, { className: "w-4 h-4" }), " Add Project / File / Sheet"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
						className: "max-w-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "text-base font-bold",
							children: "Add Deliverable or Project"
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleAdd,
							className: "space-y-3 mt-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold",
									children: "Title"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: title,
									onChange: (e) => setTitle(e.target.value),
									placeholder: "e.g. Dental Clinic Sofia Call Recording",
									className: "h-9 text-xs mt-1",
									required: true
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold",
									children: "Deliverable Type"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: type,
									onChange: (e) => setType(e.target.value),
									className: "w-full h-9 text-xs rounded-md border border-input bg-background px-3 mt-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Video / Demo Call",
											children: "Video / Demo Call"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Google Sheet / Doc",
											children: "Google Sheet / Doc"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Live Client Website",
											children: "Live Client Website"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Prompt / SOP",
											children: "Prompt / SOP"
										})
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold",
									children: "Link (YouTube, Loom, Google Sheet, or Web URL)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: link,
									onChange: (e) => setLink(e.target.value),
									placeholder: "https://...",
									className: "h-9 text-xs mt-1",
									required: true
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold",
									children: "Description / Notes"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: notes,
									onChange: (e) => setNotes(e.target.value),
									placeholder: "Short notes about this deliverable...",
									className: "text-xs mt-1 min-h-[60px]"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									className: "w-full h-9 text-xs font-medium mt-2",
									children: "Save to Vault"
								})
							]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16",
				children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-full text-center py-12 border border-dashed rounded-2xl text-muted-foreground text-sm",
					children: [
						"No projects added yet. Click ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "\"Add Project / File / Sheet\"" }),
						" above to upload your first video, Google sheet, or link."
					]
				}) : items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "border flex flex-col justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
						className: "pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "outline",
							className: "w-fit text-[10px] mb-1",
							children: item.type
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "text-base font-bold",
							children: item.title
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						className: "space-y-4 pt-0",
						children: [item.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: item.notes
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-2 border-t flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: item.link,
								target: "_blank",
								rel: "noreferrer",
								className: "flex-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "default",
									size: "sm",
									className: "w-full text-xs h-8 gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3.5 h-3.5" }), " View Deliverable"]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "sm",
								className: "h-8 px-2 text-destructive",
								onClick: () => handleDelete(item.id),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-3.5 h-3.5" })
							})]
						})]
					})]
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "p-8 rounded-2xl bg-muted/30 border border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-xl font-bold text-foreground mb-4 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "text-amber-500 fill-amber-500 w-5 h-5" }), " Client Reviews & Verification"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 rounded-xl bg-card border text-xs space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex text-amber-500",
								children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-3.5 h-3.5 fill-amber-500" }, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "italic text-muted-foreground",
								children: "\"Nexus AI automated our clinic missed calls completely. Sofia handles 20+ patient inquiries every evening without staff intervention.\""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold text-foreground",
								children: "— Dr. R. Verma, Dental Practice"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 rounded-xl bg-card border text-xs space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex text-amber-500",
								children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-3.5 h-3.5 fill-amber-500" }, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "italic text-muted-foreground",
								children: "\"The Aanya voice agent screens buyers on budget and location before they book site visits, saving our agents 15+ hours weekly.\""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold text-foreground",
								children: "— Urban Nest Properties"
							})
						]
					})]
				})]
			})
		]
	});
}
var Route$1 = createFileRoute("/resources")({
	head: () => ({ meta: [{ title: "Free AI Resources & Blueprints — NexusAIAgency" }, {
		name: "description",
		content: "Download free prompt packs, AI voice receptionist templates, and automation guides by Nexus AI."
	}] }),
	component: ResourcesPage
});
function ResourcesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "site-container py-12 max-w-5xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center max-w-2xl mx-auto mb-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					className: "mb-2 bg-primary/10 text-primary border-primary/20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-3.5 h-3.5 mr-1 inline" }), " Free Agency Knowledge Vault"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl md:text-5xl font-bold tracking-tight text-foreground",
					children: "AI Toolkits, SOPs & Blueprints"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Free operational templates to help business owners understand voice AI and autonomous workflows."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 md:grid-cols-3 gap-6",
			children: [
				{
					title: "Clinic AI Receptionist Prompt Architecture (Vapi/ElevenLabs)",
					category: "Voice AI Blueprint",
					description: "Complete system instructions and triage prompt template for dental and healthcare appointment booking.",
					downloadLink: "https://docs.google.com/document/d/1eVNmPV1-1C4CPP5DUI6aXKQjpm6jJsG7EjVMGRlQ2qk/edit"
				},
				{
					title: "Make.com & n8n Lead-to-WhatsApp Webhook Guide",
					category: "Automation SOP",
					description: "Step-by-step documentation on parsing voice call JSON webhooks and dispatching instant CRM notifications.",
					downloadLink: "https://docs.google.com/document/d/1eVNmPV1-1C4CPP5DUI6aXKQjpm6jJsG7EjVMGRlQ2qk/edit"
				},
				{
					title: "Complete 2026 AEO & Schema.org Checklist for Businesses",
					category: "SEO/AEO Guide",
					description: "The exact structured data and llms.txt directives required to get cited in Perplexity and ChatGPT search.",
					downloadLink: "https://docs.google.com/document/d/1eVNmPV1-1C4CPP5DUI6aXKQjpm6jJsG7EjVMGRlQ2qk/edit"
				}
			].map((res, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "border hover:shadow-md transition-all flex flex-col justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					className: "pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "w-fit text-[10px] mb-2",
						children: res.category
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-sm font-bold leading-snug",
						children: res.title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "space-y-4 pt-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: res.description
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: res.downloadLink,
						target: "_blank",
						rel: "noreferrer",
						className: "block w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							className: "w-full text-xs gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-3.5 h-3.5" }), " Read Documentation"]
						})
					})]
				})]
			}, i))
		})]
	});
}
var $$splitComponentImporter = () => import("./solutions-DrjoLylw.mjs");
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
				content: "https://nexus-ai-solution.lovable.app/solutions"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://nexus-ai-solution.lovable.app/solutions"
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
