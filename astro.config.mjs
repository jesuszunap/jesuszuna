// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://jesuszuna.com",
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Sora",
      cssVariable: "--font-sora",
      fallbacks: ["ui-serif", "serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
      fallbacks: ["system-ui", "sans-serif"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/cv/print/"),
    }),
  ],
});
