import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Compass, Target } from "lucide-react";
import cleanLogo from "../assets/logo-clean.png";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-white/10 text-xs font-medium text-slate-300 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
          <span>Our Vision & Mission</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-heading mb-6">
          Architecting The Future of <br />
          <span className="text-gradient">Autonomous Business</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
          AivonixFlow was founded to eliminate frictional bottlenecks. We believe human teams should spend time thinking and innovating — while intelligent software takes care of execution.
        </p>
      </div>

      {/* Story Card */}
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 mb-16 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-brand-cyan">
              Why We Started
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Built for companies that value velocity.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Every modern company faces the same hurdle: manual data copy-pasting, disconnected CRM systems, and fragile custom scripts that break under load. AivonixFlow bridges that gap by deploying intelligent, resilient, self-healing automation systems.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We operate with a simple promise: <strong className="text-slate-200">Automate what slows you down, connect your ecosystem, and grow without headcount friction.</strong>
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="relative p-6 rounded-2xl glass-card border border-white/10 shadow-2xl flex items-center justify-center">
              <img
                src={cleanLogo}
                alt="AivonixFlow Emblem"
                className="w-56 h-auto drop-shadow-[0_4px_24px_rgba(56,189,248,0.3)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {[
          {
            icon: Zap,
            title: "Speed with Reliability",
            desc: "Rapid implementation without fragile compromises. Built on battle-tested frameworks.",
          },
          {
            icon: ShieldCheck,
            title: "Security & Confidentiality",
            desc: "Enterprise-grade data encryption, zero-retention AI protocols, and strict access controls.",
          },
          {
            icon: Target,
            title: "Outcome-Obsessed",
            desc: "We measure success by hours saved, manual errors eradicated, and revenue generated.",
          },
        ].map((v) => {
          const Icon = v.icon;
          return (
            <div key={v.title} className="glass-card p-6 rounded-2xl border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/15 text-brand-cyan flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-heading">{v.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="text-center glass-card p-10 rounded-3xl border border-white/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-heading">
          Ready to scale your business with automation?
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto mb-6 text-sm">
          Let’s discuss your current operational bottlenecks and design a tailored roadmap.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-gradient text-white font-semibold shadow-lg shadow-brand-blue/30 hover:scale-[1.02] transition-transform"
        >
          <span>Book a Free Consultation</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
