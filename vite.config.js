// vite.config.js
import './vite.fix.js'; // 👈 this is the patch
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
