<script lang="ts" setup>
import type { ActionButtonProps } from '~/types';

defineProps<ActionButtonProps>();
</script>

<template>
  <button class="action-button">
    <i :class="icon" />
  </button>
</template>

<style scoped>
.action-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--gray-200);
  border-radius: 50%;
  outline: none;
  background-color: var(--base-white);
  cursor: pointer;
}

.action-button i {
  width: 18px;
  height: 18px;
  color: var(--gray-500);
}

.action-button:hover,
.action-button:active {
  border: 1px solid var(--gray-300);
  background-color: var(--gray-50);
}

.action-button:focus {
  border: 1px solid var(--brand-500);
  box-shadow: var(--focus-shadow-xs-brand);
}
</style>
