<script setup lang="ts">
import { computed } from 'vue';
import type { SpinnerProps } from '~/types';

const props = defineProps<SpinnerProps>();

const spinnerSize = computed(() => `${props.size}px`);
const borderWidth = computed(() => `${props.size * 0.1}px`);
</script>

<template>
  <div class="spinner" />
</template>

<style scoped>
.spinner {
  box-sizing: border-box;
  width: v-bind(spinnerSize);
  animation: s4 1s infinite linear;
  border: v-bind(borderWidth) solid var(--gray-100);
  border-radius: 50%;
  border-right-color: v-bind(color);
  aspect-ratio: 1;
}

@keyframes s4 {
  100% {
    transform: rotate(1turn);
  }
}
</style>
