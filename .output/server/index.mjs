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
	"/assets/admin.resources-Bpdechlr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3249-BLDK5bloJBpccLiG6djWelAJpwE\"",
		"mtime": "2026-10-16T09:50:11.589Z",
		"size": 12873,
		"path": "../public/assets/admin.resources-Bpdechlr.js"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"3ff-1aBJitoWlAqdNmrXrZ4U/Y+xLWA\"",
		"mtime": "2026-10-14T06:19:17.225Z",
		"size": 1023,
		"path": "../public/sitemap.xml"
	},
	"/assets/admin.resources-C4pYUQ1X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"198b-agEccia3OPAsJUjJRJa8oCF4+Is\"",
		"mtime": "2026-10-16T09:50:11.590Z",
		"size": 6539,
		"path": "../public/assets/admin.resources-C4pYUQ1X.js"
	},
	"/assets/agent-demos-BTHp0qno.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3fc-m8oabM8BehEduVtERYYxeg5CzSg\"",
		"mtime": "2026-10-16T09:50:11.591Z",
		"size": 1020,
		"path": "../public/assets/agent-demos-BTHp0qno.js"
	},
	"/assets/auth-D736udrm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"94d-BqsDO++xMec3BBBelM+IQBumn9Q\"",
		"mtime": "2026-10-16T09:50:11.591Z",
		"size": 2381,
		"path": "../public/assets/auth-D736udrm.js"
	},
	"/assets/book-audit-CNXqUk5D.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2219-FUGHI2+w4Q3nrGmTyxeh99HXFw4\"",
		"mtime": "2026-10-16T09:50:11.591Z",
		"size": 8729,
		"path": "../public/assets/book-audit-CNXqUk5D.js"
	},
	"/assets/ai-specialist-certificate-C6xoD2pD.jpeg": {
		"type": "image/jpeg",
		"etag": "\"27eed-/ZQnMaU2FkPy7Tj/d+dTRGUVl4E\"",
		"mtime": "2026-10-16T09:50:11.607Z",
		"size": 163565,
		"path": "../public/assets/ai-specialist-certificate-C6xoD2pD.jpeg"
	},
	"/assets/client-DgPF7xDi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"354a2-EsVmcVvR9KfX+wsAXt6dgKEBDYY\"",
		"mtime": "2026-10-16T09:50:11.591Z",
		"size": 218274,
		"path": "../public/assets/client-DgPF7xDi.js"
	},
	"/assets/dist-C9SyhsKP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9295-NFuOSUDo1Di1gP0OPNlFsJpKJP0\"",
		"mtime": "2026-10-16T09:50:11.591Z",
		"size": 37525,
		"path": "../public/assets/dist-C9SyhsKP.js"
	},
	"/assets/how-it-works-NSx91g-G.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"72e-crPfEscESn2lPqGOaVu9Z+pAsJA\"",
		"mtime": "2026-10-16T09:50:11.591Z",
		"size": 1838,
		"path": "../public/assets/how-it-works-NSx91g-G.js"
	},
	"/assets/industries-Bsz_PgV5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"43f-kqwIl3/zC1mmzR/OkoCpR/g3Gc8\"",
		"mtime": "2026-10-16T09:50:11.591Z",
		"size": 1087,
		"path": "../public/assets/industries-Bsz_PgV5.js"
	},
	"/assets/label-CFZHSvFC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"28a-XF5RxwnzufgFdz6N+g/TE4SJcUo\"",
		"mtime": "2026-10-16T09:50:11.591Z",
		"size": 650,
		"path": "../public/assets/label-CFZHSvFC.js"
	},
	"/assets/leads.functions-Bk_mfK9n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1412-PC0g8THxOa8Y8kEfcETTnZl5kwk\"",
		"mtime": "2026-10-16T09:50:11.591Z",
		"size": 5138,
		"path": "../public/assets/leads.functions-Bk_mfK9n.js"
	},
	"/assets/index-DKVEmBAO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"602b1-or280VtQI0/hDPA+Dw5dEeAg1zM\"",
		"mtime": "2026-10-16T09:50:11.588Z",
		"size": 393905,
		"path": "../public/assets/index-DKVEmBAO.js"
	},
	"/assets/matchContext-CvbQVPR-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a0-BnhiO1XpIYKISU/f0jriV8AagoI\"",
		"mtime": "2026-10-16T09:50:11.591Z",
		"size": 160,
		"path": "../public/assets/matchContext-CvbQVPR-.js"
	},
	"/assets/page-sections-4OA0IwXu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"74ac-hGN5Q/eZByqrzBGd+vkio5/f6zE\"",
		"mtime": "2026-10-16T09:50:11.601Z",
		"size": 29868,
		"path": "../public/assets/page-sections-4OA0IwXu.js"
	},
	"/assets/nexus-logo-DPCoMTuB.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2fdc8-mCyk4FlmCUTDSdLfjAU6GSFS3wQ\"",
		"mtime": "2026-10-16T09:50:11.607Z",
		"size": 196040,
		"path": "../public/assets/nexus-logo-DPCoMTuB.jpeg"
	},
	"/assets/privacy-DljErPqO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7a6-lLu+MZIC3nqSwa5LEyvarirQChg\"",
		"mtime": "2026-10-16T09:50:11.603Z",
		"size": 1958,
		"path": "../public/assets/privacy-DljErPqO.js"
	},
	"/assets/resource-meta-xnXH3II0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2750-KGb8od7EXyv77T8yczucFo6TrR4\"",
		"mtime": "2026-10-16T09:50:11.604Z",
		"size": 10064,
		"path": "../public/assets/resource-meta-xnXH3II0.js"
	},
	"/assets/route-Dh72og-t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8b-z/w49FyQKQx/V3fkqqqzho8bU7A\"",
		"mtime": "2026-10-16T09:50:11.605Z",
		"size": 139,
		"path": "../public/assets/route-Dh72og-t.js"
	},
	"/assets/routes-BdmWijAS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ba7-mk0ioJjs58pyRoFMQ8KTRviEJFk\"",
		"mtime": "2026-10-16T09:50:11.606Z",
		"size": 11175,
		"path": "../public/assets/routes-BdmWijAS.js"
	},
	"/assets/solutions-B9xhqxDc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"956-0J8wHTneRtctC6z7lCfp7E9PokQ\"",
		"mtime": "2026-10-16T09:50:11.607Z",
		"size": 2390,
		"path": "../public/assets/solutions-B9xhqxDc.js"
	},
	"/assets/styles-CCCxvmnD.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"17aae-vikTnLb70mDmLyEe+2VBqcmLvac\"",
		"mtime": "2026-10-16T09:50:11.607Z",
		"size": 96942,
		"path": "../public/assets/styles-CCCxvmnD.css"
	},
	"/assets/textarea-B--WPCgg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae77-+J9P+eH9W+SpZYjaAC1d2rGn9MU\"",
		"mtime": "2026-10-16T09:50:11.607Z",
		"size": 44663,
		"path": "../public/assets/textarea-B--WPCgg.js"
	},
	"/assets/useRouter-BOAPZDg1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"229c-q+MRbm7Q8Y/gJEgHL0SVvRyYkQo\"",
		"mtime": "2026-10-16T09:50:11.607Z",
		"size": 8860,
		"path": "../public/assets/useRouter-BOAPZDg1.js"
	},
	"/assets/useSelector-DOnYchru.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"85c-EdqVcd2sbYwoNZXjyANi/Vg6x2g\"",
		"mtime": "2026-10-16T09:50:11.607Z",
		"size": 2140,
		"path": "../public/assets/useSelector-DOnYchru.js"
	},
	"/llms.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"339-lPXZJGPEnuFj12FwtagdC1nMADk\"",
		"mtime": "2026-10-14T07:48:50.689Z",
		"size": 825,
		"path": "../public/llms.txt"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"1cc-lPBUgC176A7CSPVSd+CruK03Osc\"",
		"mtime": "2026-10-14T06:18:50.447Z",
		"size": 460,
		"path": "../public/robots.txt"
	},
	"/assets/founder-pradeep-Dp1Pnjpv.png": {
		"type": "image/png",
		"etag": "\"1b4520-gAv3nhf6bc7yNdOYM0CjN30f28s\"",
		"mtime": "2026-10-16T09:50:11.607Z",
		"size": 1787168,
		"path": "../public/assets/founder-pradeep-Dp1Pnjpv.png"
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
