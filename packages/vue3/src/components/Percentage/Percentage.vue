<script setup lang="ts">
import type { PercentageProps } from '~/types';

withDefaults(
  defineProps<PercentageProps>(),
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
  box-sizing: border-box;
  width: max-content;
  max-width: 100%;
  padding: 7.5px 12px;
  border-radius: 4px;
  background-color: var(--gray-50);
  box-shadow: var(--shadow-xs-gray);
  color: var(--gray-500);
  font: var(--text-sm-medium);
}

.percentage.success {
  background-color: var(--green-50);
  color: var(--green-700);
}

.percentage.info {
  background-color: var(--blue-50);
  color: var(--blue-600);
}

.percentage.warning {
  background-color: var(--yellow-50);
  color: var(--yellow-500);
}

.percentage.danger {
  background-color: var(--red-50);
  color: var(--red-500);
}
</style>
