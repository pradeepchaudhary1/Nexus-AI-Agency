import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { l as PageHero } from "./page-sections-Dnl21wR1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-C-cWt0It.js
var import_jsx_runtime = require_jsx_runtime();
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Privacy",
		title: "Clear handling of your business information.",
		copy: "This policy explains how NexusAIAgency handles information submitted through this website."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-pad",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "site-container max-w-3xl space-y-10",
			children: [[
				["Information we collect", "When you request an audit or demo, we collect the details you submit, such as your name, email, phone number, business type, workflow challenges and current tools."],
				["How we use information", "We use your information to review your request, contact you, understand your requirements and improve the relevance of our services. We do not sell your personal information."],
				["Storage and access", "Form submissions are stored in a protected database. Public visitors cannot read, change or delete submissions. Access is limited to operating the agency and responding to enquiries."],
				["AI and business data", "Business data is not used to build or train a customer-specific agent unless that work is separately agreed. Project-specific terms, access controls and data handling are defined before deployment."],
				["Retention", "We retain enquiry information while it is needed for business communication, record keeping and legal obligations. You may request correction or deletion where applicable."],
				["Contact", "For privacy questions or requests, email thenexusaiagency@gmail.com or call +91 80034 69293."]
			].map(([title, copy]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-semibold",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 leading-7 text-muted-foreground",
				children: copy
			})] }, title)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "border-t border-border pt-8 text-xs text-muted-foreground",
				children: "Last updated: 5 October 2026"
			})]
		})
	})] });
}
//#endregion
export { PrivacyPage as component };
