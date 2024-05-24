<script setup lang="ts">
import { onMounted, onUnmounted, ref, watchEffect } from 'vue';
import { getSliderValueFromColor, hslToHex, renderCanvas } from './utils';
import type { ColorPickerProps } from '~/types';
import { Divider, Input } from '~/components/';

const props = withDefaults(
  defineProps<ColorPickerProps>(),
  {
    preserveTransparency: true,
    swatches: () => ['#B8256EFF', '#25B86AFF', '#127EE3FF', '#F2990EFF', '#CC2929FF'],
  },
);

const emit = defineEmits(['update:modelValue']);

const canvas = ref<HTMLCanvasElement>();
const color = ref<string>(props.modelValue);
const inputColor = ref<string>(props.modelValue);
const canvasContainer = ref<HTMLDivElement | null>(null);
const draggableDiv = ref<HTMLDivElement | null>(null);

const colorSlider = ref();
const colorValue = ref(360);
const alphaSlider = ref();
const alphaValue = ref(1);
let isDragging = false;

const setColor = (pickedColor: string) => {
  if (props.preserveTransparency) {
    const alpha = Math.floor(alphaValue.value * 255).toString(16).padStart(2, '0').toUpperCase();
    color.value = `${pickedColor}${alpha}`;
    inputColor.value = `${pickedColor}${alpha}`;
  }
  else {
    color.value = `${pickedColor}`;
    inputColor.value = `${pickedColor}`;
  }
};

const setDraggableDivColor = (newX: number, newY: number) => {
  const context = canvas.value!.getContext('2d');
  if (context) {
    const pixelData = context.getImageData(newX, newY, 1, 1).data;
    const red = pixelData[0].toString(16).padStart(2, '0').toUpperCase();
    const green = pixelData[1].toString(16).padStart(2, '0').toUpperCase();
    const blue = pixelData[2].toString(16).padStart(2, '0').toUpperCase();

    const pickedColor = `#${red}${green}${blue}`;
    setColor(pickedColor);

    emit('update:modelValue', color.value);
  }
};

const setDraggableDivCoordinates = (event: MouseEvent) => {
  if (draggableDiv.value) {
    const rect = canvasContainer.value!.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const maxX = canvasContainer.value!.clientWidth - draggableDiv.value.offsetWidth;
    const maxY = canvasContainer.value!.clientHeight - draggableDiv.value.offsetHeight;
    const newX = Math.min(Math.max(0, x), maxX);
    const newY = Math.min(Math.max(0, y), maxY);

    draggableDiv.value.style.left = `${newX}px`;
    draggableDiv.value.style.top = `${newY}px`;

    setDraggableDivColor(newX, newY);
  }
};

const startDrag = (event: MouseEvent) => {
  event.stopPropagation();
  isDragging = true;
  draggableDiv.value!.style.cursor = 'grabbing';
};

const drag = (event: MouseEvent) => {
  event.preventDefault();
  if (isDragging) {
    draggableDiv.value!.style.cursor = 'grabbing';
    setDraggableDivCoordinates(event);
  }
};

const stopDrag = () => {
  isDragging = false;
  draggableDiv.value!.style.cursor = 'grab';
};

function handleCanvasClick(event: MouseEvent) {
  setDraggableDivCoordinates(event);
  emit('update:modelValue', color.value);
}

function handleSwatchClick(swatch: string) {
  const { hue, saturation } = getSliderValueFromColor(swatch);
  colorValue.value = hue;
  alphaValue.value = saturation;

  setColor(swatch);
  renderCanvas(canvas, color.value);
  emit('update:modelValue', color.value);
}

function updateColor() {
  const hue = colorValue.value;
  const hex = hslToHex(hue, 100, 50);
  setColor(hex);
  renderCanvas(canvas, color.value);
  emit('update:modelValue', color.value);
}

function updateAlpha() {
  const alpha = Math.floor(alphaValue.value * 255).toString(16).padStart(2, '0').toUpperCase();
  color.value = color.value.replace(/..$/, alpha);
  inputColor.value = color.value.replace(/..$/, alpha);
  emit('update:modelValue', color.value);
}

watchEffect(() => {
  if (inputColor.value !== color.value) {
    color.value = inputColor.value;
    renderCanvas(canvas, inputColor.value);
    emit('update:modelValue', inputColor.value);
  }
});

onMounted(() => {
  const { hue, saturation } = getSliderValueFromColor(props.modelValue);
  colorValue.value = hue;
  alphaValue.value = saturation;
  renderCanvas(canvas, props.modelValue);

  emit('update:modelValue', props.modelValue);

  if (props.preserveTransparency) {
    alphaSlider.value.addEventListener('input', updateAlpha);
    alphaSlider.value!.addEventListener('mousemove', (event: MouseEvent) => {
      event.stopPropagation();
    });
  }
  colorSlider.value!.addEventListener('input', updateColor);
  colorSlider.value!.addEventListener('mousemove', (event: MouseEvent) => {
    event.stopPropagation();
  });

  window.addEventListener('mouseup', stopDrag);
  window.addEventListener('mousemove', drag);
});

onUnmounted(() => {
  if (props.preserveTransparency) {
    alphaSlider.value.removeEventListener('input', updateAlpha);
  }
  colorSlider.value.removeEventListener('input', updateColor);
  canvasContainer.value!.removeEventListener('mousemove', drag);
  window.removeEventListener('mouseup', stopDrag);
});
</script>

<template>
  <div class="color-picker">
    <div ref="canvasContainer" class="canvas-container" @mousedown="startDrag">
      <canvas ref="canvas" class="saturation" @click="handleCanvasClick" />
      <div ref="draggableDiv" class="draggable-div" />
    </div>
    <div class="sliders">
      <input ref="colorSlider" v-model="colorValue" class="color-range" type="range" min="0" max="360">
      <input v-if="preserveTransparency" ref="alphaSlider" v-model="alphaValue" class="alpha-range" type="range" min="0" max="1" :step="0.01">
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
.color-picker .canvas-container {
  position: relative;
  width: 224px;
  height: 224px;
  overflow: hidden;
}

.color-picker .canvas-container .draggable-div {
  position: absolute;
  top: 0;
  right: 0;
  width: 8px;
  height: 8px;
  border: 2px solid var(--base-white);
  border-radius: 10px;
  background-color: transparent;
  cursor: grab;
}

.color-picker .input-group {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
}

.color-picker .input-group .preview {
  width: 35px;
  height: 35px;
  border: 1px solid var(--gray-100);
  border-radius: 6px;
}

.color-picker .sliders {
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

.color-picker .canvas-container .saturation {
  border-radius: 4px;
  cursor: pointer;
}

.color-picker .label {
  margin: 8px 0;
  font: var(--text-sm-medium);
}

.color-picker .swatches .color {
  width: 24px;
  height: 24px;
  border-radius: 100px;
}

.color-picker .swatches {
  display: flex;
  flex-direction: row;
  gap: 10px;
  cursor: pointer;
}

.color-picker .swatches .color:hover {
  transform: scale(1.1);
}

.color-picker .sliders .alpha-range {
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
    linear-gradient(
      45deg,
      v-bind(color.slice(0, -2)) 25%,
      transparent 25%,
      transparent 75%,
      v-bind(color.slice(0, -2)) 75%
    ),
    linear-gradient(
      45deg,
      v-bind(color.slice(0, -2)) 25%,
      transparent 25%,
      transparent 75%,
      v-bind(color.slice(0, -2)) 75%
    ),
    linear-gradient(to right, var(--gray-100) 25%, v-bind(color.slice(0, -2)) 85%);
  background-position: 0 0, 2px 2px, 0 0;
  background-size: 4px 4px, 4px 4px, 100% 100%;
}

.color-picker .sliders .color-range {
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

.color-picker .sliders .color-range:focus {
  outline: none;
}

.color-picker .sliders .color-range:active,
.color-picker .sliders .color-range:hover:active {
  cursor: grabbing;
}

.color-picker .sliders .color-range::-webkit-slider-thumb,
.color-picker .sliders .alpha-range::-webkit-slider-thumb {
  width: 1.3em;
  height: 1.3em;
  transition: border 0.1s ease-in-out, box-shadow 0.2s ease-in-out, transform 0.1s ease-in-out;
  border-radius: 0.3em;
  background: white;
  box-shadow: var(--shadow-sm-gray);
  cursor: grab;
  appearance: none;
}

.color-picker .sliders .color-range::-webkit-slider-thumb:hover,
.color-picker .sliders .alpha-range::-webkit-slider-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 5px 15px rgb(0 0 0 / 15%);
}

.color-picker .sliders .color-range::-webkit-slider-thumb:active,
.color-picker .sliders .color-range::-webkit-slider-thumb:hover:active,
.color-picker .sliders .alpha-range::-webkit-slider-thumb:active,
.color-picker .sliders .alpha-range::-webkit-slider-thumb:hover:active {
  transform: scale(0.975);
  cursor: grabbing;
}
</style>
