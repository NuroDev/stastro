import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";
import WindiCSS from "vite-plugin-windicss";

/**
 * @see https://github.com/withastro/astro/tree/main/packages/integrations/vercel
 */
import VercelAdapter from "@astrojs/vercel/serverless";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  adapter: isProduction ? VercelAdapter() : undefined,
  integrations: [
    solidJs(),
    sitemap({
      // ...
    }),
  ],
  site: process.env.VERCEL ? process.env.VERCEL_URL : undefined,
  vite: {
    plugins: [
      WindiCSS({
        config: {
          darkMode: "class",
        },
      }),
    ],
  },
});
