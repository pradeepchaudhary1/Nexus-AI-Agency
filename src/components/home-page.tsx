import React from 'react'
import { Link } from '@tanstack/react-router'
import { Sparkles, PhoneCall, ArrowRight, ShieldCheck, CheckCircle2, Bot, Database, Zap, Cpu } from 'lucide-react'
import { LeadForm } from '@/components/lead-forms'
import { TrustReviews } from '@/components/trust-reviews'
import { ScannerAudit } from '@/components/scanner-audit'

export function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500 selection:text-black">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6">
          <Sparkles className="w-4 h-4" /> Enterprise Autonomous Workforce & Voice AI
        </div>
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
          Deploy AI Employees That <br className="hidden md:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
            Never Sleep, Miss a Call, or Lose a Lead
          </span>
        </h1>
        <p className="text-base md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Nexus AI Agency builds 24/7 Voice Calling Receptionists, AEO/GEO Search Optimization, and WhatsApp CRM automations for clinics, real estate, and growing businesses worldwide.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#scanner"
            className="px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-sm text-white flex items-center gap-2 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-105 transition"
          >
            <Zap className="w-4 h-4" /> Audit Website Live
          </a>
          <Link
            to="/real-estate"
            className="px-7 py-4 rounded-xl bg-slate-900 border border-slate-800 font-semibold text-sm text-slate-200 hover:bg-slate-800 transition"
          >
            Explore Real Estate AI
          </Link>
          <Link
            to="/clinics"
            className="px-7 py-4 rounded-xl bg-slate-900 border border-slate-800 font-semibold text-sm text-slate-200 hover:bg-slate-800 transition"
          >
            Healthcare & Clinic AI
          </Link>
        </div>
      </section>

      {/* 1. Real-Time High-Performance Website & AEO Scanner */}
      <ScannerAudit />

      {/* 2. TrustIndex Verified 4.9/5 Reviews Section */}
      <TrustReviews />

      {/* 3. Central Lead Capture & Requirement Form */}
      <section id="contact" className="py-20 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">Get Your Custom AI Blueprint</h2>
        <p className="text-xs md:text-sm text-slate-400 mb-8 max-w-md mx-auto">
          Select required automations and our architecture team will deliver a configured deployment blueprint within 24 hours.
        </p>
        <LeadForm />
      </section>
    </div>
  )
}
export default HomePage