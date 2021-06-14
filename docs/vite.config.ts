import path from "path";
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "@zerodp/griddie": path.resolve(__dirname, "../src"),
      "@stores": "/src/stores",
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@snippets": path.resolve(__dirname, "src/snippets"),
    },
  },
  plugins: [svgr(), reactRefresh()],
});
