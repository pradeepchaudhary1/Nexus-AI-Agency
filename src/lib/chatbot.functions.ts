import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const WEBHOOK_URL = "https://nexus-ai-solution.app.n8n.cloud";

const s = (max: number) => z.string().trim().max(max);
const payloadSchema = z.object({
  contact_name: s(100).min(1),
  business_name: s(150),
  phone: s(30).min(5),
  email: s(255),
  business_type: s(100),
  city: s(120),
  requirement: s(500),
  pain_point: s(500),
  preferred_contact_time: s(100),
  consent: z.literal(true),
  do_not_contact: z.boolean(),
});

export const submitChatLead = createServerFn({ method: "POST" })
  .inputValidator((input: z.input<typeof payloadSchema>) => payloadSchema.parse(input))
  .handler(async ({ data }) => {
    const summary = `${data.contact_name} (${data.business_name}, ${data.business_type}, ${data.city}) needs ${data.requirement}. Pain point: ${data.pain_point}. Callback: ${data.preferred_contact_time}.`;
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "website_chatbot", ...data, summary }),
      });
      if (!res.ok) {
        console.error("Chatbot webhook failed", res.status);
        return { success: false };
      }
      return { success: true };
    } catch (e) {
      console.error("Chatbot webhook error", e);
      return { success: false };
    }
  });
