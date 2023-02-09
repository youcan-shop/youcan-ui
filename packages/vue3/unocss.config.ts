import {
  defineConfig,
  presetAttributify,
  presetIcons,
} from 'unocss';
import YouCanIconsInfo from '@youcan/ui-icons/info.json';
import YouCanIcons from '@youcan/ui-icons/icons.json';
import YouCanVisualsInfo from '@/youcan/ui-visuals/info.json';
import YouCanVisuals from '@/youcan/ui-visuals/info.json';

export default defineConfig({
  presets: [
    presetAttributify(),
    presetIcons({
      warn: true,
      extraProperties: {
        width: '20px',
        height: '20px',
        display: 'block',
      },
      collections: {
        [YouCanIconsInfo.prefix || 'youcan']: () => YouCanIcons,
        [YouCanVisualsInfo.prefix || 'visuals']: () => YouCanVisuals,
      },
    }),
  ],
});
