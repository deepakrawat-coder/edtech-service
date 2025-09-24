import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`,
      },
    },
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) return "vendor"; // merge all libraries into vendor
        },
      },
    },
  },
});
