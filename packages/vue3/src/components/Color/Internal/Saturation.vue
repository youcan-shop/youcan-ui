<script setup lang="ts">
import type { HSV } from '@youcan/ui-core';
import { type CSSProperties, onMounted, ref } from 'vue';
import { CLR_BLACK, CLR_WHITE, constructLinearGradient } from '@youcan/ui-core';

const props = withDefaults(
  defineProps<{ color: string; hsv: HSV; size: number }>(),
  { color: CLR_BLACK, size: 152 },
);

const emit = defineEmits(['setsaturation']);

const wrapper = ref<HTMLDivElement>();
const canvas = ref<HTMLCanvasElement>();
const saturationSliderStyles = ref<CSSProperties>({});

const renderColor = () => {
  const context = canvas.value!.getContext('2d', { willReadFrequently: true })!;

  canvas.value!.width = props.size;
  canvas.value!.height = props.size;

  context.fillStyle = props.color;
  context.fillRect(0, 0, props.size, props.size);

  constructLinearGradient(context, props.size, props.size, CLR_WHITE, 'rgba(255, 255, 255, 0)');
  constructLinearGradient(context, props.size, props.size, 'rgba(0, 0, 0, 0)', CLR_BLACK, 'right');
};

const renderSlider = () => {
  saturationSliderStyles.value = {
    left: `${props.hsv.s * props.size - 5}px`,
    top: `${(1 - props.hsv.v) * props.size - 5}px`,
  };
};

const setSaturation = (event: MouseEvent) => {
  const { top: saturationTop, left: saturationLeft } = wrapper.value!.getBoundingClientRect();
  const context = (event.target as HTMLCanvasElement).getContext('2d', { willReadFrequently: true })!;

  function handleMouseMove(e: MouseEvent) {
    let x = e.clientX - saturationLeft;
    let y = e.clientY - saturationTop;

    if (x < 0) {
      x = 0;
    }

    if (y < 0) {
      y = 0;
    }

    if (x > props.size) {
      x = props.size;
    }

    if (y > props.size) {
      y = props.size;
    }

    saturationSliderStyles.value = {
      left: `${x - 10}px`,
      top: `${y - 10}px`,
    };

    const previewData = context.getImageData(Math.min(x, props.size - 1), Math.min(y, props.size - 1), 1, 1);
    const [r, g, b] = previewData.data;
    emit('setsaturation', { r, g, b });
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
  <div ref="wrapper" class="saturation-wrapper" @mousedown.prevent.stop="setSaturation">
    <canvas ref="canvas" class="canvas" />
    <i i-youcan-pointer :style="saturationSliderStyles" class="slider" />
  </div>
</template>

<style scoped lang="scss">
.saturation-wrapper {
  position: relative;
  width: v-bind("`${size}px`");
  height: v-bind("`${size}px`");
  cursor: pointer;
}

.canvas {
  border-radius: 4px;
}

.saturation-wrapper .slider {
  position: absolute;
  top: 0;
  left: 100px;
  box-shadow: var(--shadow-sm-gray);
  color: var(--base-white);
  pointer-events: none;
}
</style>
