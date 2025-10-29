import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    open: true,
  },
  build: {
    outDir: "build",
    rollupOptions: {
      output: {
        chunkFileNames: "assets/js/[name]-[hash].js", // 非入口的JS chunk
        entryFileNames: "assets/js/[name]-[hash].js", // 入口JS文件
        assetFileNames: ({ names }) => {
          const name = names.at(-1).toLowerCase();
          if (/\.(webp|svg)$/.test(name ?? "")) {
            return "assets/images/[name]-[hash][extname]";
          }
          if (/\.css$/.test(name ?? "")) {
            return "assets/css/[name]-[hash][extname]";
          }
          if (/\.(woff|woff2)$/.test(name ?? "")) {
            return "assets/fonts/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
  plugins: [react(), eslint()],
});
