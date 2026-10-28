import { createFileRoute } from '@tanstack/react-router'
import { BookOpen, ExternalLink, Cpu, Code2, Sparkles } from 'lucide-react'

export const Route = createFileRoute('/resources')({
  component: ResourcesPage,
})

const resources = [
  {
    category: 'Voice AI Architecture',
    title: 'Clinic AI Receptionist Prompt Architecture (Vapi / ElevenLabs)',
    description: 'Complete system instructions, medical triage guardrails, and structured parameter extraction schemas for dental and healthcare appointment booking.',
    readTime: '8 min read',
    icon: Cpu,
    docUrl: 'https://docs.google.com/document/d/1kzX_D2Z3TBfQmJ9Mw6xqDX4RYlXlfFSyv-9NcO34eX8/edit?usp=sharing'
  },
  {
    category: 'Automation SOP',
    title: 'Make.com & n8n Lead-to-WhatsApp Webhook Guide',
    description: 'Step-by-step production documentation on parsing voice call JSON webhooks, validating lead payloads, and dispatching instant CRM notifications.',
    readTime: '12 min read',
    icon: Code2,
    docUrl: 'https://docs.google.com/document/d/1h4qICCNySNjdyxZ_jS74MJduAsjCGw5epHVDk8H6Ums/edit?usp=sharing'
  },
  {
    category: 'Search & AEO Guide',
    title: 'Complete 2026 AEO & Schema.org Checklist for Businesses',
    description: 'The exact structured JSON-LD data and /llms.txt directives required to get cited and recommended in Perplexity, ChatGPT Search, and Google AI Overviews.',
    readTime: '10 min read',
    icon: BookOpen,
    docUrl: 'https://docs.google.com/document/d/1-io0l6EbqEMM-yCScg0yUxqt2WSpxpNLWCvDYgXdqac/edit?usp=sharing'
  },
]

function ResourcesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Technical Documentation & Operating Blueprints
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
          Autonomous Systems Knowledge Base
        </h1>
        <p className="text-slate-400 max-w-2xl text-sm md:text-base mb-12">
          Production blueprints, voice agent prompt architectures, and integration standard operating procedures maintained by Nexus AI Agency.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-500">{item.readTime}</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-4 text-cyan-400 group-hover:scale-105 transition">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <a
                  href={item.docUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition"
                >
                  Read Documentation <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ResourcesPage