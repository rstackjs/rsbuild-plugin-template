// Configuration guide: https://rstack.rs/config
import { define } from 'rstack';

define.lib({
  dts: true,
  syntax: 'es2023',
});

define.fmt({
  singleQuote: true,
  sortPackageJson: true,
});

define.staged({
  '*.{js,jsx,ts,tsx,mjs,cjs,mts,cts}': ['rs lint', 'rs fmt'],
  '*.{json,md,mdx,css,sass,scss,less,html,yml,yaml}': 'rs fmt',
});

define.lint(({ globals, js, ts }) => [
  js.configs.recommended,
  ts.configs.recommendedTypeChecked,
  {
    files: ['test/**/src/**/*.{js,jsx}'],
    languageOptions: {
      globals: globals.browser,
    },
  },
]);
