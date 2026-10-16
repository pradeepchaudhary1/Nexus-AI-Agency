import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { requireSupabaseAuth } from "@/integrations/auth-middleware";
import { RATE_LIMIT, buildWebhookPayload, leadSchema, type Lead, type LeadInput, type LeadRow } from "./leads.shared";

export type { LeadInput };
export type SubmitResult = { success: true } | { success: false; error: string };

const GENERIC_ERROR = "We could not save your request. Please try again in a moment.";
const ROW_COLUMNS = "id,source,name,email,phone,business_type,team_size,bottleneck,lead_volume,existing_tools,message,demo_type,created_at,webhook_status,webhook_attempts";

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: LeadInput) => input)
  .handler(async ({ data: raw }): Promise<SubmitResult> => {
    const parsed = leadSchema.safeParse(raw);
    if (!parsed.success) return { success: false, error: parsed.error.issues[0]?.message ?? "Please check your details and try again." };
    const data = parsed.data;
    if (data.website) return { success: true }; // honeypot: silently drop bots

    const { supabaseAdmin } = await import("@/integrations/client.server");
    const ipHash = await hashIp();

    // Same idempotency key = same submission (a retry/double click). Return the existing lead, never a duplicate.
    const existing = await supabaseAdmin.from("lead_submissions").select(ROW_COLUMNS).eq("idempotency_key", data.idempotencyKey).maybeSingle();
    if (existing.data) {
      if (existing.data.webhook_status !== "sent") await deliverToMake(existing.data, supabaseAdmin);
      return { success: true };
    }

    if (ipHash) {
      const since = new Date(Date.now() - RATE_LIMIT.windowMinutes * 60_000).toISOString();
      const { count } = await supabaseAdmin.from("lead_submissions").select("id", { count: "exact", head: true }).eq("client_ip_hash", ipHash).gte("created_at", since);
      if ((count ?? 0) >= RATE_LIMIT.max) return { success: false, error: "You've sent several requests in a short time. Please wait a few minutes, or WhatsApp us at +91 91665 16942." };
    }

    // 1) Database first — the lead is durable before any external call.
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
      demo_type: data.demoType || null,
    }).select(ROW_COLUMNS).single();

    if (inserted.error) {
      if (inserted.error.code === "23505") return { success: true }; // concurrent duplicate of the same submission
      console.error("Lead insert failed:", inserted.error);
      return { success: false, error: GENERIC_ERROR };
    }

    // 2) Make.com delivery — failures stay recorded as pending/failed for retry; the lead is never lost.
    await deliverToMake(inserted.data, supabaseAdmin);

    // 3) Existing email alert — unchanged behaviour, never blocks the visitor.
    try { await sendLeadAlert(data); } catch (e) { console.error("Lead email alert failed:", e); }
    return { success: true };
  });

/** Admin-only: retry Make.com delivery for leads still pending or failed. */
export const retryLeadDeliveries = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data: isAdmin } = await context.supabase.rpc("has_role", { _user_id: context.userId, _role: "admin" });
    if (!isAdmin) throw new Error("Admin access required");
    const { supabaseAdmin } = await import("@/integrations/client.server");
    // Only leads captured by the outbox system (have an idempotency key); older rows are never auto-sent.
    const { data, error } = await supabaseAdmin.from("lead_submissions").select(ROW_COLUMNS)
      .neq("webhook_status", "sent").not("idempotency_key", "is", null)
      .order("created_at", { ascending: true }).limit(25);
    if (error) throw new Error("Could not load pending deliveries");
    let sent = 0;
    for (const row of data ?? []) if (await deliverToMake(row, supabaseAdmin)) sent++;
    return { attempted: data?.length ?? 0, sent };
  });

/** Admin-only: count leads whose Make.com delivery has not succeeded. */
export const getLeadDeliveryStatus = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data: isAdmin } = await context.supabase.rpc("has_role", { _user_id: context.userId, _role: "admin" });
    if (!isAdmin) throw new Error("Admin access required");
    const { supabaseAdmin } = await import("@/integrations/client.server");
    const { data } = await supabaseAdmin.from("lead_submissions").select("id,name,source,webhook_status,webhook_attempts,webhook_last_error,created_at")
      .neq("webhook_status", "sent").not("idempotency_key", "is", null).order("created_at", { ascending: false }).limit(50);
    return data ?? [];
  });

type Admin = Awaited<typeof import("@/integrations/client.server")>["supabaseAdmin"];

async function deliverToMake(row: LeadRow & { webhook_attempts: number }, admin: Admin): Promise<boolean> {
  const url = process.env["MAKE_WEBHOOK_URL"];
  let ok = false;
  let lastError: string | null = null;
  if (!url) lastError = "MAKE_WEBHOOK_URL is not configured";
  else {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Idempotency-Key": row.id },
        body: JSON.stringify(buildWebhookPayload(row)),
        signal: AbortSignal.timeout(8000),
      });
      ok = res.ok;
      if (!ok) lastError = `HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`;
    } catch (e) {
      lastError = e instanceof Error ? `${e.name}: ${e.message}`.slice(0, 300) : "Unknown error";
    }
  }
  if (!ok) console.error(`Make.com delivery failed for lead ${row.id}:`, lastError);
  const now = new Date().toISOString();
  await admin.from("lead_submissions").update({
    webhook_status: ok ? "sent" : "failed",
    webhook_attempts: row.webhook_attempts + 1,
    webhook_last_error: ok ? null : lastError,
    webhook_last_attempt_at: now,
    webhook_sent_at: ok ? now : null,
  }).eq("id", row.id);
  return ok;
}

async function hashIp(): Promise<string | null> {
  const ip = getRequestHeader("cf-connecting-ip") || getRequestHeader("x-forwarded-for")?.split(",")[0]?.trim();
  if (!ip) return null;
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`nexus-leads:${ip}`));
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}

const SOURCE_LABELS: Record<string, string> = {
  readiness_audit: "Readiness Assessment",
  demo_request: "Demo Request",
  booking: "Free Audit",
};

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

async function sendLeadAlert(data: Lead) {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const resendKey = process.env["RESEND_API_KEY"];
  if (!lovableKey || !resendKey) throw new Error("Email alert keys are not configured");
  const formType = SOURCE_LABELS[data.source] ?? data.source;
  const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short" }) + " IST";
  const rows: [string, string | undefined][] = [
    ["Form type", formType], ["Submitted at", submittedAt], ["Name", data.name], ["Email", data.email],
    ["Phone", data.phone], ["Business type", data.businessType], ["Team size", data.teamSize],
    ["Monthly lead volume", data.leadVolume], ["Biggest bottleneck", data.bottleneck],
    ["Existing tools", data.existingTools], ["Demo type", data.demoType], ["Message", data.message],
  ];
  const html = `<h2>New ${esc(formType)} lead</h2><table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif">${rows
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="font-weight:bold;vertical-align:top">${k}</td><td style="white-space:pre-wrap">${esc(v!)}</td></tr>`)
    .join("")}</table>`;
  const res = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${lovableKey}`, "X-Connection-Api-Key": resendKey },
    body: JSON.stringify({
      from: "NexusAIAgency Leads <onboarding@resend.dev>",
      to: ["thenexusaiagency@gmail.com"],
      reply_to: data.email,
      subject: `New ${formType} lead: ${data.name}`,
      html,
    }),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`Resend failed [${res.status}]: ${await res.text()}`);
}
