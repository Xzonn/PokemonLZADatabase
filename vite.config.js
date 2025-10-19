import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

export default defineConfig(() => {
  return {
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
    },
    plugins: [react(), eslint()],
  };
});
