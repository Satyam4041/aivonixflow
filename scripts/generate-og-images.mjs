/**
 * Renders each post's hero SVG to a 1200x630 PNG for social sharing.
 *
 * Open Graph and Twitter cards need a raster image — most platforms will not
 * render an SVG — so the diagrams that already serve as article heroes are
 * rasterised here rather than designed twice. Runs as part of `npm run build`,
 * before seo-build, so the files exist when the static HTML references them.
 */

import { mkdir, writeFile, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

import { POSTS } from "../src/content/posts/index.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC = join(ROOT, "public");

export const ogImagePath = (post) => `/blog/og/${post.slug}.png`;

async function main() {
  await mkdir(join(PUBLIC, "blog", "og"), { recursive: true });

  for (const post of POSTS) {
    const source = join(PUBLIC, post.hero.src.replace(/^\//, ""));
    const target = join(PUBLIC, ogImagePath(post).replace(/^\//, ""));

    // density 144 renders the SVG at 2x before downsampling, so text stays
    // crisp rather than being rasterised at the target size directly.
    const png = await sharp(await readFile(source), { density: 144 })
      .resize(1200, 630, { fit: "contain", background: "#05070D" })
      .png({ compressionLevel: 9 })
      .toBuffer();

    await writeFile(target, png);
    console.log(
      `[og-images] ${ogImagePath(post)} (${(png.length / 1024).toFixed(0)} KB)`
    );
  }
}

main().catch((error) => {
  console.error("[og-images] failed:", error);
  process.exit(1);
});
