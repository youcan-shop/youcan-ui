import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        width: '20px',
        height: '20px',
        display: 'block',
      },
    }),
  ],
});
