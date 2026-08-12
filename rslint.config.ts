import { defineConfig, js, ts } from '@rslint/core';

export default defineConfig([
  js.configs.recommended,
  ts.configs.recommended,
  {
    files: ['playground/**/*', 'test/**/*'],
    rules: {
      'no-undef': 'off',
    },
  },
]);
