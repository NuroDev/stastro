import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import UnoCSS from "unocss/vite";

import PresetIcons from "@unocss/preset-icons";
import PresetWind from "@unocss/preset-wind";

export default defineConfig({
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
