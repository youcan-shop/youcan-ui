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
  <span class="badge" :class="[`state-${state}`, `size-${size}`]">
    <slot />
  </span>
</template>

<style scoped>
.badge.size-sm {
  --size: 20px;
}

.badge.size-md {
  --size: 24px;
}

.badge {
  --background-color: var(--gray-300);

  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  width: min-content;
  height: var(--size);
  padding: 0 6px;
  border-radius: 100px;
  background-color: var(--background-color);
  color: var(--base-white);
  font: var(--text-sm-medium);
}

.badge.state-neutral {
  --background-color: var(--gray-500);
}

.badge.state-danger {
  --background-color: var(--red-500);
}

.badge.state-info {
  --background-color: var(--blue-500);
}

.badge.state-warning {
  --background-color: var(--yellow-500);
}

.badge.state-success {
  --background-color: var(--green-600);
}
</style>
