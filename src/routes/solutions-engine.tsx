import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { CheckCircle2, Download, Code, Sparkles, Globe, FileText, PhoneCall, QrCode, CreditCard, Clock, CheckSquare, Shield, Lock, Unlock, X, ArrowDown, RefreshCw } from 'lucide-react'

export const Route = createFileRoute('/solutions-engine')({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      url: (search.url as string) || 'example.com',
    }
  },
  component: SolutionEnginePage,
})

function SolutionEnginePage() {
  const { url } = Route.useSearch()
  
  // Clean URL parsing
  let cleanDomain = url.trim().toLowerCase()
  cleanDomain = cleanDomain.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0].split('?')[0].split('#')[0]

  const [loadingAi, setLoadingAi] = useState(true)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [pin, setPin] = useState('')
  const [showPayModal, setShowPayModal] = useState(false)
  const [paymentTab, setPaymentTab] = useState<'upi' | 'razorpay' | 'stripe'>('upi')
  const [copiedUpi, setCopiedUpi] = useState(false)

  const RAZORPAY_URL = 'https://razorpay.me/@nexusaiagency'
  const BHIM_UPI_ID = '8003469293@upi'

  // AI-Engineered Niche Architecture State
  const [aiData, setAiData] = useState({
    businessName: cleanDomain.split('.')[0].toUpperCase(),
    industry: 'Business & Professional Services',
    schemaType: 'LocalBusiness',
    schemaJson: '',
    heroHeadline: '',
    subHeadline: '',
    valueBullets: [] as string[],
    llmsTxt: '',
    prompts: [] as string[],
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const p = new URLSearchParams(window.location.search)
      if (p.get('admin') === 'true') setIsAdmin(true)
      if (p.get('paid') === 'true') setIsUnlocked(true)
    }

    const runArchitectureAnalysis = async () => {
      setLoadingAi(true)

      // Dynamic Niche Classifier based on real domain characteristics
      const isCoffeeOrFood = cleanDomain.includes('coffee') || cleanDomain.includes('cafe') || cleanDomain.includes('bakery') || cleanDomain.includes('restaurant')
      const isClinic = cleanDomain.includes('medical') || cleanDomain.includes('clinic') || cleanDomain.includes('doctor') || cleanDomain.includes('health') || cleanDomain.includes('dental')
      const isRealEstate = cleanDomain.includes('realty') || cleanDomain.includes('estate') || cleanDomain.includes('property') || cleanDomain.includes('homes')
      const isDomainTool = cleanDomain.includes('expireddomains') || cleanDomain.includes('domains')
      const isNexus = cleanDomain.includes('nexusaiagency')

      let detectedIndustry = 'Enterprise & Professional Services'
      let detectedSchema = 'LocalBusiness'
      let businessTitle = cleanDomain.split('.')[0].toUpperCase()

      let headline = 'Capture Every High-Intent Customer Inquiry 24/7'
      let subhead = 'Autonomous voice receptionists, speed-to-lead qualification, and instant CRM synchronization.'

      if (isCoffeeOrFood) {
        detectedIndustry = 'Specialty Coffee Roastery & Cafe'
        detectedSchema = 'CafeOrCoffeeShop'
        businessTitle = cleanDomain.includes('curious') ? 'Curious Life Coffee Roasters' : businessTitle
        headline = 'Never Miss an Online Bean Order or Table Reservation'
        subhead = 'Automate customer phone queries, bean subscription inquiries, and WhatsApp order tracking.'
      } else if (isClinic) {
        detectedIndustry = 'Healthcare & Medical Clinic'
        detectedSchema = 'MedicalClinic'
        businessTitle = cleanDomain.includes('capital') ? 'Capital Medical Clinic' : businessTitle
        headline = 'Never Miss an After-Hours Patient Call — 24/7 AI Medical Receptionist'
        subhead = 'Attends patient appointment inquiries in under 800ms, manages doctor schedules, and delivers instant WhatsApp slips.'
      } else if (isRealEstate) {
        detectedIndustry = 'Real Estate Development & Brokerage'
        detectedSchema = 'RealEstateAgent'
        headline = 'Never Lose Another Property Buyer to a Busy Tone'
        subhead = 'Calls incoming property leads in under 60 seconds, qualifies budget & location, and delivers instant WhatsApp brochures.'
      } else if (isDomainTool) {
        detectedIndustry = 'Domain Marketplace & Digital Assets'
        detectedSchema = 'OnlineBusiness'
        headline = 'Automate Inquiries for Premium & Expiring Domains'
        subhead = 'Instant buyer qualification, automated escrow transfer FAQs, and 24/7 lead capture.'
      } else if (isNexus) {
        detectedIndustry = 'Autonomous AI Workforce & Voice Automation'
        detectedSchema = 'ProfessionalService'
        businessTitle = 'Nexus AI Agency'
        headline = 'Deploy AI Employees That Never Sleep, Miss a Call, or Lose a Lead'
        subhead = '24/7 Voice Calling Receptionists, AEO/GEO Search Optimization, and WhatsApp CRM automations.'
      }

      const schemaTemplate = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "${detectedSchema}",
      "@id": "https://${cleanDomain}/#organization",
      "name": "${businessTitle}",
      "url": "https://${cleanDomain}/",
      "telephone": "[Verified Business Telephone]",
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "20:00"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://${cleanDomain}/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How to contact or schedule with ${businessTitle}?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Inquiries are attended 24/7 with immediate verification and automated WhatsApp scheduling."
          }
        }
      ]
    }
  ]
}`

      const llmsTemplate = `# ${businessTitle}
> Official Machine-Readable Knowledge Map for AI Search Engines.

## Core Services & Solutions
- 24/7 Autonomous Customer Intake & Verified Booking.
- Real-Time WhatsApp Confirmation & Google Sheets CRM Record.

## Canonical Verification
- Website: https://${cleanDomain}/
- Entity Schema: https://${cleanDomain}/#organization
- Crawler Directives: GPTBot, PerplexityBot, ClaudeBot (Allow: /)
`

      setAiData({
        businessName: businessTitle,
        industry: detectedIndustry,
        schemaType: detectedSchema,
        schemaJson: schemaTemplate,
        heroHeadline: headline,
        subHeadline: subhead,
        valueBullets: [
          'Sub-Second Response Latency (<800ms) for zero customer drop-off',
          'Automated WhatsApp confirmations & location pin dispatch',
          'Live Google Sheets CRM synchronization with zero manual data entry'
        ],
        llmsTxt: llmsTemplate,
        prompts: [
          `"Best ${businessTitle} in my area with 24/7 customer support"`,
          `"How much does ${businessTitle} service or booking cost?"`,
          `"Top verified alternatives near me"`,
          `"How to book an instant slot with ${businessTitle} on WhatsApp"`
        ]
      })

      setLoadingAi(false)
    }

    runArchitectureAnalysis()
  }, [cleanDomain])

  // Real File Downloader
  const downloadFile = (content: string, filename: string) => {
    if (!isUnlocked) {
      setShowPayModal(true)
      return
    }
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
    const downloadUrl = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = downloadUrl
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(downloadUrl)
  }

  const copyUpiId = () => {
    navigator.clipboard.writeText(BHIM_UPI_ID)
    setCopiedUpi(true)
    setTimeout(() => setCopiedUpi(false), 2000)
  }

  const upiQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent('upi://pay?pa=8003469293@upi&pn=NexusAIAgency&am=999&cu=INR&tn=Nexus%20AI%20Deployment%20Audit')}`

  return (
    <div className="min-h-screen bg-slate-950 text-white py-16 px-4 selection:bg-cyan-500 selection:text-black">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Owner Admin Controller */}
        {isAdmin && (
          <div className="bg-amber-950/90 border border-amber-600/50 rounded-2xl p-3 text-xs flex items-center justify-between">
            <span className="font-bold text-amber-400 flex items-center gap-1.5">
              <Shield className="w-4 h-4" /> Owner Admin Access
            </span>
            {!isUnlocked ? (
              <div className="flex gap-2">
                <input
                  type="password"
                  placeholder="PIN"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  className="bg-black/80 px-2 py-1 rounded border border-amber-600 text-white w-20 text-xs"
                />
                <button
                  onClick={() => {
                    if (pin === '2026') setIsUnlocked(true)
                    else alert('Incorrect PIN')
                  }}
                  className="bg-amber-600 px-3 py-1 rounded font-bold text-black cursor-pointer"
                >
                  Unlock All Solutions
                </button>
              </div>
            ) : (
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <Unlock className="w-4 h-4" /> All Solutions & Files Unlocked (Admin Preview)
              </span>
            )}
          </div>
        )}

        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> Autonomous AI Solutions & Deployment Engine
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            Custom AI Solutions for <span className="text-cyan-400">{cleanDomain}</span>
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Identified Niche: <span className="text-cyan-300 font-semibold">{aiData.industry}</span>. Engineered deployable Schema.org markup, conversion copywriting, and /llms.txt AI search maps.
          </p>
        </div>

        {/* Loading Indicator */}
        {loadingAi && (
          <div className="p-8 text-center bg-slate-900/60 border border-slate-800 rounded-2xl space-y-3">
            <RefreshCw className="w-6 h-6 animate-spin text-cyan-400 mx-auto" />
            <p className="text-xs text-slate-300 font-semibold animate-pulse">
              Engineering tailored optimization assets for {cleanDomain}...
            </p>
          </div>
        )}

        {/* Solution 1: Auto-Generated Schema.org */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Code className="w-5 h-5 text-emerald-400" /> Solution 1: Custom Schema.org JSON-LD ({aiData.schemaType})
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Zero manual coding required. Fully structured rich-snippet JSON-LD built specifically for your domain:
              </p>
            </div>
            <button
              onClick={() => downloadFile(aiData.schemaJson, `${cleanDomain}-schema.json`)}
              className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
                isUnlocked ? 'bg-emerald-600 hover:bg-emerald-500 text-white' : 'bg-slate-800 text-slate-400 border border-slate-700'
              }`}
            >
              <Download className="w-4 h-4" />
              {isUnlocked ? 'Download Schema (.json)' : 'Download Schema (Locked)'}
            </button>
          </div>

          <div className="relative rounded-xl overflow-hidden">
            <pre className={`p-4 bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-300 overflow-x-auto max-h-56 ${!isUnlocked ? 'blur-[5px] select-none opacity-40' : ''}`}>
              {aiData.schemaJson}
            </pre>
            {!isUnlocked && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/40 backdrop-blur-[1px] p-4 text-center">
                <Lock className="w-7 h-7 text-amber-400 mb-1" />
                <p className="text-xs font-bold text-white">Custom {aiData.schemaType} Schema Locked</p>
                <p className="text-[11px] text-slate-400">Complete payment of ₹999 ($19) below to download verified code.</p>
              </div>
            )}
          </div>
        </div>

        {/* Solution 2: High-Converting AI Copywriting */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" /> Solution 2: High-Converting Conversion Copywriting
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Tailored hero headlines and value propositions engineered to convert visitors into paying clients:
              </p>
            </div>
            <button
              onClick={() => downloadFile(`${aiData.heroHeadline}\n\n${aiData.subHeadline}\n\nValue Bullets:\n${aiData.valueBullets.join('\n')}`, `${cleanDomain}-copywriting.txt`)}
              className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
                isUnlocked ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-slate-800 text-slate-400 border border-slate-700'
              }`}
            >
              <Download className="w-4 h-4" />
              {isUnlocked ? 'Download Copy (.txt)' : 'Download Copy (Locked)'}
            </button>
          </div>

          <div className="relative rounded-xl overflow-hidden">
            <div className={`space-y-3 text-xs ${!isUnlocked ? 'blur-[5px] select-none opacity-40' : ''}`}>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">Conversion Hero Headline</span>
                <p className="text-sm font-bold text-white">"{aiData.heroHeadline}"</p>
                <p className="text-[11px] text-slate-400">{aiData.subHeadline}</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">3 Irresistible Value Bullets</span>
                <ul className="space-y-1 text-slate-300">
                  {aiData.valueBullets.map((bullet, i) => (
                    <li key={i}>• {bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
            {!isUnlocked && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/40 backdrop-blur-[1px] p-4 text-center">
                <Lock className="w-7 h-7 text-amber-400 mb-1" />
                <p className="text-xs font-bold text-white">Full Copywriting Framework Locked</p>
                <p className="text-[11px] text-slate-400">Unlock benefit-driven hooks and high-converting CTA copy.</p>
              </div>
            )}
          </div>
        </div>

        {/* Solution 3: GEO & /llms.txt AI Bot Permission */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-cyan-400" /> Solution 3: Automated GEO & /llms.txt Knowledge Map
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Machine-readable directives enabling ChatGPT, Perplexity, and Claude crawler bots to cite your business:
              </p>
            </div>
            <button
              onClick={() => downloadFile(aiData.llmsTxt, 'llms.txt')}
              className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
                isUnlocked ? 'bg-cyan-600 hover:bg-cyan-500 text-white' : 'bg-slate-800 text-slate-400 border border-slate-700'
              }`}
            >
              <Download className="w-4 h-4" />
              {isUnlocked ? 'Download /llms.txt' : 'Download /llms.txt (Locked)'}
            </button>
          </div>

          <div className="relative rounded-xl overflow-hidden">
            <pre className={`p-4 bg-slate-950 border border-slate-800 text-[11px] font-mono text-emerald-300 overflow-x-auto max-h-44 ${!isUnlocked ? 'blur-[5px] select-none opacity-40' : ''}`}>
              {aiData.llmsTxt}
            </pre>
            {!isUnlocked && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/40 backdrop-blur-[1px] p-4 text-center">
                <Lock className="w-7 h-7 text-amber-400 mb-1" />
                <p className="text-xs font-bold text-white">/llms.txt Directive File Locked</p>
                <p className="text-[11px] text-slate-400">Unlock ready-to-upload markdown knowledge map.</p>
              </div>
            )}
          </div>
        </div>

        {/* Solution 4: Top AI Search Prompts */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" /> Solution 4: Top AI Prompts to Rank In (ChatGPT & Perplexity)
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 text-xs">
            {aiData.prompts.map((p, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <p className="font-semibold text-cyan-300">{i + 1}. {p}</p>
                <p className="text-[11px] text-slate-400 mt-1">Optimization Action: Add entity schema and verified question-answer blocks to your root page.</p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment & Unlock Section */}
        <div id="payment-section" className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-cyan-500/50 rounded-3xl p-6 md:p-10 shadow-[0_0_60px_rgba(6,182,212,0.2)] text-center space-y-6">
          <span className="px-3.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            Turnkey Deployment & Code Unlock
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Unlock All AI Solutions for {cleanDomain}
          </h2>
          <p className="text-xs md:text-sm text-slate-400 max-w-lg mx-auto">
            Zero technical complexity. We configure Auto-Schema, /llms.txt, Core Web Vitals speed optimization, and 24/7 AI Voice Receptionist completely turnkey on your domain.
          </p>

          <div className="flex items-center justify-center gap-3">
            <span className="text-slate-500 line-through text-lg font-bold">₹4,999 ($79)</span>
            <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              ₹999 <span className="text-sm text-slate-400 font-normal">/ $19 USD</span>
            </span>
            <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold px-2.5 py-1 rounded-full">
              80% OFF Launch
            </span>
          </div>

          {/* Payment Tabs: BHIM UPI | Razorpay | Stripe */}
          <div className="max-w-md mx-auto">
            <div className="flex p-1 rounded-xl bg-slate-950 border border-slate-800 mb-6 text-xs font-bold">
              <button
                onClick={() => setPaymentTab('upi')}
                className={`flex-1 py-2 rounded-lg transition cursor-pointer flex items-center justify-center gap-1.5 ${paymentTab === 'upi' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
              >
                <QrCode className="w-3.5 h-3.5" /> BHIM UPI (India)
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

            {/* Tab 1: BHIM UPI / QR Code */}
            {paymentTab === 'upi' && (
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <p className="text-xs font-semibold text-slate-300">Scan QR Code via PhonePe / GPay / Paytm / BHIM</p>
                <div className="w-44 h-44 mx-auto p-2 bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <img src={upiQrUrl} alt="UPI Payment QR Code" className="w-full h-full object-contain" />
                </div>
                <div className="flex items-center justify-center gap-2 pt-1">
                  <span className="text-xs text-slate-400">BHIM UPI:</span>
                  <code className="text-xs bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-cyan-400 font-mono">
                    {BHIM_UPI_ID}
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

            {/* Tab 2: Razorpay Official User Link */}
            {paymentTab === 'razorpay' && (
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <CreditCard className="w-10 h-10 text-cyan-400 mx-auto" />
                <h4 className="text-sm font-bold text-white">Razorpay Secure Checkout</h4>
                <p className="text-xs text-slate-400">Pay securely via Credit Cards, Debit Cards, NetBanking, or Digital Wallets.</p>
                <a
                  href={RAZORPAY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-xs text-white flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  Pay ₹999 via Razorpay Portal &rarr;
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
              href={`https://wa.me/918003469293?text=${encodeURIComponent(`Hi Pradeep, I reviewed the AI Solution Engine for ${cleanDomain} and want to activate the ₹999 deployment.`)}`}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-xs text-white flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" /> Message Founder Pradeep Directly on WhatsApp &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Paywall Lock Modal (Pops up when clicking locked download) */}
      {showPayModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-cyan-500/50 rounded-3xl max-w-md w-full p-6 text-center space-y-4 shadow-2xl relative">
            <button
              onClick={() => setShowPayModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
              <Lock className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-white">Unlock Deployment Assets</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              These custom AI solutions and Schema files are protected. Complete the ₹999 ($19) payment to unlock instant file downloads and full 3-day turnkey setup.
            </p>

            <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2 text-xs">
              <p className="text-cyan-300 font-bold">BHIM UPI: <span className="font-mono text-white">{BHIM_UPI_ID}</span></p>
              <p className="text-slate-400">Or pay via official Razorpay gateway:</p>
            </div>

            <div className="space-y-2 pt-2">
              <a
                href={RAZORPAY_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-xs text-white flex items-center justify-center gap-2 transition cursor-pointer"
              >
                Pay ₹999 via Razorpay &rarr;
              </a>
              <button
                onClick={() => {
                  setShowPayModal(false)
                  const el = document.getElementById('payment-section')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 font-semibold text-xs text-slate-300 cursor-pointer"
              >
                Scan UPI QR Code Instead
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default SolutionEnginePage