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
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"5b8-PvNq5/2BWMB39ct5VUuOIym1Epc\"",
		"mtime": "2026-10-31T07:53:23.508Z",
		"size": 1464,
		"path": "../public/sitemap.xml"
	},
	"/_headers": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"16f-S0tiRvEKuraBq9X+GYRI51saybQ\"",
		"mtime": "2026-10-31T07:54:32.946Z",
		"size": 367,
		"path": "../public/_headers"
	},
	"/llms.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"339-lPXZJGPEnuFj12FwtagdC1nMADk\"",
		"mtime": "2026-10-14T07:48:50.689Z",
		"size": 825,
		"path": "../public/llms.txt"
	},
	"/assets/about-07FEuUlC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"182b-cxyN56vw+gjKYR2TXaOg27zPl5U\"",
		"mtime": "2026-11-01T09:03:23.338Z",
		"size": 6187,
		"path": "../public/assets/about-07FEuUlC.js"
	},
	"/assets/admin.resources-D2VlbjrT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5808-U1tejoCz8hkzFJCYZgNFNCoXl2c\"",
		"mtime": "2026-11-01T09:03:23.340Z",
		"size": 22536,
		"path": "../public/assets/admin.resources-D2VlbjrT.js"
	},
	"/assets/agent-demos-CSocLCTb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3f7-Fi0sPj+nNJ2WLmmXvccLA41tAMk\"",
		"mtime": "2026-11-01T09:03:23.341Z",
		"size": 1015,
		"path": "../public/assets/agent-demos-CSocLCTb.js"
	},
	"/assets/admin.resources-3kdg_jfI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5bce-Pv8YQbmOToU5S5AdlcrX8+dH45U\"",
		"mtime": "2026-11-01T09:03:23.339Z",
		"size": 23502,
		"path": "../public/assets/admin.resources-3kdg_jfI.js"
	},
	"/assets/ai-specialist-certificate-C6xoD2pD.jpeg": {
		"type": "image/jpeg",
		"etag": "\"27eed-/ZQnMaU2FkPy7Tj/d+dTRGUVl4E\"",
		"mtime": "2026-11-01T09:03:23.359Z",
		"size": 163565,
		"path": "../public/assets/ai-specialist-certificate-C6xoD2pD.jpeg"
	},
	"/assets/auth-BCc6-fsZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"977-pg2aNwkTco/d6ZecdYCctGrKRzU\"",
		"mtime": "2026-11-01T09:03:23.341Z",
		"size": 2423,
		"path": "../public/assets/auth-BCc6-fsZ.js"
	},
	"/assets/badge-BqVYJrzi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3d7-pw/cGNY46bcJThBntAxU4AgnRKw\"",
		"mtime": "2026-11-01T09:03:23.342Z",
		"size": 983,
		"path": "../public/assets/badge-BqVYJrzi.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"1b1-M07GcCAM+cAklSE4L+feWIVB37I\"",
		"mtime": "2026-10-21T06:29:44.905Z",
		"size": 433,
		"path": "../public/robots.txt"
	},
	"/sw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a4-qaI6j81pOCDjgv8CofnLNg2EA9I\"",
		"mtime": "2026-10-21T05:38:22.653Z",
		"size": 420,
		"path": "../public/sw.js"
	},
	"/assets/book-audit-Ca7E7UdY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2cd4-lOO1Ql/Z9rY3WzY6XjtKEehJTA8\"",
		"mtime": "2026-11-01T09:03:23.344Z",
		"size": 11476,
		"path": "../public/assets/book-audit-Ca7E7UdY.js"
	},
	"/assets/button-DVe77EEc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7f94-b9Zkp93VJO5WLgGzGwBIsP/JMEg\"",
		"mtime": "2026-11-01T09:03:23.344Z",
		"size": 32660,
		"path": "../public/assets/button-DVe77EEc.js"
	},
	"/assets/createClientRpc-DgqPZYIB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8145-5FnyJJVzS/WgmrtAt8242Wk5Wl8\"",
		"mtime": "2026-11-01T09:03:23.346Z",
		"size": 33093,
		"path": "../public/assets/createClientRpc-DgqPZYIB.js"
	},
	"/assets/createLucideIcon-C_LCJTxh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4ab-O9+czQKFHMACYTYdFrR18PV0PjE\"",
		"mtime": "2026-11-01T09:03:23.347Z",
		"size": 1195,
		"path": "../public/assets/createLucideIcon-C_LCJTxh.js"
	},
	"/assets/createServerFn-DdnD50II.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1152-kAzJjvzdBipljrx0H5AUeeIL9qo\"",
		"mtime": "2026-11-01T09:03:23.347Z",
		"size": 4434,
		"path": "../public/assets/createServerFn-DdnD50II.js"
	},
	"/assets/client-CN8BPBoL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35c71-bXgdVoLLW+vxcVPR5245pI65e7g\"",
		"mtime": "2026-11-01T09:03:23.346Z",
		"size": 220273,
		"path": "../public/assets/client-CN8BPBoL.js"
	},
	"/assets/how-it-works-BlhZbd4q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"729-7O38nGto5AFfH66Tn4qKvaRCS1Y\"",
		"mtime": "2026-11-01T09:03:23.347Z",
		"size": 1833,
		"path": "../public/assets/how-it-works-BlhZbd4q.js"
	},
	"/assets/industries-DkbGaGDA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"43a-cj9EYxotzdeOO1wL51yWK0ytu04\"",
		"mtime": "2026-11-01T09:03:23.349Z",
		"size": 1082,
		"path": "../public/assets/industries-DkbGaGDA.js"
	},
	"/assets/index-M6DA41Vi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"63638-IeS6m+2yLjg/cfivSl7+6BRWQfY\"",
		"mtime": "2026-11-01T09:03:23.338Z",
		"size": 407096,
		"path": "../public/assets/index-M6DA41Vi.js"
	},
	"/assets/jsx-runtime-Dk72oS4N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2246-jdmifwUklrWzVvkkm/k29uuTwFE\"",
		"mtime": "2026-11-01T09:03:23.350Z",
		"size": 8774,
		"path": "../public/assets/jsx-runtime-Dk72oS4N.js"
	},
	"/assets/label-zEKp7jU7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4ba-aNIfDwcathbhQeG2pfIiB5tlLKw\"",
		"mtime": "2026-11-01T09:03:23.350Z",
		"size": 1210,
		"path": "../public/assets/label-zEKp7jU7.js"
	},
	"/assets/link-CtBJQz2G.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"243f-Hzb3Pon6SUeNF3wvLvjqGR5hfgw\"",
		"mtime": "2026-11-01T09:03:23.351Z",
		"size": 9279,
		"path": "../public/assets/link-CtBJQz2G.js"
	},
	"/assets/matchContext-DPiRwENW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a2-a5tnTTMLq0uEfeCOtoEu+0rS29M\"",
		"mtime": "2026-11-01T09:03:23.351Z",
		"size": 162,
		"path": "../public/assets/matchContext-DPiRwENW.js"
	},
	"/assets/nexus-logo-DPCoMTuB.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2fdc8-mCyk4FlmCUTDSdLfjAU6GSFS3wQ\"",
		"mtime": "2026-11-01T09:03:23.362Z",
		"size": 196040,
		"path": "../public/assets/nexus-logo-DPCoMTuB.jpeg"
	},
	"/assets/not-found-DIgawKw1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"37-RTB6YH5iXRKeXz1Sn6ZQ+vS0lnc\"",
		"mtime": "2026-11-01T09:03:23.353Z",
		"size": 55,
		"path": "../public/assets/not-found-DIgawKw1.js"
	},
	"/assets/page-sections-CRzUtXEz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"177f-D2KMWZ93M4+4UBLZLAZzEKVkQY4\"",
		"mtime": "2026-11-01T09:03:23.353Z",
		"size": 6015,
		"path": "../public/assets/page-sections-CRzUtXEz.js"
	},
	"/assets/privacy-Cpcgh3Cj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7a8-RCM+JBPjVxoeF1BvvC32EvqSnz0\"",
		"mtime": "2026-11-01T09:03:23.354Z",
		"size": 1960,
		"path": "../public/assets/privacy-Cpcgh3Cj.js"
	},
	"/assets/route-flXBlCX8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d-CbCpIZNL7dkM6Hkg9yWezAQKPpw\"",
		"mtime": "2026-11-01T09:03:23.354Z",
		"size": 141,
		"path": "../public/assets/route-flXBlCX8.js"
	},
	"/assets/solutions-CcTPFFro.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"951-GDff4OYvUDy7YlVzgc4WsGNDl88\"",
		"mtime": "2026-11-01T09:03:23.356Z",
		"size": 2385,
		"path": "../public/assets/solutions-CcTPFFro.js"
	},
	"/assets/styles-Bbk-4Hz6.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1b94d-0cqwfTGbjJg3ormQM9LEQyCtNbA\"",
		"mtime": "2026-11-01T09:03:23.364Z",
		"size": 112973,
		"path": "../public/assets/styles-Bbk-4Hz6.css"
	},
	"/assets/useRouter-BWuYVZyj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97-U1ZzK0eROVVNcRQXWMxE1xpT0F4\"",
		"mtime": "2026-11-01T09:03:23.357Z",
		"size": 151,
		"path": "../public/assets/useRouter-BWuYVZyj.js"
	},
	"/assets/useSelector--FWu1dVt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"839-NW6+zS0uWxqEwNfJB0UpSJ2/D0U\"",
		"mtime": "2026-11-01T09:03:23.357Z",
		"size": 2105,
		"path": "../public/assets/useSelector--FWu1dVt.js"
	},
	"/assets/founder-pradeep-Dp1Pnjpv.png": {
		"type": "image/png",
		"etag": "\"1b4520-gAv3nhf6bc7yNdOYM0CjN30f28s\"",
		"mtime": "2026-11-01T09:03:23.361Z",
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
