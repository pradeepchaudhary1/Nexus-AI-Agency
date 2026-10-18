import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Bo4nKw7z.mjs";
import { t as Badge } from "./badge--9ZMeBB2.mjs";
import { I as FileText, ot as BookOpen } from "../_libs/lucide-react.mjs";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-Dwbi87Uj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources-BfCTGgoH.js
var import_jsx_runtime = require_jsx_runtime();
function ResourcesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "site-container py-12 max-w-5xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center max-w-2xl mx-auto mb-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					className: "mb-2 bg-primary/10 text-primary border-primary/20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-3.5 h-3.5 mr-1 inline" }), " Free Agency Knowledge Vault"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl md:text-5xl font-bold tracking-tight text-foreground",
					children: "AI Toolkits, SOPs & Blueprints"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Free operational templates to help business owners understand voice AI and autonomous workflows."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 md:grid-cols-3 gap-6",
			children: [
				{
					title: "Clinic AI Receptionist Prompt Architecture (Vapi/ElevenLabs)",
					category: "Voice AI Blueprint",
					description: "Complete system instructions and triage prompt template for dental and healthcare appointment booking.",
					downloadLink: "https://docs.google.com/document/d/1eVNmPV1-1C4CPP5DUI6aXKQjpm6jJsG7EjVMGRlQ2qk/edit"
				},
				{
					title: "Make.com & n8n Lead-to-WhatsApp Webhook Guide",
					category: "Automation SOP",
					description: "Step-by-step documentation on parsing voice call JSON webhooks and dispatching instant CRM notifications.",
					downloadLink: "https://docs.google.com/document/d/1eVNmPV1-1C4CPP5DUI6aXKQjpm6jJsG7EjVMGRlQ2qk/edit"
				},
				{
					title: "Complete 2026 AEO & Schema.org Checklist for Businesses",
					category: "SEO/AEO Guide",
					description: "The exact structured data and llms.txt directives required to get cited in Perplexity and ChatGPT search.",
					downloadLink: "https://docs.google.com/document/d/1eVNmPV1-1C4CPP5DUI6aXKQjpm6jJsG7EjVMGRlQ2qk/edit"
				}
			].map((res, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "border hover:shadow-md transition-all flex flex-col justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					className: "pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "w-fit text-[10px] mb-2",
						children: res.category
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-sm font-bold leading-snug",
						children: res.title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "space-y-4 pt-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: res.description
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: res.downloadLink,
						target: "_blank",
						rel: "noreferrer",
						className: "block w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							className: "w-full text-xs gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-3.5 h-3.5" }), " Read Documentation"]
						})
					})]
				})]
			}, i))
		})]
	});
}
//#endregion
export { ResourcesPage as component };
