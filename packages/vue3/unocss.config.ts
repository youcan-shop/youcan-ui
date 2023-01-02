import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from 'unocss';
import YouCanIconsInfo from '@youcan/ui-icons/info.json';
import YouCanIcons from '@youcan/ui-icons/icons.json';

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
      collections: {
        [YouCanIconsInfo.prefix || 'youcan']: () => YouCanIcons,
      },
    }),
  ],
});
