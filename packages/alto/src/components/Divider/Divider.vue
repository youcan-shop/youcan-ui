<script setup lang="ts">
import type { DividerProps } from '~/types';

withDefaults(
  defineProps<DividerProps>(),
  {
    orientation: 'horizontal',
    thickness: 'regular',
    dashed: false,
  },
);
</script>

<template>
  <div :class="[`yc-divider--${orientation}`, `yc-divider--${thickness}`, { 'yc-divider--dashed': dashed }]" />
</template>

<style scoped>
@import "@youcan/styles/divider";
</style>
