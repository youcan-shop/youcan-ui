<script setup lang="ts">
import type { SpinnerProps } from '~/types';
withDefaults(
  defineProps<SpinnerProps>(),
  {
    color: 'var(--brand-300)',
    size: '40px',
    labelColor: 'var(--brand-500)',
    labelFontSize: 'md',
  },
);
</script>

<template>
  <div class="container">
    <div class="spinner" />
    <p v-if="label" class="label">
      {{ label }}
    </p>
  </div>
</template>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
}

.label {
  color: v-bind("labelColor");
  font: v-bind("`var(--text-${labelFontSize}-regular)`");
}

.spinner {
  position: relative;
  width: v-bind("size");
  animation: s4 1s infinite linear;
  border: medium solid v-bind("color");
  border-radius: 50%;
  border-right-color: transparent;
  aspect-ratio: 1;
}

@keyframes s4 {
  100% {
    transform: rotate(1turn);
  }
}
</style>
