import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/onboarding')({
  component: OnboardingPage,
})

function OnboardingPage() {
  const [submitted, setSubmitted] = useState(false)
  const [businessName, setBusinessName] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <div className="min-h-screen bg-slate-950 text-white py-16 px-4">
      <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-medium mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Client Onboarding Setup
        </div>
        <h1 className="text-2xl font-bold mb-2">Configure Your AI System</h1>
        <p className="text-sm text-slate-400 mb-6">Enter your business details below to initiate instant configuration.</p>
        
        {!submitted ? (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="space-y-4">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Business Name</label>
              <input required value={businessName} onChange={(e) => setBusinessName(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white" placeholder="e.g. Apex Clinic" />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">WhatsApp Number</label>
              <input required value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white" placeholder="+91 9876543210" />
            </div>
            <button type="submit" className="w-full py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm flex items-center justify-center gap-2 transition">
              Submit Configuration <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 shrink-0" />
            <p className="text-sm">Requirements received! Founder Pradeep will connect with your live blueprint.</p>
          </div>
        )}
      </div>
    </div>
  )
}
export default OnboardingPage