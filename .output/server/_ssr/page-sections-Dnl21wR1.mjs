import { n as __toESM } from "../_runtime.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime, a as AccordionTrigger$1, i as AccordionItem$1, n as AccordionContent$1, r as AccordionHeader, t as Accordion$1, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as useServerFn, i as submitLead } from "./leads.functions-tDfZ8woQ.mjs";
import { n as Input, r as cn, t as Button } from "./input-CoMjb9dx.mjs";
import { t as Textarea } from "./textarea-eWIi0ObL.mjs";
import { D as LoaderCircle, G as CircleCheck, J as Check, K as ChevronRight, h as Play, it as ArrowRight, q as ChevronDown, u as ShieldCheck, v as Network } from "../_libs/lucide-react.mjs";
import { a as services, c as steps, i as problems, n as industries, s as stack, t as demos } from "./site-data-7jYqz378.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-sections-Dnl21wR1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Accordion$1;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionItem$1, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionHeader, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionTrigger$1, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = AccordionTrigger$1.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent$1, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = AccordionContent$1.displayName;
var fieldClass = "h-12 bg-surface/70";
function LeadForm({ source, demoType, compact = false }) {
	const send = useServerFn(submitLead);
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [error, setError] = (0, import_react.useState)("");
	const idempotencyKey = (0, import_react.useRef)(null);
	const inFlight = (0, import_react.useRef)(false);
	async function onSubmit(event) {
		event.preventDefault();
		if (inFlight.current) return;
		inFlight.current = true;
		idempotencyKey.current ??= crypto.randomUUID();
		const formElement = event.currentTarget;
		setStatus("sending");
		setError("");
		const form = new FormData(formElement);
		const value = (name) => String(form.get(name) ?? "").trim();
		try {
			const result = await send({ data: {
				source,
				demoType,
				idempotencyKey: idempotencyKey.current,
				name: value("name"),
				email: value("email"),
				phone: value("phone"),
				businessType: value("businessType"),
				teamSize: value("teamSize"),
				bottleneck: value("bottleneck"),
				leadVolume: value("leadVolume"),
				existingTools: value("existingTools"),
				message: value("message"),
				website: value("website")
			} });
			if (!result.success) {
				setError(result.error);
				setStatus("error");
				return;
			}
		} catch {
			setError("We could not send your request. Please check your connection and try again.");
			setStatus("error");
			return;
		} finally {
			inFlight.current = false;
		}
		idempotencyKey.current = null;
		formElement?.reset();
		setStatus("success");
	}
	if (status === "success") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "success-panel",
		role: "status",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-7 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-xl font-semibold",
			children: "Request received"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted-foreground",
			children: "We’ll review your workflow and contact you using the details you provided."
		})] })]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "grid gap-4",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				name: "website",
				tabIndex: -1,
				autoComplete: "off",
				className: "hidden",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "field-label",
					children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "name",
						required: true,
						minLength: 2,
						maxLength: 100,
						placeholder: "Your name",
						className: fieldClass
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "field-label",
					children: ["Work email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "email",
						required: true,
						type: "email",
						maxLength: 255,
						placeholder: "you@company.com",
						className: fieldClass
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "field-label",
					children: ["Phone", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "phone",
						type: "tel",
						maxLength: 30,
						placeholder: "+91...",
						className: fieldClass
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "field-label",
					children: ["Business type", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "businessType",
						maxLength: 100,
						placeholder: "Clinic, agency, SaaS...",
						className: fieldClass
					})]
				})]
			}),
			source === "readiness_audit" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "field-label",
						children: ["Team size", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							name: "teamSize",
							className: "form-select",
							defaultValue: "",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									disabled: true,
									children: "Select team size"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "1–5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "6–20" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "21–50" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "51+" })
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "field-label",
						children: ["Monthly lead volume", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							name: "leadVolume",
							className: "form-select",
							defaultValue: "",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									disabled: true,
									children: "Select lead volume"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Under 50" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "50–200" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "201–1,000" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "1,000+" })
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "field-label",
					children: ["Biggest bottleneck", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						name: "bottleneck",
						maxLength: 500,
						placeholder: "Where does work slow down or get missed?",
						className: "min-h-24 bg-surface/70"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "field-label",
					children: ["Existing tools", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "existingTools",
						maxLength: 500,
						placeholder: "CRM, WhatsApp, calendar, spreadsheets...",
						className: fieldClass
					})]
				})
			] }),
			source !== "readiness_audit" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "field-label",
				children: ["What should the system improve?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					name: "message",
					maxLength: 1e3,
					required: true,
					placeholder: "Describe the workflow, problem, or agent you have in mind.",
					className: compact ? "min-h-24 bg-surface/70" : "min-h-32 bg-surface/70"
				})]
			}),
			status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-destructive",
				role: "alert",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "submit",
				size: "lg",
				disabled: status === "sending",
				children: [status === "sending" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }), source === "readiness_audit" ? "Get My Readiness Review" : source === "demo_request" ? "Request This Demo" : "Request My Free Audit"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs leading-5 text-muted-foreground",
				children: [
					"By submitting, you agree to our ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/privacy",
						className: "text-primary hover:underline",
						children: "Privacy Policy"
					}),
					". Your details are used only to respond to your request."
				]
			})
		]
	});
}
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
function BookingBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "site-container grid gap-8 py-14 lg:grid-cols-[1fr_auto] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Your first automation move"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-semibold sm:text-4xl",
					children: "Find the workflow worth fixing first."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted-foreground",
					children: "Bring one bottleneck. Leave with a clearer view of the right agent, integrations and next step."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				size: "xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/book-audit",
					children: ["Get My Free AI Workflow Audit ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
				})
			})]
		})
	});
}
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
		type: "single",
		collapsible: true,
		className: "mt-8",
		children: [
			["Do I need to replace my current tools?", "Usually not. We design around the systems your team already uses, then recommend changes only where they remove real friction."],
			["Can an AI agent hand work to a person?", "Yes. Clear escalation and human approval points are part of a responsible workflow design."],
			["Is every system custom?", "The architecture and integrations are shaped around your workflow. Reusable patterns help us move faster without forcing your business into a template."],
			["What happens after the audit?", "You receive a practical recommended starting point. If there is a strong fit, we can scope a pilot together."]
		].map(([q, a], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
			value: `item-${index}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
				className: "py-5 text-base",
				children: q
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
				className: "max-w-3xl pb-5 leading-6 text-muted-foreground",
				children: a
			})]
		}, q))
	});
}
function OfferCards() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-10 grid gap-4 md:grid-cols-2",
		children: [
			[
				"AI Opportunity Audit",
				"Map bottlenecks, readiness and the strongest first use case.",
				"Assessment"
			],
			[
				"AI Agent Pilot",
				"Build and test one focused agent against a real workflow.",
				"Pilot-ready"
			],
			[
				"CRM & Revenue System",
				"Connect lead capture, follow-up, pipeline and reporting.",
				"Connected system"
			],
			[
				"AI Operations Retainer",
				"Improve, monitor and expand your automations over time.",
				"Ongoing optimization"
			]
		].map(([title, copy, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "feature-card flex min-h-52 flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-8 font-display text-2xl font-semibold",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-6 text-muted-foreground",
					children: copy
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/book-audit",
					className: "mt-auto flex items-center gap-2 pt-8 text-sm font-semibold text-primary",
					children: ["Discuss this offer ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			]
		}, title))
	});
}
function TrustPoints() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-10 grid gap-4 sm:grid-cols-3",
		children: [
			"Built around your workflow",
			"Human handoff by design",
			"Clear scope before deployment"
		].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3 rounded-md border border-border bg-card p-4 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-5 text-primary" }), item]
		}, item))
	});
}
function IndustryPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureGrid, {
		items: industries.slice(0, 8),
		columns: 4
	});
}
function ServicePreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureGrid, { items: services });
}
function ProblemGrid() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureGrid, { items: problems });
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
export { FeatureGrid as a, OfferCards as c, ProcessStrip as d, SectionHeading as f, WorkflowVisual as h, Faq as i, PageHero as l, TrustPoints as m, CheckList as n, IndustryPreview as o, ServicePreview as p, DemoLab as r, LeadForm as s, BookingBand as t, ProblemGrid as u };
