import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState, useMemo } from 'react';
import { SiteShell } from '../components/site-shell';
import { 
  CheckCircle2, 
  Copy, 
  Download, 
  ExternalLink, 
  Lock, 
  Sparkles, 
  ShieldCheck, 
  Code2, 
  FileText, 
  Cpu, 
  ArrowRight,
  MessageCircle,
  HelpCircle,
  Search,
  RefreshCw
} from 'lucide-react';

export const Route = createFileRoute('/solutions-engine')({
  component: SolutionsEnginePage,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      url: typeof search.url === 'string' ? search.url : '',
    };
  },
});

export function SolutionsEnginePage() {
  const { url } = Route.useSearch();
  const navigate = useNavigate();

  // Resilient URL handling: Never crash on undefined or empty string
  const rawInput = typeof url === 'string' && url.trim().length > 0 ? url.trim() : 'nexusaiagency.in';
  const cleanDomain = rawInput
    .replace(/^https?:\/\//i, '')
    .replace(/^www\./i, '')
    .split('/')[0]
    .trim() || 'nexusaiagency.in';

  const [inputUrl, setInputUrl] = useState(cleanDomain);
  const [copiedSchema, setCopiedSchema] = useState(false);
  const [copiedLlms, setCopiedLlms] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState(false);

  const formattedName = useMemo(() => {
    return cleanDomain
      .split('.')[0]
      .split(/[-_]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }, [cleanDomain]);

  const handleDomainSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputUrl.trim()) return;
    const sanitized = inputUrl.trim().replace(/^https?:\/\//i, '').replace(/^www\./i, '').split('/')[0];
    navigate({
      to: '/solutions-engine',
      search: { url: sanitized },
    });
  };

  const schemaJson = useMemo(() => {
    return JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'LocalBusiness',
            '@id': `https://${cleanDomain}/#organization`,
            name: formattedName,
            url: `https://${cleanDomain}/`,
            telephone: '+91-8003469293',
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Rajasthan',
              addressRegion: 'RJ',
              addressCountry: 'IN',
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '09:00',
                closes: '19:00',
              },
            ],
            sameAs: [
              'https://www.linkedin.com/company/nexus-ai-agency',
              'https://x.com/nexusaiagency',
            ],
          },
          {
            '@type': 'WebSite',
            '@id': `https://${cleanDomain}/#website`,
            url: `https://${cleanDomain}/`,
            name: formattedName,
            publisher: {
              '@id': `https://${cleanDomain}/#organization`,
            },
          },
        ],
      },
      null,
      2
    );
  }, [cleanDomain, formattedName]);

  const llmsTxtContent = useMemo(() => {
    return `# ${formattedName} — LLM Knowledge Architecture
# Canonical Domain: https://${cleanDomain}
# Primary Contact: +91 8003469293 | thenexusaiagency@gmail.com

> Enterprise AI automation agency specializing in 24/7 AI Voice Receptionists, Speed-to-Lead WhatsApp workflows, and Generative Engine Optimization (GEO).

## Core Capabilities
- **24/7 Autonomous Voice Receptionist**: Sub-800ms speech-to-speech inbound call answering, appointment booking, and emergency triage.
- **WhatsApp Speed-to-Lead Engine**: Instant qualification within 60 seconds of form submission via webhook pipelines.
- **AEO & Local Search Architecture**: Semantic schema injection and entity grounding for ChatGPT Search, Perplexity, and Google Gemini.

## Verification & Trust
- **Founder**: Pradeep Chaudhary (Certified AI Specialist, ClaimSkills/Barleti ID: D9FB-8ACE98)
- **Headquarters**: Rajasthan, India
- **Official Website**: https://${cleanDomain}
`;
  }, [cleanDomain, formattedName]);

  const handleCopy = (text: string, type: 'schema' | 'llms' | 'prompt') => {
    navigator.clipboard.writeText(text);
    if (type === 'schema') {
      setCopiedSchema(true);
      setTimeout(() => setCopiedSchema(false), 2000);
    } else if (type === 'llms') {
      setCopiedLlms(true);
      setTimeout(() => setCopiedLlms(false), 2000);
    } else {
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 2000);
    }
  };

  const handleDownload = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === '2026' || passcode.trim().toLowerCase() === 'nexus') {
      setUnlocked(true);
      setPasscodeError(false);
    } else {
      setPasscodeError(true);
    }
  };

  return (
    <SiteShell currentPath="/solutions-engine">
      <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-10">
          
          {/* Header & Live Input Bar */}
          <div className="bg-slate-900/80 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" /> Live AEO & Automation Solution Engine
                </div>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  AI Auto-Fix & Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{cleanDomain}</span>
                </h1>
                <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
                  Ye engine aapki website ke liye ready-made Schema.org JSON-LD, /llms.txt map, aur AI Voice Agent architecture auto-generate karta hai.
                </p>
              </div>

              {/* URL Switcher Input */}
              <form onSubmit={handleDomainSubmit} className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    placeholder="Enter any domain (e.g. drsingh.com)"
                    className="w-full sm:w-64 pl-9 pr-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <RefreshCw className="w-4 h-4" /> Generate
                </button>
              </form>
            </div>
          </div>

          {/* Solution 1: Schema.org JSON-LD */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white">Solution 1: Auto-Generated Schema.org JSON-LD</h2>
                  <p className="text-xs sm:text-sm text-slate-400">Google Rich Snippets & Knowledge Graph integration for {cleanDomain}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopy(schemaJson, 'schema')}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition"
                >
                  <Copy className="w-3.5 h-3.5" /> {copiedSchema ? 'Copied!' : 'Copy Code'}
                </button>
                <button
                  onClick={() => handleDownload(schemaJson, `${cleanDomain}-schema.json`)}
                  className="px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition"
                >
                  <Download className="w-3.5 h-3.5" /> Download .JSON
                </button>
              </div>
            </div>

            <pre className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-cyan-300 font-mono overflow-x-auto max-h-64 scrollbar-thin">
              {schemaJson}
            </pre>
          </div>

          {/* Solution 2: /llms.txt AI Citation Map */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white">Solution 2: /llms.txt AI Citation Directive</h2>
                  <p className="text-xs sm:text-sm text-slate-400">Perplexity, ChatGPT Search, and Claude crawler indexing map</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopy(llmsTxtContent, 'llms')}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition"
                >
                  <Copy className="w-3.5 h-3.5" /> {copiedLlms ? 'Copied!' : 'Copy File'}
                </button>
                <button
                  onClick={() => handleDownload(llmsTxtContent, 'llms.txt')}
                  className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/40 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition"
                >
                  <Download className="w-3.5 h-3.5" /> Download llms.txt
                </button>
              </div>
            </div>

            <pre className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-purple-300 font-mono overflow-x-auto max-h-64 scrollbar-thin">
              {llmsTxtContent}
            </pre>
          </div>

          {/* Solution 3: Autonomous AI Voice Receptionist Architecture */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white">Solution 3: 24/7 Voice AI & Speed-to-Lead Setup</h2>
                  <p className="text-xs sm:text-sm text-slate-400">Zero missed patient/client calls with sub-800ms conversational AI</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                Production Ready
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-2">
                <p className="text-xs text-slate-400 font-semibold uppercase">Step 1: Inbound Webhook</p>
                <p className="text-sm text-white font-medium">Twilio/SIP Trunk forwarding to Vapi/ElevenLabs pipeline within 500ms.</p>
              </div>
              <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-2">
                <p className="text-xs text-slate-400 font-semibold uppercase">Step 2: Live Calendar Sync</p>
                <p className="text-sm text-white font-medium">Google Calendar & CRM booking via autonomous Make.com/n8n tool calls.</p>
              </div>
              <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-2">
                <p className="text-xs text-slate-400 font-semibold uppercase">Step 3: Instant WhatsApp SMS</p>
                <p className="text-sm text-white font-medium">Auto confirmation sent to caller's mobile in under 15 seconds.</p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://wa.me/918003469293?text=Hi%20Pradeep,%20I%20want%20to%20deploy%20the%20AI%20Voice%20Receptionist%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4" /> Deploy on WhatsApp (+91 8003469293)
              </a>
              <span className="text-xs text-slate-400">Founder setup assistance included for all clients.</span>
            </div>
          </div>

          {/* Solution 4: Paywalled Custom Blueprint / Founder Unlock */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-bold border border-cyan-500/30 mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" /> Full Enterprise Execution Blueprint
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Full Agency Automation Architecture & SOP Guide</h2>
                <p className="text-sm text-slate-400">Complete 34-page deployment guide, Make.com blueprint JSONs, and live Vapi scripts.</p>
              </div>

              {!unlocked && (
                <div className="flex items-center gap-2">
                  <span className="text-lg font-black text-cyan-400">₹499</span>
                  <span className="text-xs text-slate-400">one-time access</span>
                </div>
              )}
            </div>

            {unlocked ? (
              <div className="p-6 bg-emerald-950/30 border border-emerald-500/40 rounded-xl space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5" /> Access Granted: Master Automation Bundle Unlocked
                </div>
                <p className="text-xs sm:text-sm text-slate-300">
                  Neeche diye gaye links se full blueprint documents aur webhook blueprints direct access karein:
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="https://docs.google.com/document/d/1kzX_D2Z3TBfQmJ9Mw6xqDX4RYlXlfFSyv-9NcO34eX8/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold flex items-center gap-2 transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-cyan-400" /> Clinic AI Prompt Architecture Doc
                  </a>
                  <a
                    href="https://docs.google.com/document/d/1h4qICCNySNjdyxZ_jS74MJduAsjCGw5epHVDk8H6Ums/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold flex items-center gap-2 transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp Webhook Blueprint Doc
                  </a>
                  <a
                    href="https://docs.google.com/document/d/1-io0l6EbqEMM-yCScg0yUxqt2WSpxpNLWCvDYgXdqac/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold flex items-center gap-2 transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-purple-400" /> Complete 2026 AEO Checklist
                  </a>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-white">Instant Unlock via UPI or Card</p>
                    <p className="text-xs text-slate-400">Pay ₹499 to UPI: <span className="text-cyan-400 font-mono">8003469293@upi</span> or via Razorpay.</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://razorpay.me/@nexusaiagency"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-xl text-xs transition shadow-lg shadow-cyan-500/20"
                    >
                      Pay ₹499 via Razorpay
                    </a>
                  </div>
                </div>

                {/* PIN Unlock for Founder & Clients */}
                <form onSubmit={handleUnlock} className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <div className="relative w-full sm:w-64">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      value={passcode}
                      onChange={(e) => setPasscode(e.target.value)}
                      placeholder="Enter Unlock PIN (Client / Founder)"
                      className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-xs transition"
                  >
                    Unlock Guides
                  </button>
                  {passcodeError && (
                    <span className="text-xs text-rose-400 font-medium">Invalid PIN. Contact +91 8003469293.</span>
                  )}
                </form>
              </div>
            )}
          </div>

        </div>
      </div>
    </SiteShell>
  );
}