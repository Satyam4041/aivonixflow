import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  LineChart, 
  Search, 
  Layers,
  Lock,
  AlertCircle
} from "lucide-react";
import { sanitizeInput, isValidEmail, checkRateLimit, isSpamBot } from "../utils/security";

export default function FreeAuditPage() {
  const [submitted, setSubmitted] = useState(false);
  const [securityError, setSecurityError] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    websiteUrl: "",
    businessType: "",
    biggestChallenge: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSecurityError("");

    // 1. Bot Honeypot Defense
    if (isSpamBot(honeypot)) {
      setSubmitted(true);
      return;
    }

    // 2. Client-Side Rate Limiter
    const rateCheck = checkRateLimit("audit_form");
    if (!rateCheck.allowed) {
      setSecurityError(rateCheck.error);
      return;
    }

    // 3. Sanitization & Validation
    const cleanName = sanitizeInput(formData.fullName);
    const cleanEmail = formData.workEmail.trim();
    const cleanUrl = sanitizeInput(formData.websiteUrl);
    const cleanType = sanitizeInput(formData.businessType);
    const cleanChallenge = sanitizeInput(formData.biggestChallenge);

    if (!cleanName || cleanName.length < 2) {
      setSecurityError("Please enter a valid full name.");
      return;
    }

    if (!isValidEmail(cleanEmail)) {
      setSecurityError("Please enter a valid work email address.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Top Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-white/10 text-xs font-semibold text-brand-cyan mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Complimentary Technical Evaluation</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-4">
          Get a Free AI & <span className="text-gradient">Automation Audit</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-4">
          We analyze your business and identify opportunities to automate processes, improve efficiency, and scale faster.
        </p>

        {/* Value Line Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-mono font-bold">
          <span>Worth $100 — Free for a limited time</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: What You'll Get */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card rounded-3xl p-8 border border-white/10 space-y-6">
            <h2 className="text-xl font-bold text-white font-heading">
              What You’ll Get:
            </h2>

            <div className="space-y-4">
              {[
                {
                  title: "Automation opportunities tailored to your business",
                  desc: "Clear mapping of manual tasks where custom AI and scripts will save 15+ hours weekly.",
                },
                {
                  title: "Website performance insights",
                  desc: "Speed, Core Web Vitals, and conversion leaks holding back your digital presence.",
                },
                {
                  title: "CRM and workflow improvement suggestions",
                  desc: "Direct guidance on eliminating duplicate data entry and lead drop-offs.",
                },
                {
                  title: "Actionable growth recommendations",
                  desc: "A pragmatic technical roadmap you can execute immediately.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center text-brand-cyan shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/10 bg-brand-surface/40 flex items-center gap-3.5">
            <ShieldCheck className="w-6 h-6 text-brand-cyan shrink-0" />
            <div className="text-xs text-slate-300 leading-relaxed">
              Confidentiality guaranteed. All systems and architecture evaluations are protected by our strict privacy policy.
            </div>
          </div>
        </div>

        {/* Right Column: The Audit Form */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gradient opacity-10 blur-3xl pointer-events-none rounded-full"></div>

            {submitted ? (
              <div className="text-center py-16 space-y-5 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30 shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                  Your request has been received.
                </h2>
                <p className="text-slate-300 max-w-md mx-auto text-sm sm:text-base">
                  We’ll review your business and get back to you within 24 hours. For immediate inquiries, email <a href="mailto:info@aivonixflow.com" className="text-brand-cyan underline">info@aivonixflow.com</a>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl glass-pill text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    Submit another audit request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                {/* Honeypot Anti-Bot Field */}
                <div className="opacity-0 absolute -z-50 w-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
                  <label htmlFor="audit_website_honeypot">Leave blank</label>
                  <input
                    id="audit_website_honeypot"
                    type="text"
                    name="audit_website_honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                {/* Security Error Alert */}
                {securityError && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm animate-in fade-in duration-200">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{securityError}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Full Name <span className="text-brand-cyan">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-brand-darker/70 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Work Email <span className="text-brand-cyan">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@yourcompany.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-brand-darker/70 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue transition-colors text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Website URL <span className="text-brand-cyan">*</span>
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="https://yourcompany.com"
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-brand-darker/70 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Business Type <span className="text-brand-cyan">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. B2B SaaS, Agency, E-commerce"
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-brand-darker/70 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Biggest Challenge <span className="text-brand-cyan">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="What is your biggest operational or technical bottleneck right now? (e.g. manual lead follow-ups, slow website, broken CRM)"
                    value={formData.biggestChallenge}
                    onChange={(e) => setFormData({ ...formData, biggestChallenge: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-brand-darker/70 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue transition-colors text-sm resize-none"
                  ></textarea>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brand-gradient text-white text-base font-bold shadow-xl shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                  >
                    <span>Get Free Audit</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Trust Line Below Button */}
                <div className="pt-2 text-center text-xs sm:text-sm text-slate-400">
                  <span>No spam. No obligations. Just actionable insights for your business.</span>
                </div>

                {/* Security Trust Indicators */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-center gap-4 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>256-Bit Encrypted</span>
                  </div>
                  <span className="text-slate-600">•</span>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>NDA Protected</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
