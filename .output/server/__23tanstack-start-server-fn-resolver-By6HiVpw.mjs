//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-By6HiVpw.js
var manifest = {
	"31f8fe30c57104788f60876dbfaa936f81fe49d6063d86577b443bee10c2545d": {
		functionName: "getLeadDeliveryStatus_createServerFn_handler",
		importer: () => import("./_ssr/leads.functions-VWGdDhCT.mjs")
	},
	"42176c07eea664427d537ff5050dee15cf8f1a4c1142eae678e285658a891bb3": {
		functionName: "retryLeadDeliveries_createServerFn_handler",
		importer: () => import("./_ssr/leads.functions-VWGdDhCT.mjs")
	},
	"e211e8c27eee0a1053129b7769a37cb2e31b3dc869a84a1c647eee19cfb57993": {
		functionName: "submitLead_createServerFn_handler",
		importer: () => import("./_ssr/leads.functions-VWGdDhCT.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ??= await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
