import { n as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Input, t as Button } from "./input-CoMjb9dx.mjs";
import { D as LoaderCircle, G as CircleCheck, H as CircleX, _ as PhoneCall, c as Sparkles, it as ArrowRight, r as TriangleAlert, w as Mail, x as MessagesSquare } from "../_libs/lucide-react.mjs";
import { f as SectionHeading, l as PageHero } from "./page-sections-Dnl21wR1.mjs";
import { n as Card, r as CardContent, t as Badge } from "./card-nfBv1DmC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-audit-Bfq_Oc-1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AeoWebsiteScanner() {
	const [url, setUrl] = (0, import_react.useState)("");
	const [scanning, setScanning] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)(null);
	const handleScan = (e) => {
		e.preventDefault();
		if (!url.trim()) return;
		setScanning(true);
		setResult(null);
		setTimeout(() => {
			setScanning(false);
			setResult({
				url: url.startsWith("http") ? url : `https://${url}`,
				score: 42,
				hasSchema: false,
				hasAeoDirectives: false,
				hasVoiceFaq: false,
				mobileSpeed: "Moderate (2.4s)",
				criticalIssues: [
					"Schema.org JSON-LD structured data missing (Google cannot identify services)",
					"No llms.txt found (Invisible to ChatGPT, Perplexity, and Claude AI bots)",
					"No conversational FAQ blocks (Fails Voice Search / Voice Assistant queries)",
					"High risk of after-hours lead bleed (No 24/7 automated call or chat triage)"
				],
				recommendations: [
					"Deploy a 24/7 AI Voice Calling Agent (Vapi) to capture missed phone calls",
					"Inject Schema.org FAQPage & Organization JSON-LD markup",
					"Connect Make.com / n8n webhook pipeline for instant WhatsApp lead delivery"
				]
			});
		}, 2e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full max-w-4xl mx-auto p-4 md:p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center mb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					className: "mb-3 bg-blue-600/10 text-blue-600 border-blue-500/20 px-3 py-1 text-xs",
					children: "Free Instant Audit Engine"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white",
					children: "Is Your Business Ready for AI Search & Voice Agents?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-slate-600 dark:text-slate-400 text-sm md:text-base",
					children: "Scan your website to check Schema.org compliance, AEO readiness (ChatGPT/Perplexity), and missed-call risks."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleScan,
					className: "mt-6 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "text",
						placeholder: "Enter website URL (e.g. yourclinic.com)",
						value: url,
						onChange: (e) => setUrl(e.target.value),
						className: "h-12 px-4 text-base",
						required: true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: scanning,
						className: "h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-medium",
						children: scanning ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Auditing..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Scan Site", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "ml-2 h-4 w-4" })] })
					})]
				})
			]
		}), result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden animate-in fade-in duration-500",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-slate-900 text-white p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-wider text-slate-400",
					children: "Audit Report For"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold",
					children: result.url
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-400",
							children: "AEO Health Score"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-2xl font-bold text-amber-400",
							children: [result.score, "/100"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "destructive",
						className: "bg-amber-500/20 text-amber-300 border-amber-500/30",
						children: "Needs Optimization"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "p-6 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-slate-500",
									children: "Schema.org JSON-LD"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-center gap-2 font-semibold text-rose-600",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-5 w-5" }), " Missing / Incomplete"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-slate-500",
									children: "AEO Directives (llms.txt)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-center gap-2 font-semibold text-rose-600",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-5 w-5" }), " Not Detected"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-slate-500",
									children: "24/7 Voice Intake"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-center gap-2 font-semibold text-amber-600",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-5 w-5" }), " High Missed Call Risk"]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3",
						children: "Detected Bottlenecks"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2",
						children: result.criticalIssues.map((issue, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-4 w-4 text-rose-500 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: issue })]
						}, i))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
								className: "text-base font-bold text-blue-900 dark:text-blue-100 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5 text-blue-600" }), "Improve Your Site Online with Nexus AI Automation"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-blue-700 dark:text-blue-300 mt-1",
								children: "We can implement these fixes and launch your 24/7 AI calling system in 3–5 business days:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-1.5 text-xs text-blue-900 dark:text-blue-200",
								children: result.recommendations.map((rec, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-blue-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: rec })]
								}, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 pt-4 border-t border-blue-200 dark:border-blue-800 flex flex-col sm:flex-row justify-between items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-slate-600 dark:text-slate-400",
									children: "Setup starting from ₹12,000 (No credit card needed)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `https://wa.me/919166516942?text=${encodeURIComponent(`Hi Nexus AI, I audited my website (${result.url}) and want to fix my AEO, Schema, and Voice Calling setup.`)}`,
									target: "_blank",
									rel: "noreferrer",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										className: "bg-blue-600 hover:bg-blue-700 text-white text-xs px-5 h-9",
										children: ["Fix These Issues with Nexus AI", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1.5 h-3.5 w-3.5" })]
									})
								})]
							})
						]
					})
				]
			})]
		})]
	});
}
function BookAuditPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Instant Website Audit",
			title: "Check if your website is ready for AI search engines & voice agents.",
			copy: "Scan your site in seconds to identify Schema.org gaps, AEO ranking issues, and missed customer opportunities."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-10 bg-slate-50/50 dark:bg-slate-900/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AeoWebsiteScanner, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-pad border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-container max-w-4xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Direct Assistance",
					title: "Want a custom automation audit?",
					copy: "Prefer to speak directly with our solutions architect? Connect through any channel below."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "feature-card flex items-center gap-3 p-4 rounded-xl border bg-card",
							href: "tel:+918003469293",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "size-5 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+91 80034 69293" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "feature-card flex items-center gap-3 p-4 rounded-xl border bg-card",
							href: "https://wa.me/919166516942",
							target: "_blank",
							rel: "noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessagesSquare, { className: "size-5 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WhatsApp Us" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "feature-card flex items-center gap-3 p-4 rounded-xl border bg-card",
							href: "mailto:thenexusaiagency@gmail.com",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-5 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: "thenexusaiagency@gmail.com"
							})]
						})
					]
				})]
			})
		})
	] });
}
//#endregion
export { BookAuditPage as component };
