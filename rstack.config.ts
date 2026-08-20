import { define } from 'rstack';

define.fmt({
  singleQuote: true,
  sortPackageJson: true,
});

define.lib({
  lib: [{ syntax: 'es2023', dts: true }],
});

define.test({
  isolate: false,
});

define.lint(({ globals, js, ts }) => [
  js.configs.recommended,
  ts.configs.recommendedTypeChecked,
  {
    files: ['**/*.{js,jsx,cjs,mjs}'],
    languageOptions: {
      globals: globals.browser,
    },
  },
]);
