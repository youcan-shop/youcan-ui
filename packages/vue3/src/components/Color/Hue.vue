<script setup lang="ts">
import { type CSSProperties, onMounted, ref } from 'vue';
import type { HSV } from '@youcan/ui-core';
import { constructHueGradient } from '@youcan/ui-core';

const { hsv, width, height } = withDefaults(
  defineProps<{ hsv: HSV; width: number; height: number }>(),
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

  const gradient = constructHueGradient(context, height);
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);
};

const renderSlider = () => {
  hueSliderStyles.value = {
    top: `${(1 - hsv.h / 360) * height - 2}px`,
  };
};

const setHue = (event: MouseEvent) => {
  const { top: hueTop } = wrapper.value!.getBoundingClientRect();
  const context = canvas.value!.getContext('2d', { willReadFrequently: true })!;

  function handleMouseMove(e: MouseEvent) {
    let y = e.clientY - hueTop;

    if (y < 0) {
      y = 0;
    }

    if (y > height) {
      y = height;
    }

    hueSliderStyles.value = {
      top: `${y - 2}px`,
    };

    const previewData = context.getImageData(0, Math.min(y, height - 1), 1, 1);
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
    <i i-ph-circle-bold :style="hueSliderStyles" class="slider" />
  </div>
</template>

<style scoped lang="scss">
.hue-wrapper {
  display: block;
  position: relative;
  margin-left: 8px;
  cursor: pointer;
  width: v-bind("`${width}px`");
  height: v-bind("`${height}px`");
}

.canvas {
  border-radius: calc(v-bind("`${width}px`") * .5);
}

.hue-wrapper .slider {
    position: absolute;
    left: 0;
    width: v-bind("`${width}px`");
    background: var(--white);
    pointer-events: none;
}
</style>
