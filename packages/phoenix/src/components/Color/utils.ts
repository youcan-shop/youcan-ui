import { CLR_BLACK, CLR_WHITE, constructLinearGradient } from '@youcan/ui-core';
import type { Ref } from 'vue';

export function renderCanvas(canvas: Ref<HTMLCanvasElement | undefined>, color: string) {
  const context = canvas.value!.getContext('2d', { willReadFrequently: true })!;

  canvas.value!.width = 224;
  canvas.value!.height = 224;

  context.fillStyle = color;
  context.fillRect(0, 0, 224, 224);

  constructLinearGradient(context, 224, 224, CLR_WHITE, 'rgba(255, 255, 255, 0)');
  constructLinearGradient(context, 224, 224, 'rgba(0, 0, 0, 0)', CLR_BLACK, 'right');
}

export function handleMouseClick(canvas: Ref<HTMLCanvasElement | undefined>, event: MouseEvent) {
  if (!canvas.value) {
    return;
  }

  const rect = canvas.value.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const context = canvas.value.getContext('2d');
  if (!context) {
    return;
  }
  const imageData = context.getImageData(x, y, 1, 1);
  const pixel = imageData.data;

  const red = pixel[0].toString(16).padStart(2, '0').toUpperCase();
  const green = pixel[1].toString(16).padStart(2, '0').toUpperCase();
  const blue = pixel[2].toString(16).padStart(2, '0').toUpperCase();
  const alpha = pixel[3].toString(16).padStart(2, '0').toUpperCase();

  const pickedcolor = `#${red}${green}${blue}${alpha}`;

  return pickedcolor;
}

export function hslToHex(h: number, s: number, l: number) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

    return Math.round(255 * color).toString(16).padStart(2, '0').toUpperCase(); // convert to Hex and prefix "0" if needed
  };

  return `#${f(0)}${f(8)}${f(4)}`;
}

function hexToRgb(hex: string) {
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
}

export function hexToHue(hex: string) {
  const rgb = hexToRgb(hex);
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let hue;

  if (max === min) {
    hue = 0;
  }
  else if (max === r) {
    hue = 60 * ((g - b) / (max - min)) % 360;
  }
  else if (max === g) {
    hue = 60 * ((b - r) / (max - min)) + 120;
  }
  else {
    hue = 60 * ((r - g) / (max - min)) + 240;
  }

  return hue < 0 ? hue + 360 : hue;
}

export function getSliderValueFromColor(hexColorWithHash: string) {
  const hexColor = hexColorWithHash.startsWith('#') ? hexColorWithHash.slice(1) : hexColorWithHash;

  let alpha = '';
  if (hexColor.length === 8) {
    alpha = hexColor.slice(6, 8);
  }

  const hueHex = hexColor.length === 8 ? hexColor.slice(0, 6) : hexColor;
  const hue = hexToHue(hueHex);
  const color = hue;

  return {
    hue: color,
    saturation: parseInt(alpha, 16) / 255,
  };
}
