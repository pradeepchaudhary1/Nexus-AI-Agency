import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Bo4nKw7z.mjs";
import { ct as ArrowRight } from "../_libs/lucide-react.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as industries } from "./site-data-7jYqz378.mjs";
import { a as FeatureGrid, f as SectionHeading, l as PageHero } from "./page-sections-BbYSJy3h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industries-CNsnThHT.js
var import_jsx_runtime = require_jsx_runtime();
function IndustriesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Industries",
		title: "Automation for businesses with leads, calls, bookings and customers.",
		copy: "Real estate is included as one use case alongside clinics, gyms, coaching, institutes, local shops, digital shops, agencies and modern service businesses.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			size: "xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/book-audit",
				children: ["Find my industry workflow ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-pad",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "site-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Use cases",
				title: "Same intelligence. Different operating details.",
				copy: "Each business needs different language, handoffs and tools. We begin by mapping those details before building."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureGrid, { items: industries })]
		})
	})] });
}
//#endregion
export { IndustriesPage as component };
