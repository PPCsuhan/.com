import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    base: './', // Ensures relative paths for GitHub Pages and static hosting (fixes white blank screen)
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('.', import.meta.url)),
      },
    },
    server: {
      // Disable HMR in cloud preview/production to prevent WebSocket closed errors
      hmr: process.env.NODE_ENV === 'development' ? (process.env.DISABLE_HMR !== 'true') : false,
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
