<script setup lang="ts">
import type { SpinnerType } from './types';

defineProps<{ spinner: SpinnerType }>();
</script>

<template>
  <div class="container">
    <div class="spinner" />
    <p class="label">
      {{ spinner.label }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
}
.label {
  font: v-bind(
    "`var(--text-${spinner.labelFontSize}-regular)` || 'var(--text-md-regular)'"
  );
  color: v-bind("spinner.labelColor || 'var(--brand-600)'");
}
.spinner {
  width: v-bind("spinner.size || '50px'");
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid #0000;
  border-right-color: v-bind("spinner.color || 'var(--brand-600)'");
  position: relative;
  animation: s4 1s infinite linear;
}
.spinner:before,
.spinner:after {
  content: "";
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border: inherit;
  animation: inherit;
  animation-duration: 2s;
}
.spinner:after {
  animation-duration: 4s;
}

@keyframes s4 {
  100% {
    transform: rotate(1turn);
  }
}
</style>
