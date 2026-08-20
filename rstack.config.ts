import { define } from "rstack";

define.fmt({
  singleQuote: true,
  sortPackageJson: true,
});

define.lib({
  dts: true,
  syntax: "es2023",
});

define.lint(({ globals, js, ts }) => [
  js.configs.recommended,
  ts.configs.recommendedTypeChecked,
  {
    files: ["test/**/src/**/*.{js,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
  },
]);
