<script setup lang="ts">
import { computed, ref, watch, watchEffect } from 'vue';

const props = defineProps({
  duration: {
    type: Number,
    default: 12000,
  },
});

const emit = defineEmits(['complete']);

const progress = ref(0);
const isAnimationRunning = ref(false);

const progressStyle = computed(() => {
  return {
    strokeDashoffset: `${(100 - progress.value) * 2.64}px`,
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
    }
  }, interval);

  return () => clearInterval(intervalId);
});

watchEffect(() => {
  if (progress.value >= 100) {
    emit('complete');
  }
});
</script>

<template>
  <div class="loading">
    <svg class="loading-svg" viewBox="0 0 100 100">
      <circle class="loading-circle" cx="50" cy="50" r="45" />
      <circle
        class="loading-circle-progress"
        :style="progressStyle"
        cx="50"
        cy="50"
        r="45"
      />
    </svg>
    <div class="loading-value">
      {{ `${progress}%` }}
    </div>
  </div>
</template>

<style scoped>
.loading {
  position: relative;
  width: 120px;
  height: 120px;
}

.loading-svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.loading-circle {
  fill: none;
  stroke: var(--border-color);
  stroke-width: 4;

}

.loading-circle-progress {
  fill: none;
  stroke: var(--primary-color);
  stroke-width: 4;
  stroke-dasharray: 284;
}

.loading-value {
  position: absolute;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: var(--primary-color);
}
</style>
