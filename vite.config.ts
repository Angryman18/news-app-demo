import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const env = loadEnv("dev", process.cwd(), "VITE");

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  define: {
    "process.env": `${JSON.stringify(env)}`,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
