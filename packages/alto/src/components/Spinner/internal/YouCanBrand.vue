<script setup lang="ts">
import { computed, ref } from 'vue';

const size = ref(67);

const percent = 59 / 67;
const height = computed(() => `${size.value * percent}px`);
const width = computed(() => `${size.value}px`);
const type = 'draw-brand';
</script>

<template>
  <div class="yc-brand">
    <div class="shadow-brand">
      <svg :width="width" :height="height" fill="var(--gray-100)" viewBox="0 0 67 59" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.4435 0H0L12.7798 29.0835H33.2128L20.4435 0Z" />
        <path d="M45.9925 0L33.2128 29.0939L20.433 58.167H40.8765L53.6562 29.0939L66.436 0H45.9925Z" />
      </svg>
    </div>
    <div class="animated-brand" :class="type">
      <svg :width="width" :height="height" viewBox="0 0 67 59" fill="var(--brand-500)" stroke="var(--brand-500)" xmlns="http://www.w3.org/2000/svg">
        <path class="path1" d="M32.4472 28.5835H13.1062L0.765851 0.5H20.1169L32.4472 28.5835Z" />
        <path class="path2" d="M33.6705 29.2951L33.6705 29.295L46.319 0.5H65.6703L53.1985 28.8927L53.1984 28.8928L40.5501 57.667H21.1989L33.6705 29.2951Z" />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.yc-brand {
  display: flex;
  position: absolute;
  justify-content: center;
  overflow: hidden;
}

.yc-brand .shadow-brand,
.yc-brand .animated-brand {
  width: v-bind(width);
  height: v-bind(height);
}

.yc-brand .shadow-brand {
  position: relative;
  z-index: 1;
  bottom: 0;
}

.yc-brand .animated-brand {
  position: absolute;
  z-index: 2;
  bottom: 0;
  overflow: hidden;
}

.yc-brand .animated-brand.fill-brand {
  animation: fill 600ms ease-in-out backwards alternate  infinite;
}

.yc-brand .animated-brand.draw-brand svg .path1,
.yc-brand .animated-brand.draw-brand svg .path2 {
  animation: draw1 1500ms linear forwards   infinite;
  animation-delay: 1000ms;
  fill: transparent;
}

.yc-brand .animated-brand.draw-brand svg .path1 {
  stroke-dasharray: 100.04;
}

.yc-brand .animated-brand.draw-brand svg .path2 {
  stroke-dasharray: 163.58;
}

.yc-brand .animated-brand svg {
  position: absolute;
  bottom: 0;
}

@keyframes fill {
  0% { height: 0; }
  100% { height: 100%; }
}

@keyframes draw1 {
  0% { stroke-dashoffset: 100.04; }

  30% {
    stroke-dashoffset: 0;
    fill: transparent;
  }

  100% {
    stroke-dashoffset: 0;
    fill: var(--brand-500);
  }
}

@keyframes draw2 {
  0% { stroke-dashoffset: 163.58; }

  30% {
    stroke-dashoffset: 0;
    fill: transparent;
  }

  100% {
    stroke-dashoffset: 0;
    fill: var(--brand-500);
  }
}
</style>
