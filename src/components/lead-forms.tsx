import React, { useState } from 'react';
import { supabase } from '@/integrations/client';
import { CheckCircle2, ArrowRight, MessageSquare, Loader2, AlertCircle, Globe } from 'lucide-react';

const TARGET_EMAIL = "thenexusaiagency@gmail.com";
// Apni Google Apps Script Web App URL yahan daalein:
const GOOGLE_SHEET_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbwy9zgG8krLDHRJpD7UVmHGbGObvwxNMkhKavWoSVCHVTgd1QIXGFQ8AM0DhUK1UDs/exec"; 

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

    // Exact fields matching your Google Sheet CRM headers
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
      notes: `Submitted full readiness audit. Team size ${teamSize}, Monthly leads ${leadVolume}.`,
      _subject: `⚡ New Readiness Review: ${fullName.trim()} (${businessType})`,
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

    // 2. Direct to Google Sheets CRM (Mapped to Exact Columns)
    if (GOOGLE_SHEET_WEBAPP_URL && !GOOGLE_SHEET_WEBAPP_URL.includes("placeholder")) {
      try {
        await fetch(GOOGLE_SHEET_WEBAPP_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(sheetData)
        });
      } catch (e) {}
    }

    // 3. Supabase Database Backup
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
          Thank you, <span className="text-cyan-400 font-semibold">{fullName}</span>. Details have been logged in our system.
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