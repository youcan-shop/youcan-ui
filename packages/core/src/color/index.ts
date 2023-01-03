import { is } from 'ramda';
import { l } from '../utils/type';
import type { HSV, RGB, RGBA } from './types';

export const CLR_BLACK = '#000000';
export const CLR_WHITE = '#FFFFFF';
export const CLR_OFFWHITE = '#CCD5DB';

export const constructAlphaBackdrop = (radius: number) => {
  const size = radius * 2;

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d', { willReadFrequently: true })!;

  canvas.width = size;
  canvas.height = size;

  context.fillStyle = CLR_WHITE;
  context.fillRect(0, 0, size, size);
  context.fillStyle = CLR_OFFWHITE;
  context.fillRect(0, 0, radius, radius);
  context.fillRect(radius, radius, radius, radius);

  return canvas;
};

export const constructLinearGradient = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  color1: string,
  color2: string,
  direction = 'left',
) => {
  const left = direction === 'left';
  const gradient = context.createLinearGradient(
    0,
    0,
    left ? width : 0,
    left ? 0 : height,
  );

  gradient.addColorStop(0.01, color1);
  gradient.addColorStop(0.99, color2);

  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);
};

export const constructHueGradient = (
  context: CanvasRenderingContext2D,
  height: number,
) => {
  const gradient = context.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, '#FF0000');
  gradient.addColorStop(0.17 * 1, '#FF00FF');
  gradient.addColorStop(0.17 * 2, '#0000FF');
  gradient.addColorStop(0.17 * 3, '#00FFFF');
  gradient.addColorStop(0.17 * 4, '#00FF00');
  gradient.addColorStop(0.17 * 5, '#FFFF00');
  gradient.addColorStop(1, '#FF0000');

  return gradient;
};

export const toHex = (value: number): string => {
  const hex = value.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};

export const toDec = (value: string): number => {
  return parseInt(value, 16) || 0;
};

export const rgbToHex = ({ r, g, b }: RGB): string => {
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
};

export const rgbaToHex = ({ r, g, b, a }: RGBA): string => {
  const alpha = ((a * 255) | 1 << 8).toString(16).slice(1);
  return `#${toHex(r)}${toHex(g)}${toHex(b)}${alpha}`.toUpperCase();
};

export const hexToRgb = (hex: string): RGB => {
  hex = hex.startsWith('#') ? hex.slice(1) : hex;

  return {
    r: toDec(hex.slice(0, 2)),
    g: toDec(hex.slice(2, 4)),
    b: toDec(hex.slice(4, 6)),
  } as RGB;
};

export const parseRgbString = (value: string) => {
  const rgba = (/rgba?\((.*?)\)/.exec(value) || ['', '0,0,0,1'])[1].split(',');

  return {
    r: Number(rgba[0]) || 0,
    g: Number(rgba[1]) || 0,
    b: Number(rgba[2]) || 0,
    a: Number(rgba[3] ?? 1),
  } as RGBA;
};

// yoinked
export const rgbToHsv = (rgb: RGB) => {
  const { r, g, b } = {
    r: rgb.r / 255,
    g: rgb.g / 255,
    b: rgb.b / 255,
  };

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  let h = 0;

  if (max === min) {
    h = 0;
  }
  else if (max === r) {
    if (g >= b) {
      h = (60 * (g - b)) / delta;
    }
    else {
      h = (60 * (g - b)) / delta + 360;
    }
  }
  else if (max === g) {
    h = (60 * (b - r)) / delta + 120;
  }
  else if (max === b) {
    h = (60 * (r - g)) / delta + 240;
  }

  h = Math.floor(h);

  const s = parseFloat((max === 0 ? 0 : 1 - min / max).toFixed(2));
  const v = parseFloat(max.toFixed(2));
  return { h, s, v };
};

// no other way i could do this sanely
export const parseColor = (color: unknown): RGBA & HSV => {
  let rgba: RGBA = { r: 0, g: 0, b: 0, a: 1 };

  if (/#/.test(color as string)) {
    rgba = { ...hexToRgb(color as string), a: 1 };
  }

  else if (/rgb/.test(color as string)) {
    rgba = parseRgbString(color as string);
  }

  else if (is(String)(color)) {
    rgba = parseRgbString(`rgba(${color})`);
  }

  else if (is(Object)(color)) {
    const a = 'a' in color ? color.a : 1;
    rgba = l<RGBA>({ ...color, a });
  }

  const hsv = rgbToHsv(rgba);
  return { ...rgba, ...hsv, a: rgba.a ?? 1 } as RGBA & HSV;
};
