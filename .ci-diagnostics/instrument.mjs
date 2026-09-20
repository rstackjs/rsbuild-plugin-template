import { performance } from 'node:perf_hooks';
import { chromium } from 'playwright';

function instrument(object, method, phase, onResult) {
  const original = object[method];
  object[method] = async function (...args) {
    const start = performance.now();
    try {
      const result = await original.apply(this, args);
      onResult?.(result);
      return result;
    } finally {
      console.log(
        'CI_DIAG ' +
          JSON.stringify({
            variant: process.env.CI_BROWSER_VARIANT,
            phase,
            ms: Math.round((performance.now() - start) * 100) / 100,
          }),
      );
    }
  };
}

instrument(chromium, 'launch', 'browser.launch', (browser) => {
  console.log(
    'CI_DIAG_VERSION ' +
      JSON.stringify({
        variant: process.env.CI_BROWSER_VARIANT,
        version: browser.version(),
      }),
  );
  instrument(browser, 'close', 'browser.close');
  instrument(browser, 'newContext', 'browser.newContext', (context) => {
    instrument(context, 'close', 'context.close');
    instrument(context, 'newPage', 'context.newPage', (page) => {
      instrument(page, 'goto', 'page.goto');
      instrument(page, 'close', 'page.close');
    });
  });
});
