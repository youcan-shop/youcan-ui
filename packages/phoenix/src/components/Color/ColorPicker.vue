<script setup lang="ts">
import { onMounted, onUnmounted, ref, watchEffect } from 'vue';
import { getSliderValueFromColor, handleMouseClick, hslToHex, renderCanvas } from './utils';
import type { ColorPickerProps } from '~/types';
import { Divider, Input } from '~/components/';

const props = withDefaults(
  defineProps<ColorPickerProps>(),
  {
    color: '',
    preserveTransparency: false,
    swatches: () => ['#B8256EFF', '#25B86AFF', '#127EE3FF', '#F2990EFF', '#CC2929FF'],
  },
);

const emit = defineEmits(['setcolor']);

const canvas = ref<HTMLCanvasElement>();
const color = ref(props.color);
const inputColor = ref(props.color);

const colorSlider = ref();
const colorValue = ref(360);
const alphaSlider = ref();
const alphaValue = ref(1);

function handleCanvasClick(event: MouseEvent) {
  const result = (handleMouseClick(canvas, event) as string);
  color.value = result;
  inputColor.value = result;
}

function handleSwatchClick(swatch: string) {
  const { hue, saturation } = getSliderValueFromColor(swatch);
  colorValue.value = hue;
  alphaValue.value = saturation;
  inputColor.value = swatch;
  color.value = swatch;
  renderCanvas(canvas, color.value);
}

function updateColor() {
  const alpha = Math.floor(alphaValue.value * 255).toString(16).padStart(2, '0').toUpperCase();
  const hue = colorValue.value;
  const hex = hslToHex(hue, 100, 50);
  color.value = `${hex}${alpha}`;
  inputColor.value = `${hex}${alpha}`;
  renderCanvas(canvas, color.value);
}

function updateAlpha() {
  const alpha = Math.floor(alphaValue.value * 255).toString(16).padStart(2, '0').toUpperCase();
  color.value = color.value.replace(/..$/, alpha);
  inputColor.value = color.value.replace(/..$/, alpha);
}

watchEffect(() => {
  if (inputColor.value !== color.value) {
    color.value = inputColor.value;
    renderCanvas(canvas, inputColor.value);
    emit('setcolor', inputColor.value);
  }
});

onMounted(() => {
  const { hue, saturation } = getSliderValueFromColor(props.color);
  colorValue.value = hue;
  alphaValue.value = saturation;
  renderCanvas(canvas, props.color);

  colorSlider.value.addEventListener('input', updateColor);
  alphaSlider.value.addEventListener('input', updateAlpha);
});

onUnmounted(() => {
  colorSlider.value.removeEventListener('input', updateColor);
  alphaSlider.value.removeEventListener('input', updateAlpha);
});
</script>

<template>
  <div class="color-picker">
    <canvas ref="canvas" class="saturation" @click="handleCanvasClick" />
    <div class="sliders">
      <input ref="colorSlider" v-model="colorValue" class="color-range" type="range" min="0" max="360">
      <input ref="alphaSlider" v-model="alphaValue" class="alpha-range" type="range" min="0" max="1" :step="0.01">
    </div>
    <p class="label">
      HEX
    </p>
    <div class="input-group">
      <Input v-model="inputColor" class="value" />
      <div :style="{ 'background-color': color }" class="preview" />
    </div>
    <Divider thickness="light" />
    <div class="swatches">
      <div v-for="swatch in swatches" :key="swatch" :style="{ background: swatch }" class="color" @click="handleSwatchClick(swatch)" />
    </div>
  </div>
</template>

<style scoped>
  .input-group {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }

  .preview {
    width: 35px;
    height: 35px;
    border-radius: 6px;
  }

  .sliders {
    display: flex;
    flex-direction: column;
    margin-top: 8px;
    gap: 5px;
  }

  .color-picker {
    box-sizing: border-box;
    width: min-content;
    padding: 12px;
    border-radius: 8px;
    background-color: var(--base-white);
    box-shadow: var(--shadow-md);
  }

  .saturation {
    border-radius: 4px;
    cursor: pointer;
  }

  .hue {
    border-radius: 4px;
  }

  .alpha {
    border-radius: 4px;
    cursor: pointer;
  }

  .label {
    margin: 8px 0;
    font: var(--text-sm-medium);
  }

  .color {
    width: 24px;
    height: 24px;
    border-radius: 100px;
  }

  .swatches {
    display: flex;
    flex-direction: row;
    gap: 10px;
    cursor: pointer;
  }

  .color:hover {
    transform: scale(1.1);
  }

  .hue-wrapper {
    display: block;
    position: relative;
    width: 224px;
    height: 20px;
    cursor: pointer;
  }

  .slider {
    position: absolute;
    width: 16px;
    height: 16px;
    background: var(--base-white);
    box-shadow: var(--shadow-sm-gray);
    pointer-events: none;
  }

  .alpha-range {
    display: block;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 0.7em;
    transition: color 0.05s linear;
    border-radius: 0.3em;
    outline: none;
    appearance: none;
    background-image:
      linear-gradient(45deg, v-bind(color) 25%, transparent 25%, transparent 75%, v-bind(color) 75%),
      linear-gradient(45deg, v-bind(color) 25%, transparent 25%, transparent 75%, v-bind(color) 75%),
      linear-gradient(to right, var(--gray-100) 25%, v-bind(color) 85%);
    background-position: 0 0, 2px 2px, 0 0;
    background-size: 4px 4px, 4px 4px, 100% 100%;
  }

  .color-range {
    display: block;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 0.7em;
    transition: color 0.05s linear;
    border-radius: 0.3em;
    outline: none;
    background:
      linear-gradient(
        to right,
        rgb(255 0 0),
        rgb(255 255 0),
        rgb(0 255 0),
        rgb(0 255 255),
        rgb(0 0 255),
        rgb(255 0 255),
        rgb(255 0 0)
      );
    background-color: rgb(0 0 0 / 10%);
    appearance: none;
  }

  .color-range:focus {
    outline: none;
  }

  .color-range:active,
  .color-range:hover:active {
    cursor: grabbing;
  }

  .color-range::-webkit-slider-thumb,
  .alpha-range::-webkit-slider-thumb {
    width: 1.3em;
    height: 1.3em;
    transition: border 0.1s ease-in-out, box-shadow 0.2s ease-in-out, transform 0.1s ease-in-out;
    border-radius: 0.3em;
    background: white;
    box-shadow: var(--shadow-sm-gray);
    cursor: grab;
    appearance: none;
  }

  .color-range::-webkit-slider-thumb:hover,
  .alpha-range::-webkit-slider-thumb:hover {
    transform: scale(1.1);
    box-shadow: 0 5px 15px rgb(0 0 0 / 15%);
  }

  .color-range::-webkit-slider-thumb:active,
  .color-range::-webkit-slider-thumb:hover:active,
  .alpha-range::-webkit-slider-thumb:active,
  .alpha-range::-webkit-slider-thumb:hover:active {
    transform: scale(0.975);
    cursor: grabbing;
  }
</style>
