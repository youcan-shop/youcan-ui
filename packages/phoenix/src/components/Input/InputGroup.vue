<script setup lang="ts">
import type { InputGroupProps } from '~/types';

defineProps<InputGroupProps>();
</script>

<template>
  <div class="input-group">
    <label v-if="label" :for="labelFor" class="label">
      {{ label }}
    </label>

    <div class="input">
      <slot name="input" />
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <slot />
  </div>
</template>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-group .label {
  font: var(--text-sm-regular);
}

.input-group .error {
  color: var(--red-500);
  font: var(--text-sm-medium);
}
</style>
