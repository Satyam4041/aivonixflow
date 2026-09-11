import { Link } from "react-router-dom";
import { 
  Sparkles, 
  ArrowRight, 
  Bot, 
  Database, 
  Code2, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  CheckCircle2, 
  Play,
  Layers,
  ChevronRight,
  BarChart3,
  Rocket,
  Lock
} from "lucide-react";
import HeroCanvas from "../components/HeroCanvas";
import HeroTerminal from "../components/HeroTerminal";
import InteractiveWorkflow from "../components/InteractiveWorkflow";
import RoiCalculator from "../components/RoiCalculator";
import StatsSection from "../components/StatsSection";
import TestimonialsSection from "../components/TestimonialsSection";

const servicesList = [
  {
    id: "ai",
    title: "AI Automation",
    badge: "Autonomous Agents",
    description: "Custom multi-agent workflows, autonomous document processors, and fine-tuned LLMs that execute complex tasks without human intervention.",
    path: "/services/ai-automation",
    icon: Bot,
    gradient: "from-cyan-500/20 to-blue-500/5",
    borderGlow: "hover:border-brand-cyan/50",
    tags: ["LLM Agents", "RAG Systems", "Cognitive OCR", "Auto-Triage"],
  },
  {
    id: "marketing",
    title: "Digital Marketing & AI Growth",
    badge: "AEO & GEO Ads",
    description: "Dominate search in the AI era with Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), ChatGPT Ads, and algorithmic PPC.",
    path: "/services/digital-marketing",
    icon: Rocket,
    gradient: "from-purple-500/20 to-blue-500/5",
    borderGlow: "hover:border-brand-purple/50",
    tags: ["AI Marketing", "AEO & GEO", "ChatGPT Ads", "High-ROAS PPC"],
  },
  {
    id: "crm",
    title: "Custom CRM Development",
    badge: "11+ Industry Verticals",
    description: "Bespoke, zero-license-fee CRMs engineered for your exact business: Healthcare & Clinic, Matrimonial, Hotel & Hospitality, Task & Project Systems, Real Estate, and more.",
    path: "/services/crm-development",
    icon: Database,
    gradient: "from-blue-500/20 to-indigo-500/5",
    borderGlow: "hover:border-brand-blue/50",
    tags: ["Healthcare CRM", "Matrimonial CRM", "Hotel Management", "Task & Project CRM", "Real Estate"],
  },
  {
    id: "software",
    title: "Custom Software",
    badge: "Cloud Architecture",
    description: "Bespoke SaaS platforms, internal operations dashboards, and high-throughput microservices tailored precisely to your operational workflow.",
    path: "/services/custom-software",
    icon: Code2,
    gradient: "from-indigo-500/20 to-purple-500/5",
    borderGlow: "hover:border-brand-purple/50",
    tags: ["Custom Dashboards", "REST & GraphQL", "Microservices", "Event-Driven"],
  },
  {
    id: "web",
    title: "Web Development",
    badge: "High Conversion",
    description: "Ultra-fast digital experiences with 99+ Lighthouse performance, fluid interactive micro-animations, and conversion-optimized architectures.",
    path: "/services/web-development",
    icon: Globe,
    gradient: "from-purple-500/20 to-pink-500/5",
    borderGlow: "hover:border-brand-violet/50",
    tags: ["React & Next.js", "GSAP Animations", "Tailwind CSS", "Edge CDN"],
  },
  {
    id: "data",
    title: "Data & Data Analytics",
    badge: "Predictive BI",
    description: "Enterprise data warehouses, automated BI dashboards, conversion rate optimization (CRO), and attribution modeling for executive clarity.",
    path: "/services/data-analytics",
    icon: BarChart3,
    gradient: "from-cyan-500/20 to-emerald-500/5",
    borderGlow: "hover:border-brand-cyan/50",
    tags: ["Data Insights", "Live BI Dashboards", "CRO Testing", "Attribution Modeling"],
  },
];

const techLogos = [
  "OpenAI GPT-4o",
  "Anthropic Claude 3.5",
  "HubSpot CRM",
  "Salesforce",
  "LangChain",
  "Pinecone Vector DB",
  "AWS Cloud",
  "Stripe Billing",
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-brand-darker">
      {/* ----------------- HERO SECTION ----------------- */}
      <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden bg-grid-pattern">
        {/* Interactive Neural Canvas */}
        <HeroCanvas />

        {/* Ambient Gradient Background Blobs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-brand-blue/25 via-brand-purple/20 to-brand-cyan/20 blur-[130px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Top Floating Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill border border-white/10 text-xs font-semibold text-slate-200 mb-8 shadow-xl shadow-brand-blue/10 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping"></span>
            <span className="tracking-wide">Where AI Meets Automation</span>
            <span className="text-slate-600">|</span>
            <span className="text-brand-cyan font-bold">Enterprise Grade B2B Systems</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-5xl mx-auto leading-[1.08] mb-6 font-heading">
            Automate what <br className="hidden sm:inline" />
            <span className="text-gradient">slows you down.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            AivonixFlow builds AI-powered automation, CRM systems, and custom software that lets your business run itself. Eradicate manual busywork and scale with zero headcount friction.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-14">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brand-gradient text-white font-bold shadow-2xl shadow-brand-blue/40 hover:shadow-brand-blue/60 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm group"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl glass-card text-slate-200 font-semibold hover:text-white hover:border-white/20 hover:bg-white/5 transition-all text-sm"
            >
              <span>Explore All Capabilities</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

          {/* Tech Integration Ticker */}
          <div className="pt-2 pb-6">
            <div className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-3">
              Architected For Modern Enterprise Stacks
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
              {techLogos.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono text-slate-400 bg-white/[0.03] border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Live AI Terminal Preview */}
          <HeroTerminal />
        </div>
      </section>

      {/* ----------------- SERVICES OVERVIEW ----------------- */}
      <section className="py-24 relative z-10 border-t border-white/5 bg-brand-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-semibold text-brand-cyan mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Tailored Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
              Intelligent Services Engineered For <br />
              <span className="text-gradient">Maximum Leverage</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
              We do not sell cookie-cutter templates. Every system is bespoke, battle-tested, and integrated directly into your existing company infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {servicesList.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className={`glass-card-interactive rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col justify-between relative overflow-hidden group ${service.borderGlow}`}
                >
                  <div className={`absolute -right-20 -bottom-20 w-60 h-60 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500`}></div>

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-cyan group-hover:bg-brand-blue/20 group-hover:scale-110 transition-all duration-300 shadow-lg">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-surface/80 text-brand-cyan border border-brand-cyan/20">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white font-heading group-hover:text-brand-cyan transition-colors mb-3">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-400 bg-brand-darker/60 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5">
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
        </div>
      </section>

      {/* ----------------- WHY AIVONIXFLOW ----------------- */}
      <section className="py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-semibold text-brand-purple mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>The AivonixFlow Edge</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
              Why High-Growth Companies <br />
              <span className="text-gradient">Choose AivonixFlow</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
              We bridge the gap between abstract AI buzzwords and pragmatic, revenue-driving automation systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "14-Day Deployment",
                desc: "We build and ship live production automations in weeks, not 6-month consulting roadmaps.",
              },
              {
                icon: Cpu,
                title: "AI-First Engineering",
                desc: "Modern autonomous agents with reasoning capabilities, not fragile Zapier single-point scripts.",
              },
              {
                icon: ShieldCheck,
                title: "Bank-Grade Security",
                desc: "Strict zero-data-retention AI protocols, end-to-end encryption, and full compliance readiness.",
              },
              {
                icon: Bot,
                title: "Dedicated Engineers",
                desc: "Direct Slack channel with senior systems architects who actively monitor and evolve your automations.",
              },
            ].map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="glass-card-interactive rounded-3xl p-7 border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-cyan mb-5 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white font-heading mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------- INTERACTIVE WORKFLOW ----------------- */}
      <section className="py-24 relative z-10 border-t border-white/5 bg-brand-dark/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-semibold text-brand-cyan mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>Battle-Tested Execution</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
              Our 4-Stage Autonomous <br />
              <span className="text-gradient">Implementation Framework</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
              Click through the phases to see how we take your team from manual friction to an autonomous machine.
            </p>
          </div>

          <InteractiveWorkflow />
        </div>
      </section>

      {/* ----------------- ROI CALCULATOR ----------------- */}
      <section className="py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RoiCalculator />
        </div>
      </section>

      {/* ----------------- STATS SECTION ----------------- */}
      <section className="py-20 relative z-10 border-t border-white/5 bg-brand-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
              Numbers That Speak For <span className="text-gradient">Themselves</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Quantifiable operational velocity delivered to our client partners.
            </p>
          </div>

          <StatsSection />
        </div>
      </section>

      {/* ----------------- TESTIMONIALS ----------------- */}
      <section className="py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-semibold text-brand-cyan mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Client Success Stories</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
              Loved by Founders & <br />
              <span className="text-gradient">Revenue Leaders</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
              Real results from operations teams who chose autonomous workflows over manual drudgery.
            </p>
          </div>

          <TestimonialsSection />
        </div>
      </section>

      {/* ----------------- ENTERPRISE SECURITY & COMPLIANCE (10/10 HARDENED) ----------------- */}
      <section className="py-20 relative z-10 border-t border-white/5 bg-brand-darker/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 blur-3xl pointer-events-none rounded-full"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-white/10 text-xs font-semibold text-brand-cyan">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>10/10 Enterprise Security Standard</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
                  Bank-Grade Encryption. Zero Data Retention AI.
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Every custom CRM, agentic workflow, and web platform is engineered to the highest compliance standards. Your internal data is never used to train public AI models.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-1">
                      <Lock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>AES-256</span>
                    </div>
                    <div className="text-[11px] text-slate-400">At-rest encryption</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
                      <span>Zero Retention</span>
                    </div>
                    <div className="text-[11px] text-slate-400">Private AI pipelines</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple" />
                      <span>SOC-2 Aligned</span>
                    </div>
                    <div className="text-[11px] text-slate-400">Immutable audit logs</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" />
                      <span>Mutual NDA</span>
                    </div>
                    <div className="text-[11px] text-slate-400">Strict confidentiality</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center sm:items-end justify-center gap-3">
                <Link
                  to="/security"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-gradient text-white text-sm font-bold shadow-lg shadow-brand-blue/30 hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <span>View Security Whitepaper</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-xs text-slate-400">HIPAA, GDPR & CCPA compliant architectures</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- FINAL CTA SECTION ----------------- */}
      <section className="py-24 relative z-10 border-t border-white/5 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl p-10 sm:p-16 glass-card border border-white/10 overflow-hidden text-center shadow-2xl">
            {/* Background glowing radiant gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-brand-purple/20 to-brand-cyan/20 opacity-40 blur-2xl pointer-events-none"></div>

            <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-semibold text-brand-cyan mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zero Risk • Immediate Technical Blueprint</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
                Ready to stop burning payroll on <br />
                <span className="text-gradient">manual operations?</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Schedule a complimentary 30-minute Architecture Review. We’ll map your current processes and demonstrate exactly where AI automation will recover 15+ hours every week.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brand-gradient text-white font-bold shadow-2xl shadow-brand-blue/50 hover:scale-[1.03] transition-all text-sm group cursor-pointer"
                >
                  <span>Schedule Strategy Session</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl glass-card text-slate-200 font-semibold hover:text-white hover:border-white/20 transition-all text-sm"
                >
                  <span>Learn About Our Philosophy</span>
                </Link>
              </div>

              <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                  No pressure sales pitch
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                  Direct architect conversation
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                  Custom tailored ROI model
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
