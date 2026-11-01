globalThis.__nitro_main__ = import.meta.url;
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx+unenv.mjs";
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
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
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"1b1-M07GcCAM+cAklSE4L+feWIVB37I\"",
		"mtime": "2026-10-21T06:29:44.905Z",
		"size": 433,
		"path": "../public/robots.txt"
	},
	"/llms.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"339-lPXZJGPEnuFj12FwtagdC1nMADk\"",
		"mtime": "2026-10-14T07:48:50.689Z",
		"size": 825,
		"path": "../public/llms.txt"
	},
	"/sw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a4-qaI6j81pOCDjgv8CofnLNg2EA9I\"",
		"mtime": "2026-10-21T05:38:22.653Z",
		"size": 420,
		"path": "../public/sw.js"
	},
	"/_headers": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"16f-S0tiRvEKuraBq9X+GYRI51saybQ\"",
		"mtime": "2026-10-31T07:54:32.946Z",
		"size": 367,
		"path": "../public/_headers"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"5b8-PvNq5/2BWMB39ct5VUuOIym1Epc\"",
		"mtime": "2026-10-31T07:53:23.508Z",
		"size": 1464,
		"path": "../public/sitemap.xml"
	},
	"/assets/about-CEKPvrY5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b3e-lJxD0UFpzblKGCWTukJ6nqVcVPs\"",
		"mtime": "2026-11-01T19:46:26.733Z",
		"size": 6974,
		"path": "../public/assets/about-CEKPvrY5.js"
	},
	"/assets/admin.resources-AHgxYW23.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"da29-U2UKWcKMO4GC2GcTiIRX7mPi2V4\"",
		"mtime": "2026-11-01T19:46:26.734Z",
		"size": 55849,
		"path": "../public/assets/admin.resources-AHgxYW23.js"
	},
	"/assets/admin.resources-BYadJv4t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6baf-Uw5fSpEDzD+0u8b6cgzhHwnDU3M\"",
		"mtime": "2026-11-01T19:46:26.734Z",
		"size": 27567,
		"path": "../public/assets/admin.resources-BYadJv4t.js"
	},
	"/assets/auth-BY-ku-n7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"955-rH0GDo3cDN3Xh9xyhI4WqgBPDVE\"",
		"mtime": "2026-11-01T19:46:26.738Z",
		"size": 2389,
		"path": "../public/assets/auth-BY-ku-n7.js"
	},
	"/assets/ai-specialist-certificate-C6xoD2pD.jpeg": {
		"type": "image/jpeg",
		"etag": "\"27eed-/ZQnMaU2FkPy7Tj/d+dTRGUVl4E\"",
		"mtime": "2026-11-01T19:46:26.753Z",
		"size": 163565,
		"path": "../public/assets/ai-specialist-certificate-C6xoD2pD.jpeg"
	},
	"/assets/createLucideIcon-C_LCJTxh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4ab-O9+czQKFHMACYTYdFrR18PV0PjE\"",
		"mtime": "2026-11-01T19:46:26.738Z",
		"size": 1195,
		"path": "../public/assets/createLucideIcon-C_LCJTxh.js"
	},
	"/assets/agent-demos-DzqmmTGz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3f7-4cTiPHjrC/oMtmWKbPQ+vJvbRCI\"",
		"mtime": "2026-11-01T19:46:26.734Z",
		"size": 1015,
		"path": "../public/assets/agent-demos-DzqmmTGz.js"
	},
	"/assets/how-it-works-C6cD6rUl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"729-yL4/AnC3VlQ8kESiHJhsBb3017w\"",
		"mtime": "2026-11-01T19:46:26.738Z",
		"size": 1833,
		"path": "../public/assets/how-it-works-C6cD6rUl.js"
	},
	"/assets/industries-DYUnsBc2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"43a-MnzIhdN/FY6FsLRyxiN71zKn3FM\"",
		"mtime": "2026-11-01T19:46:26.738Z",
		"size": 1082,
		"path": "../public/assets/industries-DYUnsBc2.js"
	},
	"/assets/button-DVe77EEc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7f94-b9Zkp93VJO5WLgGzGwBIsP/JMEg\"",
		"mtime": "2026-11-01T19:46:26.738Z",
		"size": 32660,
		"path": "../public/assets/button-DVe77EEc.js"
	},
	"/assets/jsx-runtime-Dk72oS4N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2246-jdmifwUklrWzVvkkm/k29uuTwFE\"",
		"mtime": "2026-11-01T19:46:26.743Z",
		"size": 8774,
		"path": "../public/assets/jsx-runtime-Dk72oS4N.js"
	},
	"/assets/input-Bvqix4sk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35e97-mGw2ftFl8y0eWBbfMuEVG3Bmvec\"",
		"mtime": "2026-11-01T19:46:26.743Z",
		"size": 220823,
		"path": "../public/assets/input-Bvqix4sk.js"
	},
	"/assets/link-CtBJQz2G.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"243f-Hzb3Pon6SUeNF3wvLvjqGR5hfgw\"",
		"mtime": "2026-11-01T19:46:26.746Z",
		"size": 9279,
		"path": "../public/assets/link-CtBJQz2G.js"
	},
	"/assets/index-C7oiDxkB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6fedb-vUJWxXBuU7tO9rq6MxY46NP1jy4\"",
		"mtime": "2026-11-01T19:46:26.731Z",
		"size": 458459,
		"path": "../public/assets/index-C7oiDxkB.js"
	},
	"/assets/label-Dbics62x.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4be-P5aev4obcoreJbQHd2WOUP1d6Bw\"",
		"mtime": "2026-11-01T19:46:26.745Z",
		"size": 1214,
		"path": "../public/assets/label-Dbics62x.js"
	},
	"/assets/matchContext-XPI5x9M_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cc-ExYEJA+I9QErd78vLouhplml95M\"",
		"mtime": "2026-11-01T19:46:26.747Z",
		"size": 204,
		"path": "../public/assets/matchContext-XPI5x9M_.js"
	},
	"/assets/nexus-logo-DPCoMTuB.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2fdc8-mCyk4FlmCUTDSdLfjAU6GSFS3wQ\"",
		"mtime": "2026-11-01T19:46:26.760Z",
		"size": 196040,
		"path": "../public/assets/nexus-logo-DPCoMTuB.jpeg"
	},
	"/assets/page-sections-Dn4JkLmu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1784-Z+L9sf7V9PXazMxe9l6QPVrWALQ\"",
		"mtime": "2026-11-01T19:46:26.749Z",
		"size": 6020,
		"path": "../public/assets/page-sections-Dn4JkLmu.js"
	},
	"/assets/privacy-Ub-NEXCW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7a8-dADNmDTb7q/17Q8q+kGlXdUiIaw\"",
		"mtime": "2026-11-01T19:46:26.749Z",
		"size": 1960,
		"path": "../public/assets/privacy-Ub-NEXCW.js"
	},
	"/assets/route-DR5ixYug.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d-1kqgTA6pSCG0KoQp5e7L6TahfPw\"",
		"mtime": "2026-11-01T19:46:26.752Z",
		"size": 141,
		"path": "../public/assets/route-DR5ixYug.js"
	},
	"/assets/solutions-BQCV0QrD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"951-TlYlblpJ7OSyPx8S77Bp8mZRhjg\"",
		"mtime": "2026-11-01T19:46:26.753Z",
		"size": 2385,
		"path": "../public/assets/solutions-BQCV0QrD.js"
	},
	"/assets/styles-CsJBOOI3.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1c541-5/AcYtkFac4DqSA9HXV4HUDiPxo\"",
		"mtime": "2026-11-01T19:46:26.762Z",
		"size": 116033,
		"path": "../public/assets/styles-CsJBOOI3.css"
	},
	"/assets/useRouter-BWuYVZyj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97-U1ZzK0eROVVNcRQXWMxE1xpT0F4\"",
		"mtime": "2026-11-01T19:46:26.753Z",
		"size": 151,
		"path": "../public/assets/useRouter-BWuYVZyj.js"
	},
	"/assets/useSelector--FWu1dVt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"839-NW6+zS0uWxqEwNfJB0UpSJ2/D0U\"",
		"mtime": "2026-11-01T19:46:26.753Z",
		"size": 2105,
		"path": "../public/assets/useSelector--FWu1dVt.js"
	},
	"/assets/founder-pradeep-Dp1Pnjpv.png": {
		"type": "image/png",
		"etag": "\"1b4520-gAv3nhf6bc7yNdOYM0CjN30f28s\"",
		"mtime": "2026-11-01T19:46:26.756Z",
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
