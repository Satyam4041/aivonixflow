import { Link } from "react-router-dom";
import { ArrowRight, Clock, PenLine } from "lucide-react";
import { POSTS, postPath } from "../content/posts/index.js";

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

export default function BlogIndexPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-white/10 text-xs font-semibold text-brand-cyan mb-4">
          <PenLine className="w-3.5 h-3.5" />
          <span>Field Notes</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-heading mb-5">
          Writing on <span className="text-gradient">AI, CRM and AI search</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300">
          What we have learned building automation systems and getting pages
          cited by answer engines. Specifics over generalities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {POSTS.map((post) => (
          <article
            key={post.slug}
            className="glass-card-interactive rounded-3xl border border-white/10 overflow-hidden flex flex-col hover:border-brand-blue/50 transition-all duration-300 group"
          >
            <Link to={postPath(post)} className="block" tabIndex={-1} aria-hidden="true">
              <img
                src={post.hero.src}
                alt=""
                width={post.hero.width}
                height={post.hero.height}
                loading="lazy"
                decoding="async"
                className="w-full h-auto border-b border-white/10 bg-brand-darker"
              />
            </Link>

            <div className="p-7 flex flex-col flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white font-heading leading-snug mb-3 group-hover:text-brand-cyan transition-colors">
                <Link to={postPath(post)}>{post.title}</Link>
              </h2>

              <p className="text-sm text-slate-400 leading-relaxed flex-1">
                {post.description}
              </p>

              <div className="flex items-center justify-between gap-4 pt-6 mt-6 border-t border-white/5">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <time dateTime={post.datePublished}>
                    {formatDate(post.datePublished)}
                  </time>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readingTime} min read
                  </span>
                </div>
                <Link
                  to={postPath(post)}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-white group-hover:text-brand-cyan transition-colors"
                >
                  <span>Read</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
