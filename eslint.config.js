import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';
import html from '@html-eslint/eslint-plugin';

export default defineConfig([
  {
    files: [
      '**/*.{js,mjs,cjs,ts,mts,cts}',
    ],
    plugins: {
      js,
    },
    extends: [
      'js/recommended',
    ],
  },
  {
    files: [
      '**/*.{js,mjs,cjs,ts,mts,cts}',
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
  tseslint.configs.recommended,
  stylistic.configs.customize({
    semi: true,
  }),
  {
    files: ['**/*.html'],
    plugins: {
      html,
    },
    language: 'html/html',
    rules: {
      'html/no-duplicate-class': 'error',
    },
  },
]);
