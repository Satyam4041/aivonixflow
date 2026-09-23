import { aiAutomationWithCrm } from "./aiAutomationWithCrm.js";
import { answerEngineOptimization } from "./answerEngineOptimization.js";

/** Newest first — the order the blog index renders them in. */
export const POSTS = [aiAutomationWithCrm, answerEngineOptimization].sort(
  (a, b) => b.datePublished.localeCompare(a.datePublished)
);

export const POST_BY_SLUG = Object.fromEntries(
  POSTS.map((post) => [post.slug, post])
);

export const BLOG_BASE = "/blog";

export const postPath = (post) => `${BLOG_BASE}/${post.slug}`;

/**
 * Word count across every text-bearing block, used for BlogPosting.wordCount
 * and the reading-time sanity check.
 */
export function wordCount(post) {
  const chunks = [];

  for (const block of post.body) {
    if (block.text) chunks.push(block.text);
    if (block.caption) chunks.push(block.caption);
    if (block.title) chunks.push(block.title);
    if (block.items) chunks.push(...block.items);
    if (block.headers) chunks.push(...block.headers);
    if (block.rows) chunks.push(...block.rows.flat());
  }

  for (const item of post.faq || []) chunks.push(item.q, item.a);

  return chunks.join(" ").split(/\s+/).filter(Boolean).length;
}
