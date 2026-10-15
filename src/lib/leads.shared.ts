import { z } from "zod";

const opt = (max: number, label: string) => z.string().trim().max(max, `${label} must be ${max} characters or fewer`).optional();

export const leadSchema = z
  .object({
    source: z.enum(["readiness_audit", "demo_request", "booking"], { message: "Unknown form type" }),
    idempotencyKey: z.string().uuid("Please refresh the page and try again"),
    name: z.string().trim().min(2, "Please enter your name").max(100, "Name must be 100 characters or fewer"),
    email: z.string().trim().max(255, "Email is too long").email("Please enter a valid email address"),
    phone: z.string().trim().max(30, "Phone must be 30 characters or fewer").regex(/^[+\d\s().-]*$/, "Please enter a valid phone number").optional(),
    businessType: opt(100, "Business type"),
    teamSize: opt(50, "Team size"),
    bottleneck: opt(500, "Biggest bottleneck"),
    leadVolume: opt(100, "Lead volume"),
    existingTools: opt(500, "Existing tools"),
    message: opt(1000, "Message"),
    demoType: opt(100, "Demo type"),
    website: z.string().optional(),
  })
  .superRefine((d, ctx) => {
    if (d.source !== "readiness_audit" && (!d.message || d.message.length < 5)) {
      ctx.addIssue({ code: "custom", path: ["message"], message: "Please describe what the system should improve (at least 5 characters)" });
    }
    if (d.source === "readiness_audit" && d.bottleneck && d.bottleneck.length < 3) {
      ctx.addIssue({ code: "custom", path: ["bottleneck"], message: "Please describe your biggest bottleneck in a few words" });
    }
  });

export type LeadInput = z.input<typeof leadSchema>;
export type Lead = z.output<typeof leadSchema>;

export type LeadRow = {
  id: string;
  source: string;
  name: string;
  email: string;
  phone: string | null;
  business_type: string | null;
  team_size: string | null;
  bottleneck: string | null;
  lead_volume: string | null;
  existing_tools: string | null;
  message: string | null;
  demo_type: string | null;
  created_at: string;
};

/** Make.com payload: real form type in `form_type`; empty optional fields are omitted, never faked. */
export function buildWebhookPayload(row: LeadRow): Record<string, string> {
  const payload: Record<string, string> = {
    lead_id: row.id,
    form_type: row.source,
    source: "Website contact form",
    name: row.name,
    email: row.email,
    submitted_at: row.created_at,
  };
  const optional: [string, string | null][] = [
    ["phone", row.phone],
    ["message", row.message ?? row.bottleneck],
    ["business_type", row.business_type],
    ["team_size", row.team_size],
    ["lead_volume", row.lead_volume],
    ["existing_tools", row.existing_tools],
    ["biggest_bottleneck", row.bottleneck],
    ["demo_type", row.demo_type],
  ];
  for (const [k, v] of optional) if (v) payload[k] = v;
  return payload;
}

export const RATE_LIMIT = { max: 5, windowMinutes: 10 };
