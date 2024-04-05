<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import type { ProgressProps } from '~/types';

const props = withDefaults(defineProps<ProgressProps>(),
  {
    size: 110,
    value: 0,
    maxValue: 100,
    playable: true,
    progressType: 'circle',
  },
);

const progress = ref();
const strokeDasharray = 299;
const strokeDashoffset = ref(strokeDasharray);
const barWidth = ref(0);
const currentPercent = ref(0);

const barWidthValue = computed(() => `${barWidth.value}%`);
const percentFormat = computed(() => Math.floor(currentPercent.value * 100));

function update() {
  const { value, maxValue, progressType, playable } = props;

  if (maxValue >= value && value >= 0 && playable) {
    const percent = value / maxValue;
    currentPercent.value = percent;
    switch (progressType) {
      case 'circle':
        strokeDashoffset.value = strokeDasharray - (percent * strokeDasharray);
        break;
      case 'bar':
        barWidth.value = percent * 100;
        break;
    }
  }
}

onMounted(() => {
  setTimeout(() => {
    update();
    setTimeout(() => {
      if (progress.value) {
        progress.value.classList.remove('init');
      }
    }, 1200);
  }, 300);
});

watch(() => props.value, () => {
  update();
});
</script>

<template>
  <div ref="progress" class="progress init" :class="`progress-${progressType}`">
    <div v-if="progressType === 'circle'" class="circle">
      <svg :width="size" :height="size" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="47.5" class="shadow" />
        <circle cx="50" class="progress-value" stroke-linecap="round" cy="50" r="47.5" />
      </svg>
    </div>
    <div v-else class="bar">
      <div class="progress-value" />
    </div>
    <span class="label"> {{ `${percentFormat}%` }}</span>
  </div>
</template>

<style scoped>
.progress {
  --duration: 150ms;

  position: relative;
  width: max-content;
  max-width: 100%;
}

.progress.init {
  --duration: 1200ms;
}

.progress .label {
  color: var(--brand-500);
  font: var(--text-xl-medium);
}

.progress.progress-circle .label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--brand-500);
  font: var(--text-xl-medium);
}

.progress.progress-bar {
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
}

.progress .circle .shadow {
  position: relative;
  z-index: 1;
  stroke-width: 5;
  stroke: var(--gray-100);
}

.progress .circle .progress-value {
  position: relative;
  z-index: 2;
  transition: all var(--duration) linear;
  stroke-width: 5;
  stroke-dasharray: v-bind(strokeDasharray);
  stroke-dashoffset: v-bind(strokeDashoffset);
  stroke: var(--brand-500);
}

.progress .circle,
.progress .bar {
  position: relative;
  z-index: 1;
}

.progress .bar {
  width: 100%;
  min-width: 250px;
  height: 6px;
  overflow: hidden;
  border-radius: 3px;
  background-color: var(--gray-100);
}

.progress .bar .progress-value {
  width: v-bind(barWidthValue);
  height: 100%;
  transition: all var(--duration) linear;
  background-color: var(--brand-500);
}
</style>
