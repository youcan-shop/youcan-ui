import type { TokenObject } from './types';

export const flattenObject = (obj: TokenObject, prefix = ''): Record<string, any> => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const newPrefix = prefix ? `${prefix}-${key}` : key;

    if (value && typeof value === 'object' && !('$value' in value)) {
      return { ...acc, ...flattenObject(value, newPrefix) };
    }

    if ('$value' in value) {
      return { ...acc, [newPrefix]: value.$value };
    }

    return acc;
  }, {});
};

export const resolveTokenReference = (value: string, tokens: Record<string, any>): string => {
  if (typeof value !== 'string' || !value.startsWith('{') || !value.endsWith('}')) {
    return value;
  }

  const tokenPath = value.slice(1, -1);

  return tokens[tokenPath] || value;
};

export const createColorScale = (colors: Record<string, any>) => {
  const semanticColors: Record<string, Record<string, string>> = {};

  Object.entries(colors).forEach(([key, value]) => {
    if (typeof value === 'object' && !('$type' in value)) {
      semanticColors[key] = {};
      Object.entries(value).forEach(([shade, colorValue]) => {
        if (typeof colorValue === 'object' && '$value' in colorValue!) {
          semanticColors[key][shade] = colorValue.$value as string;
        }
      });
    }
  });

  return semanticColors;
};
