import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import WindiCSS from "vite-plugin-windicss";

/**
 * @see https://github.com/withastro/astro/tree/main/packages/integrations/vercel
 */
import VercelAdapter from "@astrojs/vercel/serverless";

export default defineConfig({
  // adapter: VercelAdapter(),
  integrations: [solidJs()],
  vite: {
    plugins: [WindiCSS({})],
  },
});
