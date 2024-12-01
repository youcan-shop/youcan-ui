import animations from './src/animation.tokens.json';
import colors from './src/colors.tokens.json';
import radius from './src/radius.tokens.json';
import spacing from './src/spacing.tokens.json';
import typography from './src/typography.tokens.json';

import { createColorScale, flattenObject } from './utils';

import {
  transformAnimations,
  transformColors,
  transformRadius,
  // transformShadows,
  transformSpacing,
  transformTypography,
} from './transformers';

const presetYouCan = () => {
  const flattenedColors = flattenObject(colors);
  const semanticColors = createColorScale(colors);
  const flattenedAnimations = flattenObject(animations);
  const flattenedRadius = flattenObject(radius);
  // const flattenedShadows = flattenObject(shadows);
  const flattenedSpacing = flattenObject(spacing);
  const flattenedTypography = flattenObject(typography);

  const colorRules = [
    [/^text-(.+)-(\d+)$/, ([, color, shade]: string[]) => {
      if (semanticColors[color]?.[shade]) {
        return {
          color: semanticColors[color][shade],
        };
      }
    }],
    [/^bg-(.+)-(\d+)$/, ([, color, shade]: string[]) => {
      if (semanticColors[color]?.[shade]) {
        return {
          'background-color': semanticColors[color][shade],
        };
      }
    }],
    [/^border-(.+)-(\d+)$/, ([, color, shade]: string[]) => {
      if (semanticColors[color]?.[shade]) {
        return {
          'border-color': semanticColors[color][shade],
        };
      }
    }],
  ];

  return {
    name: '@youcan/tokens',
    theme: {
      colors: transformColors(flattenedColors),
      transitionTimingFunction: transformAnimations(flattenedAnimations),
      borderRadius: transformRadius(flattenedRadius),
      // boxShadow: transformShadows(flattenedShadows),
      spacing: transformSpacing(flattenedSpacing),
      ...transformTypography(flattenedTypography),
    },
    rules: colorRules,
    variants: [
      // Hover variant
      (matcher: string) => {
        if (!matcher.startsWith('hover:')) {
          return matcher;
        }

        return {
          matcher: matcher.slice(6),
          selector: (s: string) => `${s}:hover`,
        };
      },
      // Focus variant
      (matcher: string) => {
        if (!matcher.startsWith('focus:')) {
          return matcher;
        }

        return {
          matcher: matcher.slice(6),
          selector: (s: string) => `${s}:focus`,
        };
      },
      // Active variant
      (matcher: string) => {
        if (!matcher.startsWith('active:')) {
          return matcher;
        }

        return {
          matcher: matcher.slice(7),
          selector: (s: string) => `${s}:active`,
        };
      },
    ],
  };
};

export default presetYouCan;
