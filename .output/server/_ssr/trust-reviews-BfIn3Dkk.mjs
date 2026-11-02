import "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { g as ShieldCheck, lt as CircleCheckBig, u as Star } from "../_libs/lucide-react.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var REVIEWS = [
	{
		name: "Dr. Sameer Saxena",
		role: "Managing Director",
		business: "Apex Dental Care, Jaipur",
		rating: 5,
		date: "Verified 3 weeks ago",
		comment: "We used to lose 15-20 patient calls every weekend. Nexus AI deployed their voice receptionist within 4 days. Now every after-hours call is booked directly into our calendar with instant WhatsApp slips.",
		source: "Google Verified"
	},
	{
		name: "Vikramaditya Rathore",
		role: "Principal Broker",
		business: "Rathore Realty & Builders",
		rating: 5,
		date: "Verified 1 month ago",
		comment: "The speed-to-lead automation is unbelievable. As soon as a lead arrives from our portal ads, the AI calls them within 45 seconds, qualifies budget, and sends our WhatsApp brochure. Closed 2 luxury units last month alone.",
		source: "Trustpilot"
	},
	{
		name: "Ananya Deshmukh",
		role: "Owner & Head Stylist",
		business: "Glow Luxury Studio",
		rating: 5,
		date: "Verified 2 weeks ago",
		comment: "My stylists no longer have to stop cutting hair to pick up phone calls. The AI voice assistant handles appointments smoothly and our no-shows dropped by over 80% with automated reminders.",
		source: "Google Verified"
	}
];
function TrustReviews() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-16 px-4 max-w-6xl mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 mb-8 backdrop-blur-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-extrabold text-lg",
					children: "4.9"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-1 text-amber-400 mb-0.5",
					children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-4 h-4 fill-amber-400 text-amber-400" }, i))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-slate-300 font-semibold",
					children: ["EXCELLENT RATING ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-slate-500 font-normal",
						children: "| Based on 28+ verified client deployments"
					})]
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-4 h-4" }), " TrustIndex Verified Partner"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid md:grid-cols-3 gap-6",
			children: REVIEWS.map((rev, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/30 transition shadow-lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1 text-amber-400",
						children: [...Array(rev.rating)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-3.5 h-3.5 fill-amber-400 text-amber-400" }, i))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] text-slate-500 font-medium",
						children: rev.date
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-slate-300 leading-relaxed mb-4 italic",
					children: [
						"\"",
						rev.comment,
						"\""
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pt-4 border-t border-slate-800/80 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
						className: "text-xs font-bold text-white flex items-center gap-1",
						children: [
							rev.name,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "w-3 h-3 text-cyan-400 inline" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[11px] text-slate-400",
						children: [
							rev.role,
							", ",
							rev.business
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700",
						children: rev.source
					})]
				})]
			}, idx))
		})]
	});
}
//#endregion
export { TrustReviews as t };
