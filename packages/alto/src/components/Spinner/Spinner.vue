<script setup lang="ts">
import { computed } from 'vue';
import YouCanBrand from './internal/YouCanBrand.vue';
import type { SpinnerProps } from '~/types';

const props = withDefaults(
  defineProps<SpinnerProps>(),
  {
    color: 'var(--brand-300)',
    size: 40,
    labelColor: 'var(--brand-500)',
    labelFontSize: 'md',
  },
);

const spinnerSize = computed(() => `${props.size}px`);
</script>

<template>
  <div class="spinner-block">
    <!--  <div class="spinner" />
    <p v-if="label" class="label" :class="[labelFontSize]">
      {{ label }}
    </p> -->
    <YouCanBrand />
  </div>
</template>

<style lang="css" scoped>
.spinner-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.spinner-block .spinner {
  position: relative;
  width: v-bind(spinnerSize);
  animation: s4 1s infinite linear;
  border: medium solid v-bind("color");
  border-radius: 50%;
  border-right-color: transparent;
  aspect-ratio: 1;
}

.spinner-block .label {
  color: v-bind("labelColor");
  font: var(--text-md-regular);
}

.spinner-block .label.xs {
  font: var(--text-xs-regular);
}

.spinner-block .label.sm {
  font: var(--text-sm-regular);
}

.spinner-block .label.lg {
  font: var(--text-lg-regular);
}

.spinner-block .label.xl {
  font: var(--text-xl-regular);
}

@keyframes s4 {
  100% {
    transform: rotate(1turn);
  }
}
</style>
