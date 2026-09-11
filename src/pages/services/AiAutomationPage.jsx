import { Link } from "react-router-dom";
import { Bot, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function AiAutomationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <Link to="/services" className="hover:text-white transition-colors">Services</Link>
        <span>/</span>
        <span className="text-brand-cyan font-medium">AI Automation</span>
      </div>

      {/* Hero */}
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 mb-12 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-medium text-brand-cyan mb-6">
          <Bot className="w-3.5 h-3.5" />
          <span>Intelligent Agentic Workflows</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading max-w-3xl mb-6">
          AI Automation That Lets Your <span className="text-gradient">Business Run Itself</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
          We build custom autonomous AI agents, fine-tuned enterprise LLM pipelines, and cognitive integrations that eliminate repetitive manual workflows forever.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-gradient text-white font-semibold shadow-lg shadow-brand-blue/30 hover:scale-[1.02] transition-transform"
          >
            <Sparkles className="w-4 h-4" />
            <span>Schedule AI Discovery Call</span>
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
            title: "Custom LLM Agents",
            desc: "Goal-directed agents that research, analyze, make decisions, and interact with your APIs autonomously.",
          },
          {
            title: "Document & Invoice Processing",
            desc: "Extract structured data from contracts, receipts, and reports with 99.8% precision.",
          },
          {
            title: "Intelligent Customer Ops",
            desc: "24/7 human-grade conversational support and automated ticket resolution pipelines.",
          },
        ].map((item) => (
          <div key={item.title} className="glass-card p-6 rounded-2xl border border-white/10">
            <CheckCircle2 className="w-6 h-6 text-brand-cyan mb-4" />
            <h3 className="text-lg font-bold text-white mb-2 font-heading">{item.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
