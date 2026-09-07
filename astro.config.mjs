// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// `site` is required for canonical URLs, sitemap entries and absolute URLs in
// structured data. Update it if the directory moves to another domain.
export default defineConfig({
  site: "https://radar.codacy.com",
  integrations: [sitemap()],
});
