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
      // 1. Direct Server-Side Fetch (Zero CORS Restrictions in Node.js)
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);

      const response = await fetch(target, {
        signal: controller.signal,
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        },
      });
      clearTimeout(timeout);

      if (!response.ok && response.status >= 400 && response.status !== 403) {
        throw new Error(`HTTP Error ${response.status}`);
      }

      const html = await response.text();

      // 2. Check llms.txt availability
      let hasLlmsTxt = false;
      try {
        const urlObj = new URL(target);
        const llmsUrl = `${urlObj.origin}/llms.txt`;
        const llmsRes = await fetch(llmsUrl, { method: "HEAD" });
        if (llmsRes.ok && llmsRes.status === 200) {
          hasLlmsTxt = true;
        }
      } catch (e) {
        hasLlmsTxt = false;
      }

      // 3. Extract Real Schema.org JSON-LD
      const schemaTypes: string[] = [];
      let hasSchema = false;
      const schemaRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
      let match;

      while ((match = schemaRegex.exec(html)) !== null) {
        try {
          const json = JSON.parse(match[1]);
          hasSchema = true;
          if (json["@type"]) {
            schemaTypes.push(json["@type"]);
          }
          if (Array.isArray(json["@graph"])) {
            json["@graph"].forEach((item: any) => {
              if (item["@type"]) schemaTypes.push(item["@type"]);
            });
          }
        } catch (e) {
          hasSchema = true;
          schemaTypes.push("Custom JSON-LD");
        }
      }

      if (/itemtype=["']https?:\/\/schema\.org/i.test(html)) {
        hasSchema = true;
        schemaTypes.push("Microdata Entities");
      }

      // 4. Extract Real SEO Meta Tags
      const titleMatch = /<title[^>]*>([\s\S]*?)<\/title>/i.exec(html);
      const metaTitle = titleMatch ? titleMatch[1].trim() : "";
      const hasMetaTitle = metaTitle.length > 5;

      const descMatch = /<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i.exec(html) ||
                        /<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i.exec(html);
      const hasMetaDescription = !!descMatch && descMatch[1].trim().length > 15;

      const hasOpenGraph = /<meta[^>]*property=["']og:/i.test(html);
      const hasFaqSchema = schemaTypes.some((t) => /faq|question|answer/i.test(t));
      const hasPhone = /href=["']tel:[^"']+["']/i.test(html) || /tel:\+?[\d\s-]{7,}/i.test(html);
      const hasVoiceAgent = /vapi\.ai|retell|elevenlabs|synthflow/i.test(html);

      // 5. Calculate Real Dynamic Score based on TRUE findings
      let score = 20; // Base reachable
      const strengths: string[] = [];
      const bottlenecks: string[] = [];
      const recommendations: string[] = [];

      if (hasSchema) {
        score += 25;
        strengths.push(`Schema.org Structured Data Active (${Array.from(new Set(schemaTypes)).slice(0, 3).join(", ")})`);
      } else {
        bottlenecks.push("Schema.org JSON-LD missing (Google & AI crawlers cannot verify your business identity).");
        recommendations.push("Inject custom Schema.org (Organization, LocalBusiness, FAQPage) markup.");
      }

      if (hasMetaTitle) {
        score += 15;
        strengths.push(`Optimized Meta Title: "${metaTitle.slice(0, 45)}..."`);
      } else {
        bottlenecks.push("Missing or non-descriptive page title tag.");
      }

      if (hasMetaDescription) {
        score += 15;
        strengths.push("Search Engine Meta Description configured");
      } else {
        bottlenecks.push("Meta description is missing; search snippets are unoptimized.");
        recommendations.push("Write intent-driven meta descriptions targeting primary local keywords.");
      }

      if (hasOpenGraph) {
        score += 10;
        strengths.push("Social Open Graph cards active (WhatsApp/LinkedIn preview ready)");
      }

      if (hasFaqSchema) {
        score += 15;
        strengths.push("FAQPage Schema active (Eligible for direct ChatGPT & Voice Search citations)");
      } else {
        bottlenecks.push("No FAQPage Schema found (Answers will not be cited directly in AI Search Overviews).");
        recommendations.push("Deploy Conversational FAQ Schema so AI search engines cite your business directly.");
      }

      if (hasLlmsTxt) {
        score += 10;
        strengths.push("AI Training Directive found (/llms.txt active)");
      } else {
        bottlenecks.push("No llms.txt found (Missing explicit directives for ChatGPT, Perplexity & Claude bots).");
        recommendations.push("Add a public /llms.txt file to guide AI answer engines.");
      }

      if (hasVoiceAgent) {
        score += 15;
        strengths.push("24/7 Conversational AI Voice Intake Detected");
      } else if (hasPhone) {
        score += 8;
        bottlenecks.push("Standard phone number found, but lacks 24/7 AI Voice triage (High after-hours missed call risk).");
        recommendations.push("Deploy a 24/7 AI Voice Receptionist (Vapi) to capture after-hours and weekend customer calls.");
      } else {
        bottlenecks.push("Zero direct telephone or conversational intake found.");
        recommendations.push("Setup instant Click-to-Call and a 24/7 Voice Calling Assistant.");
      }

      score = Math.min(Math.max(score, 25), 98);

      let grade: AuditData["grade"] = "D";
      let statusText = "Critical Gaps Detected";
      if (score >= 85) {
        grade = "A+";
        statusText = "Fully AEO & SEO Optimized";
      } else if (score >= 70) {
        grade = "B";
        statusText = "SEO Strong, but AEO & Voice Gaps Found";
      } else if (score >= 55) {
        grade = "C";
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
        detectedBottlenecks: ["Could not connect to the specified website. Please check if the domain is live and publicly accessible."],
        recommendations: ["Ensure your website server is online and allows public HTTP GET requests."],
      };
    }
  });