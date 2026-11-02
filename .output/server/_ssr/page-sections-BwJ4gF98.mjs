import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { T as Play, ct as Check, k as Network, st as ChevronRight } from "../_libs/lucide-react.mjs";
import { a as services, c as steps, n as demos, s as stack, t as LeadForm } from "./lead-forms-CCE1LWhA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-sections-BwJ4gF98.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SectionHeading({ eyebrow, title, copy, centered = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "section-title mt-4",
				children: title
			}),
			copy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "lead-copy mt-5",
				children: copy
			})
		]
	});
}
function FeatureGrid({ items, columns = 3 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `mt-10 grid gap-4 sm:grid-cols-2 ${columns === 4 ? "lg:grid-cols-4" : columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"}`,
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "feature-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "icon-box",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-6 font-display text-xl font-semibold",
					children: item.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-6 text-muted-foreground",
					children: item.description
				})
			]
		}, item.title))
	});
}
function PageHero({ eyebrow, title, copy, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden border-b border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "page-grid absolute inset-0 opacity-45" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "site-container relative section-pad",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-4xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "page-title mt-6",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lead-copy mt-7 max-w-3xl",
						children: copy
					}),
					children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children
					})
				]
			})
		})]
	});
}
function WorkflowVisual() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-12 glass-panel p-5 sm:p-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md border border-border bg-surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Signals in"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: stack.slice(0, 4).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded border border-border bg-background px-3 py-2 text-xs",
							children: item
						}, item))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "mx-auto hidden text-primary lg:block" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md border border-primary bg-accent p-6 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Network, { className: "mx-auto size-8 text-primary-strong" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display font-semibold",
							children: "Nexus orchestration"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "Qualify · decide · route"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "mx-auto hidden text-primary lg:block" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md border border-border bg-surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Actions out"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: stack.slice(4).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded border border-border bg-background px-3 py-2 text-xs",
							children: item
						}, item))
					})]
				})
			]
		})
	});
}
function DemoLab({ showForm = false }) {
	const [active, setActive] = (0, import_react.useState)(0);
	const current = demos[active];
	if (!current) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-10 grid gap-5 lg:grid-cols-[.85fr_1.15fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2",
			children: demos.map((demo, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setActive(index),
				className: `flex w-full items-center justify-between rounded-md border p-4 text-left transition-colors ${active === index ? "border-primary bg-accent" : "border-border bg-card hover:border-primary"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-8 place-items-center rounded bg-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: demo.title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 text-muted-foreground" })]
			}, demo.title))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-panel p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Interactive preview"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2 text-xs text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-primary pulse-soft" }), "Demo workflow"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ml-auto max-w-[85%] rounded-md bg-secondary p-4 text-sm leading-6",
						children: current.prompt
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-[88%] rounded-md border border-primary bg-accent p-4 text-sm leading-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-2 block text-xs font-semibold text-primary-strong",
							children: "AI AGENT"
						}), current.response]
					})]
				}),
				showForm && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 border-t border-border pt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
						source: "demo_request",
						demoType: current.title,
						compact: true
					})
				})
			]
		})]
	});
}
function ProcessStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-4",
		children: steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "bg-card p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-3xl font-semibold text-primary",
					children: step.n
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-8 font-display text-xl font-semibold",
					children: step.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-6 text-muted-foreground",
					children: step.description
				})
			]
		}, step.n))
	});
}
function ServicePreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureGrid, { items: services });
}
function CheckList({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-6 grid gap-3",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex gap-3 text-sm leading-6 text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-1 size-4 shrink-0 text-primary" }), item]
		}, item))
	});
}
//#endregion
export { ProcessStrip as a, WorkflowVisual as c, PageHero as i, DemoLab as n, SectionHeading as o, FeatureGrid as r, ServicePreview as s, CheckList as t };
