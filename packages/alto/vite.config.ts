import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import Unocss from 'unocss/vite';

module.exports = defineConfig({
  plugins: [vue(), Unocss()],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'youcan-ui',
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      // external modules won't be bundled into your library
      external: ['vue'], // not every external has a global
      treeshake: 'smallest',
      output: {
        // disable warning on src/index.ts using both default and named export
        exports: 'named',
        // Provide global variables to use in the UMD build
        // for externalized deps (not useful if 'umd' is not in lib.formats)
        globals: {
          vue: 'Vue',
        },
        format: 'esm',
        assetFileNames: '[name].[ext]',
      },
    },
    emptyOutDir: false, // to retain the types folder generated by tsc
  },
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
      'dev/': `${resolve(__dirname, 'src/dev')}/`,
    },
  },
  server: {
    port: 3006,
    host: '0.0.0.0',
  },
});
