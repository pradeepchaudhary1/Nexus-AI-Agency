globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
		"mtime": "2026-10-14T06:14:04.963Z",
		"size": 0,
		"path": "../public/favicon.ico"
	},
	"/manifest.json": {
		"type": "application/json",
		"etag": "\"1ed-Auv5k0zL6j2jVQZclLL3kS99FRQ\"",
		"mtime": "2026-10-21T05:37:20.920Z",
		"size": 493,
		"path": "../public/manifest.json"
	},
	"/llms.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"339-lPXZJGPEnuFj12FwtagdC1nMADk\"",
		"mtime": "2026-10-14T07:48:50.689Z",
		"size": 825,
		"path": "../public/llms.txt"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"3ff-1aBJitoWlAqdNmrXrZ4U/Y+xLWA\"",
		"mtime": "2026-10-14T06:19:17.225Z",
		"size": 1023,
		"path": "../public/sitemap.xml"
	},
	"/sw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a4-qaI6j81pOCDjgv8CofnLNg2EA9I\"",
		"mtime": "2026-10-21T05:38:22.653Z",
		"size": 420,
		"path": "../public/sw.js"
	},
	"/assets/about-BS0S2DIu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1852-PJGg50axtJctVrq6hsxLSwo5vs4\"",
		"mtime": "2026-10-28T15:51:26.984Z",
		"size": 6226,
		"path": "../public/assets/about-BS0S2DIu.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"1b1-M07GcCAM+cAklSE4L+feWIVB37I\"",
		"mtime": "2026-10-21T06:29:44.905Z",
		"size": 433,
		"path": "../public/robots.txt"
	},
	"/assets/admin.resources-Cn22KiHE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34d8-2QnFeR4JTFXLyB9fyDctzNqoA/Q\"",
		"mtime": "2026-10-28T15:51:26.984Z",
		"size": 13528,
		"path": "../public/assets/admin.resources-Cn22KiHE.js"
	},
	"/assets/admin.resources-70Fc00rt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7c21-Y1dAYo9WzFPNVdsUNUrsrh79fdM\"",
		"mtime": "2026-10-28T15:51:26.984Z",
		"size": 31777,
		"path": "../public/assets/admin.resources-70Fc00rt.js"
	},
	"/assets/agent-demos-CBCsWngY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3f6-Az1TdET8d9RJP5ceD9NeJxbpoAU\"",
		"mtime": "2026-10-28T15:51:26.984Z",
		"size": 1014,
		"path": "../public/assets/agent-demos-CBCsWngY.js"
	},
	"/assets/auth-D9MXAB_J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"977-jHYYDD3Tx4XeXdTIzMGrzKwL/70\"",
		"mtime": "2026-10-28T15:51:26.984Z",
		"size": 2423,
		"path": "../public/assets/auth-D9MXAB_J.js"
	},
	"/assets/badge-DrwIVVsC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2fb-HBJU4uI7PQgXqWjQyp+79kslzIM\"",
		"mtime": "2026-10-28T15:51:26.984Z",
		"size": 763,
		"path": "../public/assets/badge-DrwIVVsC.js"
	},
	"/assets/book-audit-CPBByk98.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2be6-B+4GxbH5ixqx9l/RxnMFcQdBsfs\"",
		"mtime": "2026-10-28T15:51:26.984Z",
		"size": 11238,
		"path": "../public/assets/book-audit-CPBByk98.js"
	},
	"/assets/button-0NVjB4BO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7f9b-t7ef4GpSCLkEjBCQIRD+2+ah8Ic\"",
		"mtime": "2026-10-28T15:51:26.984Z",
		"size": 32667,
		"path": "../public/assets/button-0NVjB4BO.js"
	},
	"/assets/card-DiIFTf8P.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"41d-B6OZapt/iehqPoxUQ6kv/9R/VIE\"",
		"mtime": "2026-10-28T15:51:26.984Z",
		"size": 1053,
		"path": "../public/assets/card-DiIFTf8P.js"
	},
	"/assets/ai-specialist-certificate-C6xoD2pD.jpeg": {
		"type": "image/jpeg",
		"etag": "\"27eed-/ZQnMaU2FkPy7Tj/d+dTRGUVl4E\"",
		"mtime": "2026-10-28T15:51:27.011Z",
		"size": 163565,
		"path": "../public/assets/ai-specialist-certificate-C6xoD2pD.jpeg"
	},
	"/assets/createLucideIcon-C_LCJTxh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4ab-O9+czQKFHMACYTYdFrR18PV0PjE\"",
		"mtime": "2026-10-28T15:51:26.993Z",
		"size": 1195,
		"path": "../public/assets/createLucideIcon-C_LCJTxh.js"
	},
	"/assets/createServerFn-B4v1bqC0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9254-q8HCGXSKRcVjMB5XFUOJ2IwAds0\"",
		"mtime": "2026-10-28T15:51:26.995Z",
		"size": 37460,
		"path": "../public/assets/createServerFn-B4v1bqC0.js"
	},
	"/assets/dist-Br3fdQDq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1171-zeWKt3XGAx2l+cE78S4UL1M+8YI\"",
		"mtime": "2026-10-28T15:51:26.995Z",
		"size": 4465,
		"path": "../public/assets/dist-Br3fdQDq.js"
	},
	"/assets/file-text-BsrP2OTl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"181-2Jqpz5mE3PKDd94tjOJ7sGa135M\"",
		"mtime": "2026-10-28T15:51:26.996Z",
		"size": 385,
		"path": "../public/assets/file-text-BsrP2OTl.js"
	},
	"/assets/graduation-cap-BkVKh9VR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"258a-dT/32QoB0Rl2XseCCDZ6WSJFIag\"",
		"mtime": "2026-10-28T15:51:26.997Z",
		"size": 9610,
		"path": "../public/assets/graduation-cap-BkVKh9VR.js"
	},
	"/assets/how-it-works-DWxO2BzO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"72d-ZWKxhVTuUM2mTd4BbI57SSkgg0A\"",
		"mtime": "2026-10-28T15:51:26.998Z",
		"size": 1837,
		"path": "../public/assets/how-it-works-DWxO2BzO.js"
	},
	"/assets/client-B-7ywv9Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34b45-AOaMENN5cnXOVNFvyAg/SdWMUvk\"",
		"mtime": "2026-10-28T15:51:26.993Z",
		"size": 215877,
		"path": "../public/assets/client-B-7ywv9Z.js"
	},
	"/assets/index-CHMKOpfN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5f6cc-ykh7M+13HHktUpS/3GrEHFb3We0\"",
		"mtime": "2026-10-28T15:51:26.984Z",
		"size": 390860,
		"path": "../public/assets/index-CHMKOpfN.js"
	},
	"/assets/industries-LlbQ3Epz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"43e-r6KJn1kKyECxdy3ELpoaz2jGcxw\"",
		"mtime": "2026-10-28T15:51:26.999Z",
		"size": 1086,
		"path": "../public/assets/industries-LlbQ3Epz.js"
	},
	"/assets/jsx-runtime-Dk72oS4N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2246-jdmifwUklrWzVvkkm/k29uuTwFE\"",
		"mtime": "2026-10-28T15:51:26.999Z",
		"size": 8774,
		"path": "../public/assets/jsx-runtime-Dk72oS4N.js"
	},
	"/assets/label-BmwOngbm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ae-xDisMLp+JS+4cxDEtBlam5wd6RQ\"",
		"mtime": "2026-10-28T15:51:26.999Z",
		"size": 686,
		"path": "../public/assets/label-BmwOngbm.js"
	},
	"/assets/mail-D2CruLq1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d5-FJrB6B5vb4VDqCl3U9jaOOqAS6s\"",
		"mtime": "2026-10-28T15:51:26.999Z",
		"size": 213,
		"path": "../public/assets/mail-D2CruLq1.js"
	},
	"/assets/matchContext-DPiRwENW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a2-a5tnTTMLq0uEfeCOtoEu+0rS29M\"",
		"mtime": "2026-10-28T15:51:26.999Z",
		"size": 162,
		"path": "../public/assets/matchContext-DPiRwENW.js"
	},
	"/assets/not-found-DIgawKw1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"37-RTB6YH5iXRKeXz1Sn6ZQ+vS0lnc\"",
		"mtime": "2026-10-28T15:51:27.003Z",
		"size": 55,
		"path": "../public/assets/not-found-DIgawKw1.js"
	},
	"/assets/nexus-logo-DPCoMTuB.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2fdc8-mCyk4FlmCUTDSdLfjAU6GSFS3wQ\"",
		"mtime": "2026-10-28T15:51:27.015Z",
		"size": 196040,
		"path": "../public/assets/nexus-logo-DPCoMTuB.jpeg"
	},
	"/assets/privacy-CZNSW0dx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7a0-7olhhbytd+X9A7bgSXLx79YVy3U\"",
		"mtime": "2026-10-28T15:51:27.003Z",
		"size": 1952,
		"path": "../public/assets/privacy-CZNSW0dx.js"
	},
	"/assets/projects-D9kdUVPS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9d9c-Al2AaIHTbZtt4y9sil4oiU8RP+A\"",
		"mtime": "2026-10-28T15:51:27.003Z",
		"size": 40348,
		"path": "../public/assets/projects-D9kdUVPS.js"
	},
	"/assets/route-DGiv4tIs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d-OSZxXCWDFilbYpcT3laMnhPxlNk\"",
		"mtime": "2026-10-28T15:51:27.003Z",
		"size": 141,
		"path": "../public/assets/route-DGiv4tIs.js"
	},
	"/assets/shield-check-DD4jQxKd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b0-6Q5sgM5NIqWHiNbEhmaMFdfkP+M\"",
		"mtime": "2026-10-28T15:51:27.003Z",
		"size": 432,
		"path": "../public/assets/shield-check-DD4jQxKd.js"
	},
	"/assets/resources-z49jkzpX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b57-22R5mc/g/eijHw9JLH7pcM2AUOs\"",
		"mtime": "2026-10-28T15:51:27.003Z",
		"size": 2903,
		"path": "../public/assets/resources-z49jkzpX.js"
	},
	"/assets/solutions-C4J2BSPP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95a-713VyyTfEWj46LtZiFbUJj9/5jA\"",
		"mtime": "2026-10-28T15:51:27.003Z",
		"size": 2394,
		"path": "../public/assets/solutions-C4J2BSPP.js"
	},
	"/assets/styles-D0-jo4kH.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"198ba-8ljiYu3/CB/knqv1A5OqLMwR1RY\"",
		"mtime": "2026-10-28T15:51:27.016Z",
		"size": 104634,
		"path": "../public/assets/styles-D0-jo4kH.css"
	},
	"/assets/textarea-BqzxXQuE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"349-2w51r9vvK2zIZJqoSxBtdEe5rck\"",
		"mtime": "2026-10-28T15:51:27.008Z",
		"size": 841,
		"path": "../public/assets/textarea-BqzxXQuE.js"
	},
	"/assets/tslib.es6-Tae09705.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"42d-qJHuGuq51+EbLaebsBAkbj1JLbk\"",
		"mtime": "2026-10-28T15:51:27.009Z",
		"size": 1069,
		"path": "../public/assets/tslib.es6-Tae09705.js"
	},
	"/assets/useRouter-BWuYVZyj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97-U1ZzK0eROVVNcRQXWMxE1xpT0F4\"",
		"mtime": "2026-10-28T15:51:27.009Z",
		"size": 151,
		"path": "../public/assets/useRouter-BWuYVZyj.js"
	},
	"/assets/useSelector--FWu1dVt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"839-NW6+zS0uWxqEwNfJB0UpSJ2/D0U\"",
		"mtime": "2026-10-28T15:51:27.009Z",
		"size": 2105,
		"path": "../public/assets/useSelector--FWu1dVt.js"
	},
	"/assets/founder-pradeep-Dp1Pnjpv.png": {
		"type": "image/png",
		"etag": "\"1b4520-gAv3nhf6bc7yNdOYM0CjN30f28s\"",
		"mtime": "2026-10-28T15:51:27.013Z",
		"size": 1787168,
		"path": "../public/assets/founder-pradeep-Dp1Pnjpv.png"
	},
	"/zoya-orb.jpg": {
		"type": "image/jpeg",
		"etag": "\"9f9748-A9tQXTzEWxCFJWrT/47OZuAz5Rk\"",
		"mtime": "2026-09-03T10:32:54.583Z",
		"size": 10458952,
		"path": "../public/zoya-orb.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_A2QEgq = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_A2QEgq
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
