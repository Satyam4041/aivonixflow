import { useState } from "react";
import { Search, Cpu, Zap, LineChart, ArrowRight, Check, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    phase: "Discover",
    title: "Process Deep-Dive & Friction Mapping",
    description: "We audit your manual workflows, software tech stack, and API endpoints to pinpoint the exact bottlenecks burning payroll hours.",
    icon: Search,
    timeframe: "Days 1 – 3",
    deliverables: ["Full Workflow Bottleneck Audit", "Architecture Blueprint", "Guaranteed ROI Projection"],
    accent: "from-cyan-500 to-blue-600",
    badgeColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  },
  {
    number: "02",
    phase: "Architect",
    title: "AI Agent & Pipeline Engineering",
    description: "Our engineers build custom LLM logic, autonomous connectors, webhook handlers, and database synchronization pipelines in a sandboxed staging environment.",
    icon: Cpu,
    timeframe: "Days 4 – 10",
    deliverables: ["Custom AI Agent Prompts & Guards", "Bidirectional CRM Connectors", "Zero-Data-Loss Failover Logic"],
    accent: "from-blue-500 to-indigo-600",
    badgeColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  },
  {
    number: "03",
    phase: "Automate",
    title: "Zero-Downtime Live Deployment",
    description: "We switch your operations over with zero downtime. Every lead, invoice, and customer inquiry is autonomously triaged and processed with sub-second response times.",
    icon: Zap,
    timeframe: "Days 11 – 14",
    deliverables: ["Production System Deployment", "Real-Time Telemetry Dashboard", "Team Onboarding & Documentation"],
    accent: "from-indigo-500 to-purple-600",
    badgeColor: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
  },
  {
    number: "04",
    phase: "Scale",
    title: "Continuous Self-Optimization & Monitoring",
    description: "Our self-healing monitoring systems observe runtime health 24/7, continuously fine-tuning model accuracy and expanding capabilities as your volume grows.",
    icon: LineChart,
    timeframe: "Ongoing Evolution",
    deliverables: ["24/7 Automated Error Triage", "Quarterly Model Upgrades", "Unlimited Scale Capacity"],
    accent: "from-purple-500 to-pink-600",
    badgeColor: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  },
];

export default function InteractiveWorkflow() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full max-w-6xl mx-auto py-8">
      {/* Workflow Navigation Tracker */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = activeStep === idx;
          return (
            <button
              key={step.phase}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl text-left transition-all border relative overflow-hidden group ${
                isActive
                  ? "glass-card border-brand-blue/50 shadow-xl shadow-brand-blue/10"
                  : "bg-brand-surface/40 border-white/5 hover:border-white/20 hover:bg-brand-surface/70"
              }`}
            >
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-brand-gradient"></div>
              )}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-slate-300 transition-colors">
                  PHASE {step.number}
                </span>
                <div className={`p-1.5 rounded-lg ${isActive ? "bg-brand-blue/20 text-brand-cyan" : "bg-white/5 text-slate-400"}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className={`text-base font-bold font-heading mb-1 ${isActive ? "text-white" : "text-slate-300"}`}>
                {step.phase}
              </div>
              <div className="text-xs text-slate-400 truncate">
                {step.timeframe}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Phase Showcase Card */}
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-72 h-72 bg-brand-gradient opacity-15 blur-3xl rounded-full pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${steps[activeStep].badgeColor}`}>
                PHASE {steps[activeStep].number} • {steps[activeStep].timeframe}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight">
              {steps[activeStep].title}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {steps[activeStep].description}
            </p>

            <div className="pt-2">
              <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3">
                Phase Deliverables & Milestones:
              </div>
              <div className="space-y-2.5">
                {steps[activeStep].deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Step Display */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-3xl bg-brand-darker/90 border border-white/10 p-8 flex flex-col items-center justify-center text-center shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-transparent to-brand-purple/10 rounded-3xl"></div>
              
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-brand-surface border border-white/15 flex items-center justify-center text-brand-cyan mb-6 shadow-glow-blue">
                {(() => {
                  const CurrentIcon = steps[activeStep].icon;
                  return <CurrentIcon className="w-10 h-10" />;
                })()}
              </div>

              <div className="relative z-10 text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">
                AivonixFlow Engine
              </div>
              <div className="relative z-10 text-xl font-bold text-white font-heading mb-4">
                {steps[activeStep].phase} Architecture
              </div>

              <div className="relative z-10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping"></span>
                <span className="text-xs font-mono text-brand-cyan">Active Verification Stage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
