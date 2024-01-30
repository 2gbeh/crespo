import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { constants } from "buffer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      constants: `${path.resolve(__dirname, "./src/constants/")}`,
      data: path.resolve(__dirname, "./src/data"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      pages: path.resolve(__dirname, "./src/pages"),
      utils: path.resolve(__dirname, "./src/utils"),
    },
  },
});
