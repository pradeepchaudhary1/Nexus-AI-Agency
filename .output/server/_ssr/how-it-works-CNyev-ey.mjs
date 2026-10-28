import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Bo4nKw7z.mjs";
import { gt as ArrowRight } from "../_libs/lucide-react.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as ProcessStrip, f as SectionHeading, l as PageHero, n as CheckList } from "./page-sections-DdYHycY5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/how-it-works-CNyev-ey.js
var import_jsx_runtime = require_jsx_runtime();
function HowItWorksPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "How it works",
			title: "From messy workflow to working automation.",
			copy: "The process is designed to protect your customer experience while removing repetitive work from your team.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				size: "xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/book-audit",
					children: ["Start with an audit ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-pad",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Process",
					title: "Four steps. Clear decisions at each stage."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessStrip, {})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-pad border-y border-border bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-container grid gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-panel p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold",
						children: "What the audit reviews"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, { items: [
						"Business type and customer journey",
						"Team size and current workload",
						"Lead volume and speed expectations",
						"Existing tools and data locations",
						"Highest-risk points for missed response",
						"Best first pilot for fast learning"
					] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-panel p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold",
						children: "What deployment includes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, { items: [
						"Agent instructions and boundaries",
						"Integration map for your tools",
						"Testing scenarios before launch",
						"Human handoff and escalation",
						"Data capture and CRM updates",
						"Optimization plan after release"
					] })]
				})]
			})
		})
	] });
}
//#endregion
export { HowItWorksPage as component };
