import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"), // '@' points to src/
      "@components": resolve(__dirname, "./src/components"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@constants": resolve(__dirname, "./src/constants"),
      "@utils": resolve(__dirname, "./src/utils"),
      "@lib": resolve(__dirname, "./src/lib"),
      "@providers": resolve(__dirname, "./src/providers"),
    },
  },
});
