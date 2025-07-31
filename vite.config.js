// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    css: {
    postcss: {
      plugins: [],
    },
    devSourcemap: true,
  },
  build: {
    assetsInlineLimit: 0,
  },
});
