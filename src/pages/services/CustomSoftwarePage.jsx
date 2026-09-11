import { Link } from "react-router-dom";
import { Code2, Sparkles, CheckCircle2 } from "lucide-react";

export default function CustomSoftwarePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <Link to="/services" className="hover:text-white transition-colors">Services</Link>
        <span>/</span>
        <span className="text-brand-purple font-medium">Custom Software</span>
      </div>

      {/* Hero */}
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 mb-12 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-medium text-brand-purple mb-6">
          <Code2 className="w-3.5 h-3.5" />
          <span>Full-Stack Engineering & Microservices</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading max-w-3xl mb-6">
          Custom Software Built For <span className="text-gradient">Performance & Scale</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
          From proprietary client portals and administrative backends to scalable cloud APIs, we write resilient, clean, and secure software tailored to your specific operations.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-gradient text-white font-semibold shadow-lg shadow-brand-blue/30 hover:scale-[1.02] transition-transform"
          >
            <Sparkles className="w-4 h-4" />
            <span>Discuss Architecture</span>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card text-slate-300 font-medium hover:text-white transition-colors"
          >
            <span>View All Services</span>
          </Link>
        </div>
      </div>

      {/* Key inclusions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          {
            title: "Internal Tools & Portals",
            desc: "Custom role-based dashboards that unify all your databases and workflows in one clean interface.",
          },
          {
            title: "Scalable Cloud APIs",
            desc: "Ultra-fast REST & GraphQL endpoints built on high-availability cloud architecture.",
          },
          {
            title: "Legacy Modernization",
            desc: "Refactor slow, outdated software stacks into reactive, maintainable modern frameworks.",
          },
        ].map((item) => (
          <div key={item.title} className="glass-card p-6 rounded-2xl border border-white/10">
            <CheckCircle2 className="w-6 h-6 text-brand-purple mb-4" />
            <h3 className="text-lg font-bold text-white mb-2 font-heading">{item.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
