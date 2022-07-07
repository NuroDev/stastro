import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import UnoCSS from "unocss/vite";

/**
 * @see https://github.com/withastro/astro/tree/main/packages/integrations/vercel
 */
import VercelAdapter from "@astrojs/vercel/serverless";

import PresetIcons from "@unocss/preset-icons";
import PresetWind from "@unocss/preset-wind";

export default defineConfig({
  adapter: VercelAdapter(),
  integrations: [solidJs()],
  vite: {
    plugins: [
      UnoCSS({
        presets: [
          PresetIcons(),
          PresetWind({
            dark: "class",
          }),
        ],
      }),
    ],
  },
});
