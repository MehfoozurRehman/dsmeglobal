import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import viteCompression from "vite-plugin-compression";
import { ViteWebfontDownload } from "vite-plugin-webfont-dl";
import removeConsole from "vite-plugin-remove-console";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ injectRegister: "auto" }),
    viteCompression(),
    ViteWebfontDownload(),
    removeConsole(),
  ],
  esbuild: {
    drop: ["console", "debugger"],
  },
});
