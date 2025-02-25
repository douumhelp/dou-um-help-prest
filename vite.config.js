import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer'; // Importe o autoprefixer corretamente

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(), // Use tailwindcss() diretamente
        autoprefixer(), // Use autoprefixer() diretamente
      ],
    },
  },
});