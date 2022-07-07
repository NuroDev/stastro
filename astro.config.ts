import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import UnoCSS from "unocss/vite";

export default defineConfig({
  integrations: [solidJs()],
  vite: {
    plugins: [UnoCSS({})],
  },
});
