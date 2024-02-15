<script setup lang="ts">
import Badge from '../Badge/Badge.vue';
import type { TabProps } from '~/types';

defineProps<TabProps>();
</script>

<template>
  <button :disabled="disabled || active" class="tab" :class="{ active, disabled, error: errorCount }">
    <div class="label">
      {{ label }}
    </div>
    <Badge v-if="errorCount" state="danger" :size="20">
      {{ errorCount }}
    </Badge>
  </button>
</template>

<style scoped>
button {
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

button:is(:focus, :active) {
  outline: none;
}

.tab {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -1px;
  padding: 16px 0;
  border-bottom: 1px solid transparent;
  gap: 4px;
}

.tab .label {
  border-radius: 4px;
  color: var(--gray-700);
  font: var(--text-md-regular);
}

.tab:hover .label {
  color: var(--gray-900);
}

.tab.active .label {
  color: var(--brand-500);
}

.tab.error .label {
  color: var(--red-500);
}

.tab.disabled .label {
  color: var(--gray-300);
}

.tab:is(:focus, :active):not(.active, .disabled) .label {
  outline: 1px solid var(--brand-500);
  box-shadow: var(--focus-shadow-xs-brand);
}

.tab.active {
  border-bottom: 2px solid var(--brand-500);
  cursor: default;
}

.tab.error:hover .label {
  color: var(--red-600);
}

.tab.error.active {
  border-bottom: 1px solid var(--red-500);
}

.tab.disabled {
  pointer-events: none;
}
</style>
