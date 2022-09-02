import type { CSS } from '@stitches/core/types';
import BaseStitchesConfig from 'StitchesConfig';

const ThemeLoader = (themeConfig?: CSS): CSS => {
  if (typeof themeConfig === 'undefined') {
    return BaseStitchesConfig.config;
  }

  return {
    ...themeConfig,
    ...BaseStitchesConfig.config,
  };
};

export default ThemeLoader;
