import type { ConfigType } from '@stitches/core/types/config';

export interface themeConfig {
  prefix?: ConfigType.Prefix<''>
  media?: ConfigType.Media<{}>
  theme?: ConfigType.Theme<{}>
  themeMap?: ConfigType.ThemeMap<DefaultTheme>
  utils?: ConfigType.Utils<{}>
}
