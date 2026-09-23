import { Link } from "react-router-dom";
import { Info } from "lucide-react";
import { parseInline } from "../../content/inline.js";

/**
 * Renders an article's `body` blocks. The same block array is rendered to
 * static HTML by scripts/seo-build.mjs, so a crawler that never runs
 * JavaScript reads the identical content — any divergence between the two
 * would be cloaking.
 */

function Inline({ text }) {
  return (
    <>
      {parseInline(text).map((token, index) => {
        if (token.type === "bold") {
          return (
            <strong key={index} className="font-semibold text-white">
              {token.value}
            </strong>
          );
        }
        if (token.type === "link") {
          // Internal links stay client-side; external ones get rel guards.
          return token.href.startsWith("/") ? (
            <Link
              key={index}
              to={token.href}
              className="text-brand-cyan hover:underline underline-offset-4"
            >
              {token.value}
            </Link>
          ) : (
            <a
              key={index}
              href={token.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-cyan hover:underline underline-offset-4"
            >
              {token.value}
            </a>
          );
        }
        return <span key={index}>{token.value}</span>;
      })}
    </>
  );
}

/** Stable anchor ids so headings can be linked to directly. */
const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export default function PostBody({ blocks }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={index}
                id={slugify(block.text)}
                className="text-2xl sm:text-3xl font-extrabold text-white font-heading pt-8 scroll-mt-28"
              >
                {block.text}
              </h2>
            );

          case "h3":
            return (
              <h3
                key={index}
                id={slugify(block.text)}
                className="text-xl font-bold text-white font-heading pt-4 scroll-mt-28"
              >
                {block.text}
              </h3>
            );

          case "p":
            return (
              <p
                key={index}
                className="text-base sm:text-[17px] text-slate-300 leading-[1.75]"
              >
                <Inline text={block.text} />
              </p>
            );

          case "ul":
            return (
              <ul key={index} className="space-y-3 pl-1">
                {block.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-300 leading-[1.75]">
                    <span
                      aria-hidden="true"
                      className="mt-[0.6em] w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0"
                    />
                    <span>
                      <Inline text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            );

          case "ol":
            return (
              <ol key={index} className="space-y-3">
                {block.items.map((item, i) => (
                  <li key={i} className="flex gap-3.5 text-slate-300 leading-[1.75]">
                    <span
                      aria-hidden="true"
                      className="shrink-0 mt-0.5 w-6 h-6 grid place-items-center rounded-lg bg-brand-surface border border-white/10 text-xs font-bold text-brand-cyan"
                    >
                      {i + 1}
                    </span>
                    <span>
                      <Inline text={item} />
                    </span>
                  </li>
                ))}
              </ol>
            );

          case "figure":
            return (
              <figure key={index} className="py-4">
                <img
                  src={block.src}
                  alt={block.alt}
                  width={block.width}
                  height={block.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-2xl border border-white/10 bg-brand-darker"
                />
                {block.caption && (
                  <figcaption className="mt-3 text-sm text-slate-500 text-center">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          case "callout":
            return (
              <aside
                key={index}
                className="glass-card rounded-2xl border border-brand-blue/30 bg-brand-blue/5 p-6 flex gap-4"
              >
                <Info className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-1.5">
                  <div className="font-bold text-white font-heading">
                    {block.title}
                  </div>
                  <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed">
                    <Inline text={block.text} />
                  </p>
                </div>
              </aside>
            );

          case "table":
            return (
              <div key={index} className="overflow-x-auto py-2">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/15">
                      {block.headers.map((header, i) => (
                        <th
                          key={i}
                          scope="col"
                          className="py-3 pr-5 font-semibold text-white whitespace-nowrap"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r} className="border-b border-white/5">
                        {row.map((cell, c) => (
                          <td
                            key={c}
                            className={`py-3 pr-5 align-top ${
                              c === 0 ? "text-slate-200 font-medium" : "text-slate-400"
                            }`}
                          >
                            <Inline text={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "quote":
            return (
              <blockquote
                key={index}
                className="border-l-2 border-brand-cyan/50 pl-5 py-1 text-slate-300 italic"
              >
                <Inline text={block.text} />
                {block.attribution && (
                  <footer className="mt-2 text-sm text-slate-500 not-italic">
                    — {block.attribution}
                  </footer>
                )}
              </blockquote>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
