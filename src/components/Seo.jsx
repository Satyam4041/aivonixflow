import { useLocation } from "react-router-dom";
import { SITE, ROUTE_BY_PATH, NOT_FOUND_META, absoluteUrl } from "../seo/siteConfig.js";
import { graphForRoute } from "../seo/schema.js";

/**
 * Per-route document metadata.
 *
 * React 19 hoists <title>, <meta> and <link> rendered anywhere in the tree into
 * <head>, so this needs no helmet library. It keeps metadata correct during
 * client-side navigation; the first paint for crawlers is already correct
 * because scripts/seo-build.mjs bakes the same values into static HTML.
 */
export default function Seo() {
  const { pathname } = useLocation();

  // Trailing slashes are equivalent routes, so normalise before lookup.
  const normalized =
    pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  const route = ROUTE_BY_PATH[normalized] || NOT_FOUND_META;
  const canonical = absoluteUrl(route.canonical || route.path);
  const ogImage = `${SITE.origin}${SITE.ogImage}`;

  return (
    <>
      <title>{route.title}</title>
      <meta name="description" content={route.description} />
      <link rel="canonical" href={canonical} />

      {route.noindex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
      )}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={route.title} />
      <meta property="og:description" content={route.description} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content={SITE.twitterCard} />
      <meta name="twitter:title" content={route.title} />
      <meta name="twitter:description" content={route.description} />
      <meta name="twitter:image" content={ogImage} />

      {!route.noindex && (
        <script
          type="application/ld+json"
          // Structured data is inert JSON, never executed as script.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(graphForRoute(route)),
          }}
        />
      )}
    </>
  );
}
