import { Star, Quote, TrendingUp, Building2, CheckCircle } from "lucide-react";

const caseStudies = [
  {
    quote: "AivonixFlow completely changed our operational reality. We went from 3 days of manual customer onboarding to literally 4 minutes. Our CSAT jumped to 99% immediately.",
    author: "Sarah Chen",
    role: "VP of Operations",
    company: "PulseScale (Series B SaaS)",
    metric: "99.2% Faster Onboarding",
    tag: "AI Automation",
    stats: "3 Days ➔ 4 Minutes",
  },
  {
    quote: "Our sales reps used to waste 3 hours every day manually logging HubSpot tasks and copying lead information from LinkedIn. Now it's 100% autonomous, and pipeline velocity is up 40%.",
    author: "Marcus Vance",
    role: "Chief Revenue Officer",
    company: "ApexLogix Enterprise",
    metric: "40% Higher Pipeline Velocity",
    tag: "CRM Automation",
    stats: "+15 hrs/wk saved per rep",
  },
  {
    quote: "We needed bespoke cloud middleware to synchronize our ERP and billing across 12 countries. AivonixFlow shipped a bulletproof solution in 3 weeks that handles millions without a hiccup.",
    author: "Elena Rostova",
    role: "Director of Engineering",
    company: "HyperCloud Infrastructure",
    metric: "$1.8M Recaptured Annually",
    tag: "Custom Software",
    stats: "99.99% Uptime Maintained",
  },
];

export default function TestimonialsSection() {
  return (
    <div className="w-full max-w-7xl mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((cs) => (
          <div
            key={cs.author}
            className="glass-card-interactive rounded-3xl p-7 border border-white/10 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top Tag & Metric Badge */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-brand-blue/15 text-brand-cyan border border-brand-blue/30">
                  {cs.tag}
                </span>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

              {/* Highlight Metric Pill */}
              <div className="mb-4 p-3 rounded-xl bg-brand-surface/80 border border-white/5 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Verified Impact:</span>
                <span className="text-xs font-bold text-emerald-400 font-mono">
                  {cs.stats}
                </span>
              </div>

              {/* Quote */}
              <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                "{cs.quote}"
              </p>
            </div>

            {/* Author */}
            <div className="pt-4 border-t border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-gradient flex items-center justify-center text-white font-bold text-sm shadow-md">
                {cs.author[0]}
              </div>
              <div>
                <div className="text-sm font-bold text-white font-heading">
                  {cs.author}
                </div>
                <div className="text-xs text-slate-400">
                  {cs.role} • <span className="text-slate-300">{cs.company}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
