import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Bot, 
  Database, 
  Code2, 
  Globe, 
  ArrowRight,
  BarChart3,
  Rocket
} from "lucide-react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import cleanLogo from "../assets/logo-clean.png";

const services = [
  {
    name: "AI Automation",
    description: "Autonomous LLM agents, cognitive workflows, and neural processing.",
    path: "/services/ai-automation",
    icon: Bot,
  },
  {
    name: "Digital Marketing",
    description: "AI Search Optimization (AEO/GEO), ChatGPT Ads & PPC.",
    path: "/services/digital-marketing",
    icon: Rocket,
  },
  {
    name: "Custom CRM Development",
    description: "Healthcare, Matrimonial, Hotel, Task & 11+ industry verticals.",
    path: "/services/crm-development",
    icon: Database,
  },
  {
    name: "Custom Software",
    description: "Enterprise SaaS architectures, portals, and high-throughput APIs.",
    path: "/services/custom-software",
    icon: Code2,
  },
  {
    name: "Web Development",
    description: "Ultra-fast digital platforms engineered for conversion and speed.",
    path: "/services/web-development",
    icon: Globe,
  },
  {
    name: "Data & Analytics",
    description: "Enterprise BI dashboards, predictive intelligence, and CRO.",
    path: "/services/data-analytics",
    icon: BarChart3,
  },
];

export default function Navbar() {
  const { isScrolled } = useScrollPosition(20);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const isServicesActive = location.pathname.startsWith("/services");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-2 shadow-2xl shadow-black/60"
          : "bg-brand-darker/70 backdrop-blur-xl py-3 border-b border-white/[0.06]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Area: Pure, large, transparent logo image — seamlessly blended, high-clarity brand & tagline */}
          <Link
            to="/"
            className="flex items-center focus:outline-none transition-transform hover:scale-[1.02] active:scale-[0.98] select-none py-0.5"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img
              src={cleanLogo}
              alt="AivonixFlow — Where AI meets automation"
              className="h-20 sm:h-24 md:h-[96px] lg:h-[104px] w-auto object-contain drop-shadow-[0_2px_16px_rgba(56,189,248,0.25)]"
            />
          </Link>

          {/* Desktop Navigation Links — Significantly larger & more premium */}
          <nav className="hidden md:flex items-center gap-2 bg-brand-surface/50 p-2 rounded-2xl border border-white/10 backdrop-blur-2xl shadow-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-6 py-2.5 text-base font-semibold rounded-xl transition-all duration-200 ${
                  isActive
                    ? "text-white bg-white/10 shadow-sm border border-white/15"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.08]"
                }`
              }
            >
              Home
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <NavLink
                to="/services"
                className={`flex items-center gap-2 px-6 py-2.5 text-base font-semibold rounded-xl transition-all duration-200 ${
                  isServicesActive
                    ? "text-white bg-white/10 shadow-sm border border-white/15"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-brand-cyan" : "text-slate-400"
                  }`}
                />
              </NavLink>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-3 w-88 p-3 rounded-2xl glass-card border border-white/15 shadow-2xl backdrop-blur-2xl z-50"
                  >
                    <div className="px-3 py-2 border-b border-white/10 mb-2 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Our Core Capabilities
                      </span>
                      <Link
                        to="/services"
                        className="text-xs text-brand-cyan hover:underline flex items-center gap-1 font-semibold"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        All Services <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="space-y-1">
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.path}
                            to={service.path}
                            onClick={() => setServicesDropdownOpen(false)}
                            className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/[0.08] transition-all border border-transparent hover:border-white/10"
                          >
                            <div className="p-2.5 rounded-xl bg-white/5 text-slate-300 group-hover:text-brand-cyan group-hover:bg-brand-blue/20 transition-all shrink-0">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors">
                                {service.name}
                              </div>
                              <p className="text-xs text-slate-400 leading-snug line-clamp-1 mt-0.5">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink
              to="/free-audit"
              className={({ isActive }) =>
                `flex items-center gap-2 px-5 py-2.5 text-base font-semibold rounded-xl transition-all duration-200 ${
                  isActive
                    ? "text-brand-cyan bg-brand-cyan/15 shadow-sm border border-brand-cyan/40"
                    : "text-brand-cyan hover:text-white hover:bg-brand-cyan/10"
                }`
              }
            >
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
              <span>Free Audit</span>
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `px-6 py-2.5 text-base font-semibold rounded-xl transition-all duration-200 ${
                  isActive
                    ? "text-white bg-white/10 shadow-sm border border-white/15"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.08]"
                }`
              }
            >
              Blog
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-6 py-2.5 text-base font-semibold rounded-xl transition-all duration-200 ${
                  isActive
                    ? "text-white bg-white/10 shadow-sm border border-white/15"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.08]"
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-6 py-2.5 text-base font-semibold rounded-xl transition-all duration-200 ${
                  isActive
                    ? "text-white bg-white/10 shadow-sm border border-white/15"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.08]"
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Desktop Right Action: Get Quote Primary CTA */}
          <div className="hidden md:flex items-center">
            <Link
              to="/get-quote"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-brand-gradient text-white text-base font-bold shadow-xl shadow-brand-blue/30 hover:shadow-brand-blue/60 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 group"
            >
              <span>Get Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden glass-card border-t border-b border-white/10 mt-3 px-4 pt-4 pb-6 mx-3 rounded-2xl backdrop-blur-3xl shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-5 py-3.5 rounded-xl text-base font-semibold flex items-center justify-between ${
                  location.pathname === "/"
                    ? "bg-brand-blue/20 text-white border border-brand-blue/40"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                <span>Home</span>
              </Link>

              <div className="pt-2 pb-1">
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-5 py-3.5 rounded-xl text-base font-semibold flex items-center justify-between ${
                    location.pathname === "/services"
                      ? "bg-brand-blue/20 text-white border border-brand-blue/40"
                      : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  <span>All Services</span>
                  <ArrowRight className="w-4 h-4 text-brand-cyan" />
                </Link>

                <div className="ml-3 mt-2 pl-3 border-l border-white/10 space-y-1.5">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3.5 py-2.5 text-sm rounded-xl font-medium ${
                        location.pathname === service.path
                          ? "text-brand-cyan bg-white/10 font-bold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-5 py-3.5 rounded-xl text-base font-semibold ${
                  location.pathname.startsWith("/blog")
                    ? "bg-brand-blue/20 text-white border border-brand-blue/40"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                Blog
              </Link>

              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-5 py-3.5 rounded-xl text-base font-semibold ${
                  location.pathname === "/about"
                    ? "bg-brand-blue/20 text-white border border-brand-blue/40"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                About Us
              </Link>

              <Link
                to="/free-audit"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-5 py-3.5 rounded-xl text-base font-semibold flex items-center justify-between ${
                  location.pathname === "/free-audit"
                    ? "bg-brand-blue/20 text-white border border-brand-blue/40"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                <span>Free AI Audit</span>
                <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono">Worth $100</span>
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-5 py-3.5 rounded-xl text-base font-semibold ${
                  location.pathname === "/contact"
                    ? "bg-brand-blue/20 text-white border border-brand-blue/40"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                Contact
              </Link>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <Link
                  to="/get-quote"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-brand-gradient text-white text-base font-bold shadow-xl shadow-brand-blue/30"
                >
                  <span>Get Custom Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
