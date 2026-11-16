// Step 2.5: replace the Lovable email gateway with a direct Resend call. Idempotent. Run from project root:
//   node scripts/patch-resend.mjs
import fs from "node:fs";
const file = "src/lib/leads.functions.ts";
if (!fs.existsSync(file)) { console.error("Not found:", file, "- run this from the project root."); process.exit(1); }
const before = fs.readFileSync(file, "utf8");
let s = before;
s = s.replace(/^[ \t]*const lovableKey = process\.env\["LOVABLE_API_KEY"\];\r?\n/m, "");
s = s.replace(/if \(!lovableKey \|\| !resendKey\) throw new Error\("Email alert keys are not configured"\);/, 'if (!resendKey) throw new Error("RESEND_API_KEY is not configured");');
s = s.replace(/"https:\/\/connector-gateway\.lovable\.dev\/resend\/emails"/, '"https://api.resend.com/emails"');
s = s.replace(/headers: \{ "Content-Type": "application\/json", Authorization: `Bearer \$\{lovableKey\}`, "X-Connection-Api-Key": resendKey \}/, 'headers: { "Content-Type": "application/json", Authorization: `Bearer ${resendKey}` }');
s = s.replace(/from: "NexusAIAgency Leads <onboarding@resend\.dev>"/, 'from: process.env["LEAD_ALERT_FROM"] ?? "NexusAIAgency Leads <onboarding@resend.dev>"');
s = s.replace(/to: \["thenexusaiagency@gmail\.com"\]/, 'to: [process.env["LEAD_ALERT_TO"] ?? "thenexusaiagency@gmail.com"]');
if (s === before) {
  console.log(/api\.resend\.com/.test(before) ? "Already patched. Nothing to do." : "WARNING: expected text not found. Send me lines 140-175 of src/lib/leads.functions.ts.");
} else { fs.writeFileSync(file, s); console.log("Patched:", file); }
console.log("Check: lovable gateway left? ->", /connector-gateway\.lovable/.test(s) ? "YES (problem)" : "no");
