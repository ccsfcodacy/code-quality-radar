# Review Radar

[radar.codacy.com](https://radar.codacy.com) — an independent directory comparing 20 code quality, static analysis, security scanning and AI-assisted code review tools, built by [Codacy](https://www.codacy.com).

Every tool is tracked against the same set of capabilities — deployment model, languages, workflow coverage, detection types, AI features, compliance, integrations and pricing — so tools built for different purposes can still be compared directly. A capability is only marked as supported where it's documented; where a vendor's docs are silent, that's recorded as unknown rather than assumed either way.

## What's here

- **Directory** (`/`) — every tool, filterable by any tracked facet
- **Tool pages** (`/[slug]`) — full capability breakdown, pricing, FAQ, similar tools
- **Glossary** (`/glossary`) — plain-English definitions of terms used across the directory (SAST, IaC scanning, merge gates, and so on), each linked to the tools that support it
- **Explore** (`/explore`) — "Top N tools for {git hosting platform}" comparison articles
- **About** (`/about`) — what the site tracks and how entries stay current

## Data

`src/data/tools.public.json` is the dataset every page renders from — one record per tool, one shared schema. It's maintained outside this repo and imported with:

```sh
node scripts/sync-dataset.mjs <path-to-export.json>
```

That script strips internal research bookkeeping (verification sourcing, inference basis, reviewer notes) on the way in, so nothing beyond what's actually published on the site ever lands in this repo's history.

## Stack

Static site built with [Astro](https://astro.build), deployed to Cloudflare Workers on push to `main`. No client-side framework — filtering and search run on plain JS against data baked in at build time.

```sh
npm install
npm run dev       # localhost:4321
npm run build     # outputs to ./dist
npm run preview   # serve the production build locally
```
