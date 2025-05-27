import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';
import { resolve } from 'node:path';

const __dirname = import.meta.dirname;
const outDir = resolve(__dirname, 'dist');
const root = resolve(__dirname, 'src');

export default defineConfig({
  root: root,
  base: '/sipjs-simple-user-demo/',
  server: {
    open: true,
    proxy: {
    },
  },
  build: {
    outDir: outDir,
    sourcemap: true,
    rollupOptions: {
      input: {
        index: resolve(root, 'index.html'),
        demo1: resolve(root, 'demo-1.html'),
        demo2: resolve(root, 'demo-2.html'),
        demo3: resolve(root, 'demo-3.html'),
      },
    },
  },
  plugins: [
    checker({
      typescript: true,
      eslint: {
        useFlatConfig: true,
        lintCommand: 'eslint "./**/*.{ts,tsx}"',
      },
    }),
  ],
});
