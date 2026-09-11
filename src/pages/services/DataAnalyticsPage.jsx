import { Link } from "react-router-dom";
import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  TrendingUp, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Layers,
  Activity,
  Zap,
  Target
} from "lucide-react";

export default function DataAnalyticsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <Link to="/services" className="hover:text-white transition-colors">Services</Link>
        <span>/</span>
        <span className="text-brand-cyan font-medium">Data & Analytics</span>
      </div>

      {/* Hero Banner */}
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 mb-12 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-semibold text-brand-cyan mb-6">
          <BarChart3 className="w-3.5 h-3.5" />
          <span>Enterprise Intelligence & Predictive Insights</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading max-w-3xl mb-6">
          Turn Raw Chaos into <span className="text-gradient">Predictive Revenue Growth</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
          We architect unified data pipelines, executive real-time BI dashboards, and conversion analytics that empower B2B leadership to make high-confidence, data-backed decisions.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-gradient text-white font-bold shadow-lg shadow-brand-blue/30 hover:scale-[1.02] transition-transform text-sm"
          >
            <span>Book a Data Strategy Audit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-card text-slate-300 font-medium hover:text-white transition-colors text-sm"
          >
            <span>Explore All Capabilities</span>
          </Link>
        </div>
      </div>

      {/* Core Solutions Grid */}
      <div className="mb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Comprehensive Data & Analytics Capabilities
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Engineered to unify disparate data silos into automated executive clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: BarChart3,
              title: "Data Analytics & Insights",
              desc: "Deep algorithmic analysis of customer cohorts, churn signals, pipeline leakage, and sales velocity metrics.",
              deliverables: ["Cohort Retention Models", "Sales Funnel Leakage Audits", "Customer Lifetime Value (LTV) Forecasts"],
            },
            {
              icon: Activity,
              title: "Live Dashboard Development",
              desc: "Custom BI command centers built with PowerBI, Tableau, Looker, or bespoke React interfaces connected directly to your cloud data warehouse.",
              deliverables: ["Executive KPI Cockpits", "Real-Time Operational Telemetry", "Automated Daily/Weekly Slack Briefs"],
            },
            {
              icon: Target,
              title: "Conversion Rate Optimization (CRO)",
              desc: "Multi-variant A/B testing, heatmaps, and funnel analytics to systematically maximize conversion percentage across every digital touchpoint.",
              deliverables: ["Heatmap & Session Analysis", "A/B Experimentation Engine", "Frictionless Checkout & Lead Forms"],
            },
            {
              icon: Layers,
              title: "Data Warehousing & ETL Pipelines",
              desc: "Robust BigQuery, Snowflake, and Postgres data architectures with automated cleaning, deduplication, and zero-loss streaming.",
              deliverables: ["Snowflake & BigQuery Setup", "Automated ETL/ELT Connectors", "Enterprise Schema Normalization"],
            },
            {
              icon: Zap,
              title: "Ad Operations & Attribution",
              desc: "First-party data tracking and multi-touch attribution to accurately attribute every closed deal back to specific campaigns and channels.",
              deliverables: ["Multi-Touch Attribution Modeling", "Cookieless Server-Side Tracking", "Unified ROAS Telemetry"],
            },
            {
              icon: TrendingUp,
              title: "Predictive Analytics & ML",
              desc: "Machine learning forecasting that predicts demand surges, high-intent prospects, and revenue trajectory months in advance.",
              deliverables: ["Predictive Churn Algorithms", "Lead Propensity Scoring", "Quarterly ARR Forecast Models"],
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass-card-interactive rounded-3xl p-7 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-cyan mb-5 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-2">
                    Key Outcomes:
                  </div>
                  <ul className="space-y-1.5">
                    {item.deliverables.map((d) => (
                      <li key={d} className="text-xs text-slate-400 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA Card */}
      <div className="glass-card rounded-3xl p-10 border border-white/10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/15 to-brand-purple/15 opacity-50 blur-2xl pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
            Need clarity on your company's data?
          </h2>
          <p className="text-sm text-slate-300">
            Let our data engineers audit your tracking setup and design an automated real-time intelligence cockpit.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-gradient text-white font-bold shadow-lg shadow-brand-blue/30 hover:scale-[1.02] transition-transform text-sm"
            >
              <span>Schedule Architecture Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
