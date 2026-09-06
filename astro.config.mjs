// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// `site` is required for canonical URLs, sitemap entries and absolute URLs in
// structured data. Update it if the directory moves to another domain.
export default defineConfig({
  site: "https://radar.codacy.com",
  integrations: [
    sitemap({
      // The search page is a client-side view over the same tools already
      // listed on the home page; it adds no indexable content of its own.
      filter: (page) => !page.includes("/search"),
    }),
  ],
});
