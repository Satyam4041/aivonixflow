import { Link } from "react-router-dom";
import { Compass, ArrowRight } from "lucide-react";

/**
 * Replaces the previous catch-all that rendered the homepage. Serving homepage
 * content on every unknown URL made each typo look like a real page to Google
 * (a soft 404), which spreads ranking signals across infinite duplicates.
 * This page is marked noindex via NOT_FOUND_META in siteConfig.
 */
export default function NotFoundPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-semibold text-brand-cyan mb-6">
        <Compass className="w-3.5 h-3.5" />
        <span>404 — Page Not Found</span>
      </div>

      <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-heading mb-5">
        This page doesn&apos;t <span className="text-gradient">exist.</span>
      </h1>

      <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
        The link may be outdated or mistyped. Everything AivonixFlow builds is
        one click away below.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
        <Link
          to="/services"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brand-gradient text-white font-bold shadow-2xl shadow-brand-blue/40 hover:scale-[1.02] transition-all text-sm group"
        >
          <span>Explore All Services</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          to="/contact"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl glass-card text-slate-200 font-semibold hover:text-white hover:border-white/20 transition-all text-sm"
        >
          <span>Book a Free Consultation</span>
        </Link>
      </div>

      <nav aria-label="Popular pages" className="text-sm">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-slate-400">
          {[
            { name: "Home", path: "/" },
            { name: "AI Automation", path: "/services/ai-automation" },
            { name: "Custom CRM Development", path: "/services/crm-development" },
            { name: "Custom Software", path: "/services/custom-software" },
            { name: "Web Development", path: "/services/web-development" },
            { name: "Data & Analytics", path: "/services/data-analytics" },
            { name: "Digital Marketing", path: "/services/digital-marketing" },
            { name: "About", path: "/about" },
          ].map((item) => (
            <li key={item.path}>
              <Link to={item.path} className="hover:text-white transition-colors">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
