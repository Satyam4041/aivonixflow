import { Search, Wrench, KeyRound, ArrowRight } from "lucide-react";

/**
 * Replaced the previous testimonials block, which carried invented quotes
 * attributed to named people at named companies under a "Verified Impact"
 * label. Presenting fabricated testimonials as real is actionable under the
 * FTC's rule on fake reviews and under India's Consumer Protection Act, and no
 * client results have been measured, so there was nothing true to put in its
 * place.
 *
 * This keeps the same three-card slot and states how engagements actually run.
 * Every claim here is a commitment AivonixFlow controls, so it stays accurate
 * regardless of how many projects are behind it. Real client quotes can replace
 * this once there are some to publish, with permission.
 */
const phases = [
  {
    step: "01",
    title: "Discovery & mapping",
    icon: Search,
    duration: "Days 1–5",
    body: "We sit with the people doing the work and write down what actually happens, step by step, including the steps nobody documented. Most projects find their real problem here rather than in the build.",
    deliverable: "A written process map and a shortlist of what is worth automating first",
    honest: "If the process turns out to be undefined rather than slow, we say so before quoting.",
  },
  {
    step: "02",
    title: "Build & integrate",
    icon: Wrench,
    duration: "Weeks 1–4",
    body: "The system is built against your existing stack and writes through the same APIs your team already uses, so current reports, dashboards and permissions keep working. You see it running before it goes live.",
    deliverable: "A working system in staging, with confidence thresholds and escalation rules agreed",
    honest: "Low-confidence cases route to a person. Automation absorbs volume, not judgement.",
  },
  {
    step: "03",
    title: "Handover & measure",
    icon: KeyRound,
    duration: "Ongoing",
    body: "You get the source code and the documentation. We agree which numbers to watch before launch, not after, so there is a real baseline to compare against rather than an impression.",
    deliverable: "Full source-code ownership, documentation, and an agreed set of metrics",
    honest: "Scoring rules usually need revising once a full cycle of real outcomes is in.",
  },
];

export default function TestimonialsSection() {
  return (
    <div className="w-full max-w-7xl mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {phases.map((phase) => {
          const Icon = phase.icon;
          return (
            <div
              key={phase.step}
              className="glass-card-interactive rounded-3xl p-7 border border-white/10 flex flex-col relative overflow-hidden group hover:border-brand-blue/40 transition-colors"
            >
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="w-10 h-10 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-mono text-2xl font-black text-white/10 group-hover:text-brand-blue/30 transition-colors">
                  {phase.step}
                </span>
              </div>

              <div className="mb-3">
                <h3 className="text-lg font-bold text-white font-heading">
                  {phase.title}
                </h3>
                <p className="text-xs text-brand-purple font-medium mt-0.5">
                  {phase.duration}
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-5 flex-1">
                {phase.body}
              </p>

              <div className="p-3 rounded-xl bg-brand-surface/80 border border-white/5 mb-4">
                <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 mb-1">
                  You receive
                </div>
                <div className="text-xs text-slate-200 leading-relaxed">
                  {phase.deliverable}
                </div>
              </div>

              <div className="flex gap-2 pt-3 border-t border-white/5">
                <ArrowRight className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-xs text-slate-400 leading-relaxed">
                  {phase.honest}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
