<script setup lang="ts">
import type { PercentageType } from './types';

withDefaults(
  defineProps<{
    percentage: number
    type: PercentageType
  }>(),
  { type: null },
);
</script>

<template>
  <div class="percentage" :class="[type]">
    {{ percentage }}%
  </div>
</template>

<style scoped>
.percentage {
  border-radius: 4px;
  padding: 7.5px 12px;
  color: var(--gray-500);
  font: var(--text-sm-medium);
  box-shadow: var(--shadow-xs-gray);
  background-color: var(--gray-50);
}

.percentage.success {
  color: var(--green-700);
  background-color: var(--green-50);
}

.percentage.info {
  color: var(--blue-600);
  background-color: var(--blue-50);
}

.percentage.warning {
  color: var(--yellow-500);
  background-color: var(--yellow-50);
}

.percentage.danger {
  color: var(--red-500);
  background-color: var(--red-50);
}
</style>
