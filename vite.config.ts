import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import glsl from 'vite-plugin-glsl';

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio-dashboard-app/',
  plugins: [react(), tailwindcss(), glsl()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
