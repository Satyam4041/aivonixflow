import { Link } from "react-router-dom";
import { 
  Rocket, 
  Search, 
  Megaphone, 
  Target, 
  Bot, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Cpu,
  Share2,
  DollarSign
} from "lucide-react";

export default function DigitalMarketingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <Link to="/services" className="hover:text-white transition-colors">Services</Link>
        <span>/</span>
        <span className="text-brand-purple font-medium">Digital Marketing & AI Growth</span>
      </div>

      {/* Hero Banner */}
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 mb-12 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-semibold text-brand-purple mb-6">
          <Rocket className="w-3.5 h-3.5" />
          <span>Next-Gen Performance Marketing & AI Search</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading max-w-3xl mb-6">
          Dominate Search & Ads in the <span className="text-gradient">Age of Generative AI</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
          Traditional SEO and generic ads are dead. We combine advanced AEO & GEO (AI Search Engine Optimization), ChatGPT advertising, and algorithmic PPC to capture high-intent buyers before your competitors even know they exist.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-gradient text-white font-bold shadow-lg shadow-brand-blue/30 hover:scale-[1.02] transition-transform text-sm"
          >
            <span>Claim Your AI Marketing Blueprint</span>
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
            AI Marketing, AEO, GEO & Performance Media
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Engineered to secure top-tier citation in ChatGPT, Perplexity, Google, and paid channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Search,
              title: "AEO (Answer Engine Optimization)",
              badge: "Perplexity & ChatGPT Search",
              desc: "Ensure your brand is the primary verified citation and recommended solution when buyers ask complex queries inside ChatGPT Search, Perplexity AI, Claude, and Gemini.",
              deliverables: [
                "Direct AI Engine Citation Audits",
                "Schema & Knowledge Graph Optimization",
                "LLM Vector Training Data Seeding",
              ],
            },
            {
              icon: Cpu,
              title: "GEO (Generative Engine Optimization)",
              badge: "Generative Search Overview",
              desc: "Optimize content architecture, authority footprint, and semantic context so generative search algorithms (Google SGE, Bing Copilot) feature your brand prominently in AI summaries.",
              deliverables: [
                "Semantic Authority Clustering",
                "Structured Data & Entity Graph Tuning",
                "Conversational Intent Funnels",
              ],
            },
            {
              icon: Bot,
              title: "ChatGPT Ads & AI Advertising",
              badge: "Emerging AI Channels",
              desc: "Pioneer new sponsored placements and AI-native promotional integrations across next-generation conversational AI platforms and conversational assistants.",
              deliverables: [
                "Early-Access AI Ad Placement Setup",
                "Contextual Conversational Ad Creative",
                "High-Intent AI Prompt Targeting",
              ],
            },
            {
              icon: DollarSign,
              title: "High-Performance PPC & Paid Search",
              badge: "Google & Microsoft Ads",
              desc: "Stop wasting ad spend on low-intent clicks. We engineer hyper-targeted Google Ads & Bing Search campaigns driven by automated bid management and negative-keyword filters.",
              deliverables: [
                "Hyper-Targeted B2B Keyword Campaigns",
                "Algorithmic Smart Bidding Setup",
                "Continuous CPA & ROAS Optimization",
              ],
            },
            {
              icon: Share2,
              title: "Paid Social & Performance Media",
              badge: "Meta, LinkedIn & X Ads",
              desc: "Reach exact decision-makers (CTOs, VPs, Founders) on LinkedIn and Meta with dynamic video creatives, interactive carousels, and account-based retargeting.",
              deliverables: [
                "Account-Based Marketing (ABM) Audiences",
                "High-Converting Creative Production",
                "Full-Funnel Retargeting Sequencing",
              ],
            },
            {
              icon: TrendingUp,
              title: "Autonomous AI Marketing Engines",
              badge: "Autonomous Growth",
              desc: "Automated content generation pipelines, dynamic personalization, and predictive lead nurturing that runs 24/7 with zero manual copy-pasting.",
              deliverables: [
                "Autonomous Multi-Channel Content Workflows",
                "Dynamic Email Personalization at Scale",
                "Predictive Ad Budget Allocation",
              ],
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass-card-interactive rounded-3xl p-7 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-cyan shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-brand-purple/20 text-brand-purple border border-brand-purple/30">
                      {item.badge}
                    </span>
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
                    Key Deliverables:
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
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/15 to-brand-blue/15 opacity-50 blur-2xl pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
            Ready to lead your industry in AI Search & Performance Ads?
          </h2>
          <p className="text-sm text-slate-300">
            Let our performance specialists audit your visibility across ChatGPT, Perplexity, Google SGE, and paid PPC funnels.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-gradient text-white font-bold shadow-lg shadow-brand-blue/30 hover:scale-[1.02] transition-transform text-sm"
            >
              <span>Schedule Growth Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
