import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { PhoneCall, Play, CreditCard, Sparkles, Shield, Save, Stethoscope, Activity, Database, MessageSquare } from 'lucide-react'
import { LeadForm } from '@/components/lead-forms'

export const Route = createFileRoute('/clinics')({
  component: ClinicsFunnel,
})

function ClinicsFunnel() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [pin, setPin] = useState('')
  const [config, setConfig] = useState({
    callingNumber: '+918003469293',
    videoEmbedUrl: 'https://drive.google.com/file/d/1dSzQo8JDLDZMqGBgg6cRwAjki0Oyr3u9j_VrNV7qNXI/preview',
    paymentLink: 'https://wa.me/919166516942?text=Hi%20Pradeep%2C%20I%20want%20to%20book%20the%20Clinic%20AI%20Receptionist%20Demo%20at%20₹999.',
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const p = new URLSearchParams(window.location.search)
      if (p.get('admin') === 'true') setIsAdmin(true)
      const saved = localStorage.getItem('nexus_clinic_cfg')
      if (saved) { try { setConfig(JSON.parse(saved)) } catch {} }
    }
  }, [])

  const saveConfig = () => {
    localStorage.setItem('nexus_clinic_cfg', JSON.stringify(config))
    alert('Settings Saved Successfully!')
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500 selection:text-black">
      {isAdmin && (
        <div className="bg-amber-950/90 border-b border-amber-600/50 p-3 sticky top-0 z-50 text-xs">
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
            <span className="font-bold text-amber-400 flex items-center gap-1.5"><Shield className="w-4 h-4"/> Owner Admin Bar</span>
            {!isUnlocked ? (
              <div className="flex gap-2">
                <input type="password" placeholder="PIN" value={pin} onChange={e=>setPin(e.target.value)} className="bg-black/80 px-2 py-1 rounded border border-amber-600 w-20 text-white"/>
                <button onClick={()=>{ if (pin==='2026') setIsUnlocked(true); else alert('Incorrect PIN'); }} className="bg-amber-600 px-3 py-1 rounded font-bold text-black">Unlock</button>
              </div>
            ) : (
              <div className="flex gap-2 flex-1">
                <input value={config.callingNumber} onChange={e=>setConfig({...config, callingNumber: e.target.value})} placeholder="Calling Number" className="bg-black/80 px-2 py-1 rounded border border-slate-700 text-white text-xs"/>
                <input value={config.videoEmbedUrl} onChange={e=>setConfig({...config, videoEmbedUrl: e.target.value})} placeholder="Video URL" className="bg-black/80 px-2 py-1 rounded border border-slate-700 text-white text-xs flex-1"/>
                <button onClick={saveConfig} className="bg-emerald-600 px-3 py-1 rounded font-bold text-white flex items-center gap-1"><Save className="w-3.5 h-3.5"/> Save</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hero Header */}
      <section className="pt-24 pb-12 px-4 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6">
          <Stethoscope className="w-4 h-4" /> 24/7 Dental & Healthcare AI Voice Receptionist
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Never Miss a Patient Call During <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Surgery or After-Hours</span>
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg mb-8">
          Calm, empathetic, sub-second conversational AI that answers patient queries, manages doctor schedules, books appointments, and triggers instant WhatsApp confirmations.
        </p>

        {/* Live Calling Agent Test */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${config.callingNumber}`}
            className="px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-sm text-white flex items-center gap-2 shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition"
          >
            <PhoneCall className="w-4 h-4" /> 📞 Call & Test Clinic AI Voice Live ({config.callingNumber})
          </a>
          <a
            href="#booking-section"
            className="px-7 py-4 rounded-xl bg-slate-900 border border-slate-800 font-semibold text-sm hover:bg-slate-800 transition"
          >
            Book Custom Demo (₹999 / $19)
          </a>
        </div>
      </section>

      {/* Video Demonstration Container */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-3 text-xs text-slate-400">
            <span className="flex items-center gap-2 text-cyan-400 font-semibold uppercase tracking-wider">
              <Play className="w-3.5 h-3.5" /> Healthcare & Clinic Demonstration
            </span>
            <span>Triage Call &rarr; Doctor Calendar &rarr; WhatsApp Alert</span>
          </div>
          <div className="aspect-video w-full rounded-xl overflow-hidden bg-black border border-slate-800">
            <iframe
              src={config.videoEmbedUrl}
              title="Clinic AI Demo"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* End-to-End Clinic Workflow Diagram */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Autonomous Patient Booking Pipeline</h2>
          <p className="text-xs text-slate-400">How appointments are booked without pulling doctors or nurses away from care.</p>
        </div>
        <div className="grid sm:grid-cols-4 gap-4">
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mx-auto mb-3 text-blue-400">
              <PhoneCall className="w-5 h-5"/>
            </div>
            <h4 className="text-xs font-bold text-white mb-1">1. Patient Calls</h4>
            <p className="text-[11px] text-slate-400">Call received during busy opd hours or after 8 PM.</p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-3 text-cyan-400">
              <Activity className="w-5 h-5"/>
            </div>
            <h4 className="text-xs font-bold text-white mb-1">2. Triage & Guardrails</h4>
            <p className="text-[11px] text-slate-400">Answers fees & treatments. Filters non-medical questions safely.</p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mx-auto mb-3 text-indigo-400">
              <Database className="w-5 h-5"/>
            </div>
            <h4 className="text-xs font-bold text-white mb-1">3. Calendar Lock</h4>
            <p className="text-[11px] text-slate-400">Syncs directly into Clinic CRM / Google Calendar slot.</p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-center">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-3 text-emerald-400">
              <MessageSquare className="w-5 h-5"/>
            </div>
            <h4 className="text-xs font-bold text-white mb-1">4. WhatsApp Slip</h4>
            <p className="text-[11px] text-slate-400">Patient receives token number, timing, & clinic location pin.</p>
          </div>
        </div>
      </section>

      {/* Special Live Demo Booking Card (₹999 / $19) */}
      <section id="booking-section" className="py-16 px-4 max-w-3xl mx-auto">
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/40 rounded-3xl p-6 md:p-10 shadow-[0_0_50px_rgba(6,182,212,0.15)] text-center">
          <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            Limited Healthcare Architecture Audit & Demo Setup
          </span>
          <h2 className="text-3xl font-extrabold mt-4 mb-2">Book Your Custom Healthcare AI Voice Demo</h2>
          <p className="text-xs text-slate-400 max-w-md mx-auto mb-6">
            Experience your clinic's own AI receptionist trained on your consultation fees and treatment FAQs.
          </p>

          {/* Pricing Highlight */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="text-slate-500 line-through text-lg font-bold">₹4,999 ($79)</span>
            <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              ₹999 <span className="text-base text-slate-400 font-normal">/ $19 USD</span>
            </span>
            <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold px-2.5 py-1 rounded-full">
              80% OFF
            </span>
          </div>

          <LeadForm />

          <div className="mt-8 pt-6 border-t border-slate-900 flex flex-wrap items-center justify-center gap-4">
            <a
              href={config.paymentLink}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-sm text-white flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition"
            >
              <CreditCard className="w-4 h-4" /> Lock Clinic Demo Slot on WhatsApp (₹999 / $19) &rarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ClinicsFunnel