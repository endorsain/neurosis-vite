import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Crea un alias para el directorio 'src'
      "@": path.resolve(__dirname, "./src"),
      // También puedes crear alias para subdirectorios
      // "@components": path.resolve(__dirname, "./src/components"),
    },
  },
});
