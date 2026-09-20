import { spawnSync } from 'node:child_process';
import { performance } from 'node:perf_hooks';

const rounds = [
  ['chrome', 'baseline', 'chromium'],
  ['baseline', 'chromium', 'chrome'],
  ['chromium', 'chrome', 'baseline'],
];

for (const [round, variants] of rounds.entries()) {
  for (const variant of variants) {
    console.log(`::group::Diagnostic round ${round + 1}: ${variant}`);
    const start = performance.now();
    const result = spawnSync(process.execPath, ['--run', 'test'], {
      env: {
        ...process.env,
        CI_BROWSER_VARIANT: variant,
        DEBUG: 'pw:api,pw:browser',
      },
      stdio: 'inherit',
    });
    console.log(
      'CI_DIAG_PROCESS ' +
        JSON.stringify({
          round: round + 1,
          variant,
          wallMs: Math.round(performance.now() - start),
          status: result.status,
        }),
    );
    console.log('::endgroup::');
    if (result.error) throw result.error;
    if (result.status !== 0) process.exit(result.status ?? 1);
  }
}
