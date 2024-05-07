import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Favicon dosyanızın yolu
        manualChunks: {
          favicon: ['src/assets/images/favicon.svg'], // Veya SVG gibi formatlar için uygun yol
        },
      },
    },
  },
});
