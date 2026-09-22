import { Link } from "react-router-dom";
import { 
  Bot, 
  Database, 
  Code2, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  Sparkles,
  BarChart3,
  Rocket
} from "lucide-react";
import cleanLogo from "../assets/logo-clean.png";
import { SOCIAL_PROFILES } from "../seo/siteConfig.js";

/** Brand marks, keyed by the profile names in SOCIAL_PROFILES. */
const SOCIAL_ICON_PATHS = {
  Facebook:
    "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  Instagram:
    "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
};

const servicesLinks = [
  { name: "AI Automation", path: "/services/ai-automation", icon: Bot },
  { name: "Digital Marketing", path: "/services/digital-marketing", icon: Rocket },
  { name: "Custom CRM Development", path: "/services/crm-development", icon: Database },
  { name: "Custom Software", path: "/services/custom-software", icon: Code2 },
  { name: "Web Development", path: "/services/web-development", icon: Globe },
  { name: "Data & Analytics", path: "/services/data-analytics", icon: BarChart3 },
];

const companyLinks = [
  { name: "Home", path: "/" },
  { name: "All Services", path: "/services" },
  { name: "Get a Quote", path: "/get-quote" },
  { name: "Free AI Audit", path: "/free-audit" },
  { name: "Security & Trust", path: "/security" },
  { name: "About Us", path: "/about" },
  { name: "Contact & Consultation", path: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-darker border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Subtle background ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block group focus:outline-none">
              <img
                src={cleanLogo}
                alt="AivonixFlow — Where AI meets automation"
                className="h-20 sm:h-24 md:h-[96px] w-auto object-contain select-none transition-transform group-hover:scale-105 drop-shadow-[0_2px_16px_rgba(56,189,248,0.2)]"
              />
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              We engineer intelligent autonomous workflows, enterprise CRM automations, and bespoke software systems designed to scale modern businesses effortlessly.
            </p>

            <div className="pt-2 flex items-center gap-3">
              {/* Real profiles only — these same URLs feed Organization.sameAs. */}
              {SOCIAL_PROFILES.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-brand-cyan hover:border-brand-blue/40 hover:bg-white/10 transition-all"
                  aria-label={`AivonixFlow on ${profile.name}`}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={SOCIAL_ICON_PATHS[profile.name]} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4 font-heading">
              Services
            </h3>
            <ul className="space-y-2.5">
              {servicesLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="group text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                      <Icon className="w-3.5 h-3.5 text-slate-500 group-hover:text-brand-cyan transition-colors" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4 font-heading">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-brand-cyan" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4 font-heading">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                {/* TODO: Replace with official client email when provided */}
                <a
                  href="mailto:info@aivonixflow.com"
                  className="hover:text-white transition-colors font-medium text-slate-200"
                >
                  info@aivonixflow.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span>San Francisco, CA & Global Remote</span>
              </li>
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-cyan hover:underline"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Start a New Project</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} AivonixFlow. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Where AI meets automation</span>
            <span className="text-slate-600">|</span>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
