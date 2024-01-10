import { execSync } from 'child_process';
import { bench, run } from 'mitata';

const myBench = (command) => {
  const buildComponentsCommand = () => {
    console.time('build');
    execSync(command, { stdio: 'ignore' });
    console.timeEnd('build');
    console.log('Build completed successfully.');
  };
  bench('components:build', () => buildComponentsCommand());
};

const myRun = async (config) => {
  await run(config);
};

export const BenchConfig = {
  bench: myBench,
  run: myRun,
};
