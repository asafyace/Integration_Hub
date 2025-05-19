import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // ensures assets are loaded from root
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
