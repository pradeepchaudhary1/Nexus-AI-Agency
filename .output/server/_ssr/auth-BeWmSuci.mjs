import { n as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Bo4nKw7z.mjs";
import { x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Input } from "./input-BlEJlNY0.mjs";
import { t as supabase } from "./client-BmndfN-r.mjs";
import { t as Label } from "./label-DvayCU8F.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-BeWmSuci.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AuthPage() {
	const navigate = useNavigate();
	const [mode, setMode] = (0, import_react.useState)("signin");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [msg, setMsg] = (0, import_react.useState)(null);
	async function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const email = String(fd.get("email") ?? "").trim();
		const password = String(fd.get("password") ?? "");
		if (password.length < 8) return setMsg({
			ok: false,
			text: "Password must be at least 8 characters."
		});
		setBusy(true);
		setMsg(null);
		if (mode === "signup") {
			const { data, error } = await supabase.auth.signUp({
				email,
				password,
				options: { emailRedirectTo: `${window.location.origin}/auth` }
			});
			setBusy(false);
			if (error) return setMsg({
				ok: false,
				text: error.message
			});
			if (data.session) return navigate({ to: "/admin/resources" });
			return setMsg({
				ok: true,
				text: "Account created. Check your email and click the confirmation link, then sign in."
			});
		}
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});
		setBusy(false);
		if (error) return setMsg({
			ok: false,
			text: error.message
		});
		navigate({ to: "/admin/resources" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-pad",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "site-container max-w-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-panel p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Admin access"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-2xl font-semibold",
						children: mode === "signin" ? "Sign in" : "Create account"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "mt-6 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "email",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "email",
									name: "email",
									type: "email",
									autoComplete: "email",
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "password",
									children: "Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "password",
									name: "password",
									type: "password",
									autoComplete: mode === "signin" ? "current-password" : "new-password",
									required: true,
									minLength: 8
								})]
							}),
							msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								role: "status",
								className: `text-sm ${msg.ok ? "text-primary" : "text-destructive"}`,
								children: msg.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								className: "w-full",
								disabled: busy,
								children: busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Sign up"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setMode(mode === "signin" ? "signup" : "signin");
							setMsg(null);
						},
						className: "mt-5 text-sm text-muted-foreground hover:text-foreground",
						children: mode === "signin" ? "No account yet? Sign up" : "Already have an account? Sign in"
					})
				]
			})
		})
	});
}
//#endregion
export { AuthPage as component };
