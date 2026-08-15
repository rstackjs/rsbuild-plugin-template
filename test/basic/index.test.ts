import { expect, test } from '@rstest/playwright';
import { createRsbuild } from '@rsbuild/core';
import { pluginExample } from '../../src';
import { getRandomPort } from '@rstackjs/test-utils';

test('should render page as expected', async ({ page }) => {
  const rsbuild = await createRsbuild({
    cwd: import.meta.dirname,
    rsbuildConfig: {
      plugins: [pluginExample()],
      server: {
        port: await getRandomPort(),
      },
    },
  });

  const { server, urls } = await rsbuild.startDevServer();

  await page.goto(urls[0]);
  expect(await page.evaluate('window.test')).toBe(1);

  await server.close();
});

test('should build succeed', async ({ page }) => {
  const rsbuild = await createRsbuild({
    cwd: import.meta.dirname,
    rsbuildConfig: {
      plugins: [pluginExample()],
    },
  });

  await rsbuild.build();
  const { server, urls } = await rsbuild.preview();

  await page.goto(urls[0]);
  expect(await page.evaluate('window.test')).toBe(1);

  await server.close();
});
