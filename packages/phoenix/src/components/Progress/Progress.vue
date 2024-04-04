<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue';
import type { ProgressProps } from '~/types';

const props = withDefaults(defineProps<ProgressProps>(),
  {
    size: 110,
    value: 0,
    maxValue: 100,
    playable: true,
  },
);

const progressValue = ref();
const strokeDasharray = ref(0);
const strokeDashoffset = ref(0);
const strokeOffset = ref(0);

function init() {
  if (progressValue.value) {
    strokeOffset.value = progressValue.value.getTotalLength() + 1;
    nextTick(() => {
      strokeDasharray.value = strokeOffset.value;
      strokeDashoffset.value = strokeOffset.value;
    });
  }
}

function update() {
  const { value, maxValue } = props;

  if (maxValue >= value && value >= 0) {
    const percent = value / maxValue;
    const dashoffset = strokeDasharray.value - (percent * strokeDasharray.value);
    strokeDashoffset.value = dashoffset;
  }
}

onMounted(() => {
  init();
});

watch(() => props.value, () => {
  if (props.playable) {
    update();
  }
});
</script>

<template>
  <div class="progress">
    <svg :width="size" :height="size" viewBox="0 0 100 100" fill="none" class="circles" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="47.5" class="shadow-circle" />
      <circle ref="progressValue" cx="50" class="progress-circle" stroke-linecap="round" cy="50" r="47.5" />
    </svg>
  </div>
</template>

<style scoped>
.progress .circles circle {
  position: relative;
  stroke-width: 5;
}

.progress .circles .shadow-circle {
  z-index: 1;
  stroke: var(--gray-100);
}

.progress .circles .progress-circle {
  z-index: 2;
  transition: all 200ms linear;
  stroke-dasharray: v-bind(strokeDasharray);
  stroke-dashoffset: v-bind(strokeDashoffset);
  stroke: var(--brand-500);
}
</style>
