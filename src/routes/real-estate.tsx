import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { PhoneCall, Play, FileText, CreditCard, Sparkles, Shield, Save, Lock, ArrowRight } from 'lucide-react'
import { LeadForm } from '@/components/lead-forms'

export const Route = createFileRoute('/real-estate')({
  component: RealEstateFunnel,
})

function RealEstateFunnel() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [pinEntered, setPinEntered] = useState('')
  const [isUnlocked, setIsUnlocked] = useState(false)

  // Config State (Managed by Owner)
  const [config, setConfig] = useState({
    callingNumber: '+918003469293',
    loomEmbedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Default or replace with your Loom embed URL
    pdfDriveLink: 'https://docs.google.com/document/d/1XZj1rZR7fBl3evCj52-BprzLBV92cMLgcf8rMLhGHM0/edit',
    paymentLink: 'https://wa.me/918003469293?text=Hi%20Pradeep%2C%20I%20want%20to%20activate%20the%20Real%20Estate%20AI%20Suite.',
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      if (params.get('admin') === 'true') {
        setIsAdmin(true)
      }
      const savedConfig = localStorage.getItem('nexus_re_config')
      if (savedConfig) {
        try { setConfig(JSON.parse(savedConfig)) } catch {}
      }
    }
  }, [])

  const saveAdminConfig = () => {
    localStorage.setItem('nexus_re_config', JSON.stringify(config))
    alert('Settings saved successfully!')
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500 selection:text-black">
      {/* Owner-Only Admin Control Bar (Only visible if ?admin=true) */}
      {isAdmin && (
        <div className="bg-amber-950/90 border-b border-amber-600/50 p-4 sticky top-0 z-50 backdrop-blur-md">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
              <Shield className="w-4 h-4" /> Owner Admin Control
            </div>
            {!isUnlocked ? (
              <div className="flex items-center gap-2">
                <input
                  type="password"
                  placeholder="Enter PIN"
                  value={pinEntered}
                  onChange={(e) => setPinEntered(e.target.value)}
                  className="bg-black/60 border border-amber-600/50 rounded px-2 py-1 text-xs text-white w-24 outline-none"
                />
                <button
                  onClick={() => {
                    if (pinEntered === '2026') setIsUnlocked(true)
                    else alert('Incorrect PIN')
                  }}
                  className="px-3 py-1 bg-amber-600 text-black font-bold rounded text-xs"
                >
                  Unlock
                </button>
              </div>
            ) : (
              <div className="flex flex-wrap items-center gap-3 text-xs w-full">
                <input
                  value={config.callingNumber}
                  onChange={(e) => setConfig({ ...config, callingNumber: e.target.value })}
                  placeholder="Calling Number"
                  className="bg-black/70 border border-slate-700 rounded px-2.5 py-1 text-slate-200"
                />
                <input
                  value={config.loomEmbedUrl}
                  onChange={(e) => setConfig({ ...config, loomEmbedUrl: e.target.value })}
                  placeholder="Loom Embed URL"
                  className="bg-black/70 border border-slate-700 rounded px-2.5 py-1 text-slate-200 flex-1 min-w-[200px]"
                />
                <input
                  value={config.pdfDriveLink}
                  onChange={(e) => setConfig({ ...config, pdfDriveLink: e.target.value })}
                  placeholder="PDF Link"
                  className="bg-black/70 border border-slate-700 rounded px-2.5 py-1 text-slate-200"
                />
                <button
                  onClick={saveAdminConfig}
                  className="px-3.5 py-1 bg-emerald-600 hover:bg-emerald-500 font-bold text-white rounded flex items-center gap-1"
                >
                  <Save className="w-3.5 h-3.5" /> Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hero Header */}
      <section className="pt-20 pb-12 px-4 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6">
          <Sparkles className="w-4 h-4" /> 24/7 Real Estate Lead Capture & Calling Engine
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Never Lose Another Property Buyer to a{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Busy Tone
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-8">
          Jab aapke brokers site par hote hain, hamari AI Receptionist har buyer call 1 second mein attend karke unka budget qualify karti hai, site visits book karti hai aur WhatsApp par brochure deliver karti hai.
        </p>

        {/* Live Calling Agent Testing Box */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${config.callingNumber}`}
            className="px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-sm text-white flex items-center gap-2 shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition"
          >
            <PhoneCall className="w-4 h-4" /> 📞 Call & Test Real Estate AI Live ({config.callingNumber})
          </a>
          <a
            href={config.pdfDriveLink}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-4 rounded-xl bg-slate-900 border border-slate-700 font-semibold text-sm flex items-center gap-2 hover:bg-slate-800 transition"
          >
            <FileText className="w-4 h-4 text-cyan-400" /> View System Architecture PDF
          </a>
        </div>
      </section>

      {/* 5-8 Min Video Walkthrough Section */}
      <section className="py-10 px-4 max-w-4xl mx-auto">
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Live System Demonstration
              </span>
            </div>
            <span className="text-xs text-cyan-400">Phone Call &rarr; CRM &rarr; WhatsApp Sync</span>
          </div>

          <div className="aspect-video w-full rounded-xl overflow-hidden bg-black border border-slate-800">
            <iframe
              src={config.loomEmbedUrl}
              title="Real Estate AI Demonstration"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Requirements & Lead Capture Form */}
      <section className="py-12 px-4 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Configure Your Real Estate AI Workforce</h2>
          <p className="text-xs text-slate-400">Select modules and get your custom blueprint within 10 minutes.</p>
        </div>
        <LeadForm />
      </section>

      {/* Direct Payment / Activation CTA */}
      <section className="py-12 px-4 text-center max-w-2xl mx-auto border-t border-slate-900">
        <h3 className="text-xl font-bold mb-2">Ready to Launch Your 24/7 AI Sales Desk?</h3>
        <p className="text-xs text-slate-400 mb-6">Setup live in 3 to 5 business days with direct founder support.</p>
        <a
          href={config.paymentLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-sm text-white shadow-lg shadow-emerald-600/30 transition"
        >
          <CreditCard className="w-4 h-4" /> Activate Real Estate AI Setup Now &rarr;
        </a>
      </section>
    </div>
  )
}
export default RealEstateFunnel