<script setup lang="ts">
import { Bar, Brand, Spinner } from './internal';
import type { LoaderProps } from '~/types';

withDefaults(
  defineProps<LoaderProps>(),
  {
    color: 'var(--brand-500)',
    size: 40,
    labelColor: 'var(--brand-500)',
    labelFontSize: 'md',
    variant: 'spinner',
  },
);
</script>

<template>
  <div class="loader-block">
    <Bar v-if="variant === 'bar'" v-bind="{ color, size }" />
    <Brand v-else-if="variant === 'brand'" v-bind="{ color, size }" />
    <Spinner v-else v-bind="{ color, size }" />

    <p v-if="label" class="label" :class="[labelFontSize]">
      {{ label }}
    </p>
  </div>
</template>

<style scoped>
.loader-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.loader-block .label {
  margin: 0;
  color: v-bind("labelColor");
  font: var(--text-md-regular);
}

.loader-block .label.xs {
  font: var(--text-xs-regular);
}

.loader-block .label.sm {
  font: var(--text-sm-regular);
}

.loader-block .label.lg {
  font: var(--text-lg-regular);
}

.loader-block .label.xl {
  font: var(--text-xl-regular);
}
</style>
