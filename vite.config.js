// vite.config.js
import { defineConfig } from 'vite';
export default defineConfig({
  css: {
    postcss: {
      plugins: [], // Disable or control PostCSS plugins to prevent crypto.hash errors
    },
  },
});