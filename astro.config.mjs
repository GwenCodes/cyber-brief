// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // 1. Removes the Astro Dev Toolbar as requested
  devToolbar: {
    enabled: false,
  },

  // 2. Keeps your Tailwind CSS integration
  vite: {
    plugins: [tailwindcss()],
  },
});
