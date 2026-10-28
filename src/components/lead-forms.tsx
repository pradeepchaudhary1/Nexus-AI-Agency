import React, { useState } from 'react'
import { Send, CheckCircle2, CheckSquare, Square } from 'lucide-react'

export function LeadForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    services: ['AI Calling Agent', 'WhatsApp Follow-up Automation'] as string[],
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const availableServices = [
    'Website Development',
    'AI Calling Agent',
    'AEO & GEO Optimization',
    'CRM Integration',
    'WhatsApp Follow-up Automation',
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
      console.warn('Network fallback:', err)
    }

    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-md">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Full Name *</label>
              <input
                required
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition"
                placeholder="e.g. David Miller"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Business Name *</label>
              <input
                required
                type="text"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition"
                placeholder="e.g. Apex Health Clinic / Urban Realty"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Email Address *</label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition"
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Phone Number (WhatsApp) *</label>
              <input
                required
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition"
                placeholder="e.g. +91 9876543210"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5">Website URL (Optional)</label>
            <input
              type="text"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition"
              placeholder="https://yourwebsite.com (leave empty if not applicable)"
            />
          </div>

          {/* Unified Input Box for Automations */}
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5">
              Required Automation Modules *
            </label>
            <div className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {availableServices.map((srv) => {
                  const isChecked = formData.services.includes(srv)
                  return (
                    <div
                      key={srv}
                      onClick={() => toggleService(srv)}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-md border text-xs cursor-pointer select-none transition ${
                        isChecked
                          ? 'bg-cyan-500/10 border-cyan-500/60 text-cyan-300 font-semibold shadow-sm'
                          : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-cyan-400 shrink-0" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-600 shrink-0" />
                      )}
                      <span>{srv}</span>
                    </div>
                  )
                })}
              </div>
              <p className="text-[11px] text-slate-500 pt-1">
                Select one or multiple modules required for your deployment.
              </p>
            </div>
          </div>

          {/* Notes / Message Box */}
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5">
              Project Notes & Specific Requirements
            </label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition"
              placeholder="Describe your current inquiry volume, integration goals, or specific business hours..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-sm text-white flex items-center justify-center gap-2 hover:opacity-95 shadow-lg shadow-cyan-500/25 transition cursor-pointer"
          >
            {loading ? 'Submitting Details...' : 'Submit Inquiry & Get Custom AI Blueprint'}
            <Send className="w-4 h-4" />
          </button>
        </form>
      ) : (
        <div className="text-center py-10 space-y-4">
          <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
          <h3 className="text-xl font-bold text-white">Inquiry Received Successfully!</h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto">
            Thank you for reaching out. We have logged your requirements and our team will get in touch via WhatsApp and Email shortly.
          </p>
        </div>
      )}
    </div>
  )
}

export default LeadForm