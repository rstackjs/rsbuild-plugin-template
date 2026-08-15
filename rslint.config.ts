import { defineConfig, js, ts } from '@rslint/core';
import globals from 'globals';

export default defineConfig([
  js.configs.recommended,
  ts.configs.recommendedTypeChecked,
  {
    files: ['**/*.{js,jsx,cjs,mjs}'],
    languageOptions: {
      globals: globals.browser,
    },
  },
]);
