// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // fallback for crypto.hash
    assetsInlineLimit: 0,
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
});
