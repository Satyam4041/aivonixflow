import { Clock, KeyRound, UserCheck, Wallet } from "lucide-react";

/**
 * These were previously achievement metrics — hours saved, pipeline value,
 * accuracy rate, average deployment time — none of which had been measured.
 *
 * Each tile now states something true by construction rather than by track
 * record: a property of how AivonixFlow builds and licenses, not a claim about
 * past results. That keeps them accurate no matter how many projects are
 * behind them, and they are the things buyers actually compare.
 */
const stats = [
  {
    value: "0",
    suffix: "",
    label: "Per-Seat Licence Fees",
    description: "Custom builds are bought once, not rented. Adding staff does not raise the cost.",
    icon: Wallet,
  },
  {
    value: "100",
    suffix: "%",
    label: "Source Code Ownership",
    description: "You own what we build, so you are never locked into us to run or extend it.",
    icon: KeyRound,
  },
  {
    value: "2–4",
    suffix: " wks",
    label: "First Workflow Live",
    description: "A focused automation ships in weeks. Multi-department platforms take six to twelve.",
    icon: Clock,
  },
  {
    value: "Always",
    suffix: "",
    label: "Human Escalation",
    description: "Low-confidence cases route to a person instead of being answered with a guess.",
    icon: UserCheck,
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

              <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight mb-2 flex items-baseline flex-wrap">
                <span className="text-gradient font-black">{item.value}</span>
                {item.suffix && (
                  <span className="text-white font-black text-2xl sm:text-3xl">
                    {item.suffix}
                  </span>
                )}
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
