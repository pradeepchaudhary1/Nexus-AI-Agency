import React, { useState } from 'react';
import { supabase } from '@/integrations/client';
import { CheckCircle2, ArrowRight, MessageSquare, Loader2, AlertCircle, Globe } from 'lucide-react';

const TARGET_EMAIL = "thenexusaiagency@gmail.com";

// Aapka Google Apps Script Web App URL yahan daalein (agar banaya hai to):
const GOOGLE_SHEET_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbwy9zgG8krLDHRJpD7UVmHGbGObvwxNMkhKavWoSVCHVTgd1QIXGFQ8AM0DhUK1UDs/exec";

// ==========================================
// 1. REUSABLE LEAD FORM (Home & Demo Lab)
// ==========================================
export interface LeadFormProps {
  source?: 'readiness_audit' | 'demo_request' | 'booking' | string;
  demoType?: string;
  compact?: boolean;
}

export const LeadForm: React.FC<LeadFormProps> = ({ source = 'booking', demoType, compact = false }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const sheetData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || 'Not provided',
      website: website.trim() || 'Not provided',
      requirement: message.trim() || (demoType ? `Demo Request: ${demoType}` : 'General Inquiry'),
      bottleneck: message.trim() || 'Website Inbound Request',
      source: source || 'Website Form',
      campaign: 'Direct Inbound',
      lead_status: 'New',
      lead_score: 75,
      notes: demoType ? `Interested in Demo: ${demoType}` : 'Standard lead form submission',
      _subject: `🔥 New Lead from Nexus AI: ${name.trim()}`,
      _template: 'table',
    };

    // 1. Send to Gmail via FormSubmit
    try {
      await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(sheetData)
      });
    } catch (e) {}

    // 2. Send to Google Sheets CRM
    if (GOOGLE_SHEET_WEBAPP_URL && !GOOGLE_SHEET_WEBAPP_URL.includes("your_script_id")) {
      try {
        await fetch(GOOGLE_SHEET_WEBAPP_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(sheetData)
        });
      } catch (e) {}
    }

    // 3. Supabase DB Backup
    try {
      await supabase.from('lead_submissions').insert([{
        name: sheetData.name,
        email: sheetData.email,
        phone: sheetData.phone === 'Not provided' ? null : sheetData.phone,
        message: `${sheetData.requirement} | Website: ${sheetData.website}`,
        demo_type: demoType || null,
        source: String(source),
        bottleneck: sheetData.bottleneck,
      }]);
    } catch (e) {}

    // 4. Local storage backup
    try {
      const localLeads = JSON.parse(localStorage.getItem('nexus_leads') || '[]');
      localLeads.unshift({ ...sheetData, createdAt: new Date().toISOString() });
      localStorage.setItem('nexus_leads', JSON.stringify(localLeads));
    } catch (e) {}

    setLoading(false);
    setSubmitted(true);
  };

  const waMsg = encodeURIComponent(
    `Hi Pradeep, I submitted an inquiry on Nexus AI.\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nWebsite: ${website || 'None'}\nDetails: ${message || demoType || 'General Inquiry'}`
  );

  if (submitted) {
    return (
      <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center">
        <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
        <h4 className="text-lg font-bold text-foreground">Inquiry Received!</h4>
        <p className="text-xs text-muted-foreground mt-1 mb-4">Your details have been received. We will contact you shortly.</p>
        <a
          href={`https://wa.me/919166516942?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all"
        >
          <MessageSquare className="w-4 h-4" /> Priority WhatsApp Chat
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {errorMsg && (
        <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}
      <div>
        <input
          type="text"
          required
          placeholder="Your Full Name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3.5 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          type="email"
          required
          placeholder="Work Email *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3.5 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary"
        />
        <input
          type="tel"
          placeholder="Phone Number *"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-3.5 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary"
        />
      </div>
      <div>
        <input
          type="url"
          placeholder="Website URL (Optional e.g. https://yourcompany.com)"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="w-full px-3.5 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary"
        />
      </div>
      {!compact && (
        <textarea
          rows={3}
          placeholder="What workflow, voice call handling, or bottleneck do you want to automate?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-3.5 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary resize-none"
        />
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 px-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Submit Request"}
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
};

// ==========================================
// 2. FULL READINESS REVIEW AUDIT FORM
// ==========================================
export const ReadinessReviewForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [teamSize, setTeamSize] = useState('1–5');
  const [leadVolume, setLeadVolume] = useState('Under 50');
  const [bottleneck, setBottleneck] = useState('');
  const [existingTools, setExistingTools] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const sheetData = {
      name: fullName.trim(),
      email: email.trim(),
      phone: phone.trim() || 'Not provided',
      website: website.trim() || 'Not provided',
      business_name: businessType.trim() || 'General Business',
      business_type: businessType.trim() || 'SMB',
      requirement: `Team: ${teamSize} | Monthly Leads: ${leadVolume} | Tools: ${existingTools || 'None'}`,
      bottleneck: bottleneck.trim() || 'Operational friction',
      source: 'Readiness Audit',
      campaign: 'Website Inbound',
      lead_status: 'Qualified',
      lead_score: 85,
      notes: `Readiness Audit Form. Team size: ${teamSize}, Monthly leads: ${leadVolume}, Tools: ${existingTools}`,
      _subject: `⚡ New Readiness Review: ${fullName.trim()} (${businessType || 'Business'})`,
      _template: 'table',
    };

    // 1. Direct Email to Gmail (Free)
    try {
      await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(sheetData)
      });
    } catch (e) {}

    // 2. Direct to Google Sheets CRM
    if (GOOGLE_SHEET_WEBAPP_URL && !GOOGLE_SHEET_WEBAPP_URL.includes("your_script_id")) {
      try {
        await fetch(GOOGLE_SHEET_WEBAPP_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(sheetData)
        });
      } catch (e) {}
    }

    // 3. Supabase DB Backup
    try {
      await supabase.from('lead_submissions').insert([{
        name: sheetData.name,
        email: sheetData.email,
        phone: sheetData.phone === 'Not provided' ? null : sheetData.phone,
        business_type: sheetData.business_type,
        team_size: teamSize,
        lead_volume: leadVolume,
        bottleneck: `${sheetData.bottleneck} | Tools: ${existingTools}`,
        existing_tools: existingTools,
        source: 'readiness_audit',
      }]);
    } catch (e) {}

    // 4. Local storage backup
    try {
      const existing = JSON.parse(localStorage.getItem('nexus_leads') || '[]');
      existing.unshift({ ...sheetData, createdAt: new Date().toISOString() });
      localStorage.setItem('nexus_leads', JSON.stringify(existing));
    } catch (storageErr) {}

    setLoading(false);
    setSubmitted(true);
  };

  const waMsg = encodeURIComponent(
    `Hi Pradeep, I requested an AI Readiness Review.\nName: ${fullName}\nBusiness: ${businessType}\nWebsite: ${website || 'None'}\nTeam Size: ${teamSize}\nBottleneck: ${bottleneck}`
  );

  if (submitted) {
    return (
      <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-8 text-center shadow-xl">
        <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
        <h3 className="text-xl font-bold text-white">Readiness Review Requested!</h3>
        <p className="text-slate-300 text-sm mt-1 mb-5">
          Thank you, <span className="text-cyan-400 font-semibold">{fullName}</span>. Your details have been submitted.
        </p>
        <a
          href={`https://wa.me/919166516942?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm rounded-xl transition-all"
        >
          <MessageSquare className="w-4 h-4" /> Connect with Founder on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-card border border-border rounded-2xl p-6 md:p-8">
      {errorMsg && (
        <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-400 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-muted-foreground mb-1">Full Name *</label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g. Rahul Sharma"
            className="w-full px-3.5 py-2.5 bg-background border border-border rounded-xl text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-muted-foreground mb-1">Work Email *</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="rahul@company.com"
            className="w-full px-3.5 py-2.5 bg-background border border-border rounded-xl text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-muted-foreground mb-1">Phone Number *</label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98765 43210"
            className="w-full px-3.5 py-2.5 bg-background border border-border rounded-xl text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-muted-foreground mb-1">Business Type</label>
          <input
            type="text"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            placeholder="e.g. Clinic, Real Estate, E-Commerce"
            className="w-full px-3.5 py-2.5 bg-background border border-border rounded-xl text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-muted-foreground mb-1 flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-primary" /> Website URL (Optional)
        </label>
        <input
          type="url"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="https://yourcompany.com"
          className="w-full px-3.5 py-2.5 bg-background border border-border rounded-xl text-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-muted-foreground mb-1">Team Size</label>
          <select
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-background border border-border rounded-xl text-sm"
          >
            <option value="1–5">1–5 members</option>
            <option value="6–20">6–20 members</option>
            <option value="21–50">21–50 members</option>
            <option value="51+">51+ members</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-muted-foreground mb-1">Monthly Lead Volume</label>
          <select
            value={leadVolume}
            onChange={(e) => setLeadVolume(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-background border border-border rounded-xl text-sm"
          >
            <option value="Under 50">Under 50</option>
            <option value="50–200">50–200</option>
            <option value="201–1,000">201–1,000</option>
            <option value="1,000+">1,000+</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-muted-foreground mb-1">Biggest Bottleneck</label>
        <input
          type="text"
          value={bottleneck}
          onChange={(e) => setBottleneck(e.target.value)}
          placeholder="e.g. Missing after-hours calls, slow WhatsApp replies"
          className="w-full px-3.5 py-2.5 bg-background border border-border rounded-xl text-sm"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-muted-foreground mb-1">Existing Tools</label>
        <input
          type="text"
          value={existingTools}
          onChange={(e) => setExistingTools(e.target.value)}
          placeholder="e.g. WhatsApp Business, Sheets, Practo"
          className="w-full px-3.5 py-2.5 bg-background border border-border rounded-xl text-sm"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Get My Readiness Review <ArrowRight className="w-4 h-4" /></>}
      </button>
    </form>
  );
};