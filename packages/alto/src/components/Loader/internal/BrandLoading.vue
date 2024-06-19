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
  <div class="brand-loader-block">
    <div class="brand-loader" :class="type">
      <div class="shadow-brand">
        <svg :width="width" :height="height" fill="var(--gray-100)" viewBox="0 0 67 59" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.4435 0H0L12.7798 29.0835H33.2128L20.4435 0Z" />
          <path d="M45.9925 0L33.2128 29.0939L20.433 58.167H40.8765L53.6562 29.0939L66.436 0H45.9925Z" />
        </svg>
      </div>
      <div class="animated-brand">
        <svg :width="width" :height="height" viewBox="0 0 67 59" :fill="color" :stroke="color" xmlns="http://www.w3.org/2000/svg">
          <path d="M32.4472 28.5835H13.1062L0.765851 0.5H20.1169L32.4472 28.5835Z" />
          <path d="M33.6705 29.2951L33.6705 29.295L46.319 0.5H65.6703L53.1985 28.8927L53.1984 28.8928L40.5501 57.667H21.1989L33.6705 29.2951Z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.brand-loader-block {
  width: v-bind(width);
  height: v-bind(height);
}

.brand-loader {
  display: flex;
  position: absolute;
  justify-content: center;
  overflow: hidden;
}

.brand-loader .shadow-brand,
.brand-loader .animated-brand {
  width: v-bind(width);
  height: v-bind(height);
}

.brand-loader .shadow-brand {
  position: relative;
  z-index: 1;
  bottom: 0;
}

.brand-loader .animated-brand {
  position: absolute;
  z-index: 2;
  bottom: 0;
  overflow: hidden;
}

.brand-loader.fill-brand .animated-brand {
  animation: fill 600ms ease-in-out backwards alternate  infinite;
}

.brand-loader.draw-brand .shadow-brand svg path {
  fill: transparent;
}

.brand-loader.draw-brand .animated-brand svg path {
  animation: draw 1500ms linear forwards   infinite;
  stroke-dasharray: 163.58;
  fill: transparent;
}

.brand-loader .animated-brand svg {
  position: absolute;
  bottom: 0;
}

@keyframes fill {
  0% { height: 0; }
  100% { height: 100%; }
}

@keyframes draw {
  0% { stroke-dashoffset: 163.58; }

  40%,
  50% {
    stroke-dashoffset: 0;
    fill: transparent;
  }

  85%,
  100% {
    stroke-dashoffset: 0;
    fill: v-bind(color);
  }
}
</style>
