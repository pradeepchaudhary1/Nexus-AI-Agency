import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./input-CoMjb9dx.mjs";
import { it as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as services } from "./site-data-7jYqz378.mjs";
import { f as SectionHeading, h as WorkflowVisual, l as PageHero, n as CheckList, p as ServicePreview } from "./page-sections-Dnl21wR1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/solutions-DrjoLylw.js
var import_jsx_runtime = require_jsx_runtime();
function SolutionsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Solutions",
			title: "AI systems for response, revenue and operations.",
			copy: "NexusAIAgency designs agents that work across the full customer journey: first enquiry, qualification, calls, support, CRM records, follow-ups and reporting.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				size: "xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/book-audit",
					children: ["Map my workflow ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-pad",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Agent stack",
					title: "Choose the role your business needs most.",
					copy: "Start with one high-value bottleneck, then connect adjacent systems as the process proves itself."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicePreview, {})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-pad border-y border-border bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-container grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Revenue process management",
					title: "RPM keeps leads, tasks and outcomes aligned.",
					copy: "Instead of leaving revenue work across calls, chats, sheets and memory, we connect the stages into a clear operating rhythm."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, { items: [
					"Lead source capture and enrichment",
					"Qualification and routing rules",
					"Follow-up tasks and reminders",
					"CRM stage updates and notes",
					"Calendar, WhatsApp, email and calling flows",
					"Data stored for reporting and future decisions"
				] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkflowVisual, {})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-pad",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Delivery model",
					title: "Every system gets a job description."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 lg:grid-cols-3",
					children: services.slice(0, 3).map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "feature-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-semibold",
							children: service.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-6 text-muted-foreground",
							children: "We define what it can answer, what it must ask, where it sends data and when a human should take over."
						})]
					}, service.title))
				})]
			})
		})
	] });
}
//#endregion
export { SolutionsPage as component };
