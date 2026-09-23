/**
 * Minimal inline markup for article prose: **bold** and [label](/path).
 *
 * Article bodies are plain data so that scripts/seo-build.mjs can render the
 * full text into static HTML for crawlers that do not run JavaScript. That
 * ruled out JSX in the content files, but prose still needs emphasis and links,
 * so this parser gives both consumers — the React renderer and the Node build
 * script — one shared definition of what the markup means.
 *
 * Deliberately tiny: no nesting, no images, no code spans. Anything more
 * structural belongs in a block type instead.
 */

const PATTERN = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;

/**
 * @returns {Array<{type: 'text'|'bold'|'link', value: string, href?: string}>}
 */
export function parseInline(text) {
  const tokens = [];
  let lastIndex = 0;

  for (const match of String(text).matchAll(PATTERN)) {
    if (match.index > lastIndex) {
      tokens.push({ type: "text", value: text.slice(lastIndex, match.index) });
    }

    const [full, bold, label, href] = match;
    if (bold !== undefined) {
      tokens.push({ type: "bold", value: bold });
    } else {
      tokens.push({ type: "link", value: label, href });
    }

    lastIndex = match.index + full.length;
  }

  if (lastIndex < text.length) {
    tokens.push({ type: "text", value: text.slice(lastIndex) });
  }

  return tokens;
}

/** Markup stripped to readable prose, for llms.txt and meta descriptions. */
export function toPlainText(text) {
  return parseInline(text)
    .map((token) => token.value)
    .join("");
}
