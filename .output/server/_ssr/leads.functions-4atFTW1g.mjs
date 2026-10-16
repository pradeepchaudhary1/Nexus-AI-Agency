import { l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { n as getRequestHeader } from "./request-response-ClEcl_9u.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-B3V5iLmQ.mjs";
import { t as createServerRpc } from "./createServerRpc-CxD4EZ5P.mjs";
import { n as objectType, r as stringType, t as enumType } from "../_libs/zod.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/leads.functions-4atFTW1g.js
var opt = (max, label) => stringType().trim().max(max, `${label} must be ${max} characters or fewer`).optional();
var leadSchema = objectType({
	source: enumType([
		"readiness_audit",
		"demo_request",
		"booking"
	], { message: "Unknown form type" }),
	idempotencyKey: stringType().uuid("Please refresh the page and try again"),
	name: stringType().trim().min(2, "Please enter your name").max(100, "Name must be 100 characters or fewer"),
	email: stringType().trim().max(255, "Email is too long").email("Please enter a valid email address"),
	phone: stringType().trim().max(30, "Phone must be 30 characters or fewer").regex(/^[+\d\s().-]*$/, "Please enter a valid phone number").optional(),
	businessType: opt(100, "Business type"),
	teamSize: opt(50, "Team size"),
	bottleneck: opt(500, "Biggest bottleneck"),
	leadVolume: opt(100, "Lead volume"),
	existingTools: opt(500, "Existing tools"),
	message: opt(1e3, "Message"),
	demoType: opt(100, "Demo type"),
	website: stringType().optional()
}).superRefine((d, ctx) => {
	if (d.source !== "readiness_audit" && (!d.message || d.message.length < 5)) ctx.addIssue({
		code: "custom",
		path: ["message"],
		message: "Please describe what the system should improve (at least 5 characters)"
	});
	if (d.source === "readiness_audit" && d.bottleneck && d.bottleneck.length < 3) ctx.addIssue({
		code: "custom",
		path: ["bottleneck"],
		message: "Please describe your biggest bottleneck in a few words"
	});
});
/** Make.com payload: real form type in `form_type`; empty optional fields are omitted, never faked. */
function buildWebhookPayload(row) {
	const payload = {
		lead_id: row.id,
		form_type: row.source,
		source: "Website contact form",
		name: row.name,
		email: row.email,
		submitted_at: row.created_at
	};
	const optional = [
		["phone", row.phone],
		["message", row.message ?? row.bottleneck],
		["business_type", row.business_type],
		["team_size", row.team_size],
		["lead_volume", row.lead_volume],
		["existing_tools", row.existing_tools],
		["biggest_bottleneck", row.bottleneck],
		["demo_type", row.demo_type]
	];
	for (const [k, v] of optional) if (v) payload[k] = v;
	return payload;
}
var RATE_LIMIT = {
	max: 5,
	windowMinutes: 10
};
var GENERIC_ERROR = "We could not save your request. Please try again in a moment.";
var ROW_COLUMNS = "id,source,name,email,phone,business_type,team_size,bottleneck,lead_volume,existing_tools,message,demo_type,created_at,webhook_status,webhook_attempts";
var submitLead_createServerFn_handler = createServerRpc({
	id: "e211e8c27eee0a1053129b7769a37cb2e31b3dc869a84a1c647eee19cfb57993",
	name: "submitLead",
	filename: "src/lib/leads.functions.ts"
}, (opts) => submitLead.__executeServer(opts));
var submitLead = createServerFn({ method: "POST" }).inputValidator((input) => input).handler(submitLead_createServerFn_handler, async ({ data: raw }) => {
	const parsed = leadSchema.safeParse(raw);
	if (!parsed.success) return {
		success: false,
		error: parsed.error.issues[0]?.message ?? "Please check your details and try again."
	};
	const data = parsed.data;
	if (data.website) return { success: true };
	const { supabaseAdmin } = await import("./client.server-C0pZYsZN.mjs");
	const ipHash = await hashIp();
	const existing = await supabaseAdmin.from("lead_submissions").select(ROW_COLUMNS).eq("idempotency_key", data.idempotencyKey).maybeSingle();
	if (existing.data) {
		if (existing.data.webhook_status !== "sent") await deliverToMake(existing.data, supabaseAdmin);
		return { success: true };
	}
	if (ipHash) {
		const since = (/* @__PURE__ */ new Date(Date.now() - RATE_LIMIT.windowMinutes * 6e4)).toISOString();
		const { count } = await supabaseAdmin.from("lead_submissions").select("id", {
			count: "exact",
			head: true
		}).eq("client_ip_hash", ipHash).gte("created_at", since);
		if ((count ?? 0) >= RATE_LIMIT.max) return {
			success: false,
			error: "You've sent several requests in a short time. Please wait a few minutes, or WhatsApp us at +91 91665 16942."
		};
	}
	const inserted = await supabaseAdmin.from("lead_submissions").insert({
		idempotency_key: data.idempotencyKey,
		client_ip_hash: ipHash,
		source: data.source,
		name: data.name,
		email: data.email,
		phone: data.phone || null,
		business_type: data.businessType || null,
		team_size: data.teamSize || null,
		bottleneck: data.bottleneck || null,
		lead_volume: data.leadVolume || null,
		existing_tools: data.existingTools || null,
		message: data.message || null,
		demo_type: data.demoType || null
	}).select(ROW_COLUMNS).single();
	if (inserted.error) {
		if (inserted.error.code === "23505") return { success: true };
		console.error("Lead insert failed:", inserted.error);
		return {
			success: false,
			error: GENERIC_ERROR
		};
	}
	await deliverToMake(inserted.data, supabaseAdmin);
	try {
		await sendLeadAlert(data);
	} catch (e) {
		console.error("Lead email alert failed:", e);
	}
	return { success: true };
});
var retryLeadDeliveries_createServerFn_handler = createServerRpc({
	id: "42176c07eea664427d537ff5050dee15cf8f1a4c1142eae678e285658a891bb3",
	name: "retryLeadDeliveries",
	filename: "src/lib/leads.functions.ts"
}, (opts) => retryLeadDeliveries.__executeServer(opts));
var retryLeadDeliveries = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).handler(retryLeadDeliveries_createServerFn_handler, async ({ context }) => {
	const { data: isAdmin } = await context.supabase.rpc("has_role", {
		_user_id: context.userId,
		_role: "admin"
	});
	if (!isAdmin) throw new Error("Admin access required");
	const { supabaseAdmin } = await import("./client.server-C0pZYsZN.mjs");
	const { data, error } = await supabaseAdmin.from("lead_submissions").select(ROW_COLUMNS).neq("webhook_status", "sent").not("idempotency_key", "is", null).order("created_at", { ascending: true }).limit(25);
	if (error) throw new Error("Could not load pending deliveries");
	let sent = 0;
	for (const row of data ?? []) if (await deliverToMake(row, supabaseAdmin)) sent++;
	return {
		attempted: data?.length ?? 0,
		sent
	};
});
var getLeadDeliveryStatus_createServerFn_handler = createServerRpc({
	id: "31f8fe30c57104788f60876dbfaa936f81fe49d6063d86577b443bee10c2545d",
	name: "getLeadDeliveryStatus",
	filename: "src/lib/leads.functions.ts"
}, (opts) => getLeadDeliveryStatus.__executeServer(opts));
var getLeadDeliveryStatus = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(getLeadDeliveryStatus_createServerFn_handler, async ({ context }) => {
	const { data: isAdmin } = await context.supabase.rpc("has_role", {
		_user_id: context.userId,
		_role: "admin"
	});
	if (!isAdmin) throw new Error("Admin access required");
	const { supabaseAdmin } = await import("./client.server-C0pZYsZN.mjs");
	const { data } = await supabaseAdmin.from("lead_submissions").select("id,name,source,webhook_status,webhook_attempts,webhook_last_error,created_at").neq("webhook_status", "sent").not("idempotency_key", "is", null).order("created_at", { ascending: false }).limit(50);
	return data ?? [];
});
async function deliverToMake(row, admin) {
	const url = processModule.env["MAKE_WEBHOOK_URL"];
	let ok = false;
	let lastError = null;
	if (!url) lastError = "MAKE_WEBHOOK_URL is not configured";
	else try {
		const res = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"X-Idempotency-Key": row.id
			},
			body: JSON.stringify(buildWebhookPayload(row)),
			signal: AbortSignal.timeout(8e3)
		});
		ok = res.ok;
		if (!ok) lastError = `HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`;
	} catch (e) {
		lastError = e instanceof Error ? `${e.name}: ${e.message}`.slice(0, 300) : "Unknown error";
	}
	if (!ok) console.error(`Make.com delivery failed for lead ${row.id}:`, lastError);
	const now = (/* @__PURE__ */ new Date()).toISOString();
	await admin.from("lead_submissions").update({
		webhook_status: ok ? "sent" : "failed",
		webhook_attempts: row.webhook_attempts + 1,
		webhook_last_error: ok ? null : lastError,
		webhook_last_attempt_at: now,
		webhook_sent_at: ok ? now : null
	}).eq("id", row.id);
	return ok;
}
async function hashIp() {
	const ip = getRequestHeader("cf-connecting-ip") || getRequestHeader("x-forwarded-for")?.split(",")[0]?.trim();
	if (!ip) return null;
	const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`nexus-leads:${ip}`));
	return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}
var SOURCE_LABELS = {
	readiness_audit: "Readiness Assessment",
	demo_request: "Demo Request",
	booking: "Free Audit"
};
var esc = (s) => s.replace(/[&<>"']/g, (c) => ({
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
})[c]);
async function sendLeadAlert(data) {
	const lovableKey = processModule.env["LOVABLE_API_KEY"];
	const resendKey = processModule.env["RESEND_API_KEY"];
	if (!lovableKey || !resendKey) throw new Error("Email alert keys are not configured");
	const formType = SOURCE_LABELS[data.source] ?? data.source;
	const submittedAt = (/* @__PURE__ */ new Date()).toLocaleString("en-IN", {
		timeZone: "Asia/Kolkata",
		dateStyle: "medium",
		timeStyle: "short"
	}) + " IST";
	const rows = [
		["Form type", formType],
		["Submitted at", submittedAt],
		["Name", data.name],
		["Email", data.email],
		["Phone", data.phone],
		["Business type", data.businessType],
		["Team size", data.teamSize],
		["Monthly lead volume", data.leadVolume],
		["Biggest bottleneck", data.bottleneck],
		["Existing tools", data.existingTools],
		["Demo type", data.demoType],
		["Message", data.message]
	];
	const html = `<h2>New ${esc(formType)} lead</h2><table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif">${rows.filter(([, v]) => v).map(([k, v]) => `<tr><td style="font-weight:bold;vertical-align:top">${k}</td><td style="white-space:pre-wrap">${esc(v)}</td></tr>`).join("")}</table>`;
	const res = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${lovableKey}`,
			"X-Connection-Api-Key": resendKey
		},
		body: JSON.stringify({
			from: "NexusAIAgency Leads <onboarding@resend.dev>",
			to: ["thenexusaiagency@gmail.com"],
			reply_to: data.email,
			subject: `New ${formType} lead: ${data.name}`,
			html
		}),
		signal: AbortSignal.timeout(8e3)
	});
	if (!res.ok) throw new Error(`Resend failed [${res.status}]: ${await res.text()}`);
}
//#endregion
export { getLeadDeliveryStatus_createServerFn_handler, retryLeadDeliveries_createServerFn_handler, submitLead_createServerFn_handler };
