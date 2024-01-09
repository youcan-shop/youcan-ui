<script setup lang="ts">
import { computed, ref, watch, watchEffect } from 'vue';
import type { LoadingProps } from './types';

const props = withDefaults(
  defineProps<LoadingProps>(),
  { duration: 12000 },
);

const emit = defineEmits(['complete']);

const progress = ref(0);
const isAnimationRunning = ref(false);

const progressStyle = computed(() => {
  return {
    strokeDashoffset: `${(100 - progress.value) * 2.64}px`,
    transition: isAnimationRunning.value ? 'all 0.1s ease' : 'none',
  };
});

watch(props, () => {
  progress.value = 0;
  isAnimationRunning.value = true;
});

watchEffect(() => {
  const duration = props.duration;
  const interval = duration / 100;
  const increment = 100 / (duration / interval);
  let currentProgress = 0;

  isAnimationRunning.value = true;
  const intervalId = setInterval(() => {
    currentProgress += increment;
    progress.value = currentProgress;
    if (currentProgress >= 100) {
      clearInterval(intervalId);
      isAnimationRunning.value = false;
      emit('complete');
    }
  }, interval);

  return () => clearInterval(intervalId);
});
</script>

<template>
  <div class="loading">
    <svg class="loading-svg" viewBox="0 0 100 100">
      <circle class="loading-circle" cx="50" cy="50" r="45" />
      <circle class="loading-circle-progress" :style="progressStyle" cx="50" cy="50" r="45" />
    </svg>
    <div class="loading-value">
      {{ `${progress}%` }}
    </div>
  </div>
</template>

<style scoped>
.loading {
  --loading-stroke-color: var(--gray-100);

  position: relative;
  box-sizing: border-box;
  width: 120px;
  height: 120px;
}

.loading-svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.loading-circle {
  stroke-width: 4;
  stroke: var(--loading-stroke-color);
  fill: none;
}

.loading-circle-progress {
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: 284;
  stroke: var(--brand-500);
  fill: none;
}

.loading-value {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--brand-500);
  font: var(--text-xl-medium);
}
</style>
