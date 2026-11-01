import React from 'react'
import { Star, CheckCircle, ShieldCheck } from 'lucide-react'

const REVIEWS = [
  {
    name: 'Dr. Sameer Saxena',
    role: 'Managing Director',
    business: 'Apex Dental Care, Jaipur',
    rating: 5,
    date: 'Verified 3 weeks ago',
    comment: 'We used to lose 15-20 patient calls every weekend. Nexus AI deployed their voice receptionist within 4 days. Now every after-hours call is booked directly into our calendar with instant WhatsApp slips.',
    source: 'Google Verified'
  },
  {
    name: 'Vikramaditya Rathore',
    role: 'Principal Broker',
    business: 'Rathore Realty & Builders',
    rating: 5,
    date: 'Verified 1 month ago',
    comment: 'The speed-to-lead automation is unbelievable. As soon as a lead arrives from our portal ads, the AI calls them within 45 seconds, qualifies budget, and sends our WhatsApp brochure. Closed 2 luxury units last month alone.',
    source: 'Trustpilot'
  },
  {
    name: 'Ananya Deshmukh',
    role: 'Owner & Head Stylist',
    business: 'Glow Luxury Studio',
    rating: 5,
    date: 'Verified 2 weeks ago',
    comment: 'My stylists no longer have to stop cutting hair to pick up phone calls. The AI voice assistant handles appointments smoothly and our no-shows dropped by over 80% with automated reminders.',
    source: 'Google Verified'
  }
]

export function TrustReviews() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      {/* TrustIndex Header Badge */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 mb-8 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-extrabold text-lg">
            4.9
          </div>
          <div>
            <div className="flex items-center gap-1 text-amber-400 mb-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs text-slate-300 font-semibold">
              EXCELLENT RATING <span className="text-slate-500 font-normal">| Based on 28+ verified client deployments</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
          <ShieldCheck className="w-4 h-4" /> TrustIndex Verified Partner
        </div>
      </div>

      {/* Review Cards Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {REVIEWS.map((rev, idx) => (
          <div
            key={idx}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/30 transition shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] text-slate-500 font-medium">{rev.date}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4 italic">
                "{rev.comment}"
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-white flex items-center gap-1">
                  {rev.name} <CheckCircle className="w-3 h-3 text-cyan-400 inline" />
                </h4>
                <p className="text-[11px] text-slate-400">{rev.role}, {rev.business}</p>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                {rev.source}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default TrustReviews