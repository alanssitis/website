// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://alan.chung-ma.com",
  integrations: [mdx(), sitemap()],
  vite: {
    server: {
      watch: {
        ignored: /(^|[\/\\])\../, // ignore dotfiles
      },
    },
    plugins: [tailwindcss()],
  },
});
