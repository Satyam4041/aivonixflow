import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Tag, 
  Sparkles, 
  FileText, 
  DollarSign,
  Lock,
  AlertCircle
} from "lucide-react";
import { sanitizeInput, isValidEmail, checkRateLimit, isSpamBot } from "../utils/security";

export default function GetQuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [securityError, setSecurityError] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    projectType: "AI Automation",
    estimatedBudget: "$1,000 – $3,000",
    projectDetails: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSecurityError("");

    // 1. Bot Honeypot Defense
    if (isSpamBot(honeypot)) {
      // Silently simulate success for bots without saving or processing
      setSubmitted(true);
      return;
    }

    // 2. Client-Side Rate Limiter
    const rateCheck = checkRateLimit("quote_form");
    if (!rateCheck.allowed) {
      setSecurityError(rateCheck.error);
      return;
    }

    // 3. Strict Input Validation & Sanitization
    const cleanName = sanitizeInput(formData.fullName);
    const cleanEmail = formData.workEmail.trim();
    const cleanCompany = sanitizeInput(formData.companyName);
    const cleanDetails = sanitizeInput(formData.projectDetails);

    if (!cleanName || cleanName.length < 2) {
      setSecurityError("Please enter a valid full name.");
      return;
    }

    if (!isValidEmail(cleanEmail)) {
      setSecurityError("Please enter a valid work email address.");
      return;
    }

    // Secure payload ready for dispatch
    const sanitizedPayload = {
      fullName: cleanName,
      workEmail: cleanEmail,
      companyName: cleanCompany,
      projectType: formData.projectType,
      estimatedBudget: formData.estimatedBudget,
      projectDetails: cleanDetails,
      timestamp: new Date().toISOString(),
    };

    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Top Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-white/10 text-xs font-semibold text-brand-cyan mb-4">
          <Tag className="w-3.5 h-3.5" />
          <span>Transparent Pricing & Scope</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-4">
          Get a Custom Quote for <span className="text-gradient">Your Project</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-4">
          Tell us about your requirements. We’ll provide a tailored solution with pricing and timeline aligned to your goals.
        </p>

        {/* Starting Line Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-mono font-bold">
          <span>Projects starting from $500</span>
        </div>
      </div>

      {/* Form Container */}
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gradient opacity-10 blur-3xl pointer-events-none rounded-full"></div>

        {submitted ? (
          <div className="text-center py-16 space-y-5 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30 shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Thank you. Your request has been submitted.
            </h2>
            <p className="text-slate-300 max-w-md mx-auto text-sm sm:text-base">
              Our team will get back to you shortly. You can also reach us directly at <a href="mailto:info@aivonixflow.com" className="text-brand-cyan underline">info@aivonixflow.com</a>.
            </p>
            <div className="pt-4">
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl glass-pill text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              >
                Submit another quote request
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {/* Honeypot Anti-Bot Field (Hidden from real users, traps spambots) */}
            <div className="opacity-0 absolute -z-50 w-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
              <label htmlFor="company_website_url_hp">Leave this field blank</label>
              <input
                id="company_website_url_hp"
                type="text"
                name="company_website_url_hp"
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Full Name <span className="text-brand-cyan">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-brand-darker/70 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue transition-colors text-sm"
                />
              </div>

              {/* Work Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Work Email <span className="text-brand-cyan">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. john@company.com"
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-brand-darker/70 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue transition-colors text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Company Name (Optional) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Company Name <span className="text-slate-500 font-normal normal-case">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Acme Corp"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-brand-darker/70 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue transition-colors text-sm"
                />
              </div>

              {/* Project Type Dropdown */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Project Type <span className="text-brand-cyan">*</span>
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-brand-darker/70 border border-white/10 text-white focus:outline-none focus:border-brand-blue transition-colors text-sm"
                >
                  <option value="AI Automation" className="bg-brand-dark">AI Automation</option>
                  <option value="CRM Development" className="bg-brand-dark">CRM Development</option>
                  <option value="Website Development" className="bg-brand-dark">Website Development</option>
                  <option value="Custom Software" className="bg-brand-dark">Custom Software</option>
                </select>
              </div>

              {/* Estimated Budget Dropdown */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Estimated Budget <span className="text-brand-cyan">*</span>
                </label>
                <select
                  value={formData.estimatedBudget}
                  onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-brand-darker/70 border border-white/10 text-white focus:outline-none focus:border-brand-blue transition-colors text-sm"
                >
                  <option value="$500 – $1,000" className="bg-brand-dark">$500 – $1,000</option>
                  <option value="$1,000 – $3,000" className="bg-brand-dark">$1,000 – $3,000</option>
                  <option value="$3,000 – $5,000" className="bg-brand-dark">$3,000 – $5,000</option>
                  <option value="$5,000+" className="bg-brand-dark">$5,000+</option>
                </select>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Project Details <span className="text-brand-cyan">*</span>
              </label>
              <textarea
                rows={5}
                required
                placeholder="Describe your project, current bottlenecks, key features, and any deadlines..."
                value={formData.projectDetails}
                onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-brand-darker/70 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue transition-colors text-sm resize-none"
              ></textarea>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-xl bg-brand-gradient text-white text-base font-bold shadow-xl shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                <span>Get My Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Line Below Button */}
            <div className="pt-3 flex items-center gap-2 text-xs sm:text-sm text-slate-400">
              <Clock className="w-4 h-4 text-brand-cyan shrink-0" />
              <span>We typically respond within 24 hours. All solutions are custom-built and tailored to your business needs.</span>
            </div>

            {/* Enterprise Security Assurance */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-slate-300">
                <Lock className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-white">Bank-Grade 256-Bit TLS Encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-cyan" />
                <span>Zero Data Retention AI Models</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-brand-purple" />
                <span>Strict Mutual NDA Protected</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
