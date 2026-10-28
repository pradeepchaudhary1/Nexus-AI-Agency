import React, { useState } from 'react'
import { Send, CheckCircle2, Sparkles } from 'lucide-react'

export function LeadForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    services: ['AI Calling Agent', 'WhatsApp Follow-up'] as string[],
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const availableServices = [
    'Website',
    'AI Calling Agent',
    'AEO/GEO Optimization',
    'CRM',
    'WhatsApp Follow-up',
  ]

  const toggleService = (srv: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(srv)
        ? prev.services.filter((s) => s !== srv)
        : [...prev.services, srv],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const payload = {
      name: formData.fullName,
      businessName: formData.businessName,
      email: formData.email,
      phone: formData.phone,
      website: formData.website || 'N/A',
      services: formData.services.join(', '),
      message: formData.message || 'No additional notes',
      timestamp: new Date().toISOString(),
    }

    try {
      // 1. Google Apps Script CRM Submission
      await fetch(
        'https://script.google.com/macros/s/AKfycbyTqSEK8iK79n4W00g069z32iS44V34lG85W98lC/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      )
    } catch (err) {
      console.warn('Submission network fallback:', err)
    }

    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-md">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Full Name *</label>
              <input
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:border-cyan-500 outline-none"
                placeholder="Pradeep Chaudhary"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Business Name *</label>
              <input
                required
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:border-cyan-500 outline-none"
                placeholder="Apex Healthcare / Urban Realty"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Email Address *</label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:border-cyan-500 outline-none"
                placeholder="contact@business.com"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Phone Number (WhatsApp) *</label>
              <input
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:border-cyan-500 outline-none"
                placeholder="+91 8003469293"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1">Website URL (Optional)</label>
            <input
              type="text"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:border-cyan-500 outline-none"
              placeholder="https://yourwebsite.com (agar nahi hai to blank chhod dein)"
            />
          </div>

          {/* Automation Checkboxes */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">
              Select Required Automations (Tap to Select):
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {availableServices.map((srv) => (
                <label
                  key={srv}
                  onClick={() => toggleService(srv)}
                  className={`flex items-center gap-2 p-2.5 rounded-lg border text-xs cursor-pointer select-none transition ${
                    formData.services.includes(srv)
                      ? 'bg-cyan-500/15 border-cyan-500 text-cyan-300 font-semibold'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.services.includes(srv)}
                    onChange={() => {}}
                    className="accent-cyan-500 rounded"
                  />
                  <span>{srv}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Notes / Message Box */}
          <div>
            <label className="block text-xs text-slate-400 mb-1">
              Notes / Additional Requirements
            </label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:border-cyan-500 outline-none"
              placeholder="Aapke business ke specific challenges ya timings yahan likhein..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-sm text-white flex items-center justify-center gap-2 hover:opacity-95 shadow-lg shadow-cyan-500/25 transition"
          >
            {loading ? 'Submitting...' : 'Submit Inquiry & Get Custom AI Blueprint'}
            <Send className="w-4 h-4" />
          </button>
        </form>
      ) : (
        <div className="text-center py-8 space-y-3">
          <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
          <h3 className="text-xl font-bold text-white">Inquiry Received Successfully!</h3>
          <p className="text-sm text-slate-300">
            Aapki enquiry hamare system mein save ho gayi hai. Hamne confirmation email aapke inbox par bhej diya hai aur founder Pradeep Chaudhary aapse jald hi contact karenge.
          </p>
        </div>
      )}
    </div>
  )
}
export default LeadForm