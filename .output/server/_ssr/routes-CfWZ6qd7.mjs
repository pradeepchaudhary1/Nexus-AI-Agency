import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Bo4nKw7z.mjs";
import { E as Lock, L as ExternalLink, _ as PhoneCall, at as Bot, c as Sparkles, ct as ArrowRight, it as Braces, z as Download } from "../_libs/lucide-react.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as createSsrRpc } from "./createSsrRpc-Gjocc714.mjs";
import { i as formatDate, o as iconFor, r as categoryMeta } from "./resource-meta-B-OmFLLC.mjs";
import { n as useQuery, t as queryOptions } from "../_libs/tanstack__react-query.mjs";
import { c as OfferCards, d as ProcessStrip, f as SectionHeading, h as WorkflowVisual, i as Faq, m as TrustPoints, o as IndustryPreview, p as ServicePreview, r as DemoLab, s as LeadForm, t as BookingBand, u as ProblemGrid } from "./page-sections-BbYSJy3h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CfWZ6qd7.js
var import_jsx_runtime = require_jsx_runtime();
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
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePage, {});
}
//#endregion
export { Index as component };
