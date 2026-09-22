/**
 * Post-build SEO/AEO generator. Runs after `vite build`.
 *
 * Why this exists: the site is a client-rendered SPA. Googlebot will eventually
 * render the JavaScript, but the crawlers behind answer engines (GPTBot,
 * ClaudeBot, PerplexityBot and friends) generally do not execute scripts at all.
 * Without this step they receive an empty shell with one generic <title> for all
 * thirteen routes, which is unciteable.
 *
 * So for every route we emit a real static HTML file whose <head> already holds
 * that route's title, description, canonical, Open Graph tags and JSON-LD, plus
 * a <noscript> block carrying the same copy the React tree renders. Vercel
 * checks the filesystem before applying the SPA rewrite, so these files are what
 * a crawler is served; the browser still boots the SPA from the same document.
 *
 * Also emits sitemap.xml, robots.txt, llms.txt and 404.html.
 */

import { writeFile, readFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import {
  SITE,
  ROUTES,
  INDEXABLE_ROUTES,
  AI_CRAWLERS,
  SOCIAL_PROFILES,
  NOT_FOUND_META,
  absoluteUrl,
} from "../src/seo/siteConfig.js";
import { graphForRoute } from "../src/seo/schema.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** JSON-LD is inert, but `</script>` inside a string would still close the tag. */
const escapeJsonLd = (json) => json.replace(/</g, "\\u003c");

function headFor(route) {
  const canonical = absoluteUrl(route.canonical || route.path);
  const ogImage = `${SITE.origin}${SITE.ogImage}`;
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);

  const robots = route.noindex
    ? "noindex, follow"
    : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta name="robots" content="${robots}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeHtml(SITE.name)}" />`,
    `<meta property="og:locale" content="${SITE.locale}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:image" content="${ogImage}" />`,
    `<meta name="twitter:card" content="${SITE.twitterCard}" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${ogImage}" />`,
  ];

  if (!route.noindex) {
    const graph = escapeJsonLd(JSON.stringify(graphForRoute(route)));
    tags.push(`<script type="application/ld+json">${graph}</script>`);
  }

  return tags.map((tag) => `    ${tag}`).join("\n");
}

/**
 * Text fallback for script-less crawlers. Everything here is copy the rendered
 * page also shows — a <noscript> block that differed from the rendered page
 * would be cloaking.
 */
function noscriptFor(route) {
  const parts = [
    `<h1>${escapeHtml(route.title)}</h1>`,
    `<p>${escapeHtml(route.description)}</p>`,
  ];

  if (route.summary) parts.push(`<p>${escapeHtml(route.summary)}</p>`);

  if (route.faq?.length) {
    parts.push("<h2>Frequently Asked Questions</h2>");
    for (const item of route.faq) {
      parts.push(
        `<h3>${escapeHtml(item.q)}</h3><p>${escapeHtml(item.a)}</p>`
      );
    }
  }

  const links = INDEXABLE_ROUTES.filter((r) => r.path !== route.path)
    .map(
      (r) =>
        `<li><a href="${absoluteUrl(r.path)}">${escapeHtml(r.title)}</a></li>`
    )
    .join("");
  parts.push(`<nav><h2>All pages</h2><ul>${links}</ul></nav>`);

  return `<noscript>\n      ${parts.join("\n      ")}\n    </noscript>`;
}

/**
 * Rewrites the Vite shell for one route: strip the placeholder title and
 * description, splice in the route's head, and add the noscript fallback.
 */
function renderShell(shell, route) {
  let html = shell
    .replace(/\n?\s*<title>[\s\S]*?<\/title>/i, "")
    .replace(/\n?\s*<meta\s+name="description"[^>]*>/i, "")
    .replace(/\n?\s*<meta\s+property="og:(title|description|image)"[^>]*>/gi, "");

  html = html.replace(/<\/head>/i, `${headFor(route)}\n  </head>`);
  html = html.replace(
    /(<div id="root"><\/div>)/i,
    `${noscriptFor(route)}\n    $1`
  );
  return html;
}

function sitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = INDEXABLE_ROUTES.map((route) =>
    [
      "  <url>",
      `    <loc>${absoluteUrl(route.path)}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      `    <changefreq>${route.changefreq || "monthly"}</changefreq>`,
      `    <priority>${(route.priority ?? 0.5).toFixed(1)}</priority>`,
      "  </url>",
    ].join("\n")
  ).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function robots() {
  const aiRules = AI_CRAWLERS.map(
    (bot) => `User-agent: ${bot}\nAllow: /`
  ).join("\n\n");

  return `# ${SITE.name} — ${SITE.origin}

User-agent: *
Allow: /

# Answer-engine crawlers are allowed deliberately: being cited in an AI answer
# requires being readable by the crawler that builds the index.
${aiRules}

Sitemap: ${SITE.origin}/sitemap.xml
`;
}

/**
 * llms.txt — an emerging convention that gives language models a clean,
 * curated map of a site instead of leaving them to reconstruct one.
 */
function llmsTxt() {
  const lines = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    `${SITE.name} is a B2B agency building AI automation, custom CRM systems,`,
    "bespoke software, high-performance websites, data analytics and AI-era",
    `digital marketing. Contact: ${SITE.email}. Area served: ${SITE.areaServed}.`,
    "",
    "## Official profiles",
    "",
    ...SOCIAL_PROFILES.map((profile) => `- ${profile.name}: ${profile.url}`),
    "",
    "## Pages",
    "",
  ];

  for (const route of INDEXABLE_ROUTES) {
    lines.push(
      `- [${route.title}](${absoluteUrl(route.path)}): ${route.summary || route.description}`
    );
  }

  const withFaq = INDEXABLE_ROUTES.filter((route) => route.faq?.length);
  if (withFaq.length) {
    lines.push("", "## Questions and answers", "");
    for (const route of withFaq) {
      lines.push(`### ${route.title}`, "");
      for (const item of route.faq) {
        lines.push(`**${item.q}**`, "", item.a, "");
      }
    }
  }

  return `${lines.join("\n")}\n`;
}

async function writeOut(relativePath, contents) {
  const target = join(DIST, relativePath);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, contents, "utf8");
  return relativePath;
}

async function main() {
  const shell = await readFile(join(DIST, "index.html"), "utf8");
  const written = [];

  for (const route of ROUTES) {
    const target =
      route.path === "/" ? "index.html" : `${route.path.slice(1)}/index.html`;
    written.push(await writeOut(target, renderShell(shell, route)));
  }

  // Vercel serves 404.html for unmatched paths once the SPA rewrite is scoped.
  written.push(await writeOut("404.html", renderShell(shell, NOT_FOUND_META)));

  written.push(await writeOut("sitemap.xml", sitemap()));
  written.push(await writeOut("robots.txt", robots()));
  written.push(await writeOut("llms.txt", llmsTxt()));

  console.log(`[seo-build] wrote ${written.length} files:`);
  for (const file of written) console.log(`  ${file}`);
}

main().catch((error) => {
  console.error("[seo-build] failed:", error);
  process.exit(1);
});
