import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Bo4nKw7z.mjs";
import { gt as ArrowRight } from "../_libs/lucide-react.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as SectionHeading, l as PageHero, r as DemoLab } from "./page-sections-DdYHycY5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/agent-demos-B3UgX4mG.js
var import_jsx_runtime = require_jsx_runtime();
function AgentDemosPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Agent Demo Lab",
		title: "Preview the conversations and actions before you build.",
		copy: "These demos show representative workflow behavior so you can choose the agent that fits your first bottleneck.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			variant: "outline",
			size: "xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/solutions",
				children: ["Compare solutions ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-pad",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "site-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Request a demo",
				title: "Select a workflow and send your context.",
				copy: "Choose a demo, describe your business, and we’ll respond with the best-fit starting point."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoLab, { showForm: true })]
		})
	})] });
}
//#endregion
export { AgentDemosPage as component };
