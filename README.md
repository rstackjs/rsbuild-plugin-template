# rsbuild-plugin-example

Example plugin for Rsbuild.

<p>
  <a href="https://npmjs.com/package/rsbuild-plugin-example">
   <img src="https://img.shields.io/npm/v/rsbuild-plugin-example?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" />
  </a>
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="license" />
  <a href="https://npmcharts.com/compare/rsbuild-plugin-example?minimal=true"><img src="https://img.shields.io/npm/dm/rsbuild-plugin-example.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="downloads" /></a>
</p>

## Usage

Install:

```bash
npm add rsbuild-plugin-example -D
```

Add plugin to your `rsbuild.config.ts`:

```ts
// rsbuild.config.ts
import { pluginExample } from 'rsbuild-plugin-example';

export default {
  plugins: [pluginExample()],
};
```

## Options

### foo

Some description.

- Type: `string`
- Default: `undefined`
- Example:

```js
pluginExample({
  foo: 'bar',
});
```

## License

[MIT](./LICENSE).
