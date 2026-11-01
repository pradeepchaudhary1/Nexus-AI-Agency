import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { CheckCircle2, Copy, Check, Code, Sparkles, Globe, FileText, PhoneCall, QrCode, CreditCard, Clock, CheckSquare, Shield, Activity, Zap } from 'lucide-react'

export const Route = createFileRoute('/audit-report')({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      url: (search.url as string) || 'example.com',
    }
  },
  component: SolutionEnginePage,
})

function SolutionEnginePage() {
  const { url } = Route.useSearch()
  const cleanDomain = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0]
  const brandName = cleanDomain.split('.')[0].toUpperCase()

  const isClinic = cleanDomain.includes('singh') || cleanDomain.includes('clinic') || cleanDomain.includes('dental') || cleanDomain.includes('doctor')
  const isRealEstate = cleanDomain.includes('estate') || cleanDomain.includes('realty') || cleanDomain.includes('property')

  const [copiedSchema, setCopiedSchema] = useState(false)
  const [copiedLlms, setCopiedLlms] = useState(false)
  const [copiedCopy, setCopiedCopy] = useState(false)
  const [copiedUpi, setCopiedUpi] = useState(false)
  const [paymentTab, setPaymentTab] = useState<'upi' | 'razorpay' | 'stripe'>('upi')

  // Dynamic Schema Generation
  const schemaType = isClinic ? 'MedicalBusiness' : isRealEstate ? 'RealEstateAgent' : 'LocalBusiness'
  const generatedSchema = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "${schemaType}",
      "@id": "https://${cleanDomain}/#organization",
      "name": "${brandName}",
      "url": "https://${cleanDomain}/",
      "telephone": "+91-8003469293",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Karauli",
        "addressRegion": "RJ",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "19:00"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://${cleanDomain}/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How to book an appointment with ${brandName}?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Inquiries are attended 24/7 with instant automated scheduling and WhatsApp confirmation."
          }
        }
      ]
    }
  ]
}`

  // Dynamic /llms.txt Generation
  const generatedLlmsTxt = `# ${brandName}
> Official Machine-Readable Knowledge Map for AI Search Engines.

## Core Services & Solutions
- 24/7 Autonomous Customer Intake & Verified Booking.
- Real-Time WhatsApp Confirmation & Live CRM Record.

## Canonical Verification
- Website: https://${cleanDomain}/
- Entity Schema: https://${cleanDomain}/#organization
- Crawler Policy: GPTBot, PerplexityBot, ClaudeBot (Allow: /)
`

  // Conversion Copywriting
  const heroHeadline = isClinic
    ? `"Never Miss a Patient Call During Consultation or After-Hours — 24/7 AI Receptionist"`
    : `"Never Lose Another Customer to a Busy Tone — 24/7 Instant Booking & Speed-to-Lead"`
  
  const subHeadline = isClinic
    ? `"Automate clinic inquiries, answer consultation FAQs in under 800ms, and deliver instant WhatsApp appointment slips."`
    : `"Capture and qualify high-intent inquiries instantly with voice AI and automated CRM sync."`

  const copyToClipboard = (text: string, type: 'schema' | 'llms' | 'copy') => {
    navigator.clipboard.writeText(text)
    if (type === 'schema') {
      setCopiedSchema(true)
      setTimeout(() => setCopiedSchema(false), 2000)
    } else if (type === 'llms') {
      setCopiedLlms(true)
      setTimeout(() => setCopiedLlms(false), 2000)
    } else {
      setCopiedCopy(true)
      setTimeout(() => setCopiedCopy(false), 2000)
    }
  }

  const copyUpiId = () => {
    navigator.clipboard.writeText('8003469293@ybl')
    setCopiedUpi(true)
    setTimeout(() => setCopiedUpi(false), 2000)
  }

  const upiQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent('upi://pay?pa=8003469293@ybl&pn=NexusAIAgency&am=999&cu=INR&tn=Nexus%20AI%20Deployment%20Audit')}`

  return (
    <div className="min-h-screen bg-slate-950 text-white py-16 px-4 selection:bg-cyan-500 selection:text-black">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> Autonomous AI Solution & Auto-Fix Engine
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            AI Auto-Fix & Solutions for <span className="text-cyan-400">{cleanDomain}</span>
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Ye system sirf issues nahi batata, balki aapki website ke liye ready-made Schema code, high-converting copy, /llms.txt, aur AI prompt ranking suggestions auto-generate karke deta hai.
          </p>
        </div>

        {/* Solution 1: Auto-Generated Schema.org */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Code className="w-5 h-5 text-emerald-400" /> Solution 1: Auto-Generated Schema.org JSON-LD
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Aapko schema par dimaag lagane ki zaroorat nahi hai. Aapke domain ke hisaab se <b>{schemaType}</b> schema auto-generate ho gaya hai:
              </p>
            </div>
            <button
              onClick={() => copyToClipboard(generatedSchema, 'schema')}
              className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
            >
              {copiedSchema ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copiedSchema ? 'Copied Schema Code!' : 'Copy Schema Code'}
            </button>
          </div>
          <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-300 overflow-x-auto max-h-56">
            {generatedSchema}
          </pre>
        </div>

        {/* Solution 2: High-Converting AI Copywriting */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" /> Solution 2: High-Converting AI Copywriting Engine
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Aapki website ke visitors ko paying clients mein convert karne ke liye auto-generated high-converting copy:
              </p>
            </div>
            <button
              onClick={() => copyToClipboard(`${heroHeadline}\n${subHeadline}`, 'copy')}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
            >
              {copiedCopy ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copiedCopy ? 'Copied Copy!' : 'Copy Rewritten Copy'}
            </button>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">Recommended Hero Headline</span>
              <p className="text-sm font-bold text-white">{heroHeadline}</p>
              <p className="text-[11px] text-slate-400">{subHeadline}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">3 Irresistible Value Bullets</span>
              <ul className="space-y-1 text-slate-300">
                <li>• <b>Instant Response:</b> Responds in under 800ms when your front desk is busy or closed.</li>
                <li>• <b>Direct WhatsApp Slips:</b> Delivers booking confirmations, floor plans or tokens automatically.</li>
                <li>• <b>Zero Data Loss:</b> Real-time synchronization directly into Google Sheets CRM.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Solution 3: GEO & /llms.txt AI Bot Permission */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-cyan-400" /> Solution 3: Automated GEO & /llms.txt Permissions
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                ChatGPT, Perplexity aur Claude crawler bots ko website par direct access dene ke liye ye file root par lagayein:
              </p>
            </div>
            <button
              onClick={() => copyToClipboard(generatedLlmsTxt, 'llms')}
              className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
            >
              {copiedLlms ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copiedLlms ? 'Copied /llms.txt' : 'Copy /llms.txt'}
            </button>
          </div>
          <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-emerald-300 overflow-x-auto max-h-44">
            {generatedLlmsTxt}
          </pre>
        </div>

        {/* Solution 4: Top AI Search Prompts to Rank In */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" /> Solution 4: Top 5 AI Prompts (ChatGPT & Perplexity) to Rank In
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <p className="font-semibold text-cyan-300">1. "Best {brandName} in my city with 24/7 appointment booking"</p>
              <p className="text-[11px] text-slate-400 mt-1">Action: Deploy geo-targeted LocalBusiness schema with verified opening hours.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <p className="font-semibold text-cyan-300">2. "How much does {brandName} consultation or services cost?"</p>
              <p className="text-[11px] text-slate-400 mt-1">Action: Add structured priceRange and FAQ schema directly into homepage source code.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <p className="font-semibold text-cyan-300">3. "Top rated verified alternatives in Rajasthan / India"</p>
              <p className="text-[11px] text-slate-400 mt-1">Action: Publish comparison table showcasing speed & availability advantages.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <p className="font-semibold text-cyan-300">4. "How to book an instant slot with {brandName} on WhatsApp"</p>
              <p className="text-[11px] text-slate-400 mt-1">Action: Enable official WhatsApp Cloud API click-to-chat webhook.</p>
            </div>
          </div>
        </div>

        {/* Solution 5: Site Hygiene & Legal Verification */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-indigo-400" /> Solution 5: Site Hygiene & Legal Verification
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2.5">
              <CheckSquare className="w-4 h-4 text-emerald-400 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Privacy Policy & Terms of Service</p>
                <p className="text-slate-400 text-[11px]">Meta Ads aur Google crawlers ke compliance ke liye footer mein legal disclaimers mandatory hain.</p>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2.5">
              <CheckSquare className="w-4 h-4 text-emerald-400 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Title Tag & Meta Description Health</p>
                <p className="text-slate-400 text-[11px]">Sub-pages par unique H1 titles aur CTR-optimized meta descriptions honi chahiye taaki duplicate content penalty na lage.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Gateway Integrated Payment System */}
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-cyan-500/40 rounded-3xl p-6 md:p-10 shadow-[0_0_60px_rgba(6,182,212,0.15)] text-center space-y-6">
          <span className="px-3.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            Turnkey Deployment & Fix Activation
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Activate All 5 AI Solutions for Your Website
          </h2>
          <p className="text-xs md:text-sm text-slate-400 max-w-lg mx-auto">
            Aapko ye code khud paste karne ki zaroorat nahi hai. Hum aapke domain par Auto-Schema, /llms.txt, PageSpeed Core Web Vitals, aur 24/7 AI Voice Receptionist completely turnkey configure karke denge.
          </p>

          {/* Pricing Tag */}
          <div className="flex items-center justify-center gap-3">
            <span className="text-slate-500 line-through text-lg font-bold">₹4,999 ($79)</span>
            <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              ₹999 <span className="text-sm text-slate-400 font-normal">/ $19 USD</span>
            </span>
            <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold px-2.5 py-1 rounded-full">
              80% OFF Launch
            </span>
          </div>

          {/* Payment Tabs: UPI | Razorpay | Stripe */}
          <div className="max-w-md mx-auto">
            <div className="flex p-1 rounded-xl bg-slate-950 border border-slate-800 mb-6 text-xs font-bold">
              <button
                onClick={() => setPaymentTab('upi')}
                className={`flex-1 py-2 rounded-lg transition cursor-pointer flex items-center justify-center gap-1.5 ${paymentTab === 'upi' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
              >
                <QrCode className="w-3.5 h-3.5" /> UPI / QR (India)
              </button>
              <button
                onClick={() => setPaymentTab('razorpay')}
                className={`flex-1 py-2 rounded-lg transition cursor-pointer flex items-center justify-center gap-1.5 ${paymentTab === 'razorpay' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
              >
                <CreditCard className="w-3.5 h-3.5" /> Razorpay
              </button>
              <button
                onClick={() => setPaymentTab('stripe')}
                className={`flex-1 py-2 rounded-lg transition cursor-pointer flex items-center justify-center gap-1.5 ${paymentTab === 'stripe' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
              >
                <Clock className="w-3.5 h-3.5" /> Stripe (USD)
              </button>
            </div>

            {/* Tab 1: UPI / QR Code */}
            {paymentTab === 'upi' && (
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <p className="text-xs font-semibold text-slate-300">Scan QR Code via PhonePe / GPay / Paytm</p>
                <div className="w-44 h-44 mx-auto p-2 bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <img src={upiQrUrl} alt="UPI Payment QR Code" className="w-full h-full object-contain" />
                </div>
                <div className="flex items-center justify-center gap-2 pt-1">
                  <span className="text-xs text-slate-400">UPI ID:</span>
                  <code className="text-xs bg-slate-900 border border-slate-800 px-2 py-1 rounded text-cyan-400 font-mono">
                    8003469293@ybl
                  </code>
                  <button
                    onClick={copyUpiId}
                    className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 cursor-pointer"
                    title="Copy UPI ID"
                  >
                    {copiedUpi ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <p className="text-[11px] text-slate-500">Pay ₹999 and share screenshot on WhatsApp for instant 3-day activation.</p>
              </div>
            )}

            {/* Tab 2: Razorpay */}
            {paymentTab === 'razorpay' && (
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <CreditCard className="w-10 h-10 text-cyan-400 mx-auto" />
                <h4 className="text-sm font-bold text-white">Razorpay Secure Online Checkout</h4>
                <p className="text-xs text-slate-400">Pay securely via Credit Cards, Debit Cards, NetBanking, or Digital Wallets.</p>
                <a
                  href={`https://wa.me/918003469293?text=${encodeURIComponent(`Hi Pradeep, I want to pay ₹999 via Razorpay link for ${cleanDomain} AI setup.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-xs text-white flex items-center justify-center gap-2 transition"
                >
                  Pay ₹999 via Razorpay Gateway &rarr;
                </a>
              </div>
            )}

            {/* Tab 3: Stripe International */}
            {paymentTab === 'stripe' && (
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-bold">
                  <Clock className="w-3.5 h-3.5" /> Coming Soon / Account In Setup
                </div>
                <h4 className="text-sm font-bold text-white">Stripe USD Card Gateway ($19 USD)</h4>
                <p className="text-xs text-slate-400">Stripe international checkout is undergoing merchant onboarding. For international credit card payments, connect via WhatsApp for an instant payment invoice link.</p>
                <a
                  href={`https://wa.me/918003469293?text=${encodeURIComponent(`Hi Pradeep, I want to pay $19 USD for ${cleanDomain} AI setup.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-xs text-white flex items-center justify-center gap-2 transition"
                >
                  <PhoneCall className="w-3.5 h-3.5" /> Request $19 USD Invoice on WhatsApp &rarr;
                </a>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-slate-900 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/918003469293?text=${encodeURIComponent(`Hi Pradeep, maine ${cleanDomain} ka Solution Engine report dekha hai aur ise deploy karwana chahta hoon.`)}`}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-xs text-white flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition"
            >
              <PhoneCall className="w-4 h-4" /> Message Founder Pradeep Directly on WhatsApp &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SolutionEnginePage