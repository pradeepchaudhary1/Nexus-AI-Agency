import { l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as createServerRpc } from "./createServerRpc-CxD4EZ5P.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/scanner.functions-CGiJ8xIH.js
var auditWebsiteServerFn_createServerFn_handler = createServerRpc({
	id: "6ff593750e2fe801e8b2f829ccd538f4a15f806c42d84a520d41644599d87175",
	name: "auditWebsiteServerFn",
	filename: "src/lib/scanner.functions.ts"
}, (opts) => auditWebsiteServerFn.__executeServer(opts));
var auditWebsiteServerFn = createServerFn({ method: "POST" }).validator((url) => url).handler(auditWebsiteServerFn_createServerFn_handler, async ({ data: rawUrl }) => {
	let cleanUrl = rawUrl.trim().replace(/\s+/g, "");
	if (!cleanUrl.startsWith("http://") && !cleanUrl.startsWith("https://")) cleanUrl = `https://${cleanUrl}`;
	const browserHeaders = {
		"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
		"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
		"Accept-Language": "en-US,en;q=0.9,hi;q=0.8",
		"Cache-Control": "no-cache",
		"Pragma": "no-cache"
	};
	let target = cleanUrl;
	let html = "";
	let finalUrlObj;
	try {
		finalUrlObj = new URL(target);
		if (finalUrlObj.hostname === "localhost" || finalUrlObj.hostname === "127.0.0.1" || finalUrlObj.hostname.startsWith("192.168.") || finalUrlObj.hostname.startsWith("10.") || finalUrlObj.hostname.startsWith("169.254.")) throw new Error("Local and private network scanning is restricted.");
		try {
			const controller = new AbortController();
			const timeout = setTimeout(() => controller.abort(), 14e3);
			const res = await fetch(target, {
				signal: controller.signal,
				headers: browserHeaders
			});
			clearTimeout(timeout);
			if (res.ok || res.status === 403) html = await res.text();
			else throw new Error(`Status ${res.status}`);
		} catch (httpsErr) {
			if (target.startsWith("https://")) {
				target = target.replace("https://", "http://");
				const fController = new AbortController();
				const fTimeout = setTimeout(() => fController.abort(), 1e4);
				const fRes = await fetch(target, {
					signal: fController.signal,
					headers: browserHeaders
				});
				clearTimeout(fTimeout);
				html = await fRes.text();
				finalUrlObj = new URL(target);
			} else throw httpsErr;
		}
		if (!html || html.length < 50) throw new Error("Empty response from website.");
		let isGeoReady = true;
		const geoBlockedBots = [];
		try {
			const robRes = await fetch(`${finalUrlObj.origin}/robots.txt`, { headers: browserHeaders });
			if (robRes.ok) {
				const robText = (await robRes.text()).toLowerCase();
				if (robText.includes("user-agent: gptbot") && robText.includes("disallow: /")) {
					isGeoReady = false;
					geoBlockedBots.push("ChatGPT (GPTBot)");
				}
				if (robText.includes("user-agent: perplexitybot") && robText.includes("disallow: /")) {
					isGeoReady = false;
					geoBlockedBots.push("PerplexityBot");
				}
				if (robText.includes("user-agent: claudebot") && robText.includes("disallow: /")) {
					isGeoReady = false;
					geoBlockedBots.push("ClaudeBot");
				}
			}
		} catch (e) {}
		let hasLlmsTxt = false;
		try {
			const lRes = await fetch(`${finalUrlObj.origin}/llms.txt`, { headers: browserHeaders });
			const cType = lRes.headers.get("content-type") || "";
			if (lRes.ok && (cType.includes("text/plain") || cType.includes("text/markdown"))) {
				const textPreview = await lRes.text();
				if (!textPreview.includes("<!DOCTYPE") && !textPreview.includes("<html")) hasLlmsTxt = true;
			}
		} catch (e) {
			hasLlmsTxt = false;
		}
		const schemaTypes = [];
		let hasSchema = false;
		const schemaRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
		let match;
		while ((match = schemaRegex.exec(html)) !== null) {
			const jsonString = match[1];
			if (typeof jsonString === "string") try {
				const json = JSON.parse(jsonString);
				hasSchema = true;
				if (json["@type"]) schemaTypes.push(String(json["@type"]));
				if (Array.isArray(json["@graph"])) json["@graph"].forEach((item) => {
					if (item && item["@type"]) schemaTypes.push(String(item["@type"]));
				});
			} catch (e) {
				hasSchema = true;
				schemaTypes.push("Custom JSON-LD");
			}
		}
		const titleMatch = /<title[^>]*>([\s\S]*?)<\/title>/i.exec(html);
		const metaTitle = titleMatch && titleMatch[1] ? titleMatch[1].trim() : "";
		const hasMetaTitle = metaTitle.length > 5;
		const descMatch = /<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i.exec(html) || /<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i.exec(html);
		const hasMetaDescription = (descMatch && descMatch[1] ? descMatch[1].trim() : "").length > 15;
		const hasOpenGraph = /<meta[^>]*property=["']og:/i.test(html);
		const hasFaqSchema = schemaTypes.some((t) => /faq|question|answer/i.test(t));
		const hasPhone = /href=["']tel:[^"']+["']/i.test(html) || /tel:\+?[\d\s-]{7,}/i.test(html);
		const hasVoiceAgent = /<script[^>]*(vapi|retell|synthflow|elevenlabs)[^>]*>|data-vapi|id=["']vapi-widget["']/i.test(html);
		let score = 25;
		const strengths = [];
		const bottlenecks = [];
		const recommendations = [];
		if (hasSchema) {
			score += 25;
			strengths.push(`Schema.org Structured Data (${Array.from(new Set(schemaTypes)).slice(0, 3).join(", ")})`);
		} else {
			bottlenecks.push("Schema.org JSON-LD missing (AI engines cannot verify your business parameters).");
			recommendations.push("Inject custom Schema.org (LocalBusiness, Organization, FAQPage) markup.");
		}
		if (hasMetaTitle) {
			score += 15;
			strengths.push(`Optimized Title: "${metaTitle.slice(0, 40)}..."`);
		} else bottlenecks.push("Missing or non-descriptive page title tag.");
		if (hasMetaDescription) {
			score += 15;
			strengths.push("Search Engine Meta Description configured");
		} else bottlenecks.push("Meta description is missing; search snippets are unoptimized.");
		if (hasOpenGraph) {
			score += 10;
			strengths.push("Social Open Graph cards configured (WhatsApp preview ready)");
		}
		if (hasFaqSchema) {
			score += 15;
			strengths.push("FAQPage Schema active (Eligible for direct Perplexity/ChatGPT answers)");
		} else {
			bottlenecks.push("No FAQPage Schema found (Answers will not be cited in AI search overviews).");
			recommendations.push("Deploy Conversational FAQ Schema so AI search engines cite your business.");
		}
		if (hasLlmsTxt) {
			score += 10;
			strengths.push("AI Training Directive found (/llms.txt active)");
		}
		if (!isGeoReady) {
			bottlenecks.push(`GEO Warning: Robots.txt blocks ${geoBlockedBots.join(", ")} from citing this site.`);
			recommendations.push("Update robots.txt to allow GPTBot and PerplexityBot crawlers.");
		} else strengths.push("GEO Compliant: Full indexing access granted to ChatGPT, Perplexity & Gemini bots.");
		if (hasVoiceAgent) {
			score += 15;
			strengths.push("24/7 Conversational AI Voice Intake Detected");
		} else if (hasPhone) {
			score += 8;
			bottlenecks.push("Standard phone found, but lacks 24/7 AI Voice triage (High missed-call risk).");
			recommendations.push("Deploy a 24/7 AI Voice Receptionist to capture after-hours customer calls.");
		} else {
			bottlenecks.push("Zero direct telephone or conversational intake found.");
			recommendations.push("Setup instant Click-to-Call and a 24/7 Voice Calling Assistant.");
		}
		score = Math.min(Math.max(score, 20), 98);
		let grade = "D";
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
			recommendations: recommendations.length ? recommendations : ["Maintain continuous AEO and voice latency monitoring."]
		};
	} catch (err) {
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
			detectedBottlenecks: ["Could not connect to this domain. Please verify it is live and publicly accessible."],
			recommendations: ["Ensure your website server is online and allows public HTTP GET requests."]
		};
	}
});
//#endregion
export { auditWebsiteServerFn_createServerFn_handler };
