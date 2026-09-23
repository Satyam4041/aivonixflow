import { useState } from "react";
import { Link } from "react-router-dom";
import { Calculator, ArrowRight, Sparkles, TrendingUp, Clock, DollarSign } from "lucide-react";

export default function RoiCalculator() {
  const [teamSize, setTeamSize] = useState(25);
  const [hourlyRate, setHourlyRate] = useState(45);
  const [manualHoursPerWeek, setManualHoursPerWeek] = useState(7);

  // Math: teamSize * manualHoursPerWeek * 4.33 weeks/month * 70% automated
  const hoursSavedPerMonth = Math.round(teamSize * manualHoursPerWeek * 4.33 * 0.72);
  const dollarsSavedPerMonth = Math.round(hoursSavedPerMonth * hourlyRate);
  const annualSavings = Math.round(dollarsSavedPerMonth * 12);

  return (
    <div className="relative glass-card rounded-3xl p-8 sm:p-12 border border-white/10 max-w-5xl mx-auto overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gradient opacity-10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-semibold text-brand-cyan mb-3">
          <Calculator className="w-3.5 h-3.5" />
          <span>Interactive ROI Model</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
          Calculate Your Automation <span className="text-gradient">ROI in Real Time</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-2">
          Discover how many hours and dollars your organization recovers by eliminating repetitive manual data transfers and manual CRM operations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders Form */}
        <div className="lg:col-span-6 space-y-6">
          {/* Team Size Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-slate-300">Team Size (Employees doing manual tasks):</span>
              <span className="font-mono text-brand-cyan font-bold text-base">{teamSize} People</span>
            </div>
            <input
              type="range"
              min="3"
              max="200"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full h-2 bg-brand-surface rounded-lg appearance-none cursor-pointer accent-brand-cyan"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-mono">
              <span>3 people</span>
              <span>100 people</span>
              <span>200+ people</span>
            </div>
          </div>

          {/* Manual Hours Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-slate-300">Weekly repetitive manual hours per person:</span>
              <span className="font-mono text-brand-purple font-bold text-base">{manualHoursPerWeek} hrs / wk</span>
            </div>
            <input
              type="range"
              min="2"
              max="20"
              value={manualHoursPerWeek}
              onChange={(e) => setManualHoursPerWeek(Number(e.target.value))}
              className="w-full h-2 bg-brand-surface rounded-lg appearance-none cursor-pointer accent-brand-purple"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-mono">
              <span>2 hrs (minimal)</span>
              <span>10 hrs (moderate)</span>
              <span>20 hrs (heavy)</span>
            </div>
          </div>

          {/* Average Hourly Cost */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-slate-300">Average Blended Hourly Rate:</span>
              <span className="font-mono text-brand-blue font-bold text-base">${hourlyRate} / hr</span>
            </div>
            <input
              type="range"
              min="20"
              max="150"
              step="5"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full h-2 bg-brand-surface rounded-lg appearance-none cursor-pointer accent-brand-blue"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-mono">
              <span>$20/hr</span>
              <span>$75/hr</span>
              <span>$150/hr</span>
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className="lg:col-span-6 bg-brand-surface/70 rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 px-3 py-1 bg-brand-gradient text-white text-[11px] font-bold rounded-bl-xl uppercase tracking-wider">
            Projected Impact
          </div>

          <div className="space-y-6">
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                Estimated Annual Recaptured Value
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight text-gradient">
                ${annualSavings.toLocaleString()}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Equivalent to <strong>${dollarsSavedPerMonth.toLocaleString()}</strong> in bottom-line monthly efficiency.
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="bg-brand-darker/60 p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-1.5 text-xs text-brand-cyan mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Time Saved</span>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono">
                  {hoursSavedPerMonth.toLocaleString()} hrs
                </div>
                <div className="text-[11px] text-slate-400">per month saved</div>
              </div>

              <div className="bg-brand-darker/60 p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 mb-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Assumed Automatable</span>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono">
                  72%
                </div>
                <div className="text-[11px] text-slate-400">of the hours entered</div>
              </div>
            </div>

            {/* The 72% was applied silently behind a confident dollar figure.
                Stating the assumption is what makes this an estimate rather
                than a claim. */}
            <p className="text-[11px] text-slate-500 leading-relaxed">
              This is a model, not a quote. It assumes 72% of the manual hours
              you entered can be automated, which varies by process — some reach
              higher, others far less. A figure for your own workflows comes
              from the audit.
            </p>

            <div className="pt-2">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-brand-gradient text-white font-semibold shadow-lg shadow-brand-blue/30 hover:scale-[1.01] transition-transform text-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get a Free Custom Automation Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
