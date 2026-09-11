import { useState } from "react";
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle2, Clock, Lock, ShieldCheck, AlertCircle } from "lucide-react";
import { sanitizeInput, isValidEmail, checkRateLimit, isSpamBot } from "../utils/security";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [securityError, setSecurityError] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "AI Automation",
    message: "",
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
    const rateCheck = checkRateLimit("contact_form");
    if (!rateCheck.allowed) {
      setSecurityError(rateCheck.error);
      return;
    }

    // 3. Sanitization & Validation
    const cleanName = sanitizeInput(formData.name);
    const cleanEmail = formData.email.trim();
    const cleanMessage = sanitizeInput(formData.message);

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-white/10 text-xs font-medium text-slate-300 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-4">
          Let’s Build Something <br />
          <span className="text-gradient">Extraordinary Together</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-400">
          Book a 1-on-1 strategy call to discover how AI automation can unlock 10x leverage for your team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Information & Guarantee */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-6">
            <h2 className="text-xl font-bold text-white font-heading">
              Direct Contact
            </h2>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-cyan">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Email us</div>
                  <a href="mailto:info@aivonixflow.com" className="font-medium text-white hover:text-brand-cyan">
                    info@aivonixflow.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-purple">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Call / WhatsApp</div>
                  <a href="tel:+919839267057" className="font-medium text-white hover:text-brand-cyan">
                    +1 (983) 926-7057
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-blue">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Headquarters</div>
                  {/* TODO: Update with official location */}
                  <span className="font-medium text-white">San Francisco, CA & Global Remote</span>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-white/10 bg-brand-blue/5">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-white">Quick Response Guarantee</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  We review every inbound request within 4 business hours. No spam, no sales pressure — just a frank technical evaluation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 relative">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-heading">Thank You!</h3>
                <p className="text-slate-400 max-w-md mx-auto text-sm">
                  We received your message. Our automation architects will review your requirements and reach out shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-xl text-xs font-semibold glass-pill text-slate-300 hover:text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot Anti-Bot Field */}
                <div className="opacity-0 absolute -z-50 w-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
                  <label htmlFor="contact_website_honeypot">Leave blank</label>
                  <input
                    id="contact_website_honeypot"
                    type="text"
                    name="contact_website_honeypot"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name <span className="text-brand-cyan">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-brand-darker/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Work Email <span className="text-brand-cyan">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-brand-darker/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Service of Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-brand-darker/60 border border-white/10 text-white focus:outline-none focus:border-brand-blue transition-colors text-sm"
                  >
                    <option value="AI Automation" className="bg-brand-dark">1. AI Automation & Agentic Systems</option>
                    <option value="Digital Marketing" className="bg-brand-dark">2. Digital Marketing & AI Growth (AEO/GEO/PPC)</option>
                    <option value="Custom CRM Development" className="bg-brand-dark">3. Custom CRM Development (11+ Verticals)</option>
                    <option value="Custom Software" className="bg-brand-dark">4. Custom Software Development</option>
                    <option value="Web Development" className="bg-brand-dark">5. Web Application Development</option>
                    <option value="Data Analytics" className="bg-brand-dark">6. Data & Data Analytics</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Project Overview / Current Bottleneck <span className="text-brand-cyan">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you want to automate or build..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-brand-darker/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue transition-colors text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-brand-gradient text-white font-semibold shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:scale-[1.01] transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Consultation Request</span>
                </button>

                {/* Security Trust Indicators */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-center gap-4 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>256-Bit Encrypted</span>
                  </div>
                  <span className="text-slate-600">•</span>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>Mutual NDA Protected</span>
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
