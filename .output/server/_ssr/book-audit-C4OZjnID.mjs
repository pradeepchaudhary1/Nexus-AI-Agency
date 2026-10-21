import { n as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Bo4nKw7z.mjs";
import { t as Badge } from "./badge--9ZMeBB2.mjs";
import { A as Info, H as CodeXml, K as CircleX, O as LoaderCircle, P as Globe, T as Mail, Y as CircleCheck, _ as PhoneCall, c as Sparkles, lt as ArrowRight, ot as Bot, r as TriangleAlert, x as MessagesSquare } from "../_libs/lucide-react.mjs";
import { l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as Input } from "./input-BlEJlNY0.mjs";
import { t as createSsrRpc } from "./createSsrRpc-fQERfvAR.mjs";
import { f as SectionHeading, l as PageHero } from "./page-sections-BbYSJy3h.mjs";
import { n as CardContent, t as Card } from "./card-Dwbi87Uj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-audit-C4OZjnID.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var auditWebsiteServerFn = createServerFn({ method: "POST" }).validator((url) => url).handler(createSsrRpc("6ff593750e2fe801e8b2f829ccd538f4a15f806c42d84a520d41644599d87175"));
function AeoWebsiteScanner() {
	const [inputUrl, setInputUrl] = (0, import_react.useState)("");
	const [scanning, setScanning] = (0, import_react.useState)(false);
	const [errorMsg, setErrorMsg] = (0, import_react.useState)("");
	const [result, setResult] = (0, import_react.useState)(null);
	const handleScan = async (e) => {
		e.preventDefault();
		if (!inputUrl.trim()) return;
		let target = inputUrl.trim().toLowerCase();
		if (target.includes("localhost") || target.includes("127.0.0.1")) {
			setErrorMsg("Localhost is a private offline environment. Please enter a live public domain.");
			return;
		}
		setScanning(true);
		setErrorMsg("");
		setResult(null);
		try {
			const data = await auditWebsiteServerFn({ data: target });
			if (!data.isReachable) setErrorMsg("Could not connect to this domain. Please verify it is live and accessible.");
			else setResult(data);
		} catch (err) {
			console.error("Scanner Error:", err);
			setErrorMsg("Audit request failed. Please check the domain format and try again.");
		} finally {
			setScanning(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full max-w-4xl mx-auto p-4 md:p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center mb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					className: "mb-3 bg-emerald-500/10 text-emerald-500 border-emerald-500/20 px-3 py-1 text-xs font-semibold",
					children: "Live Server-Side Audit Engine"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-5xl font-bold tracking-tight text-foreground",
					children: "Scan Your Website for AI & Voice Readiness"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground text-sm md:text-base max-w-2xl mx-auto",
					children: "Inspect live Schema.org JSON-LD tags, AI Search Engine compatibility (AEO), and missed-call risks."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleScan,
					className: "mt-6 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "text",
						placeholder: "e.g. warrenbehan.com or yourclinic.com",
						value: inputUrl,
						onChange: (e) => setInputUrl(e.target.value),
						className: "h-12 px-4 text-sm bg-background border-border",
						required: true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: scanning,
						className: "h-12 px-8 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold shadow-md",
						children: scanning ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Auditing..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Audit Now", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "ml-2 h-4 w-4" })] })
					})]
				}),
				errorMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs max-w-lg mx-auto flex items-start gap-2.5 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "w-4 h-4 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: errorMsg })]
				})
			]
		}), result && result.isReachable && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "border border-border shadow-2xl overflow-hidden animate-in fade-in duration-300",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-slate-950 text-white p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border/40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-wider text-slate-400 font-mono",
					children: "Live Audit Result"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-xl font-bold text-white break-all flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "w-4 h-4 text-emerald-400 shrink-0" }), result.url]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-slate-400",
							children: "Technical Readiness Score"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: `text-3xl font-extrabold ${result.score >= 80 ? "text-emerald-400" : result.score >= 60 ? "text-amber-400" : "text-rose-400"}`,
							children: [result.score, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-normal text-slate-500",
								children: "/100"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						className: `px-3 py-1 font-bold ${result.score >= 80 ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-300"}`,
						children: result.statusText
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "p-6 md:p-8 space-y-8 bg-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 rounded-xl border bg-muted/20 space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs text-muted-foreground font-medium flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "w-3.5 h-3.5 text-primary" }), " Schema.org Status"]
								}), result.hasSchema ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm font-bold text-emerald-500 flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4" }),
										" Detected (",
										result.schemaTypes.slice(0, 2).join(", "),
										")"
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm font-bold text-rose-500 flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "w-4 h-4" }), " Missing / Incomplete"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 rounded-xl border bg-muted/20 space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs text-muted-foreground font-medium flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "w-3.5 h-3.5 text-primary" }), " AEO Answer Readiness"]
								}), result.hasLlmsTxt || result.score >= 70 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm font-bold text-emerald-500 flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4" }), " AI Directive Ready"]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm font-bold text-amber-500 flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "w-4 h-4" }), " Gaps in Structured Data"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 rounded-xl border bg-muted/20 space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs text-muted-foreground font-medium flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "w-3.5 h-3.5 text-primary" }), " 24/7 Voice Intake"]
								}), result.hasVoiceAgent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm font-bold text-emerald-500 flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4" }), " AI Voice Active"]
								}) : result.hasPhone ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm font-bold text-amber-500 flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "w-4 h-4" }), " Missed Call Risk (Standard Phone)"]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm font-bold text-rose-500 flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "w-4 h-4" }), " No Direct Phone Found"]
								})]
							})
						]
					}),
					result.foundStrengths.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
						className: "text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-emerald-500" }), " Detected Strengths"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-2",
						children: result.foundStrengths.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs p-2.5 rounded-lg border bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3.5 h-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
						}, i))
					})] }),
					result.detectedBottlenecks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
						className: "text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "w-4 h-4 text-amber-500" }), " Operational & AEO Gaps Identified"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2",
						children: result.detectedBottlenecks.map((gap, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "text-xs text-muted-foreground flex items-start gap-2 p-2 rounded-md bg-muted/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: gap })]
						}, i))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-primary/5 to-transparent border border-emerald-500/30",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-5 h-5 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-base font-bold",
									children: "Custom Recommendations"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2 mb-6",
								children: result.recommendations.map((rec, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-xs font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: rec })]
								}, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `https://wa.me/918003469293?text=${encodeURIComponent(`Hi Pradeep, I audited ${result.url} on Nexus AI (Score:${result.score}/100). I want to discuss fixing the Schema and AI Voice gaps.`)}`,
								target: "_blank",
								rel: "noreferrer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									className: "bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs px-6 h-10 shadow-lg",
									children: ["Implement Fixes with Nexus AI ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 w-4 h-4" })]
								})
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
