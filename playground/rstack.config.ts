import { define } from 'rstack';

define.app(async () => {
  const { pluginExample } = await import('../src/index.ts');

  return {
    plugins: [pluginExample()],
  };
});
