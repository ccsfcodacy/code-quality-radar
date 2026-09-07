// Maps a tool slug to a logo file in public/logos/, when one exists.
// Falls back to the letter-avatar treatment for any tool without one yet —
// checked once at build time, not per-render.
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

// process.cwd() is the project root in every environment that runs `astro
// build` from there — local, CI, or a platform's build container. An
// import.meta.url + relative-path approach was tried first and silently
// resolved to the wrong directory on Cloudflare's build: Vite relocates this
// module during Astro's internal SSR bundling step, and where it lands isn't
// guaranteed to sit at the same depth as the source tree. cwd sidesteps that
// entirely.
const LOGOS_DIR = join(process.cwd(), "public", "logos");

const dirExists = existsSync(LOGOS_DIR);
const AVAILABLE_SLUGS = new Set(
  dirExists
    ? readdirSync(LOGOS_DIR)
        .filter((f) => f.endsWith(".svg"))
        .map((f) => f.replace(/\.svg$/, ""))
    : []
);

// Prints in every build log (local or CI) so a silent "0 logos found" doesn't
// need a round trip to diagnose — it's right there in the Cloudflare build
// output.
console.log(
  dirExists
    ? `[logos] found ${AVAILABLE_SLUGS.size} logo(s) in ${LOGOS_DIR}`
    : `[logos] WARNING: directory not found at ${LOGOS_DIR} — all tools will use the letter-avatar fallback`
);

export function logoPathFor(slug) {
  return AVAILABLE_SLUGS.has(slug) ? `/logos/${slug}.svg` : null;
}
