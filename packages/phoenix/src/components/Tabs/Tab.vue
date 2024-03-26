<script setup lang="ts">
import type { TabProps } from '~/types';

defineProps<TabProps>();
</script>

<template>
  <button :disabled="disabled || active" class="tab" :class="{ active, disabled }">
    <div class="label">
      {{ label }}
    </div>
    <div v-if="typeof count === 'number'" class="count">
      {{ count }}
    </div>
  </button>
</template>

<style scoped>
.tab {
  display: flex;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  margin-bottom: -1px;
  padding: 16px 0;
  border: none;
  border-bottom: 1px solid transparent;
  background-color: transparent;
  cursor: pointer;
  gap: 4px;
}

.tab:is(:focus, :active) {
  outline: none;
}

.tab .label {
  transition: all 200ms linear;
  border-radius: 4px;
  color: var(--gray-700);
  font: var(--text-md-regular);
}

.tab .count {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  border-radius: 10px;
  background-color: var(--blue-500);
  color: var(--base-white);
  font: var(--text-xs-medium);
}

.tab:hover .label {
  color: var(--gray-900);
}

.tab.active .label {
  color: var(--brand-500);
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

.tab.disabled {
  pointer-events: none;
}
</style>
