import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import UnoCSS from "unocss/vite";

import PresetWind from "@unocss/preset-wind";

export default defineConfig({
  integrations: [solidJs()],
  vite: {
    plugins: [
      UnoCSS({
        presets: [
          PresetWind({
            dark: "class",
          }),
        ],
      }),
    ],
  },
});
