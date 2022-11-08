import { defineConfig } from 'histoire';
import { HstVue } from '@histoire/plugin-vue2';

export default defineConfig({
  setupFile: '/src/histoire.setup.ts',
  plugins: [
    HstVue(),
  ],
});
