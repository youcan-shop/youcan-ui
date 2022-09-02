import type { CSS } from '@stitches/core/types';
import { createStitches } from '@stitches/core';
import type Stitches from '@stitches/core/types/stitches';
import ThemeLoader from '~/ThemeLoader/ThemeLoader';

import Test from '~/Primitives/Test/Test.vue';

export default class YouCanUI {
  theme: CSS;
  stitchesConfig: Stitches;
  components: Record<string, unknown> = {
    Test,
  };

  constructor(themeConfig?: CSS) {
    this.theme = ThemeLoader(themeConfig);
    this.stitchesConfig = createStitches(this.theme);

    const comp = {};
    Object.keys(this.components).forEach((componentKey) => {
      Object.assign(comp, {
        [componentKey]: {
          value: this.components[componentKey],
          writable: false,
        },
      });
    });

    Object.defineProperties(this, comp);
  }
}
