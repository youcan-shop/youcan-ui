<script setup lang="ts">
import { useSlots } from 'vue';
import { Utils } from '@youcan/ui-core';

const slots = useSlots();

const idAttr = Utils.uid('input_group_');
</script>

<template>
  <div class="input-group">
    <label v-if="slots.label" :for="idAttr" class="label">
      <slot name="label" />
    </label>

    <div class="input">
      <slot :id="idAttr" name="input" />
    </div>

    <div v-if="slots.error" class="error">
      <slot name="error" />
    </div>

    <div v-if="slots.info" class="info">
      <slot name="info" />
    </div>
  </div>
</template>

<style scoped>
.input-group > * + * {
  margin-top: 8px;
}

.label {
  font: var(--text-sm-regular);
}

.error {
  color: var(--red-500);
  font: var(--text-sm-medium);
}

.info {
  color: var(--gray-500);
  font: var(--text-sm-regular);
}
</style>
