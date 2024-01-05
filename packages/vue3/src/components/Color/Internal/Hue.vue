<script setup lang="ts">
import { type CSSProperties, onMounted, ref } from 'vue';
import { constructHueGradient } from '@youcan/ui-core';
import type { HueProps } from './types';

const { hsv, width, height } = withDefaults(
  defineProps<HueProps>(),
  { width: 15, height: 152 },
);

const emit = defineEmits(['sethue']);

const wrapper = ref<HTMLDivElement>();
const canvas = ref<HTMLCanvasElement>();
const hueSliderStyles = ref<CSSProperties>({});

const renderColor = () => {
  const context = canvas.value!.getContext('2d', { willReadFrequently: true })!;
  canvas.value!.width = width;
  canvas.value!.height = height;

  const gradient = constructHueGradient(context, width);
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);
};

const renderSlider = () => {
  hueSliderStyles.value = {
    left: `${(1 - hsv.h / 360) * width - 2}px`,
  };
};

const setHue = (event: MouseEvent) => {
  const { left: hueLeft } = wrapper.value!.getBoundingClientRect();
  const context = canvas.value!.getContext('2d', { willReadFrequently: true })!;

  function handleMouseMove(e: MouseEvent) {
    let x = e.clientX - hueLeft;
    if (x < 0) {
      x = 0;
    }

    if (x > width) {
      x = width;
    }
    hueSliderStyles.value = {
      left: `${x - 12}px`,
    };

    const previewData = context.getImageData(Math.min(x, width - 1), 1, 1, 1);
    const [r, g, b] = previewData.data;
    emit('sethue', { r, g, b });
  }

  handleMouseMove(event);

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
};

onMounted(() => {
  renderColor();
  renderSlider();
});

defineExpose({ renderColor, renderSlider });
</script>

<template>
  <div ref="wrapper" class="hue-wrapper" @mousedown.prevent.stop="setHue">
    <canvas ref="canvas" class="canvas" />
    <i i-youcan-pointer :style="hueSliderStyles" class="slider" />
  </div>
</template>

<style scoped lang="scss">
.hue-wrapper {
  display: block;
  position: relative;
  width: v-bind("`${width}px`");
  height: v-bind("`${height}px`");
  cursor: pointer;
}

.canvas {
  display: block;
  border-radius: 500px;
}

.hue-wrapper .slider {
  position: absolute;
  top: -3px;
  width: v-bind("`${width}px`");
  width: 16px;
  height: 16px;
  background: var(--base-white);
  box-shadow: var(--shadow-sm-gray);
  pointer-events: none;
}
</style>
