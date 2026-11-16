// Tests Resend and the Make.com webhook directly, without starting the site and without a git push.
//   node --env-file=.env scripts/test-lead-delivery.mjs
const key = process.env.RESEND_API_KEY, hook = process.env.MAKE_WEBHOOK_URL;
const from = process.env.LEAD_ALERT_FROM ?? "NexusAIAgency Leads <onboarding@resend.dev>";
const to = process.env.LEAD_ALERT_TO ?? "thenexusaiagency@gmail.com";
const show = async (label, res) => { const t = (await res.text()).slice(0, 300); console.log(`${res.ok ? "PASS" : "FAIL"}  ${label}  HTTP ${res.status}  ${t}`); return res.ok; };

if (!key) console.log("SKIP  Resend: RESEND_API_KEY is not set in .env");
else {
  try {
    await show(`Resend email to ${to}`, await fetch("https://api.resend.com/emails", {
      method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
      body: JSON.stringify({ from, to: [to], subject: "Nexus lead alert test", html: "<p>If you can read this, lead alert emails work.</p>" }),
      signal: AbortSignal.timeout(10000) }));
  } catch (e) { console.log("FAIL  Resend request error:", e.message); }
}
if (!hook) console.log("SKIP  Make.com: MAKE_WEBHOOK_URL is not set in .env");
else {
  try {
    await show("Make.com webhook", await fetch(hook, {
      method: "POST", headers: { "Content-Type": "application/json", "X-Idempotency-Key": "test-" + Date.now() },
      body: JSON.stringify({ test: true, source: "delivery-test", name: "Test Lead", email: "test@example.com", note: "Delete this run in Make. Sent by scripts/test-lead-delivery.mjs" }),
      signal: AbortSignal.timeout(10000) }));
  } catch (e) { console.log("FAIL  Make.com request error:", e.message); }
}
console.log("\nNote: with the onboarding@resend.dev sender, Resend only delivers to the email address of your own Resend account.");
