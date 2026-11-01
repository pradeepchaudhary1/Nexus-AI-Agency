import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { B as GraduationCap, E as PhoneCall, G as Dumbbell, R as HeartPulse, _ as Settings2, c as Store, ct as Building2, d as Square, dt as Bot, f as SquareCheckBig, i as Users, m as ShoppingBag, nt as CircleCheck, ot as ChartNoAxesCombined, q as Database, st as CalendarCheck, ut as BriefcaseBusiness, v as Send, y as Search, z as Headphones } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lead-forms-EP1Aq0So.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var services = [
	{
		title: "AI Support Agent",
		description: "Answers routine questions across your website, WhatsApp and email, then hands complex cases to your team.",
		icon: Headphones
	},
	{
		title: "AI Sales Agent",
		description: "Qualifies enquiries, recommends the right next step and keeps every promising lead moving.",
		icon: ChartNoAxesCombined
	},
	{
		title: "AI Calling Agent",
		description: "Handles inbound and outbound calls for qualification, reminders, follow-ups and booking.",
		icon: PhoneCall
	},
	{
		title: "AI Research Agent",
		description: "Turns scattered sources into structured prospect, market and competitor intelligence.",
		icon: Search
	},
	{
		title: "AI Operations Agent",
		description: "Moves information between teams, checks routine work and triggers the right action automatically.",
		icon: Settings2
	},
	{
		title: "CRM Automation",
		description: "Keeps contacts, follow-ups, pipeline stages, revenue processes and records clean and current.",
		icon: Database
	}
];
var industries = [
	{
		title: "Real Estate",
		description: "Enquiry qualification, property matching, viewing bookings and lead follow-up.",
		icon: Building2
	},
	{
		title: "Clinics",
		description: "Appointment assistance, reminders, common questions and enquiry routing.",
		icon: HeartPulse
	},
	{
		title: "E-commerce",
		description: "Product guidance, order questions, customer care and recovery workflows.",
		icon: ShoppingBag
	},
	{
		title: "Education",
		description: "Course discovery, admissions enquiries, student support and follow-ups.",
		icon: GraduationCap
	},
	{
		title: "Agencies",
		description: "Lead intake, client onboarding, campaign operations and reporting workflows.",
		icon: BriefcaseBusiness
	},
	{
		title: "B2B Services",
		description: "Qualification, research, proposal follow-up and pipeline coordination.",
		icon: Users
	},
	{
		title: "Gyms & Coaching",
		description: "Trial bookings, membership questions, reminders and prospect nurture.",
		icon: Dumbbell
	},
	{
		title: "Local & Digital Shops",
		description: "Always-on enquiries, catalogue guidance, order updates and customer records.",
		icon: Store
	},
	{
		title: "SaaS",
		description: "Product onboarding, support triage, account signals and customer success workflows.",
		icon: Bot
	},
	{
		title: "Recruitment",
		description: "Candidate screening, interview scheduling and status communication.",
		icon: CalendarCheck
	}
];
var stack = [
	"Forms",
	"WhatsApp",
	"Email",
	"Calling",
	"Calendar",
	"CRM",
	"Spreadsheets",
	"Slack",
	"Make",
	"n8n"
];
var demos = [
	{
		title: "Website Support",
		prompt: "A visitor asks which service fits their workflow.",
		response: "I’ll ask two focused questions, recommend the best-fit system, and offer a human handoff."
	},
	{
		title: "Sales Qualification",
		prompt: "A new lead submits an enquiry after business hours.",
		response: "I’ll qualify urgency, need and fit, record the context, then book the right next step."
	},
	{
		title: "Calling Agent",
		prompt: "A prospect misses an appointment reminder.",
		response: "I’ll follow the approved call flow, capture the outcome and update the calendar and CRM."
	},
	{
		title: "Research Agent",
		prompt: "Your sales team needs context before a discovery call.",
		response: "I’ll assemble relevant company, market and role signals into a concise research brief."
	},
	{
		title: "CRM Automation",
		prompt: "A deal changes stage after a meeting.",
		response: "I’ll update the record, schedule follow-up tasks and notify the responsible teammate."
	}
];
var steps = [
	{
		n: "01",
		title: "Audit",
		description: "Map the current workflow, friction points, tools and success criteria."
	},
	{
		n: "02",
		title: "Design",
		description: "Shape the agent, guardrails, integrations and human handoff around your team."
	},
	{
		n: "03",
		title: "Deploy",
		description: "Build, connect and test the system against real operating scenarios."
	},
	{
		n: "04",
		title: "Optimize",
		description: "Review outcomes, refine prompts and improve the workflow as the business learns."
	}
];
var socials = [
	{
		label: "Instagram",
		href: "https://www.instagram.com/nexusa.iagency/"
	},
	{
		label: "Facebook",
		href: "https://www.facebook.com/share/1DgGpuUazn/"
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/pradeep-kumar-dagur-a49a86239/"
	},
	{
		label: "X",
		href: "https://x.com/pdagur5556"
	},
	{
		label: "YouTube",
		href: "https://www.youtube.com/channel/UCH67LTn2FcZUXe_FWXKa68w"
	},
	{
		label: "WhatsApp",
		href: "https://wa.me/919166516942"
	},
	{
		label: "Email",
		href: "mailto:thenexusaiagency@gmail.com"
	}
];
var navItems = [
	{
		label: "Agent Demos",
		to: "/agent-demos"
	},
	{
		label: "Solutions",
		to: "/solutions"
	},
	{
		label: "Industries",
		to: "/industries"
	},
	{
		label: "Our Projects",
		to: "/projects"
	},
	{
		label: "How It Works",
		to: "/how-it-works"
	},
	{
		label: "Resources",
		to: "/resources"
	},
	{
		label: "About",
		to: "/about"
	}
];
function LeadForm() {
	const [formData, setFormData] = (0, import_react.useState)({
		fullName: "",
		businessName: "",
		email: "",
		phone: "",
		website: "",
		services: ["AI Calling Agent", "WhatsApp Follow-up Automation"],
		message: ""
	});
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const availableServices = [
		"Website Development",
		"AI Calling Agent",
		"AEO & GEO Optimization",
		"CRM Integration",
		"WhatsApp Follow-up Automation"
	];
	const toggleService = (srv) => {
		setFormData((prev) => ({
			...prev,
			services: prev.services.includes(srv) ? prev.services.filter((s) => s !== srv) : [...prev.services, srv]
		}));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const payload = {
			name: formData.fullName,
			businessName: formData.businessName,
			email: formData.email,
			phone: formData.phone,
			website: formData.website || "N/A",
			services: formData.services.join(", "),
			message: formData.message || "No additional notes",
			timestamp: (/* @__PURE__ */ new Date()).toISOString()
		};
		try {
			await fetch("https://script.google.com/macros/s/AKfycbyTqSEK8iK79n4W00g069z32iS44V34lG85W98lC/exec", {
				method: "POST",
				mode: "no-cors",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload)
			});
		} catch (err) {
			console.warn("Network fallback:", err);
		}
		setLoading(false);
		setSubmitted(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-slate-900/95 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-md",
		children: !submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit,
			className: "space-y-4 text-left",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-medium text-slate-400 mb-1.5",
						children: "Full Name *"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						type: "text",
						value: formData.fullName,
						onChange: (e) => setFormData({
							...formData,
							fullName: e.target.value
						}),
						className: "w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition",
						placeholder: "e.g. David Miller"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-medium text-slate-400 mb-1.5",
						children: "Business Name *"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						type: "text",
						value: formData.businessName,
						onChange: (e) => setFormData({
							...formData,
							businessName: e.target.value
						}),
						className: "w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition",
						placeholder: "e.g. Apex Health Clinic / Urban Realty"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-medium text-slate-400 mb-1.5",
						children: "Email Address *"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						type: "email",
						value: formData.email,
						onChange: (e) => setFormData({
							...formData,
							email: e.target.value
						}),
						className: "w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition",
						placeholder: "name@company.com"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-medium text-slate-400 mb-1.5",
						children: "Phone Number (WhatsApp) *"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						type: "tel",
						value: formData.phone,
						onChange: (e) => setFormData({
							...formData,
							phone: e.target.value
						}),
						className: "w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition",
						placeholder: "e.g. +91 9876543210"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "block text-xs font-medium text-slate-400 mb-1.5",
					children: "Website URL (Optional)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					value: formData.website,
					onChange: (e) => setFormData({
						...formData,
						website: e.target.value
					}),
					className: "w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition",
					placeholder: "https://yourwebsite.com (leave empty if not applicable)"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "block text-xs font-medium text-slate-400 mb-1.5",
					children: "Required Automation Modules *"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full bg-slate-950 border border-slate-800 rounded-lg p-3 space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
						children: availableServices.map((srv) => {
							const isChecked = formData.services.includes(srv);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								onClick: () => toggleService(srv),
								className: `flex items-center gap-2.5 px-3 py-2 rounded-md border text-xs cursor-pointer select-none transition ${isChecked ? "bg-cyan-500/10 border-cyan-500/60 text-cyan-300 font-semibold shadow-sm" : "bg-slate-900/60 border-slate-800/80 text-slate-400 hover:border-slate-700"}`,
								children: [isChecked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareCheckBig, { className: "w-4 h-4 text-cyan-400 shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "w-4 h-4 text-slate-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: srv })]
							}, srv);
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-slate-500 pt-1",
						children: "Select one or multiple modules required for your deployment."
					})]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "block text-xs font-medium text-slate-400 mb-1.5",
					children: "Project Notes & Specific Requirements"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					rows: 3,
					value: formData.message,
					onChange: (e) => setFormData({
						...formData,
						message: e.target.value
					}),
					className: "w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition",
					placeholder: "Describe your current inquiry volume, integration goals, or specific business hours..."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					disabled: loading,
					className: "w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-sm text-white flex items-center justify-center gap-2 hover:opacity-95 shadow-lg shadow-cyan-500/25 transition cursor-pointer",
					children: [loading ? "Submitting Details..." : "Submit Inquiry & Get Custom AI Blueprint", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4" })]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center py-10 space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-12 h-12 text-emerald-400 mx-auto animate-bounce" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold text-white",
					children: "Inquiry Received Successfully!"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-slate-300 max-w-md mx-auto",
					children: "Thank you for reaching out. We have logged your requirements and our team will get in touch via WhatsApp and Email shortly."
				})
			]
		})
	});
}
//#endregion
export { services as a, steps as c, navItems as i, demos as n, socials as o, industries as r, stack as s, LeadForm as t };
