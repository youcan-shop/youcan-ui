<script setup lang="ts">
import type { StaticStatusDefinition } from './types';

defineProps<{ status: StaticStatusDefinition }>();
</script>

<template>
  <div class="status">
    {{ status.label }}
  </div>
</template>

<style scoped>
.status {
  text-align: center;
  border-radius: 4px;
  padding: 7.5px 12px;
  max-width: fit-content;
  font: var(--text-sm-medium);
  color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
  background: v-bind('status.color');
}
</style>
