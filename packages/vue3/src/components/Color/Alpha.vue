<script setup lang="ts">
import { type CSSProperties, onMounted, ref, watch } from 'vue';
import { CLR_BLACK, constructAlphaBackdrop, constructLinearGradient } from '@youcan/ui-core';
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

  constructLinearGradient(context, props.width, props.height, 'rgba(255, 255, 255, 0)', props.color, 'right');
};

const renderSlider = () => {
  alphaSliderStyles.value = {
    top: `${props.rgba.a * props.height - 2}px`,
  };
};

const setAlpha = (event: MouseEvent) => {
  const { top: hueTop } = wrapper.value!.getBoundingClientRect();

  function handleMouseMove(e: MouseEvent) {
    let y = e.clientY - hueTop;

    if (y < 0) {
      y = 0;
    }

    if (y > props.height) {
      y = props.height;
    }

    emit('setalpha', parseFloat((y / props.height).toFixed(2)));
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
    <i i-ph-circle-bold :style="alphaSliderStyles" class="slider" />
  </div>
</template>

<style scoped lang="scss">
.alpha-wrapper {
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

.alpha-wrapper .slider {
    position: absolute;
    left: 0;
    width: v-bind("`${width}px`");
    background: var(--white);
    pointer-events: none;
}
</style>
