import { defineConfig } from "vite";
import { resolve } from "path";
import { glob } from "glob";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";
import SortCss from "postcss-sort-media-queries";

export default defineConfig(({ command }) => {
  return {
    base: "/",
    define: {
      [command === "serve" ? "global" : "_global"]: {},
    },
    root: "src",
    build: {
      sourcemap: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
          uk: resolve(__dirname, "src/uk/index.html"),
          en: resolve(__dirname, "src/en/index.html"),
          ru: resolve(__dirname, "src/ru/index.html"),
          cz: resolve(__dirname, "src/cz/index.html"),
        },
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
          entryFileNames: (chunkInfo) => {
            if (chunkInfo.name === "commonHelpers") {
              return "commonHelpers.js";
            }
            return "[name].js";
          },
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith(".html")) {
              return "[name].[ext]";
            }
            return "assets/[name]-[hash][extname]";
          },
        },
      },
      outDir: "../dist",
      emptyOutDir: true,
    },
    plugins: [
      injectHTML(),
      FullReload(["./**/*.html"]),
      SortCss({
        sort: "mobile-first",
      }),
    ],
  };
});
