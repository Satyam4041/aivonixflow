import { Link } from "react-router-dom";
import { 
  Bot, 
  Database, 
  Code2, 
  Globe, 
  ArrowRight, 
  BarChart3, 
  Rocket, 
  ChevronRight, 
  Layers, 
  Search, 
  Zap, 
  Sparkles,
  PieChart,
  Megaphone,
  Paintbrush
} from "lucide-react";

const allServices = [
  {
    title: "AI Automation",
    tagline: "Autonomous Agentic Workflows & Neural Processing",
    desc: "Transform labor-intensive manual operations into intelligent, self-healing automated workflows powered by custom LLM agents and multi-system connectors.",
    path: "/services/ai-automation",
    icon: Bot,
    highlights: ["Custom LLM Agents", "Document & Data Extraction", "Autonomous Customer Ops"],
  },
  {
    title: "Digital Marketing & AI Growth",
    tagline: "AEO, GEO, ChatGPT Ads & Algorithmic PPC",
    desc: "Dominate search in the AI era. We engineer Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), ChatGPT Ads, and hyper-targeted PPC.",
    path: "/services/digital-marketing",
    icon: Rocket,
    highlights: ["AEO (ChatGPT & Perplexity)", "Generative Engine Optimization (GEO)", "High-ROAS Google/Bing PPC"],
  },
  {
    title: "Custom CRM Development",
    tagline: "Bespoke Industry CRMs (11+ Verticals Supported)",
    desc: "We build zero-license-fee custom CRMs engineered exclusively for your industry: Matrimonial, Healthcare & Clinic, Hotel Management, Task & Project tracking, Real Estate, and more.",
    path: "/services/crm-development",
    icon: Database,
    highlights: ["Healthcare, Clinic & Matrimonial CRMs", "Hotel & Reservation Channel Managers", "Task, Sprint & Milestone Gantt Systems"],
  },
  {
    title: "Custom Software",
    tagline: "High-Performance Cloud Architectures & SaaS",
    desc: "Engineered from scratch for speed, security, and scalability. We build bespoke client portals, internal operations dashboards, and resilient API ecosystems.",
    path: "/services/custom-software",
    icon: Code2,
    highlights: ["Scalable Cloud Microservices", "Internal Operations Tools", "High-Throughput APIs"],
  },
  {
    title: "Web Development",
    tagline: "Ultra-Fast, High-Converting Digital Platforms",
    desc: "Modern web applications built with cutting-edge frontends, instant load times, dynamic micro-interactions, and conversion-optimized architectures.",
    path: "/services/web-development",
    icon: Globe,
    highlights: ["React / Next.js Frameworks", "Interactive 3D & GSAP Motion", "Headless CMS & Edge Delivery"],
  },
  {
    title: "Data & Data Analytics",
    tagline: "Predictive Business Intelligence & Attribution",
    desc: "Consolidate scattered data silos into real-time BI dashboards, conversion optimization testing, and executive forecasting pipelines.",
    path: "/services/data-analytics",
    icon: BarChart3,
    highlights: ["Executive BI Dashboards", "Conversion Rate Optimization (CRO)", "Multi-Touch Attribution"],
  },
];

// Specific matrix matching user's reference image breakdown
const capabilityColumns = [
  {
    category: "Data & Analytics",
    icon: PieChart,
    accent: "text-amber-500",
    borderGlow: "group-hover:border-amber-500/40",
    items: [
      "Data Analytics & Insights",
      "Dashboard Development",
      "Conversion Rate Optimization (CRO)",
      "User Experience & Funnel Analysis",
      "Front End Telemetry & Heatmaps",
      "Ad Operations & Attribution",
    ],
    link: "/services/data-analytics",
  },
  {
    category: "Earned Media & AEO",
    icon: Search,
    accent: "text-emerald-400",
    borderGlow: "group-hover:border-emerald-500/40",
    items: [
      "AI Search Optimization (AEO)",
      "Search Engine Optimization (SEO)",
      "Generative Engine Optimization (GEO)",
      "App Store Optimization (ASO)",
      "Content Marketing & Thought Leadership",
      "Digital PR & Media Authority",
      "Influencer & Creator Marketing",
      "Organic Social Media Growth",
      "Email Marketing & Lifecycle Nurturing",
    ],
    link: "/services/digital-marketing",
  },
  {
    category: "Paid Media & PPC",
    icon: Megaphone,
    accent: "text-cyan-400",
    borderGlow: "group-hover:border-cyan-500/40",
    items: [
      "Media Strategy & Growth Planning",
      "ChatGPT Ads & AI Search Placements",
      "Paid Search / PPC (Google & Bing)",
      "Paid Social (Meta, LinkedIn, X)",
      "Programmatic & Display Networks",
      "Marketplaces & Amazon Commerce",
      "Streaming & Connected TV Ads",
    ],
    link: "/services/digital-marketing",
  },
  {
    category: "Creative & Experience",
    icon: Paintbrush,
    accent: "text-purple-400",
    borderGlow: "group-hover:border-purple-500/40",
    items: [
      "Performance Creative & Ad Assets",
      "Brand Identity & Visual Architecture",
      "High-Impact Content Production",
      "Website Design & Interactive Funnels",
      "Graphic & 3D Motion Design",
      "Audio Production & Podcasts",
    ],
    link: "/services/web-development",
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Services Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-white/10 text-xs font-semibold text-brand-cyan mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>Complete Capability Spectrum</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-heading mb-5">
          Intelligent Services Built For <br />
          <span className="text-gradient">Exponential Scalability</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300">
          Explore our end-to-end automation, systems architecture, predictive data analytics, and next-gen AI marketing capabilities.
        </p>
      </div>

      {/* Main 6 Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-24">
        {allServices.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.path}
              className="glass-card-interactive rounded-3xl p-8 border border-white/10 flex flex-col justify-between hover:border-brand-blue/50 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-cyan group-hover:scale-110 group-hover:bg-brand-blue/20 transition-all duration-300 shadow-md">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors font-heading">
                    {service.title}
                  </h2>
                  <p className="text-xs text-brand-purple font-medium mt-0.5">
                    {service.tagline}
                  </p>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {service.desc}
                </p>

                <div className="pt-2">
                  <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                    Key Features
                  </div>
                  <ul className="space-y-1.5">
                    {service.highlights.map((h) => (
                      <li key={h} className="text-xs text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-white/5">
                <Link
                  to={service.path}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-brand-cyan transition-colors"
                >
                  <span>Explore {service.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* ----------------- DETAILED CAPABILITY MATRIX ----------------- */}
      <section className="mb-20 pt-10 border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-semibold text-brand-cyan mb-3">
            <span>Specialized Execution Units</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Full-Spectrum Service Matrix
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Every layer of modern digital acquisition, AI optimization, and enterprise telemetry under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilityColumns.map((col) => {
            const ColIcon = col.icon;
            return (
              <div
                key={col.category}
                className={`glass-card rounded-3xl p-7 border border-white/10 flex flex-col justify-between transition-all duration-300 group ${col.borderGlow}`}
              >
                <div>
                  {/* Category Header with Icon */}
                  <div className="flex flex-col items-center text-center pb-6 border-b border-white/10">
                    <div className="w-16 h-16 rounded-2xl bg-brand-surface border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <ColIcon className={`w-8 h-8 ${col.accent}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white font-heading">
                      {col.category}
                    </h3>
                  </div>

                  {/* Capability List with Orange/Cyan Right Arrows */}
                  <div className="pt-6 space-y-3">
                    {col.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-slate-300 hover:text-white transition-colors group/item cursor-default"
                      >
                        <ChevronRight className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 group-hover/item:translate-x-1 transition-transform" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-white/5">
                  <Link
                    to={col.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-cyan hover:underline"
                  >
                    <span>View Dedicated Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Consultation CTA */}
      <div className="glass-card rounded-3xl p-10 sm:p-14 border border-white/10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 opacity-30 blur-2xl pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Need a custom combination of services?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We architect tailored multi-channel strategies integrating AI search (AEO/GEO), automated pipelines, and BI analytics tailored to your revenue model.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-gradient text-white font-bold shadow-xl shadow-brand-blue/30 hover:scale-[1.02] transition-transform text-sm"
            >
              <span>Book a Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
