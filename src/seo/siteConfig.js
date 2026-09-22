/**
 * Single source of truth for all SEO / AEO metadata.
 *
 * Imported by two very different consumers, so it must stay pure data with no
 * React, no asset imports and no browser globals:
 *   1. <Seo /> at runtime, for client-side route changes.
 *   2. scripts/seo-build.mjs at build time, which bakes this into static HTML,
 *      sitemap.xml, robots.txt and llms.txt.
 */

export const SITE = {
  name: "AivonixFlow",
  legalName: "AivonixFlow",
  // Apex 308-redirects to www, so www is the canonical host.
  origin: "https://www.aivonixflow.com",
  tagline: "Where AI Meets Automation",
  description:
    "AivonixFlow builds AI-powered automation, CRM systems, and custom software that lets your business run itself.",
  email: "info@aivonixflow.com",
  areaServed: "Worldwide",
  locale: "en_US",
  lang: "en",
  ogImage: "/og-image.png",
  logo: "/logo.png",
  twitterCard: "summary_large_image",
};

/**
 * Verified profile URLs, used for Organization.sameAs and the footer.
 *
 * These must be canonical profile URLs, not share links: a facebook.com/share/
 * link is a redirect, and sameAs is how Google confirms these profiles and the
 * site are the same entity. Any tracking or share token is stripped — those are
 * per-session and do not belong in source control.
 */
export const SOCIAL_PROFILES = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/people/Aivonix-Technologies/61594847931664/",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/aivonix_technologies/",
  },
];

/**
 * Crawlers that power answer engines. Explicitly allowed: being cited in an AI
 * answer requires being readable by the bot that builds the index.
 */
export const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "DuckDuckBot",
  "cohere-ai",
  "Meta-ExternalAgent",
  "Amazonbot",
  "YouBot",
];

/**
 * Every route in src/App.jsx appears here.
 *
 * - `canonical` overrides the self-referencing canonical, for routes that are
 *   deliberate aliases of another page.
 * - `noindex` keeps a route out of the index and out of the sitemap.
 * - `priority` / `changefreq` feed sitemap.xml.
 * - `faq` renders a visible FAQ block AND FAQPage structured data; the two must
 *   stay in sync or the markup is spam.
 */
export const ROUTES = [
  {
    path: "/",
    title: "AivonixFlow — AI Automation, Custom CRM & Software Development Agency",
    description:
      "AivonixFlow builds AI automation, bespoke CRM systems and custom software that let your business run itself. Enterprise-grade B2B systems, built to order.",
    priority: 1.0,
    changefreq: "weekly",
    summary:
      "Homepage. AivonixFlow is a B2B agency that builds AI automation, custom CRMs, bespoke software, high-performance websites, data analytics and AI-era digital marketing.",
    faq: [
      {
        q: "What does AivonixFlow do?",
        a: "AivonixFlow is a B2B agency that builds AI automation, custom CRM systems and bespoke software for companies that want to remove manual work from their operations. Typical projects include autonomous AI agents, document and invoice processing pipelines, zero-license-fee CRMs, internal dashboards, high-performance websites and analytics infrastructure.",
      },
      {
        q: "How much does an AI automation project cost?",
        a: "Pricing depends on scope, because every system is custom-built rather than templated. Smaller single-workflow automations start in the low four figures, while multi-department CRM or agent platforms are quoted per project after a discovery call. You can request a written quote through the Get a Quote page or book a free consultation first.",
      },
      {
        q: "How long does it take to build a custom CRM or automation?",
        a: "A focused automation or workflow agent typically ships in two to four weeks. A full custom CRM covering multiple departments usually runs six to twelve weeks, depending on how many integrations and data migrations are involved. Timelines are confirmed in writing before work begins.",
      },
      {
        q: "Does AivonixFlow work with existing tools like HubSpot, Salesforce or Stripe?",
        a: "Yes. Systems are built to integrate with the stack you already run, including HubSpot, Salesforce, Stripe, AWS and internal APIs, rather than forcing a migration. Integration points are mapped during discovery so nothing in your current operation breaks.",
      },
      {
        q: "Is AivonixFlow's work suitable for enterprise security requirements?",
        a: "Yes. Projects are delivered with hardened security practices including strict content security policies, least-privilege access, encrypted data handling and documented data-retention rules. The Security and Trust page covers the standing controls in detail.",
      },
    ],
  },
  {
    path: "/services",
    title: "Services — AI Automation, CRM, Software & Growth | AivonixFlow",
    description:
      "Six engineering practices under one roof: AI automation, custom CRM development, bespoke software, web development, data analytics and AI-era digital marketing.",
    priority: 0.9,
    changefreq: "monthly",
    summary:
      "Overview of all six AivonixFlow service lines with links to each detailed service page.",
  },
  {
    path: "/services/ai-automation",
    title: "AI Automation & Autonomous Agents for Business | AivonixFlow",
    description:
      "Custom LLM agents, document and invoice processing, and intelligent customer operations that eliminate repetitive manual workflows for good.",
    priority: 0.9,
    changefreq: "monthly",
    service: {
      name: "AI Automation",
      type: "Business Process Automation",
    },
    summary:
      "Custom autonomous AI agents, fine-tuned enterprise LLM pipelines and cognitive integrations. Includes goal-directed LLM agents, document and invoice extraction at 99.8% precision, and 24/7 automated customer operations.",
    faq: [
      {
        q: "What is an autonomous AI agent?",
        a: "An autonomous AI agent is a system that pursues a goal on its own rather than waiting for each instruction. It can research, analyse information, make decisions within rules you define, and call your APIs to act on those decisions. In practice that means work like lead qualification, ticket triage or report generation happens without a person driving each step.",
      },
      {
        q: "Which business processes are worth automating with AI first?",
        a: "The best first candidates are high-volume, rule-heavy and text-based: invoice and contract processing, customer support triage, lead enrichment, internal reporting and data entry between systems. These have clear inputs and outputs, which makes accuracy measurable and return on investment easy to prove before you expand.",
      },
      {
        q: "How accurate is AI document and invoice processing?",
        a: "AivonixFlow's document pipelines extract structured data from contracts, receipts and reports at around 99.8% precision. Accuracy is maintained with validation rules and confidence thresholds, so low-confidence extractions are routed to a human instead of being silently accepted.",
      },
      {
        q: "Will AI automation replace my staff?",
        a: "The typical outcome is that staff stop doing repetitive busywork rather than being replaced. Automation absorbs the volume tasks so the same team can handle more work without added headcount, which is why these projects are usually framed as removing headcount friction rather than removing people.",
      },
    ],
  },
  {
    path: "/services/crm-development",
    title: "Custom CRM Development — Zero License Fees | AivonixFlow",
    description:
      "Bespoke CRMs built for your exact business across 11+ verticals: healthcare, matrimonial, hotel and hospitality, real estate, task and project management, and more.",
    priority: 0.9,
    changefreq: "monthly",
    service: {
      name: "Custom CRM Development",
      type: "Custom Software Development",
    },
    summary:
      "Bespoke, zero-license-fee CRM systems engineered per industry vertical, including healthcare and clinic, matrimonial, hotel and hospitality, real estate, and task and project management.",
    faq: [
      {
        q: "Why build a custom CRM instead of using Salesforce or HubSpot?",
        a: "Off-the-shelf CRMs charge per seat forever and force your process to fit their data model. A custom CRM has no recurring licence fee, matches how your business actually works, and stores data you own outright. It makes sense when your workflow is unusual, your seat count is large, or platform fees have started to outgrow the value you get back.",
      },
      {
        q: "Which industries does AivonixFlow build CRMs for?",
        a: "Systems have been built across more than eleven verticals, including healthcare and clinic management, matrimonial services, hotel and hospitality, real estate, and task and project management. Each build starts from the workflows of that industry rather than a generic sales pipeline.",
      },
      {
        q: "Can my existing CRM data be migrated?",
        a: "Yes. Migration from spreadsheets, legacy databases or an existing CRM is part of the build. Data is mapped, cleaned and validated before cutover, and the old system stays available in parallel until the new one is confirmed correct.",
      },
      {
        q: "What does zero licence fee actually mean?",
        a: "You pay for the build, then you own the software. There is no per-user monthly charge to keep using it, so adding staff does not increase your CRM cost. Ongoing expenses are limited to hosting and any support or development retainer you choose to keep.",
      },
    ],
  },
  {
    // Deliberate alias of /services/crm-development — same component, same
    // content. Canonicalised so Google does not see duplicate pages.
    path: "/services/crm-automation",
    title: "CRM Automation & Custom CRM Development | AivonixFlow",
    description:
      "Bespoke CRMs built for your exact business across 11+ verticals: healthcare, matrimonial, hotel and hospitality, real estate, task and project management, and more.",
    canonical: "/services/crm-development",
    sitemap: false,
  },
  {
    path: "/services/custom-software",
    title: "Custom Software Development — SaaS, Dashboards & APIs | AivonixFlow",
    description:
      "Bespoke SaaS platforms, internal operations dashboards and high-throughput microservices built precisely around your operational workflow.",
    priority: 0.8,
    changefreq: "monthly",
    service: {
      name: "Custom Software Development",
      type: "Custom Software Development",
    },
    summary:
      "Bespoke SaaS platforms, internal operations dashboards and event-driven microservices, delivered with REST and GraphQL APIs on cloud architecture.",
    faq: [
      {
        q: "What kinds of custom software does AivonixFlow build?",
        a: "The main categories are SaaS platforms built for a product idea, internal operations dashboards that replace spreadsheet workflows, and microservices or APIs that connect systems which cannot currently talk to each other. All three are built around your workflow rather than adapted from a template.",
      },
      {
        q: "Do I own the source code?",
        a: "Yes. Custom builds are delivered with full source code ownership, so you are never locked into a vendor to keep the system running or to extend it later.",
      },
      {
        q: "What technology stack is used?",
        a: "Builds use modern, well-supported technology: React on the front end, REST and GraphQL APIs, event-driven services, and cloud hosting on providers such as AWS. The stack is chosen for long-term maintainability rather than novelty, so future developers can pick it up.",
      },
    ],
  },
  {
    path: "/services/web-development",
    title: "High-Performance Web Development — 99+ Lighthouse | AivonixFlow",
    description:
      "Ultra-fast websites with 99+ Lighthouse performance, fluid micro-animations and conversion-optimised architecture built on React, Tailwind and edge CDN delivery.",
    priority: 0.8,
    changefreq: "monthly",
    service: {
      name: "Web Development",
      type: "Web Development",
    },
    summary:
      "Conversion-optimised, high-performance websites built with React and Next.js, GSAP animation, Tailwind CSS and edge CDN delivery, targeting 99+ Lighthouse scores.",
    faq: [
      {
        q: "Why does website speed matter for search rankings?",
        a: "Google measures real-world loading, interactivity and visual stability through Core Web Vitals, and those signals feed into ranking. Speed also affects revenue directly: slower pages lose visitors before the content appears, so performance work usually improves both rankings and conversion at the same time.",
      },
      {
        q: "What is a good Lighthouse score?",
        a: "Ninety or above is considered good, and AivonixFlow builds target 99 or higher on performance. The score is a proxy rather than the goal, so it is used alongside field data on real visitors to confirm the site is genuinely fast for the people using it.",
      },
      {
        q: "Will my website be optimised for mobile?",
        a: "Yes. Sites are built mobile-first because Google indexes the mobile version of a page, and for most B2B sites the majority of first visits arrive on a phone.",
      },
    ],
  },
  {
    path: "/services/data-analytics",
    title: "Data & Analytics — BI Dashboards, CRO & Attribution | AivonixFlow",
    description:
      "Enterprise data warehouses, automated BI dashboards, conversion rate optimisation and attribution modelling that give executives a clear view of what works.",
    priority: 0.8,
    changefreq: "monthly",
    service: {
      name: "Data & Analytics",
      type: "Business Intelligence",
    },
    summary:
      "Enterprise data warehousing, live BI dashboards, conversion rate optimisation testing and multi-touch attribution modelling for executive decision-making.",
    faq: [
      {
        q: "What is attribution modelling and why does it matter?",
        a: "Attribution modelling decides how credit for a sale is shared between the touchpoints that led to it. It matters because last-click reporting overstates whichever channel happened to be last and hides the channels that created demand earlier, which leads to budget being cut from the things that were actually working.",
      },
      {
        q: "What is conversion rate optimisation?",
        a: "Conversion rate optimisation is the practice of increasing the share of visitors who take the action you want, using structured testing rather than opinion. Because it improves results from traffic you already have, it is usually cheaper per additional customer than buying more traffic.",
      },
      {
        q: "Do I need a data warehouse?",
        a: "A data warehouse becomes worthwhile once your numbers live in several systems that disagree with each other, or once reporting takes manual effort every month. It gives one reconciled source of truth so dashboards can update themselves instead of being rebuilt by hand.",
      },
    ],
  },
  {
    path: "/services/digital-marketing",
    title: "AEO, GEO & AI-Era Digital Marketing | AivonixFlow",
    description:
      "Answer Engine Optimisation, Generative Engine Optimisation, ChatGPT Ads and algorithmic PPC built to win visibility in AI search, not just classic search results.",
    priority: 0.9,
    changefreq: "monthly",
    service: {
      name: "Digital Marketing & AI Growth",
      type: "Digital Marketing",
    },
    summary:
      "Answer Engine Optimisation (AEO), Generative Engine Optimisation (GEO), ChatGPT Ads and high-ROAS algorithmic PPC for visibility inside AI-generated answers.",
    faq: [
      {
        q: "What is Answer Engine Optimisation (AEO)?",
        a: "Answer Engine Optimisation is the practice of making your content easy for AI answer engines such as ChatGPT, Perplexity, Claude and Google's AI Overviews to quote correctly. It relies on clear question-and-answer structure, factual statements that stand on their own without surrounding context, machine-readable structured data, and crawler access for AI bots.",
      },
      {
        q: "How is AEO different from traditional SEO?",
        a: "Traditional SEO competes for a ranked position on a results page, where the reward is a click. AEO competes to be the source an AI model cites inside its answer, where the reward is being named as the authority. The underlying technical hygiene overlaps, but AEO puts far more weight on unambiguous phrasing, structured data and being quotable in a single self-contained passage.",
      },
      {
        q: "What is Generative Engine Optimisation (GEO)?",
        a: "Generative Engine Optimisation is the broader discipline of shaping how generative AI systems represent your brand, covering what they say about you, which facts they repeat and which sources they draw on. AEO is the part of it focused specifically on winning direct answer citations.",
      },
      {
        q: "How long does SEO and AEO work take to show results?",
        a: "Technical fixes such as indexing, structured data and site speed can register within days to a few weeks. Content authority and citation in AI answers typically take three to six months, because answer engines need repeated, consistent signals before they treat a source as reliable.",
      },
    ],
  },
  {
    path: "/about",
    title: "About AivonixFlow — AI & Automation Engineering Team",
    description:
      "AivonixFlow engineers intelligent autonomous workflows, enterprise CRM automation and bespoke software systems designed to scale modern businesses.",
    priority: 0.6,
    changefreq: "yearly",
    summary:
      "Company background, engineering philosophy and approach to building bespoke automation systems.",
  },
  {
    path: "/contact",
    title: "Contact AivonixFlow — Book a Free Consultation",
    description:
      "Talk to AivonixFlow about AI automation, custom CRM or software development. Book a free consultation and get a scoped plan for your project.",
    priority: 0.8,
    changefreq: "yearly",
    pageType: "ContactPage",
    summary:
      "Contact form and free consultation booking. Email: info@aivonixflow.com.",
  },
  {
    path: "/get-quote",
    title: "Get a Quote — Custom AI, CRM & Software Projects | AivonixFlow",
    description:
      "Request a written quote for AI automation, custom CRM development or bespoke software. Tell us the scope and get costed options back.",
    priority: 0.7,
    changefreq: "yearly",
    summary: "Request a written, scoped project quote.",
  },
  {
    path: "/free-audit",
    title: "Free AI Automation Audit — Find What to Automate | AivonixFlow",
    description:
      "Get a free audit that identifies which workflows in your business are worth automating first, with an estimate of the time and cost each one is consuming.",
    priority: 0.7,
    changefreq: "yearly",
    summary:
      "Free audit identifying the highest-return automation opportunities in a business.",
  },
  {
    path: "/security",
    title: "Security & Trust — How AivonixFlow Protects Your Data",
    description:
      "Hardened security practices behind every AivonixFlow build: strict content security policy, least-privilege access, encrypted data handling and documented retention.",
    priority: 0.6,
    changefreq: "yearly",
    summary:
      "Security posture, data handling, access control and retention practices.",
  },
];

/** Routes that belong in sitemap.xml. */
export const INDEXABLE_ROUTES = ROUTES.filter(
  (route) => route.sitemap !== false && !route.noindex
);

/** Fast lookup used by <Seo /> on client-side navigation. */
export const ROUTE_BY_PATH = Object.fromEntries(
  ROUTES.map((route) => [route.path, route])
);

export const NOT_FOUND_META = {
  path: "/404",
  title: "Page Not Found — AivonixFlow",
  description: "This page does not exist. Browse AivonixFlow's services instead.",
  noindex: true,
};

export const absoluteUrl = (path) =>
  path === "/" ? `${SITE.origin}/` : `${SITE.origin}${path}`;
