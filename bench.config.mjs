import { execSync } from 'child_process';
import { bench, run } from 'mitata';

const CustomBench = (command) => {
  const buildComponentsCommand = () => {
    console.time('build');
    execSync(command, { stdio: 'ignore' });
    console.timeEnd('build');
    console.log('Build completed successfully.');
  };
  bench('components:build', () => buildComponentsCommand());
};

const CustomRun = async (config) => {
  await run(config);
};

export const BenchConfig = {
  bench: CustomBench,
  run: CustomRun,
};
