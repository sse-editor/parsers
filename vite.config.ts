import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import dts from "vite-plugin-dts";
import path from "path";
import * as pkg from "./package.json";

// const NODE_ENV = process.argv.mode || "development";
const VERSION = pkg.version;

export default defineConfig({
  build: {
    outDir: `${process.cwd()}/dist`,
    copyPublicDir: false,
    lib: {
      entry: path.resolve(process.cwd(), "src", "html.ts"),
      name: "HTML",
      fileName: "html",
      formats: ["cjs", "es", "iife", "umd"]
    },
  },
  define: {
    VERSION: JSON.stringify(VERSION),
  },
  plugins: [react()],
});
