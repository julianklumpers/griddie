import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@zerodp/griddie",
      formats: ["es", "umd", "cjs"],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: ["react"],
      output: {
        // Provide global variables to use in the UMD build. for externalized deps
        globals: {
          react: "React",
        },
      },
    },
    minify: "terser",
  },
  server: {
    open: true,
  },
});
