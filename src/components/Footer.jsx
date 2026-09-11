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
              {/* Social Links (Custom SVG Icons) */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-brand-cyan hover:border-brand-blue/40 hover:bg-white/10 transition-all"
                aria-label="X / Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-brand-cyan hover:border-brand-blue/40 hover:bg-white/10 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-brand-cyan hover:border-brand-blue/40 hover:bg-white/10 transition-all"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>
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
