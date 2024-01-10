import { execSync } from 'child_process';
import { bench, group, run } from 'mitata';

const buildComponentsCommand = () => {
  console.time('build');
  execSync('pnpm components:build & pnpm story:build');
  console.timeEnd('build');
};

group('Vue3 Build', () => {
  bench('components:build', () => buildComponentsCommand());
});

await run({
  avg: true,
  json: false,
  colors: true,
  min_max: true,
  collect: false,
  percentiles: false,
});
