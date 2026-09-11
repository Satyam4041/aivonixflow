import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Database, 
  HeartHandshake, 
  Stethoscope, 
  Hotel, 
  CheckSquare, 
  Building, 
  GraduationCap, 
  Dumbbell, 
  Truck, 
  Scale, 
  ShieldCheck, 
  CreditCard, 
  Plane, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight,
  Users,
  Layers,
  Lock,
  MessageSquareCode
} from "lucide-react";

const crmIndustries = [
  {
    id: "healthcare",
    name: "Healthcare & Clinic CRM",
    icon: Stethoscope,
    tag: "Medical & Health",
    headline: "Automated Patient Lifecycle, Doctor Scheduling & Tele-Health Portals",
    desc: "Purpose-built for hospitals, multi-specialty clinics, and wellness centers. Automate appointment bookings, prescription histories, EMR/EHR sync, and patient follow-up reminders.",
    features: [
      "Online Doctor Appointment & Token System",
      "Digital Electronic Health Records (EHR/EMR)",
      "Automated WhatsApp & SMS Medicine Reminders",
      "Integrated Diagnostic Lab Reports Portal",
      "HIPAA-Ready Patient Data Encryption",
      "Tele-Consultation Video Calling Gateway",
    ],
  },
  {
    id: "matrimonial",
    name: "Matrimonial & Matchmaking CRM",
    icon: HeartHandshake,
    tag: "Matchmaking Tech",
    headline: "Intelligent Candidate Profiling, Compatibility Scoring & Family Portals",
    desc: "Engineered for matrimonial bureaus and digital matchmaking platforms. Manage verified profiles, automated horoscope/kundali matching, relationship manager pipelines, and premium member subscriptions.",
    features: [
      "AI Compatibility & Preference Matching Engine",
      "ID & Document Verification Workflow (Aadhaar/Passport)",
      "Relationship Manager (RM) Lead Assignment",
      "Horoscope & Kundali Matching Integration",
      "Secure Photo Privacy & Contact Unlocking Controls",
      "Automated Renewal Invoicing & Membership Tiers",
    ],
  },
  {
    id: "hotel",
    name: "Hotel & Hospitality CRM",
    icon: Hotel,
    tag: "Hotels & Resorts",
    headline: "Centralized Reservation Engine, Guest Experience & Multi-Property Sync",
    desc: "Designed for boutique hotels, luxury resorts, and hotel chains. Consolidate OTA bookings (Booking.com, Agoda), direct room reservations, housekeeping status, and automated guest concierge.",
    features: [
      "Real-Time Multi-Room Inventory & Rate Manager",
      "Seamless OTA Channel Manager Integration",
      "Contactless Mobile Check-In & Digital Keycard",
      "Automated Guest Preference & Dining History",
      "Housekeeping & Room Service Dispatch Board",
      "Post-Stay Review & Loyalty Points Rewards",
    ],
  },
  {
    id: "task",
    name: "Task & Project Management CRM",
    icon: CheckSquare,
    tag: "Enterprise Ops",
    headline: "Sprint Workflows, Billable Hours Tracking & Milestone Gantt Boards",
    desc: "Tailored for software agencies, construction firms, and consulting enterprises. Track projects from client proposal to final milestone handover with sub-task dependencies and employee timesheets.",
    features: [
      "Interactive Kanban, Gantt & List Views",
      "Automated Task Dependencies & Deadline Alerts",
      "Employee Billable Hours & Timesheet Logging",
      "Client Collaboration Portal with Live Approvals",
      "Sprint Velocity & Team Capacity Analytics",
      "Custom Role Permissions & Security Groups",
    ],
  },
  {
    id: "realestate",
    name: "Real Estate & Brokerage CRM",
    icon: Building,
    tag: "Real Estate",
    headline: "Inventory Management, Site Visit Dispatch & Broker Commission Tracking",
    desc: "Built for real estate developers, brokers, and property portals. Automatically capture property buyer inquiries, match with inventory, dispatch site visit drivers, and calculate broker payouts.",
    features: [
      "Automated 99acres & MagicBricks Inbound Lead Capture",
      "Interactive Property Inventory & Unit Availability Grid",
      "Geo-Tracked Field Agent Site Visit Management",
      "Broker & Channel Partner Commission Payout Ledger",
      "Digital Booking Agreements & Payment Receipts",
      "Automated Drip Follow-ups via WhatsApp & Email",
    ],
  },
  {
    id: "education",
    name: "Education & Institute CRM",
    icon: GraduationCap,
    tag: "EdTech & Colleges",
    headline: "Student Inquiries, Admission Funnel & Automated Fee Reminders",
    desc: "Complete operational CRM for universities, coaching institutes, and schools. Streamline admissions counseling, entrance test bookings, fee installment tracking, and parent communications.",
    features: [
      "Counselor Lead Distribution & Call Logging",
      "Online Admission Application & Document Upload",
      "Automated Student Fee Installment Reminders",
      "Parent Attendance & Exam Report Card App",
      "Batch Scheduling & Faculty Classroom Allocation",
      "Live Admission Conversion Performance Dashboard",
    ],
  },
  {
    id: "fitness",
    name: "Gym, Fitness & Club CRM",
    icon: Dumbbell,
    tag: "Gym & Fitness",
    headline: "Membership Subscriptions, Biometric Access & Personal Trainer Booking",
    desc: "Crafted for gym franchises, crossfit boxes, and yoga studios. Handle recurring member billing, biometric/QR check-in hardware, personal trainer session slots, and personalized workout logs.",
    features: [
      "Biometric Turnstile & QR Mobile Check-In Sync",
      "Recurring Auto-Debit Membership Subscription Engine",
      "Trainer Class Booking & Slot Reservation System",
      "Dietary Chart & Fitness Progress Tracker",
      "Locker & Personal Equipment Allocation Ledger",
      "Inactive Member Re-Engagement Auto-Campaigns",
    ],
  },
  {
    id: "logistics",
    name: "Logistics & Transport CRM",
    icon: Truck,
    tag: "Supply Chain",
    headline: "Consignment Booking, Fleet Tracking & Freight Quotation Systems",
    desc: "Architected for freight forwarders, fleet owners, and courier companies. Manage instant shipment quotes, docket/LR generation, real-time vehicle GPS sync, and client POD verification.",
    features: [
      "Automated Distance & Weight-Based Freight Quoting",
      "E-Way Bill & Consignment Docket (LR) Generation",
      "Live GPS Vehicle Tracking & Delay Alerts",
      "Proof of Delivery (POD) Mobile Signature Upload",
      "Driver Batta & Trip Expense Accounting",
      "Client Tracking Portal with Real-Time Webhooks",
    ],
  },
  {
    id: "legal",
    name: "Legal & Law Firm CRM",
    icon: Scale,
    tag: "Law & Legal",
    headline: "Case File Management, Court Hearing Calendar & Client Retainers",
    desc: "Confidential CRM for law firms, legal counsels, and advocates. Track active court litigation cases, automatically sync e-Court hearing dates, log billable consultation minutes, and store NDA-protected vaults.",
    features: [
      "Case Stage Tracking & Case Diary Digitization",
      "e-Court Automated Hearing Date Synchronizer",
      "Hourly Lawyer Time-Tracking & Retainer Billing",
      "Client Document Vault with Tamper-Proof Audit Trail",
      "Automated Legal Notice & Agreement Templates",
      "Confidential Conflict of Interest Screening",
    ],
  },
  {
    id: "finance",
    name: "Finance, Lending & Loan CRM",
    icon: CreditCard,
    tag: "Fintech & Lending",
    headline: "Loan Origination System, KYC Verification & Automated Recovery Drip",
    desc: "Enterprise platform for NBFCs, micro-finance lenders, and loan brokers. Manage loan applications, CIBIL/Experian credit pull, digital KYC document verifications, and automated EMI reminders.",
    features: [
      "Multi-Lender Loan Origination & Eligibility Engine",
      "Instant PAN, Aadhaar & Bank Statement OCR Verification",
      "Automated CIBIL Credit Bureau Scoring Connector",
      "EMI Due Date Reminders via WhatsApp & IVR Voice Calls",
      "Direct NACH / e-Mandate Auto-Debit Integration",
      "Field Recovery Agent Allocation & Geo-Tagging",
    ],
  },
  {
    id: "travel",
    name: "Travel & Tour Agency CRM",
    icon: Plane,
    tag: "Tours & Travel",
    headline: "Dynamic Itinerary Builder, Flight/Hotel Vouchers & Visa Tracking",
    desc: "For travel agencies and destination management companies (DMCs). Build day-by-day customized travel itineraries, generate branded PDF quotes, and track customer visa document status.",
    features: [
      "Drag-and-Drop Visual Itinerary Builder with Photos",
      "Instant Supplier Costing & Profit Margin Calculator",
      "One-Click Branded PDF Quotation & Voucher Generator",
      "Visa Application Document Checklist & Tracker",
      "Payment Milestone Gateway (Advance + Balance)",
      "Post-Trip Feedback Collection & Referral Workflow",
    ],
  },
];

export default function CrmAutomationPage() {
  const [activeTab, setActiveTab] = useState(crmIndustries[0].id);
  const selectedCrm = crmIndustries.find((item) => item.id === activeTab) || crmIndustries[0];
  const SelectedIcon = selectedCrm.icon;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <Link to="/services" className="hover:text-white transition-colors">Services</Link>
        <span>/</span>
        <span className="text-brand-cyan font-medium">Custom CRM Development</span>
      </div>

      {/* Hero Banner */}
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 mb-16 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-brand-gradient opacity-15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-semibold text-brand-cyan mb-6">
          <Database className="w-3.5 h-3.5" />
          <span>Bespoke Industry CRM Architecture</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading max-w-4xl mb-6">
          Custom CRM Development Tailored For <br />
          <span className="text-gradient">Your Exact Industry Operations</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">
          Generic CRMs like Salesforce and Zoho force you to change your business to fit their software. We build <strong>bespoke, zero-license-fee custom CRMs</strong> from scratch — engineered specifically for your industry's exact workflow, team roles, and revenue pipelines.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-gradient text-white font-bold shadow-xl shadow-brand-blue/30 hover:scale-[1.02] transition-transform text-sm"
          >
            <span>Request Custom CRM Architecture Blueprint</span>
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

      {/* ----------------- 11+ INDUSTRY CRM SHOWCASE (INTERACTIVE TABS) ----------------- */}
      <section className="mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-semibold text-brand-cyan mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>11+ Industry-Specific CRMs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Choose Your Industry Vertical
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Click on any sector below to see how we architect specialized CRM solutions for that domain.
          </p>
        </div>

        {/* Industry Pill Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {crmIndustries.map((ind) => {
            const Icon = ind.icon;
            const isActive = activeTab === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${
                  isActive
                    ? "bg-brand-blue/20 text-brand-cyan border-brand-blue shadow-lg shadow-brand-blue/20 scale-105"
                    : "bg-brand-surface/60 text-slate-300 border-white/10 hover:border-white/25 hover:text-white hover:bg-brand-surface"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{ind.name.split(" CRM")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Vertical Detail Showcase Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/25">
                <span>VERTICAL: {selectedCrm.tag}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-heading leading-tight">
                {selectedCrm.name}
              </h3>

              <div className="text-base text-brand-cyan font-semibold">
                {selectedCrm.headline}
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {selectedCrm.desc}
              </p>

              <div>
                <div className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
                  Core Modules Built Into This CRM:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedCrm.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-brand-gradient text-white font-bold text-sm shadow-lg shadow-brand-blue/30 hover:scale-[1.02] transition-transform"
                >
                  <span>Build My {selectedCrm.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Visual Architecture Box */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-3xl bg-brand-darker/90 border border-white/10 p-8 flex flex-col items-center justify-center text-center shadow-2xl">
                <div className="w-20 h-20 rounded-2xl bg-brand-surface border border-white/15 flex items-center justify-center text-brand-cyan mb-6 shadow-glow-blue">
                  <SelectedIcon className="w-10 h-10" />
                </div>
                <span className="text-xs uppercase tracking-widest text-slate-400 font-mono mb-1">
                  100% Custom Source Code
                </span>
                <h4 className="text-xl font-bold text-white font-heading mb-3">
                  Zero Per-User Monthly Fees
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  You own the intellectual property and database completely. Scale from 10 to 10,000 users without software license penalties.
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-brand-cyan">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5" /> Enterprise Secure
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquareCode className="w-3.5 h-3.5" /> API Native
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- WHY CUSTOM CRM VS GENERIC SOFTWARE ----------------- */}
      <section className="mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-white font-heading">
            Why Custom CRM Beats Off-The-Shelf SaaS
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            The difference between renting a generic software tool and owning your operational engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center text-emerald-400 mb-4">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">Zero Per-User Seat Fees</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Salesforce and HubSpot charge $100–$300 per user every month. With our custom CRM, add unlimited staff, franchisees, and agents at zero incremental software cost.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-cyan mb-4">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">100% Data Sovereignty</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Your patient records, customer matrimonial profiles, and financial ledger data stay in your dedicated cloud database (AWS, Google Cloud, or on-premise), never shared with third-party SaaS vendors.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-purple mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">Exact Workflow Fit</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              No bloated useless buttons or missing fields. Every single screen, button, and report is built exclusively around the exact way your team operates day in and day out.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Consultation Card */}
      <div className="glass-card rounded-3xl p-10 sm:p-14 border border-white/10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 opacity-30 blur-2xl pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Ready to build a CRM tailored to your industry?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Talk directly with our CRM system architects. We will blueprint your exact database schema, workflow stages, and user roles in a 30-minute discovery call.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-gradient text-white font-bold shadow-xl shadow-brand-blue/30 hover:scale-[1.02] transition-transform text-sm"
            >
              <span>Book CRM Discovery Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
