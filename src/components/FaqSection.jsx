import { useLocation } from "react-router-dom";
import { HelpCircle } from "lucide-react";
import { ROUTE_BY_PATH } from "../seo/siteConfig.js";

/**
 * Visible FAQ block, rendered from the same route.faq array that produces the
 * FAQPage JSON-LD in <Seo />. Keeping one source guarantees the structured data
 * always describes content a visitor can actually see.
 *
 * Native <details> rather than JS state: answers stay in the DOM and stay
 * readable to crawlers that do not run scripts, which is the whole point for
 * answer engines.
 */
export default function FaqSection({
  heading = "Frequently Asked Questions",
  excludePosts = false,
}) {
  const { pathname } = useLocation();
  const normalized =
    pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  const route = ROUTE_BY_PATH[normalized];

  // Blog posts render their own FAQ mid-article, before the closing CTA, so the
  // copy in Layout stands down for them rather than repeating it at the bottom.
  if (excludePosts && route?.post) return null;

  const faq = route?.faq;
  if (!faq?.length) return null;

  return (
    <section className="py-20 relative z-10 border-t border-white/5 bg-brand-dark/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-semibold text-brand-cyan mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            {heading}
          </h2>
        </div>

        <div className="space-y-4">
          {faq.map((item) => (
            <details
              key={item.q}
              className="group glass-card rounded-2xl border border-white/10 overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 text-left">
                <h3 className="text-base sm:text-lg font-semibold text-white font-heading">
                  {item.q}
                </h3>
                <span
                  aria-hidden="true"
                  className="shrink-0 w-6 h-6 grid place-items-center rounded-full border border-white/15 text-brand-cyan text-lg leading-none transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 -mt-1">
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
