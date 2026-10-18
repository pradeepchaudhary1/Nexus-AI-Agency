import { createServerFn } from "@tanstack/react-start";

export interface AuditData {
  url: string;
  isReachable: boolean;
  score: number;
  grade: "A+" | "A" | "B" | "C" | "D";
  statusText: string;
  hasSchema: boolean;
  schemaTypes: string[];
  hasMetaTitle: boolean;
  metaTitle: string;
  hasMetaDescription: boolean;
  hasOpenGraph: boolean;
  hasLlmsTxt: boolean;
  hasPhone: boolean;
  hasVoiceAgent: boolean;
  foundStrengths: string[];
  detectedBottlenecks: string[];
  recommendations: string[];
}

export const auditWebsiteServerFn = createServerFn({ method: "POST" })
  .validator((url: string) => url)
  .handler(async ({ data: rawUrl }): Promise<AuditData> => {
    let target = rawUrl.trim();
    if (!target.startsWith("http://") && !target.startsWith("https://")) {
      target = `https://${target}`;
    }

    try {
      const urlObj = new URL(target);
      if (
        urlObj.hostname === "localhost" ||
        urlObj.hostname === "127.0.0.1" ||
        urlObj.hostname.startsWith("192.168.") ||
        urlObj.hostname.startsWith("10.") ||
        urlObj.hostname.startsWith("169.254.")
      ) {
        throw new Error("Local and private IP scanning is restricted.");
      }

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);

      const response = await fetch(target, {
        signal: controller.signal,
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        },
      });
      clearTimeout(timeout);

      if (!response.ok && response.status >= 400 && response.status !== 403) {
        throw new Error(`HTTP ${response.status}`);
      }

      const html = await response.text();

      // Real llms.txt Check (Prevents Magicbricks-like false positives)
      let hasLlmsTxt = false;
      try {
        const llmsUrl = `${urlObj.origin}/llms.txt`;
        const lRes = await fetch(llmsUrl, { headers: { "User-Agent": "NexusAIAudit/1.0" } });
        const cType = lRes.headers.get("content-type") || "";
        if (lRes.ok && (cType.includes("text/plain") || cType.includes("text/markdown"))) {
          const textPreview = await lRes.text();
          if (!textPreview.includes("<!DOCTYPE") && !textPreview.includes("<html")) {
            hasLlmsTxt = true;
          }
        }
      } catch (e) {
        hasLlmsTxt = false;
      }

      // JSON-LD Extraction (Type-Safe: fixes TS2345)
      const schemaTypes: string[] = [];
      let hasSchema = false;
      const schemaRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
      let match: RegExpExecArray | null;

      while ((match = schemaRegex.exec(html)) !== null) {
        const jsonString = match[1];
        if (typeof jsonString === "string") {
          try {
            const json = JSON.parse(jsonString);
            hasSchema = true;
            if (json["@type"]) schemaTypes.push(String(json["@type"]));
            if (Array.isArray(json["@graph"])) {
              json["@graph"].forEach((item: any) => {
                if (item && item["@type"]) schemaTypes.push(String(item["@type"]));
              });
            }
          } catch (e) {
            hasSchema = true;
            schemaTypes.push("Custom JSON-LD");
          }
        }
      }

      // Title & Meta tags (Type-Safe: fixes TS2532)
      const titleMatch = /<title[^>]*>([\s\S]*?)<\/title>/i.exec(html);
      const metaTitle = (titleMatch && titleMatch[1]) ? titleMatch[1].trim() : "";
      const hasMetaTitle = metaTitle.length > 5;

      const descMatch = /<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i.exec(html) ||
                        /<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i.exec(html);
      const descContent = (descMatch && descMatch[1]) ? descMatch[1].trim() : "";
      const hasMetaDescription = descContent.length > 15;

      const hasOpenGraph = /<meta[^>]*property=["']og:/i.test(html);
      const hasFaqSchema = schemaTypes.some((t) => /faq|question|answer/i.test(t));
      const hasPhone = /href=["']tel:[^"']+["']/i.test(html) || /tel:\+?[\d\s-]{7,}/i.test(html);
      const hasVoiceAgent = /vapi\.ai|retell|elevenlabs|synthflow|bland/i.test(html);

      // Score Calculation
      let score = 25;
      const strengths: string[] = [];
      const bottlenecks: string[] = [];
      const recommendations: string[] = [];

      if (hasSchema) {
        score += 25;
        strengths.push(`Schema.org Structured Data (${Array.from(new Set(schemaTypes)).slice(0, 3).join(", ")})`);
      } else {
        bottlenecks.push("Schema.org JSON-LD missing (AI crawlers cannot verify your business entity).");
        recommendations.push("Inject custom Schema.org (LocalBusiness, FAQPage) markup.");
      }

      if (hasMetaTitle) {
        score += 15;
        strengths.push(`Optimized Title: "${metaTitle.slice(0, 40)}..."`);
      } else {
        bottlenecks.push("Missing or non-descriptive page title tag.");
      }

      if (hasMetaDescription) {
        score += 15;
        strengths.push("Search Engine Meta Description configured");
      } else {
        bottlenecks.push("Meta description is missing; search snippets are unoptimized.");
      }

      if (hasOpenGraph) {
        score += 10;
        strengths.push("Social Open Graph cards configured (WhatsApp preview ready)");
      }

      if (hasFaqSchema) {
        score += 15;
        strengths.push("FAQPage Schema active (Eligible for direct Perplexity/ChatGPT answers)");
      } else {
        bottlenecks.push("No FAQPage Schema found (Answers will not be cited in AI overviews).");
        recommendations.push("Deploy Conversational FAQ Schema so AI search engines cite your business.");
      }

      if (hasLlmsTxt) {
        score += 10;
        strengths.push("AI Training Directive found (/llms.txt active)");
      }

      if (hasVoiceAgent) {
        score += 15;
        strengths.push("24/7 Conversational AI Voice Intake Detected");
      } else if (hasPhone) {
        score += 8;
        bottlenecks.push("Standard phone found, but lacks 24/7 AI Voice triage (High missed-call risk).");
        recommendations.push("Deploy 24/7 AI Voice Receptionist to capture after-hours inquiries.");
      } else {
        bottlenecks.push("Zero direct telephone or conversational intake found.");
        recommendations.push("Setup instant Click-to-Call and a 24/7 Voice Calling Assistant.");
      }

      score = Math.min(Math.max(score, 20), 98);

      let grade: AuditData["grade"] = "D";
      let statusText = "Critical Gaps Detected";
      if (score >= 80) {
        grade = "A";
        statusText = "Fully AEO & SEO Ready";
      } else if (score >= 60) {
        grade = "B";
        statusText = "Moderate Optimization Required";
      }

      return {
        url: target,
        isReachable: true,
        score,
        grade,
        statusText,
        hasSchema,
        schemaTypes: Array.from(new Set(schemaTypes)),
        hasMetaTitle,
        metaTitle,
        hasMetaDescription,
        hasOpenGraph,
        hasLlmsTxt,
        hasPhone,
        hasVoiceAgent,
        foundStrengths: strengths,
        detectedBottlenecks: bottlenecks,
        recommendations: recommendations.length ? recommendations : ["Maintain continuous AEO and voice latency monitoring."],
      };
    } catch (err: any) {
      return {
        url: target,
        isReachable: false,
        score: 0,
        grade: "D",
        statusText: "Domain Unreachable",
        hasSchema: false,
        schemaTypes: [],
        hasMetaTitle: false,
        metaTitle: "",
        hasMetaDescription: false,
        hasOpenGraph: false,
        hasLlmsTxt: false,
        hasPhone: false,
        hasVoiceAgent: false,
        foundStrengths: [],
        detectedBottlenecks: ["Could not connect to the specified website."],
        recommendations: ["Ensure your website server is online and allows public HTTP GET requests."],
      };
    }
  });