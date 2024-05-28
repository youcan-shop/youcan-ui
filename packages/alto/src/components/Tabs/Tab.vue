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
  padding: 16px 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  gap: 4px;
}

.tab::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 50%;
  width: 0%;
  height: 2px;
  transition: all 250ms ease-in-out;
  background-color: var(--brand-500);
}

.tab:is(:focus, :active) {
  outline: none;
}

.tab .label {
  transition: all 100ms linear;
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

.tab.disabled .count {
  background-color: var(--gray-50);
  color: var(--gray-300);
}

.tab.active {
  cursor: default;
}

.tab.active::after {
  left: 0%;
  width: 100%;
}

.tab.disabled {
  pointer-events: none;
}
</style>
