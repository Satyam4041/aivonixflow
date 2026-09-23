import { Link, useParams } from "react-router-dom";
import { Clock, ArrowRight, ArrowLeft } from "lucide-react";
import { POST_BY_SLUG, POSTS, postPath } from "../content/posts/index.js";
import PostBody from "../components/blog/PostBody.jsx";
import FaqSection from "../components/FaqSection.jsx";
import NotFoundPage from "./NotFoundPage.jsx";

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = POST_BY_SLUG[slug];

  // An unknown slug is a genuine 404, not an empty article shell.
  if (!post) return <NotFoundPage />;

  const others = POSTS.filter((p) => p.slug !== post.slug);

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-2 text-xs text-slate-400 mb-8"
      >
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <span aria-hidden="true">/</span>
        <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
      </nav>

      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-2 mb-5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading leading-[1.12] mb-6">
          {post.title}
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed mb-7">
          {post.description}
        </p>

        {/* Visible author and date — Google weighs these for E-E-A-T, and
            answer engines favour sources that say who and when. */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 pb-7 border-b border-white/10">
          <span className="text-slate-300 font-medium">{post.author}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.readingTime} min read
          </span>
        </div>
      </header>

      <img
        src={post.hero.src}
        alt={post.hero.alt}
        width={post.hero.width}
        height={post.hero.height}
        fetchPriority="high"
        decoding="async"
        className="w-full h-auto rounded-2xl border border-white/10 bg-brand-darker mb-12"
      />

      <PostBody blocks={post.body} />

      {/* Reads this route's faq from siteConfig — the same array that produces
          the FAQPage structured data. Layout skips posts so it appears here,
          directly after the article, rather than below the closing CTA. */}
      <FaqSection />

      <div className="mt-16 pt-10 border-t border-white/10">
        <div className="glass-card rounded-2xl border border-white/10 p-7 sm:p-8 mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-heading mb-3">
            Want this built rather than explained?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6">
            AivonixFlow builds the systems described here. Start with a free
            audit and find out which parts are worth doing first.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/free-audit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-gradient text-white font-bold text-sm shadow-lg shadow-brand-blue/30 hover:scale-[1.02] transition-transform"
            >
              <span>Get a free audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass-card text-slate-200 font-semibold text-sm hover:text-white transition-colors"
            >
              <span>Book a consultation</span>
            </Link>
          </div>
        </div>

        {others.length > 0 && (
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-5">
              Read next
            </h2>
            <ul className="space-y-3">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link
                    to={postPath(other)}
                    className="group flex items-center justify-between gap-4 glass-card rounded-xl border border-white/10 px-5 py-4 hover:border-brand-blue/40 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white group-hover:text-brand-cyan transition-colors">
                      {other.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-brand-cyan group-hover:translate-x-1 transition-all shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors mt-10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All articles</span>
        </Link>
      </div>
    </article>
  );
}
