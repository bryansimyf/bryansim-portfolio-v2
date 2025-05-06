import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

import packageJson from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  base: "/bryansim-portfolio-v2",
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
  },
  plugins: [react(), tailwindcss(), svgr()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"), // '@' points to src/
      "@components": resolve(__dirname, "./src/components"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@constants": resolve(__dirname, "./src/constants"),
      "@utils": resolve(__dirname, "./src/utils"),
      "@lib": resolve(__dirname, "./src/lib"),
      "@providers": resolve(__dirname, "./src/providers"),
      "@hooks": resolve(__dirname, "./src/hooks"),
    },
  },
});
