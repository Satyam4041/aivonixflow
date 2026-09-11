import { useState, useEffect, useRef } from "react";
import { Clock, TrendingUp, ShieldCheck, Zap } from "lucide-react";

const stats = [
  {
    value: 45000,
    suffix: "+",
    label: "Payroll Hours Saved",
    description: "Eliminated from manual data entry, lead routing, and report generation.",
    icon: Clock,
    color: "text-brand-cyan",
  },
  {
    value: 2.8,
    prefix: "$",
    suffix: "M+",
    label: "Net Pipeline Value Unlocked",
    description: "Recaptured through instantaneous lead responses and automated renewals.",
    icon: TrendingUp,
    color: "text-emerald-400",
    isFloat: true,
  },
  {
    value: 99.8,
    suffix: "%",
    label: "Autonomous Accuracy",
    description: "Near-zero hallucination rates across multi-agent enterprise workflows.",
    icon: ShieldCheck,
    color: "text-brand-purple",
    isFloat: true,
  },
  {
    value: 14,
    prefix: "< ",
    suffix: " Days",
    label: "Avg. Production Deployment",
    description: "From discovery call to fully functional, live-tested enterprise automation.",
    icon: Zap,
    color: "text-amber-400",
  },
];

export default function StatsSection() {
  return (
    <div className="w-full max-w-7xl mx-auto py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="glass-card-interactive rounded-3xl p-7 border border-white/10 relative overflow-hidden group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-brand-cyan group-hover:scale-110 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="w-2 h-2 rounded-full bg-brand-cyan/60 animate-pulse"></span>
              </div>

              <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight mb-2 flex items-baseline">
                {item.prefix}
                <span className="text-gradient font-black">
                  {item.isFloat ? item.value : item.value.toLocaleString()}
                </span>
                <span className="text-white font-black">{item.suffix}</span>
              </div>

              <div className="text-sm font-bold text-slate-200 font-heading mb-1.5">
                {item.label}
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
