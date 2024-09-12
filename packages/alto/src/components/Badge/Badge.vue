<script setup lang="ts">
import type { BadgeProps } from '~/types';

withDefaults(
  defineProps<BadgeProps>(),
  {
    size: 'sm',
    state: 'neutral',
  },
);
</script>

<template>
  <span class="yc-badge" :class="[`yc-state-${state}`, `yc-size-${size}`]">
    <slot />
  </span>
</template>

<style scoped>
@import "@youcan/styles/badge";
</style>
