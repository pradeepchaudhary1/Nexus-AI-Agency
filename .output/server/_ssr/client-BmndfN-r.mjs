import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/client-BmndfN-r.js
var SUPABASE_URL = typeof import.meta !== "undefined" && {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_SUPABASE_PROJECT_ID": "vvqotyhlwzynbfbsienw",
	"VITE_SUPABASE_PUBLISHABLE_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2cW90eWhsd3p5bmJmYnNpZW53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIyMjg3MzgsImV4cCI6MjEwNzgwNDczOH0.3NATucodyMLSHGPrA-OHEHfZuR1nB3po8iPIo7pLUUY",
	"VITE_SUPABASE_URL": "https://vvqotyhlwzynbfbsienw.supabase.co"
}["VITE_SUPABASE_URL"] || typeof processModule !== "undefined" && processModule.env && (processModule.env["VITE_SUPABASE_URL"] || processModule.env["SUPABASE_URL"]) || "";
var SUPABASE_PUBLISHABLE_KEY = typeof import.meta !== "undefined" && {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_SUPABASE_PROJECT_ID": "vvqotyhlwzynbfbsienw",
	"VITE_SUPABASE_PUBLISHABLE_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2cW90eWhsd3p5bmJmYnNpZW53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIyMjg3MzgsImV4cCI6MjEwNzgwNDczOH0.3NATucodyMLSHGPrA-OHEHfZuR1nB3po8iPIo7pLUUY",
	"VITE_SUPABASE_URL": "https://vvqotyhlwzynbfbsienw.supabase.co"
}["VITE_SUPABASE_PUBLISHABLE_KEY"] || typeof processModule !== "undefined" && processModule.env && (processModule.env["VITE_SUPABASE_PUBLISHABLE_KEY"] || processModule.env["SUPABASE_PUBLISHABLE_KEY"]) || "";
if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) console.warn("[Supabase] Environment variables missing. Please check VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY in .env.");
var supabase = createClient(SUPABASE_URL || "https://placeholder-project.supabase.co", SUPABASE_PUBLISHABLE_KEY || "placeholder-anon-key", { auth: {
	persistSession: true,
	autoRefreshToken: true
} });
//#endregion
export { supabase as t };
