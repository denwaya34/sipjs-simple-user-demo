import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';

// https://vite.dev/config/
export default defineConfig({
  server: {
    open: true,
    proxy: {
    },
  },
  build: {
    sourcemap: true,
  },
  plugins: [
    checker({
      typescript: true,
      eslint: {
        useFlatConfig: true,
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
  ],
});
