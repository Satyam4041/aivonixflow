/**
 * JSON-LD builders.
 *
 * Every node carries a stable @id so the graph can cross-reference itself
 * instead of repeating the organisation on every page — this is what lets
 * Google and answer engines treat all pages as one entity.
 *
 * Pure data, same constraint as siteConfig.js: no React, no browser globals.
 */

import { SITE, SOCIAL_PROFILES, absoluteUrl } from "./siteConfig.js";

const ORG_ID = `${SITE.origin}/#organization`;
const WEBSITE_ID = `${SITE.origin}/#website`;

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: `${SITE.origin}/`,
    description: SITE.description,
    slogan: SITE.tagline,
    email: SITE.email,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE.origin}/#logo`,
      url: `${SITE.origin}${SITE.logo}`,
      contentUrl: `${SITE.origin}${SITE.logo}`,
      caption: SITE.name,
    },
    image: { "@id": `${SITE.origin}/#logo` },
    // Links the site to its verified profiles so search and answer engines
    // resolve all of them to one entity.
    sameAs: SOCIAL_PROFILES.map((profile) => profile.url),
    areaServed: SITE.areaServed,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SITE.email,
        availableLanguage: ["English"],
        areaServed: SITE.areaServed,
      },
    ],
    knowsAbout: [
      "AI automation",
      "Autonomous AI agents",
      "Large language model integration",
      "Custom CRM development",
      "Business process automation",
      "Custom software development",
      "Web development",
      "Data analytics and business intelligence",
      "Answer Engine Optimization",
      "Generative Engine Optimization",
    ],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE.origin}/`,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": ORG_ID },
    inLanguage: SITE.lang,
  };
}

export function webPageSchema(route) {
  const url = absoluteUrl(route.canonical || route.path);
  return {
    "@type": route.pageType || "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: route.title,
    description: route.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: SITE.lang,
  };
}

/** Home → Services → <page>, matching the visible breadcrumb on service pages. */
export function breadcrumbSchema(route) {
  const segments = route.path.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const crumbs = [{ name: "Home", path: "/" }];
  let accumulated = "";
  for (const segment of segments) {
    accumulated += `/${segment}`;
    const match = ROUTE_TITLES[accumulated];
    crumbs.push({ name: match || titleCase(segment), path: accumulated });
  }

  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(route.path)}#breadcrumb`,
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function serviceSchema(route) {
  if (!route.service) return null;
  const url = absoluteUrl(route.canonical || route.path);
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name: route.service.name,
    serviceType: route.service.type,
    description: route.description,
    url,
    provider: { "@id": ORG_ID },
    areaServed: SITE.areaServed,
  };
}

/**
 * FAQPage. Only ever built from route.faq, which is the same array the visible
 * FaqSection renders — structured data describing invisible content is a
 * structured-data spam violation.
 */
export function faqSchema(route) {
  if (!route.faq?.length) return null;
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(route.path)}#faq`,
    mainEntity: route.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** The full @graph for one route, as a single JSON-LD block. */
export function graphForRoute(route) {
  const nodes = [
    organizationSchema(),
    websiteSchema(),
    webPageSchema(route),
    breadcrumbSchema(route),
    serviceSchema(route),
    faqSchema(route),
  ].filter(Boolean);

  return { "@context": "https://schema.org", "@graph": nodes };
}

const ROUTE_TITLES = {
  "/services": "Services",
  "/services/ai-automation": "AI Automation",
  "/services/crm-development": "Custom CRM Development",
  "/services/crm-automation": "CRM Automation",
  "/services/custom-software": "Custom Software",
  "/services/web-development": "Web Development",
  "/services/data-analytics": "Data & Analytics",
  "/services/digital-marketing": "Digital Marketing",
  "/about": "About",
  "/contact": "Contact",
  "/get-quote": "Get a Quote",
  "/free-audit": "Free AI Audit",
  "/security": "Security & Trust",
};

const titleCase = (segment) =>
  segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
