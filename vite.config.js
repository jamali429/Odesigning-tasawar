// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    url: false, // ✅ Add this line to prevent Vite from transforming URLs in CSS
    postcss: {
      plugins: [],
    },
    devSourcemap: true,
  },
  build: {
    assetsInlineLimit: 0,
  },
});
