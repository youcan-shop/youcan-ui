import { BenchConfig } from './config.bench.mjs';

const { bench, run } = BenchConfig;

const config = {
  avg: true,
  json: false,
  colors: true,
  min_max: true,
  collect: false,
  percentiles: true,
};

bench('vite build');
run(config);
