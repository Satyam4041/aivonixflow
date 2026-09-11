import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  Server, 
  FileCheck, 
  EyeOff, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight,
  RefreshCw,
  Cpu,
  Layers,
  FileText
} from "lucide-react";

export default function SecurityPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-white/10 text-xs font-semibold text-brand-cyan mb-4">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Enterprise Security & Trust Center</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-heading mb-6">
          Hardened Architecture. <br />
          <span className="text-gradient">Zero Compromise on Trust.</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          At AivonixFlow, security is engineered into the foundation of every autonomous workflow, custom CRM, and enterprise application we build.
        </p>
      </div>

      {/* Security Pillars Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {/* Pillar 1: Encryption */}
        <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-4 hover:border-brand-cyan/40 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-cyan">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white font-heading">
            Military-Grade Encryption
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            All customer records, database volumes, and persistent storage are encrypted using AES-256 bit encryption at rest. All network communications use TLS 1.3 with Perfect Forward Secrecy (PFS).
          </p>
          <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-white/10">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>AES-256 At-Rest Data Encryption</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>TLS 1.3 In-Transit Network Security</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Automated Key Rotation & Secrets Management</span>
            </li>
          </ul>
        </div>

        {/* Pillar 2: Zero Retention AI */}
        <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-4 hover:border-brand-purple/40 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-purple">
            <EyeOff className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white font-heading">
            Zero-Data Retention AI
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            We deploy direct Enterprise Zero-Data Retention (ZDR) endpoints with OpenAI, Anthropic, and AWS Bedrock. Your business intelligence and confidential prompts are NEVER used to train public models.
          </p>
          <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-white/10">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Zero Model Training on Client Data</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Ephemeral Vector In-Memory Embeddings</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Strict PII Masking & Tokenization</span>
            </li>
          </ul>
        </div>

        {/* Pillar 3: Compliance */}
        <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-4 hover:border-brand-blue/40 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-blue">
            <FileCheck className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white font-heading">
            Regulatory Compliance
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Architectures aligned with SOC-2 Type II standards, ISO 27001 operational frameworks, GDPR right-to-erasure workflows, and HIPAA-ready healthcare CRM partitions.
          </p>
          <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-white/10">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>GDPR & CCPA Data Rights Compliance</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>HIPAA BAA Agreements for Healthcare</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>SOC-2 Aligned Audit Trails & Logging</span>
            </li>
          </ul>
        </div>

        {/* Pillar 4: IAM & Access Control */}
        <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-4 hover:border-brand-cyan/40 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-cyan">
            <Key className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white font-heading">
            Granular IAM & MFA
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Enforce Role-Based Access Control (RBAC) across all administrative surfaces. Enforce mandatory Multi-Factor Authentication (MFA), SAML 2.0 / Okta SSO integration, and session timeouts.
          </p>
          <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-white/10">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>SAML 2.0 / Okta & Google Workspace SSO</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Least-Privilege Principle Access</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Immutable Activity & Audit Logs</span>
            </li>
          </ul>
        </div>

        {/* Pillar 5: Infrastructure Defense */}
        <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-4 hover:border-brand-purple/40 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-purple">
            <Server className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white font-heading">
            Isolated VPC & Cloud Defense
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Deployments utilize dedicated Virtual Private Clouds (VPC) with segregated subnets, WAF (Web Application Firewall) rate-limiting, edge DDoS protection, and automated container scanning.
          </p>
          <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-white/10">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Dedicated VPC Multi-Tenant Segregation</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Enterprise Edge DDoS & Rate-Limiting</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Hourly Encrypted Snapshots & Failover</span>
            </li>
          </ul>
        </div>

        {/* Pillar 6: Continuous Pen-Testing */}
        <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-4 hover:border-brand-blue/40 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-blue">
            <RefreshCw className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white font-heading">
            Vulnerability Management
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Continuous CI/CD static application security testing (SAST), software composition analysis (SCA) with 0 known CVEs, and recurring external third-party penetration audits.
          </p>
          <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-white/10">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>0 Known Vulnerabilities in Dependencies</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Strict CSP & Injection Defense</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>99.99% Uptime Guarantee with SLA</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Vulnerability Disclosure & Direct Contact Box */}
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 max-w-4xl mx-auto text-center space-y-6">
        <div className="w-14 h-14 rounded-2xl bg-brand-surface border border-white/10 mx-auto flex items-center justify-center text-brand-cyan">
          <FileText className="w-7 h-7" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
          Responsible Vulnerability Disclosure
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          We maintain a dedicated security response protocol. If you believe you have found a security bug or vulnerability in any of our systems or client deployments, please contact our security architecture team immediately:
        </p>
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-mono text-sm sm:text-base">
          <Lock className="w-4 h-4 text-emerald-400" />
          <span>info@aivonixflow.com</span>
        </div>
        <p className="text-xs text-slate-400">
          Our security incident team acknowledges reports within 4 hours and provides remediation timelines within 24 hours.
        </p>
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/get-quote"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-gradient text-white text-sm font-bold shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 transition-all"
          >
            <span>Request Enterprise Security Review</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl glass-pill text-white text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            <span>Speak with a Solutions Architect</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
