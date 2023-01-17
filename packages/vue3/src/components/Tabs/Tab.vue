<script setup lang="ts">
import Badge from '../Badge/Badge.vue';

defineProps<{
  label: string
  active?: boolean
  disabled?: boolean
  errorCount?: number
}>();
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
  border: none;
  cursor: pointer;
  background-color: transparent;
}

button:is(:focus, :active) {
  outline: none;
}

.tab {
  gap: 4px;
  display: flex;
  padding: 16px 0;
  align-items: center;
  margin-bottom: -1px;
  justify-content: center;
  border-bottom: 1px solid transparent;
}

.tab .label {
  border-radius: 4px;
  color: var(--gray-700);
  font: var(--text-md-regular);
}

.tab:hover .label {
  color: var(--gray-900);
}

.tab:is(:focus, :active):not(.active, .disabled) .label {
  box-shadow: var(--focus-shadow-xs-brand);
  outline: 1px solid var(--brand-500);
}

.tab.active {
  cursor: default;
  border-bottom: 2px solid var(--brand-500);
}

.tab.active .label {
  color: var(--brand-500);
}

.tab.error .label {
  color: var(--red-500);
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

.tab.disabled .label {
  color: var(--gray-300);
}
</style>
