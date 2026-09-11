import { useState, useEffect } from "react";
import { 
  Bot, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  ArrowUpRight, 
  Sparkles,
  Play,
  RotateCcw,
  Layers
} from "lucide-react";

const scenarios = {
  leads: {
    title: "Autonomous Lead Routing",
    target: "Salesforce + HubSpot Sync",
    badge: "99.8% Precision",
    logs: [
      { time: "00:01", type: "trigger", text: "[EVENT] Webhook received: Enterprise trial request from Fortune 500 domain" },
      { time: "00:02", type: "ai", text: "[AGENT] Ingesting company headcount, tech stack, and annual ARR signals" },
      { time: "00:03", type: "eval", text: "[EVAL] Neural Scoring: Fit Score: 98.6/100 -> Routed to Tier-1 Enterprise AE" },
      { time: "00:04", type: "action", text: "[ACTION] CRM Pipeline: Opportunity created, calendar invite booked on Zoom" },
      { time: "00:05", type: "success", text: "[COMPLETE] Workflow Finished: 1.1s latency • Manual SDR time saved: 45 min" },
    ],
  },
  invoice: {
    title: "Autonomous Financial Ops",
    target: "Stripe + QuickBooks + OCR",
    badge: "Zero Manual Input",
    logs: [
      { time: "00:01", type: "trigger", text: "[INGEST] PDF invoice captured via email ingestion gateway (ID: #INV-9281)" },
      { time: "00:02", type: "ai", text: "[PARSER] Vision Model: Extracted line items, tax IDs, banking IBAN & totals" },
      { time: "00:03", type: "eval", text: "[MATCH] Three-Way Match: Matched against Purchase Order #PO-4412 (100% match)" },
      { time: "00:04", type: "action", text: "[ERP] ERP Dispatch: Scheduled ACH payment approval & reconciled in books" },
      { time: "00:05", type: "success", text: "[COMPLETE] Workflow Finished: 0.9s latency • Error rate: 0.00%" },
    ],
  },
  support: {
    title: "Neural Customer Resolution",
    target: "Zendesk + Slack + Vector DB",
    badge: "24/7 Cognitive Resolution",
    logs: [
      { time: "00:01", type: "trigger", text: "[INBOUND] User query: 'How do I configure OAuth2 custom scopes with webhook callbacks?'" },
      { time: "00:02", type: "ai", text: "[VECTOR] Knowledge Retrieval: Retrieved relevant enterprise API documentation snippets" },
      { time: "00:03", type: "eval", text: "[SANDBOX] Code Sandbox: Agent generated and validated sample Node.js config block" },
      { time: "00:04", type: "action", text: "[DISPATCH] Response Sent: Complete explanation & code snippet returned in chat" },
      { time: "00:05", type: "success", text: "[COMPLETE] Ticket Resolved autonomously: Customer CSAT: 5/5 (Verified)" },
    ],
  },
};

export default function HeroTerminal() {
  const [activeTab, setActiveTab] = useState("leads");
  const [visibleCount, setVisibleCount] = useState(1);

  const scenario = scenarios[activeTab];

  // Animate lines revealing sequentially
  useEffect(() => {
    setVisibleCount(1);
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < scenario.logs.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 900);

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-12 rounded-2xl overflow-hidden glass-card border border-white/10 shadow-2xl shadow-brand-blue/15 backdrop-blur-2xl">
      {/* Glow highlight behind terminal */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-gradient opacity-20 blur-3xl pointer-events-none"></div>

      {/* Terminal Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-brand-darker/90 border-b border-white/10 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <div className="flex items-center gap-2 text-slate-300 font-mono font-medium">
            <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
            <span>aivonixflow-agent-runtime v2.4</span>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1 bg-brand-surface p-1 rounded-lg border border-white/5">
          {Object.keys(scenarios).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                activeTab === key
                  ? "bg-brand-blue text-white shadow-md shadow-brand-blue/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {key === "leads" ? "Lead AI" : key === "invoice" ? "Finance AI" : "Support AI"}
            </button>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            Live Engine
          </span>
        </div>
      </div>

      {/* Workflow Meta Header */}
      <div className="px-5 py-3 bg-brand-surface/50 border-b border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-slate-400">Target Stack:</span>
          <span className="font-semibold text-white font-mono">{scenario.target}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-brand-purple/20 text-brand-purple border border-brand-purple/30 text-[11px] font-semibold">
            {scenario.badge}
          </span>
          <button
            onClick={() => setVisibleCount(1)}
            className="p-1 text-slate-400 hover:text-white transition-colors"
            title="Replay Execution"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Body Logs */}
      <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed space-y-3 min-h-[220px] bg-brand-darker/60">
        {scenario.logs.slice(0, visibleCount).map((log, index) => {
          let badgeColor = "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20";
          if (log.type === "ai") badgeColor = "text-purple-400 bg-purple-500/10 border-purple-500/20";
          if (log.type === "eval") badgeColor = "text-amber-400 bg-amber-500/10 border-amber-500/20";
          if (log.type === "action") badgeColor = "text-blue-400 bg-blue-500/10 border-blue-500/20";
          if (log.type === "success") badgeColor = "text-emerald-400 bg-emerald-500/10 border-emerald-500/20 font-bold";

          return (
            <div
              key={index}
              className="flex items-start gap-3 animate-in fade-in slide-in-from-left-2 duration-300"
            >
              <span className="text-slate-500 select-none text-[11px] mt-0.5">
                [{log.time}]
              </span>
              <span className={`px-2 py-0.5 rounded border text-[11px] uppercase tracking-wider shrink-0 ${badgeColor}`}>
                {log.type}
              </span>
              <span className="text-slate-200 flex-1">
                {log.text}
              </span>
            </div>
          );
        })}

        {visibleCount < scenario.logs.length && (
          <div className="flex items-center gap-2 text-slate-500 pt-1">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
            <span className="italic text-[11px]">Executing neural node...</span>
          </div>
        )}
      </div>

      {/* Terminal Footer Metrics */}
      <div className="px-5 py-3 bg-brand-surface/40 border-t border-white/5 flex flex-wrap items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-4">
          <span>Avg. Latency: <strong className="text-white font-mono">1.1s</strong></span>
          <span>Success Rate: <strong className="text-emerald-400 font-mono">99.98%</strong></span>
        </div>
        <div className="text-[11px] text-brand-cyan flex items-center gap-1 font-semibold">
          <span>Fully Autonomous Pipeline</span>
          <CheckCircle2 className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}
