<script setup lang="ts">
import { type CSSProperties, onMounted, ref, watch } from 'vue';
import { CLR_BLACK, constructAlphaBackdrop, constructAlphaGradient } from '@youcan/ui-core';
import type { RGBA } from '@youcan/ui-core';

const props = withDefaults(
  defineProps<{ color: string; rgba: RGBA; height: number; width: number }>(),
  { color: CLR_BLACK, width: 15, height: 152 },
);

const emit = defineEmits(['setalpha']);

const ALPHA_BACKDROP_SIZE = 5;
const wrapper = ref<HTMLDivElement>();
const canvas = ref<HTMLCanvasElement>();
const alphaSliderStyles = ref<CSSProperties>({});

const renderColor = () => {
  const backdrop = constructAlphaBackdrop(ALPHA_BACKDROP_SIZE);
  const context = canvas.value!.getContext('2d', { willReadFrequently: true })!;

  canvas.value!.width = props.width;
  canvas.value!.height = props.height;

  context.fillStyle = context.createPattern(backdrop, 'repeat')!;
  context.fillRect(0, 0, props.width, props.height);

  constructAlphaGradient(context, props.width, props.height, 'rgba(255, 255, 255, 0)', props.color);
};

const renderSlider = () => {
  alphaSliderStyles.value = {
    left: `${props.rgba.a * props.width - 12}px`,
  };
};

const setAlpha = (event: MouseEvent) => {
  const { left: hueLeft } = wrapper.value!.getBoundingClientRect();

  function handleMouseMove(e: MouseEvent) {
    let x = e.clientX - hueLeft;

    if (x < 0) {
      x = 0;
    }

    if (x > props.width) {
      x = props.width;
    }

    emit('setalpha', parseFloat((x / props.width).toFixed(2)));
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

watch(() => props.color, () => renderColor());
watch(() => props.rgba, () => renderSlider());
</script>

<template>
  <div ref="wrapper" class="alpha-wrapper" @mousedown.prevent.stop="setAlpha">
    <canvas ref="canvas" class="canvas" />
    <i i-youcan-pointer :style="alphaSliderStyles" class="slider" />
  </div>
</template>

<style scoped lang="scss">
.alpha-wrapper {
  display: block;
  cursor: pointer;
  position: relative;
  width: v-bind("`${width}px`");
  height: v-bind("`${height}px`");
}

.canvas {
  border-radius: 500px;
  display: block;
}

.alpha-wrapper .slider {
  position: absolute;
  width: v-bind("`${width}px`");
  background: var(--base-white);
  box-shadow: var(--shadow-sm-gray);
  pointer-events: none;
  width: 16px;
  height: 16px;
  top: -3px;
}
</style>
