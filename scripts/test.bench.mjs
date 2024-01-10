import { bench, run } from 'mitata';

const fn = () => {};

bench('noop', fn);
bench('noop', fn);
bench('noop', fn);
bench('noop', fn);
bench('noop', fn);
bench('noop', fn);
bench('noop', fn);
bench('noop', fn);
bench('noop', fn);
bench('noop', fn);
bench('noop', fn);
bench('noop', fn);
bench('noop', fn);

await run({ percentiles: false });
