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
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"3ff-1aBJitoWlAqdNmrXrZ4U/Y+xLWA\"",
		"mtime": "2026-10-14T06:19:17.225Z",
		"size": 1023,
		"path": "../public/sitemap.xml"
	},
	"/llms.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"339-lPXZJGPEnuFj12FwtagdC1nMADk\"",
		"mtime": "2026-10-14T07:48:50.689Z",
		"size": 825,
		"path": "../public/llms.txt"
	},
	"/assets/about-CkoohGkT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1832-bTFs4C4JwuIh4BruopivAFUbjVs\"",
		"mtime": "2026-10-28T18:56:09.897Z",
		"size": 6194,
		"path": "../public/assets/about-CkoohGkT.js"
	},
	"/assets/admin.resources-CAFBruNs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3632-c87ANAyJSs7v2/vYHTSYNAewhGI\"",
		"mtime": "2026-10-28T18:56:09.897Z",
		"size": 13874,
		"path": "../public/assets/admin.resources-CAFBruNs.js"
	},
	"/assets/admin.resources-P2X-01K4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7dee-XV9FtkTrKjYuBPcVUR8KQkn3L80\"",
		"mtime": "2026-10-28T18:56:09.903Z",
		"size": 32238,
		"path": "../public/assets/admin.resources-P2X-01K4.js"
	},
	"/assets/agent-demos-Co7Yx7ng.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3f6-yP+pOlULU0dp9eN/RoquakOyVmw\"",
		"mtime": "2026-10-28T18:56:09.903Z",
		"size": 1014,
		"path": "../public/assets/agent-demos-Co7Yx7ng.js"
	},
	"/assets/auth-BbK_sOeR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"977-LJyrP2zXjOZxdjl+Xa9CyXPbToA\"",
		"mtime": "2026-10-28T18:56:09.903Z",
		"size": 2423,
		"path": "../public/assets/auth-BbK_sOeR.js"
	},
	"/assets/badge-C7wSRn6h.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3d7-TGHRwZsoM5vueqYpjLF7AP6ziU4\"",
		"mtime": "2026-10-28T18:56:09.903Z",
		"size": 983,
		"path": "../public/assets/badge-C7wSRn6h.js"
	},
	"/assets/ai-specialist-certificate-C6xoD2pD.jpeg": {
		"type": "image/jpeg",
		"etag": "\"27eed-/ZQnMaU2FkPy7Tj/d+dTRGUVl4E\"",
		"mtime": "2026-10-28T18:56:09.929Z",
		"size": 163565,
		"path": "../public/assets/ai-specialist-certificate-C6xoD2pD.jpeg"
	},
	"/assets/book-audit-Bm2FQrdS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2deb-7tK+BvMVRhhpzBh8LYj4myXTlbY\"",
		"mtime": "2026-10-28T18:56:09.903Z",
		"size": 11755,
		"path": "../public/assets/book-audit-Bm2FQrdS.js"
	},
	"/assets/button-0NVjB4BO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7f9b-t7ef4GpSCLkEjBCQIRD+2+ah8Ic\"",
		"mtime": "2026-10-28T18:56:09.903Z",
		"size": 32667,
		"path": "../public/assets/button-0NVjB4BO.js"
	},
	"/assets/createServerFn-B4v1bqC0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9254-q8HCGXSKRcVjMB5XFUOJ2IwAds0\"",
		"mtime": "2026-10-28T18:56:09.913Z",
		"size": 37460,
		"path": "../public/assets/createServerFn-B4v1bqC0.js"
	},
	"/assets/dist-DG1AmUsq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"116a-O6l7dYnGWSJrg9F1Mu0+/rREqNs\"",
		"mtime": "2026-10-28T18:56:09.913Z",
		"size": 4458,
		"path": "../public/assets/dist-DG1AmUsq.js"
	},
	"/assets/client-BR1AAgpu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34d88-fWLDovLcJDT1fqSV1kOgPU+1rGg\"",
		"mtime": "2026-10-28T18:56:09.913Z",
		"size": 216456,
		"path": "../public/assets/client-BR1AAgpu.js"
	},
	"/assets/graduation-cap-BkVKh9VR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"258a-dT/32QoB0Rl2XseCCDZ6WSJFIag\"",
		"mtime": "2026-10-28T18:56:09.913Z",
		"size": 9610,
		"path": "../public/assets/graduation-cap-BkVKh9VR.js"
	},
	"/assets/how-it-works-5NUWqruT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"72d-pchogMHlYJ0K8xzCelLWwVN7pKc\"",
		"mtime": "2026-10-28T18:56:09.913Z",
		"size": 1837,
		"path": "../public/assets/how-it-works-5NUWqruT.js"
	},
	"/assets/createLucideIcon-C_LCJTxh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4ab-O9+czQKFHMACYTYdFrR18PV0PjE\"",
		"mtime": "2026-10-28T18:56:09.913Z",
		"size": 1195,
		"path": "../public/assets/createLucideIcon-C_LCJTxh.js"
	},
	"/assets/industries-SjNHTFzI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"43e-sv+qI2MzRRVFh8JPar2nuWuA1lk\"",
		"mtime": "2026-10-28T18:56:09.919Z",
		"size": 1086,
		"path": "../public/assets/industries-SjNHTFzI.js"
	},
	"/assets/index-Catav99T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"699fc-TR6SC20mMmo2/8dYdkzUohD+hiE\"",
		"mtime": "2026-10-28T18:56:09.897Z",
		"size": 432636,
		"path": "../public/assets/index-Catav99T.js"
	},
	"/assets/jsx-runtime-Dk72oS4N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2246-jdmifwUklrWzVvkkm/k29uuTwFE\"",
		"mtime": "2026-10-28T18:56:09.919Z",
		"size": 8774,
		"path": "../public/assets/jsx-runtime-Dk72oS4N.js"
	},
	"/assets/label-D_heZWBk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ae-elXc3IDLMZ+G2Pe4gEzSDXrgSVg\"",
		"mtime": "2026-10-28T18:56:09.919Z",
		"size": 686,
		"path": "../public/assets/label-D_heZWBk.js"
	},
	"/assets/matchContext-DPiRwENW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a2-a5tnTTMLq0uEfeCOtoEu+0rS29M\"",
		"mtime": "2026-10-28T18:56:09.919Z",
		"size": 162,
		"path": "../public/assets/matchContext-DPiRwENW.js"
	},
	"/assets/nexus-logo-DPCoMTuB.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2fdc8-mCyk4FlmCUTDSdLfjAU6GSFS3wQ\"",
		"mtime": "2026-10-28T18:56:09.936Z",
		"size": 196040,
		"path": "../public/assets/nexus-logo-DPCoMTuB.jpeg"
	},
	"/assets/not-found-DIgawKw1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"37-RTB6YH5iXRKeXz1Sn6ZQ+vS0lnc\"",
		"mtime": "2026-10-28T18:56:09.919Z",
		"size": 55,
		"path": "../public/assets/not-found-DIgawKw1.js"
	},
	"/assets/privacy-BzELXkDp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7a0-LU+iJ74cJMwEyco03rB4QTQ/3kY\"",
		"mtime": "2026-10-28T18:56:09.919Z",
		"size": 1952,
		"path": "../public/assets/privacy-BzELXkDp.js"
	},
	"/assets/route-By3Z8Ndi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d-Y8KhnrzfyV9VosJaFOm2QHYW62M\"",
		"mtime": "2026-10-28T18:56:09.919Z",
		"size": 141,
		"path": "../public/assets/route-By3Z8Ndi.js"
	},
	"/assets/shield-check-DD4jQxKd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b0-6Q5sgM5NIqWHiNbEhmaMFdfkP+M\"",
		"mtime": "2026-10-28T18:56:09.919Z",
		"size": 432,
		"path": "../public/assets/shield-check-DD4jQxKd.js"
	},
	"/assets/solutions-DXpLX8rw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95a-/8gcNFT+uIrqxJT+DODtZ3Czob8\"",
		"mtime": "2026-10-28T18:56:09.928Z",
		"size": 2394,
		"path": "../public/assets/solutions-DXpLX8rw.js"
	},
	"/assets/styles-BHUymh_Z.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1b28d-k8PpBJU2bjmJgt8Ad+eQKuxYkvM\"",
		"mtime": "2026-10-28T18:56:09.936Z",
		"size": 111245,
		"path": "../public/assets/styles-BHUymh_Z.css"
	},
	"/assets/useRouter-BWuYVZyj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97-U1ZzK0eROVVNcRQXWMxE1xpT0F4\"",
		"mtime": "2026-10-28T18:56:09.929Z",
		"size": 151,
		"path": "../public/assets/useRouter-BWuYVZyj.js"
	},
	"/assets/useSelector--FWu1dVt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"839-NW6+zS0uWxqEwNfJB0UpSJ2/D0U\"",
		"mtime": "2026-10-28T18:56:09.929Z",
		"size": 2105,
		"path": "../public/assets/useSelector--FWu1dVt.js"
	},
	"/assets/founder-pradeep-Dp1Pnjpv.png": {
		"type": "image/png",
		"etag": "\"1b4520-gAv3nhf6bc7yNdOYM0CjN30f28s\"",
		"mtime": "2026-10-28T18:56:09.934Z",
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
