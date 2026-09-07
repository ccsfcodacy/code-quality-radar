// Maps a tool slug to a logo file in public/logos/, when one exists.
// Falls back to the letter-avatar treatment for any tool without one yet —
// checked once at build time, not per-render.
import { existsSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const LOGOS_DIR = fileURLToPath(new URL("../../public/logos", import.meta.url));

const AVAILABLE_SLUGS = new Set(
  existsSync(LOGOS_DIR)
    ? readdirSync(LOGOS_DIR)
        .filter((f) => f.endsWith(".svg"))
        .map((f) => f.replace(/\.svg$/, ""))
    : []
);

export function logoPathFor(slug) {
  return AVAILABLE_SLUGS.has(slug) ? `/logos/${slug}.svg` : null;
}
