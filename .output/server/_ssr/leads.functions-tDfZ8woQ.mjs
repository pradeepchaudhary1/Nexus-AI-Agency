import { n as __toESM } from "../_runtime.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-DS_zVn-L.mjs";
import { G as isRedirect, S as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-B3V5iLmQ.mjs";
import { v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/leads.functions-tDfZ8woQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var submitLead = createServerFn({ method: "POST" }).inputValidator((input) => input).handler(createSsrRpc("e211e8c27eee0a1053129b7769a37cb2e31b3dc869a84a1c647eee19cfb57993"));
/** Admin-only: retry Make.com delivery for leads still pending or failed. */
var retryLeadDeliveries = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("42176c07eea664427d537ff5050dee15cf8f1a4c1142eae678e285658a891bb3"));
/** Admin-only: count leads whose Make.com delivery has not succeeded. */
var getLeadDeliveryStatus = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("31f8fe30c57104788f60876dbfaa936f81fe49d6063d86577b443bee10c2545d"));
//#endregion
export { useServerFn as a, submitLead as i, getLeadDeliveryStatus as n, retryLeadDeliveries as r, createSsrRpc as t };
