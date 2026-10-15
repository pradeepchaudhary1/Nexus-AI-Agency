import { describe, expect, it } from "vitest";
import { buildWebhookPayload, leadSchema } from "@/lib/leads.shared";

const key = "8f14e45f-ceea-4e7a-9c1b-3f5a2b6d7e81";
const base = { idempotencyKey: key, name: "Asha", email: "asha@example.com" };

describe("lead validation", () => {
  it("requires a message for Free Audit", () => {
    expect(leadSchema.safeParse({ ...base, source: "booking", message: "" }).success).toBe(false);
  });
  it("requires a message for Demo Request", () => {
    expect(leadSchema.safeParse({ ...base, source: "demo_request" }).success).toBe(false);
  });
  it("does not require a message for Readiness Assessment", () => {
    expect(leadSchema.safeParse({ ...base, source: "readiness_audit" }).success).toBe(true);
  });
  it("rejects an invalid email with a friendly message", () => {
    const r = leadSchema.safeParse({ ...base, email: "nope", source: "readiness_audit" });
    expect(r.success ? "" : r.error.issues[0]?.message).toBe("Please enter a valid email address");
  });
});

describe("webhook payload", () => {
  const row = { id: "1", source: "demo_request", name: "Asha", email: "a@b.co", phone: null, business_type: "Clinic", team_size: null, bottleneck: null, lead_volume: null, existing_tools: null, message: "Hi there", demo_type: "Calling Agent", created_at: "2026-10-09T00:00:00Z" };
  it("sends the real form type", () => {
    expect(buildWebhookPayload(row)["form_type"]).toBe("demo_request");
  });
  it("omits empty optional fields", () => {
    expect("phone" in buildWebhookPayload(row)).toBe(false);
  });
});
