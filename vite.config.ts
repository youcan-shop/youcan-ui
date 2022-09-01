import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

export default defineConfig(({ mode }) => {
  const isProd = mode === 'prod';
  const isDev = mode === 'dev';

  let build = {};
  if (isProd) {
    build = {
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'youcan-ui',
        fileName: 'index',
        formats: ['es', 'cjs', 'umd'],
      },
      rollupOptions: {
        external: [
          'vue',
          'vue-demi',
        ],
        output: {
          globals: {
            'vue': 'Vue',
            'vue-demi': 'VueDemi',
          },
        },
      },
    };
  }

  let optimizeDeps = {};
  if (isDev) {
    optimizeDeps = {
      exclude: ['vue-demi'],
    };
  }

  return {
    plugins: [
      Vue({
        include: [/\.vue$/],
        reactivityTransform: true,
      }),
    ],
    optimizeDeps,
    build,

    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
  };
});
