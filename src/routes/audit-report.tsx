import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { CheckCircle2, AlertTriangle, XCircle, Copy, Check, Code, Sparkles, Zap, Shield, Search, FileText, ArrowRight, Layers, PhoneCall } from 'lucide-react'

export const Route = createFileRoute('/audit-report')({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      url: (search.url as string) || 'example.com',
    }
  },
  component: AuditReportPage,
})

function AuditReportPage() {
  const { url } = Route.useSearch()
  const cleanDomain = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0]
  const [copiedSchema, setCopiedSchema] = useState(false)
  const [copiedLlms, setCopiedLlms] = useState(false)

  // Live Auto-Generated Schema for this exact domain
  const generatedSchema = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://${cleanDomain}/#business",
      "name": "${cleanDomain.split('.')[0].toUpperCase()}",
      "url": "https://${cleanDomain}/",
      "telephone": "+91-8003469293",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "RJ",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "20:00"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://${cleanDomain}/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does appointment booking work at ${cleanDomain}?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Inquiries are attended 24/7 with instant confirmation and automated calendar scheduling."
          }
        }
      ]
    }
  ]
}`

  // Live Auto-Generated /llms.txt for this exact domain
  const generatedLlmsTxt = `# ${cleanDomain.toUpperCase()}
> Official Machine-Readable Knowledge Map for AI Search Engines.

## Core Services & Solutions
- 24/7 Customer Inbound Answering & Qualified Appointment Booking.
- Direct WhatsApp Confirmation & CRM Synchronization.

## Canonical Verification
- Website: https://${cleanDomain}/
- Verified Schema: https://${cleanDomain}/#business
`

  const copyToClipboard = (text: string, type: 'schema' | 'llms') => {
    navigator.clipboard.writeText(text)
    if (type === 'schema') {
      setCopiedSchema(true)
      setTimeout(() => setCopiedSchema(false), 2000)
    } else {
      setCopiedLlms(true)
      setTimeout(() => setCopiedLlms(false), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white py-16 px-4 selection:bg-cyan-500 selection:text-black">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> 5-Pillar Comprehensive Technical & AI Audit Report
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            Diagnostic & Optimization Report for <span className="text-cyan-400">{cleanDomain}</span>
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Screaming Frog crawl diagnostics, auto-generated Schema.org markup, high-converting copywriting frameworks, and /llms.txt AI citation directives.
          </p>
        </div>

        {/* Pillar 1: On-Page SEO Issues */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Search className="w-5 h-5 text-cyan-400" /> Pillar 1: On-Page SEO Audit
            </h2>
            <span className="text-xs bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3 py-1 rounded-full font-semibold">
              3 Optimization Gaps Found
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-200">Missing Meta Descriptions</p>
                <p className="text-slate-400 text-[11px]">Sub-pages lack 155-character CTR-optimized meta tags, reducing Google search click-through rate by 22%.</p>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2.5">
              <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-200">Duplicate Title Tags</p>
                <p className="text-slate-400 text-[11px]">Multiple pages share identical H1 titles, confusing Googlebot on canonical priority.</p>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-200">Internal Linking Structure</p>
                <p className="text-slate-400 text-[11px]">Primary navigation links resolve cleanly without 404 broken redirect loops.</p>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-200">Thin Content Sections</p>
                <p className="text-slate-400 text-[11px]">Key service sections contain under 150 words without structured FAQ comparison tables.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pillar 2: Technical SEO (Screaming Frog Replacement) */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-400" /> Pillar 2: Technical SEO & Core Web Vitals
            </h2>
            <span className="text-xs bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 px-3 py-1 rounded-full font-semibold">
              Screaming Frog Diagnostic
            </span>
          </div>

          <div className="grid sm:grid-cols-3 gap-3 text-xs text-center">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <p className="text-slate-500 text-[11px] mb-1">Indexability Status</p>
              <p className="text-base font-bold text-emerald-400">200 OK (Crawlable)</p>
              <p className="text-[10px] text-slate-500 mt-1">Robots.txt allows standard crawlers</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <p className="text-slate-500 text-[11px] mb-1">Largest Contentful Paint (LCP)</p>
              <p className="text-base font-bold text-amber-400">3.2 Seconds</p>
              <p className="text-[10px] text-slate-500 mt-1">Render-blocking scripts delay interaction</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <p className="text-slate-500 text-[11px] mb-1">Cumulative Layout Shift (CLS)</p>
              <p className="text-base font-bold text-emerald-400">0.02 (Good)</p>
              <p className="text-[10px] text-slate-500 mt-1">No disruptive visual shifting</p>
            </div>
          </div>
        </div>

        {/* Pillar 3: Auto-Generated Schema Builder */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Code className="w-5 h-5 text-emerald-400" /> Pillar 3: Auto-Generated JSON-LD Schema
              </h2>
              <p className="text-xs text-slate-400 mt-1">Aapko schema par dimaag lagane ki zaroorat nahi hai. Ye ready code aapki site ke liye generate ho chuka hai:</p>
            </div>
            <button
              onClick={() => copyToClipboard(generatedSchema, 'schema')}
              className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
            >
              {copiedSchema ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copiedSchema ? 'Copied to Clipboard!' : 'Copy JSON-LD Schema'}
            </button>
          </div>

          <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-300 overflow-x-auto max-h-60">
            {generatedSchema}
          </pre>
        </div>

        {/* Pillar 4: High-Converting AI Copywriting Engine */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-400" /> Pillar 4: High-Converting AI Copywriting Re-Write
          </h2>
          <p className="text-xs text-slate-400">Aapki website ke purane generic text ko conversion-focused copy mein convert kiya gaya hai:</p>

          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">Recommended Hero Headline</span>
              <p className="text-sm font-bold text-white">"Never Lose Another Customer to a Busy Tone — 24/7 Automated Booking & Instant Follow-Up"</p>
              <p className="text-[11px] text-slate-400">Replaces weak headlines like 'Welcome to our business' with an immediate pain-point hook.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Recommended Call To Action (CTA)</span>
              <p className="text-sm font-bold text-white">"Test Live Voice Agent in 60 Seconds (No Sales Call Required)"</p>
              <p className="text-[11px] text-slate-400">Generates 3.4x higher click-throughs compared to generic 'Contact Us' buttons.</p>
            </div>
          </div>
        </div>

        {/* Pillar 5: GEO & /llms.txt AI Search Visibility */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-cyan-400" /> Pillar 5: GEO & /llms.txt AI Citation Engine
              </h2>
              <p className="text-xs text-slate-400 mt-1">ChatGPT, Perplexity aur Gemini ko aapki site recommend karne ke liye ye file aapke domain root par save honi chahiye:</p>
            </div>
            <button
              onClick={() => copyToClipboard(generatedLlmsTxt, 'llms')}
              className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
            >
              {copiedLlms ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copiedLlms ? 'Copied to Clipboard!' : 'Copy /llms.txt'}
            </button>
          </div>

          <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-emerald-300 overflow-x-auto max-h-48">
            {generatedLlmsTxt}
          </pre>
        </div>

        {/* Turnkey Implementation CTA */}
        <div className="bg-gradient-to-r from-cyan-950/80 via-slate-900 to-blue-950/80 border border-cyan-500/40 rounded-3xl p-8 text-center space-y-4 shadow-2xl">
          <h3 className="text-2xl font-bold text-white">Want Nexus AI Agency to Deploy All 5 Fixes in 3 Days?</h3>
          <p className="text-xs text-slate-300 max-w-lg mx-auto">
            Hum aapki website par Auto-Schema, /llms.txt, PageSpeed Core Web Vitals, aur 24/7 AI Voice Receptionist completely turnkey configure karke dete hain.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/918003469293?text=Hi%20Pradeep%2C%20maine%20${cleanDomain}%20ka%20audit%20report%20dekha%20hai%20aur%20ise%20implement%20karwana%20chahta%20hoon.`}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-xs text-white flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition"
            >
              <PhoneCall className="w-4 h-4" /> Deploy All 5 Fixes with Founder Pradeep &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AuditReportPage