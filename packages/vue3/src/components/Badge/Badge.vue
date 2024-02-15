<script setup lang="ts">
import type { BadgeProps } from '~/types';

withDefaults(
  defineProps<BadgeProps>(),
  {
    size: 20,
    state: 'neutral',
  },
);
</script>

<template>
  <span class="badge" :class="[`state-${state}`]">
    <slot />
  </span>
</template>

<style scoped lang="scss">
$states: (
  "neutral": "gray-500",
  "danger": "red-500",
  "info": "blue-500",
  "warning": "yellow-500",
  "success": "green-600"
);

.badge {
  --background-color: var(--gray-300);
  --height: v-bind(`${size}px`);

  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  width: min-content;
  height: var(--height);
  padding: 0 6px;
  border-radius: 100px;
  background-color: var(--background-color);
  color: var(--base-white);
  font: var(--text-sm-medium);

  @each $state,
    $color in $states {
    &.state-#{$state} {
      --background-color: var(--#{$color});
    }
  }
}
</style>
