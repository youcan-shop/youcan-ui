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
  <div class="yc-loader-block">
    <Bar v-if="variant === 'bar'" v-bind="{ color, size }" />
    <Brand v-else-if="variant === 'brand'" v-bind="{ color, size }" />
    <Spinner v-else v-bind="{ color, size }" />

    <p v-if="label" class="yc-loader-block-label" :class="`yc-loader-block-label-${labelFontSize}`">
      {{ label }}
    </p>
  </div>
</template>

<style scoped>
.yc-loader-block-label {
  color: v-bind(labelColor);
}
</style>

<style>
@import "@youcan/styles/loader";
</style>
