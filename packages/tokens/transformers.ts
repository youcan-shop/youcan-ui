import type { AnimationToken, RadiusToken, SpacingToken, TypographyToken } from './types';
import { createColorScale } from './utils';

export const transformAnimations = (tokens: Record<string, AnimationToken>) => {
  const transitions: Record<string, string> = {};

  Object.entries(tokens).forEach(([key, token]) => {
    transitions[key] = `${token.$value} ${token.$extension?.easing || 'ease-out'}`;
  });

  return transitions;
};

export const transformColors = (tokens: Record<string, any>) => {
  const semanticColors = createColorScale(tokens);
  const flatColors: Record<string, string> = {};

  Object.entries(semanticColors).forEach(([category, shades]) => {
    Object.entries(shades).forEach(([shade, value]) => {
      flatColors[`${category}-${shade}`] = value;
    });
  });

  return flatColors;
};

export const transformRadius = (tokens: Record<string, RadiusToken>) => {
  const radius: Record<string, string> = {};

  Object.entries(tokens).forEach(([key, token]) => {
    radius[key] = `${token.$value}px`;
  });

  return radius;
};

// export const transformShadows = (tokens: Record<string, ShadowToken>) => {
//   const shadows: Record<string, string> = {};

//   Object.entries(tokens).forEach(([key, token]) => {
//     const shadowValues = Array.isArray(token.$value) ? token.$value : [token.$value];
//     shadows[key] = shadowValues
//       .map(shadow =>
//           `${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`,
//       )
//       .join(', ');
//   });

//   return shadows;
// };

export const transformSpacing = (tokens: Record<string, SpacingToken>) => {
  const spacing: Record<string, string> = {};

  Object.entries(tokens).forEach(([key, token]) => {
    spacing[key] = `${token.$value}px`;
  });

  return spacing;
};

export const transformTypography = (tokens: Record<string, TypographyToken>) => {
  const typography: Record<string, any> = {
    fontFamily: {},
    lineHeight: {},
    fontWeight: {},
    fontSize: {},
  };

  Object.entries(tokens).forEach(([key, token]) => {
    switch (token.$type) {
      case 'fontFamilies':
        typography.fontFamily[key] = token.$value;
        break;
      case 'lineHeights':
        typography.lineHeight[key] = `${token.$value}px`;
        break;
      case 'fontWeights':
        typography.fontWeight[key] = token.$value;
        break;
      case 'fontSize':
        typography.fontSize[key] = `${token.$value}px`;
        break;
    }
  });

  return typography;
};
