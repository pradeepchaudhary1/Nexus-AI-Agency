import { l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import { t as createServerRpc } from "./createServerRpc-CxD4EZ5P.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/resources.functions-C6pe0eLj.js
var listPublicResources_createServerFn_handler = createServerRpc({
	id: "402f694f19553d6aa73fed205462858f62628d92549c8a319fb6fc3044458ce6",
	name: "listPublicResources",
	filename: "src/lib/resources.functions.ts"
}, (opts) => listPublicResources.__executeServer(opts));
var listPublicResources = createServerFn({ method: "GET" }).handler(listPublicResources_createServerFn_handler, async () => {
	const url = processModule.env["SUPABASE_URL"];
	const key = processModule.env["SUPABASE_PUBLISHABLE_KEY"];
	if (!url || !key) return {
		items: [],
		error: "Resources are unavailable right now."
	};
	const supabase = createClient(url, key, { auth: {
		storage: void 0,
		persistSession: false,
		autoRefreshToken: false
	} });
	const { data, error } = await supabase.from("resources").select("id,title,description,category,visibility,tags,bucket,file_path,file_name,mime_type,external_url,client_name,industry,problem,solution,outcome,completion_date,created_at").order("created_at", { ascending: false }).limit(200);
	if (error) {
		console.error("listPublicResources failed", error);
		return {
			items: [],
			error: "Resources are unavailable right now."
		};
	}
	return {
		items: await Promise.all((data ?? []).map(async ({ bucket, file_path, ...row }) => {
			let download_url = null;
			if (row.visibility === "public" && bucket === "public-resources" && file_path) download_url = (await supabase.storage.from(bucket).createSignedUrl(file_path, 21600)).data?.signedUrl ?? null;
			return {
				...row,
				download_url
			};
		})),
		error: null
	};
});
//#endregion
export { listPublicResources_createServerFn_handler };
