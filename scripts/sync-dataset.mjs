#!/usr/bin/env node
/**
 * Imports the tool dataset export into the site.
 *
 * The export carries bookkeeping fields the site never renders. They are dropped
 * here, on the way in, rather than left to the templates — this repo is public
 * and git history is permanent, so the copy under src/data/ should only ever
 * contain what the pages actually publish.
 *
 * Usage:
 *   node scripts/sync-dataset.mjs <path-to-export.json>
 *   DATASET_EXPORT=<path> node scripts/sync-dataset.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";

const SOURCE = process.argv[2] || process.env.DATASET_EXPORT;
const DEST = new URL("../src/data/tools.public.json", import.meta.url);

if (!SOURCE) {
  console.error(
    "Missing dataset path.\n" +
      "  node scripts/sync-dataset.mjs <path-to-export.json>\n" +
      "  DATASET_EXPORT=<path> node scripts/sync-dataset.mjs"
  );
  process.exit(1);
}

// Dropped wherever they appear. `verified_on` is deliberately kept: each tool
// page shows a "last verified" date derived from it, and a bare date is fine.
const STRIP_KEYS = new Set([
  "basis",
  "v_source",
  "v_pre_binary",
  "adjacent_to",
  "source_url",
  "_verified",
  "migration_reason",
  "owner_reviewed",
]);

let stripped = 0;

function clean(node, path = "") {
  if (Array.isArray(node)) return node.map((v) => clean(v, path));
  if (node && typeof node === "object") {
    const out = {};
    for (const [key, value] of Object.entries(node)) {
      if (STRIP_KEYS.has(key)) {
        stripped++;
        continue;
      }
      // languages.notes is a working memo about reconciling the language count,
      // not copy meant for the page.
      if (key === "notes" && path.endsWith(".languages")) {
        stripped++;
        continue;
      }
      out[key] = clean(value, `${path}.${key}`);
    }
    return out;
  }
  return node;
}

const raw = JSON.parse(readFileSync(SOURCE, "utf8"));
const cleaned = { ...raw, tools: raw.tools.map((t) => clean(t, "")) };

writeFileSync(DEST, `${JSON.stringify(cleaned, null, 2)}\n`);
console.log(`Synced ${cleaned.tools.length} tools. Dropped ${stripped} non-published fields.`);
