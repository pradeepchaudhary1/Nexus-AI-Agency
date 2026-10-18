import { n as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, a as AccordionTrigger$1, i as AccordionItem$1, n as AccordionContent$1, r as AccordionHeader, t as Accordion$1, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as cn, t as Button } from "./button-Bo4nKw7z.mjs";
import { D as LoaderCircle, J as CircleCheck, Q as Check, X as ChevronRight, Y as CircleAlert, Z as ChevronDown, b as MessageSquare, ct as ArrowRight, h as Play, u as ShieldCheck, v as Network } from "../_libs/lucide-react.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./client-BmndfN-r.mjs";
import { a as services, c as steps, i as problems, n as industries, s as stack, t as demos } from "./site-data-7jYqz378.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-sections-BbYSJy3h.js
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
var TARGET_EMAIL = "thenexusaiagency@gmail.com";
var GOOGLE_SHEET_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbwy9zgG8krLDHRJpD7UVmHGbGObvwxNMkhKavWoSVCHVTgd1QIXGFQ8AM0DhUK1UDs/exec";
var LeadForm = ({ source = "booking", demoType, compact = false }) => {
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [website, setWebsite] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [errorMsg, setErrorMsg] = (0, import_react.useState)(null);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setErrorMsg(null);
		const sheetData = {
			name: name.trim(),
			email: email.trim(),
			phone: phone.trim() || "Not provided",
			website: website.trim() || "Not provided",
			requirement: message.trim() || (demoType ? `Demo Request: ${demoType}` : "General Inquiry"),
			bottleneck: message.trim() || "Website Inbound Request",
			source: source || "Website Form",
			campaign: "Direct Inbound",
			lead_status: "New",
			lead_score: 75,
			notes: demoType ? `Interested in Demo: ${demoType}` : "Standard lead form submission",
			_subject: `🔥 New Lead from Nexus AI: ${name.trim()}`,
			_template: "table"
		};
		try {
			await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Accept": "application/json"
				},
				body: JSON.stringify(sheetData)
			});
		} catch (e) {}
		if (!GOOGLE_SHEET_WEBAPP_URL.includes("your_script_id")) try {
			await fetch(GOOGLE_SHEET_WEBAPP_URL, {
				method: "POST",
				mode: "no-cors",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(sheetData)
			});
		} catch (e) {}
		try {
			await supabase.from("lead_submissions").insert([{
				name: sheetData.name,
				email: sheetData.email,
				phone: sheetData.phone === "Not provided" ? null : sheetData.phone,
				message: `${sheetData.requirement} | Website: ${sheetData.website}`,
				demo_type: demoType || null,
				source: String(source),
				bottleneck: sheetData.bottleneck
			}]);
		} catch (e) {}
		try {
			const localLeads = JSON.parse(localStorage.getItem("nexus_leads") || "[]");
			localLeads.unshift({
				...sheetData,
				createdAt: (/* @__PURE__ */ new Date()).toISOString()
			});
			localStorage.setItem("nexus_leads", JSON.stringify(localLeads));
		} catch (e) {}
		setLoading(false);
		setSubmitted(true);
	};
	const waMsg = encodeURIComponent(`Hi Pradeep, I submitted an inquiry on Nexus AI.\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nWebsite: ${website || "None"}\nDetails: ${message || demoType || "General Inquiry"}`);
	if (submitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-10 h-10 text-emerald-400 mx-auto mb-3" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-lg font-bold text-foreground",
				children: "Inquiry Received!"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground mt-1 mb-4",
				children: "Your details have been received. We will contact you shortly."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: `https://wa.me/919166516942?text=${waMsg}`,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "w-4 h-4" }), " Priority WhatsApp Chat"]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "space-y-3",
		children: [
			errorMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "w-4 h-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: errorMsg })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "text",
				required: true,
				placeholder: "Your Full Name *",
				value: name,
				onChange: (e) => setName(e.target.value),
				className: "w-full px-3.5 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary"
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "email",
					required: true,
					placeholder: "Work Email *",
					value: email,
					onChange: (e) => setEmail(e.target.value),
					className: "w-full px-3.5 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "tel",
					placeholder: "Phone Number *",
					required: true,
					value: phone,
					onChange: (e) => setPhone(e.target.value),
					className: "w-full px-3.5 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "url",
				placeholder: "Website URL (Optional e.g. https://yourcompany.com)",
				value: website,
				onChange: (e) => setWebsite(e.target.value),
				className: "w-full px-3.5 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary"
			}) }),
			!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				rows: 3,
				placeholder: "What workflow, voice call handling, or bottleneck do you want to automate?",
				value: message,
				onChange: (e) => setMessage(e.target.value),
				className: "w-full px-3.5 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary resize-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "submit",
				disabled: loading,
				className: "w-full py-3 px-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50",
				children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : "Submit Request", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
			})
		]
	});
};
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
