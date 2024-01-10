import { execSync } from 'child_process';
import { bench, group, run } from 'mitata';

const buildPackagesCommand = () => {
  console.time('build');
  execSync('pnpm  build');
  console.timeEnd('build');
};

group('TopLevel build', () => {
  bench('Packages Build', () => buildPackagesCommand());
});

await run({
  avg: true,
  json: false,
  colors: true,
  min_max: true,
  collect: false,
  percentiles: false,
});
