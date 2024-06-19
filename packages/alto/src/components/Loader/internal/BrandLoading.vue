<script setup lang="ts">
import { computed } from 'vue';
import type { BrandLoadingProps } from '~/types';

const props = withDefaults(defineProps<BrandLoadingProps>(), {
  size: 67,
});

const percent = 59 / 67;
const height = computed(() => `${props.size * percent}px`);
const width = computed(() => `${props.size}px`);
</script>

<template>
  <svg class="animated-svg" :width="width" :height="height" viewBox="0 0 67 59" :fill="color" :stroke="color" xmlns="http://www.w3.org/2000/svg">
    <path d="M32.4472 28.5835H13.1062L0.765851 0.5H20.1169L32.4472 28.5835Z" />
    <path d="M33.6705 29.2951L33.6705 29.295L46.319 0.5H65.6703L53.1985 28.8927L53.1984 28.8928L40.5501 57.667H21.1989L33.6705 29.2951Z" />
  </svg>
</template>

<style scoped>
.animated-svg path {
  animation: draw 1500ms linear forwards   infinite;
  stroke-dasharray: 163.58;
  fill: var(--gray-100);
}

@keyframes draw {
  0% { stroke-dashoffset: 163.58; }

  40%,
  50% {
    stroke-dashoffset: 0;
    fill: var(--gray-100);
  }

  85%,
  100% {
    stroke-dashoffset: 0;
    fill: v-bind(color);
  }
}
</style>
