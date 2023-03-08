<script setup lang="ts">
import { Utils } from '@youcan/ui-core';
import { computed, useSlots } from 'vue';

const props = defineProps<{
  modelValue?: boolean
  name?: string
}>();

const emit = defineEmits<{
  (event: 'update:model-value', value: boolean): void
}>();

const slots = useSlots();

const model = computed({
  get: () => props.modelValue || false,
  set: (value: boolean) => emit('update:model-value', value),
});

const id = Utils.uid('radio_');
</script>

<template>
  <div class="radio">
    <input :id="id" v-model="model" type="radio" :name="name" class="trigger" :checked="model">
    <label v-if="slots.default" class="label" :for="id">
      <slot />
    </label>
  </div>
</template>

<style scoped>
.radio {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  gap: 8px;
}

.label {
  color: var(--gray-900);
  font: var(--text-sm-regular);
}

.trigger {
  width: 18px;
  height: 18px;
  margin: 0;
  transition: 75ms all linear;
  border: 1px solid var(--gray-200);
  border-radius: 50%;
  background-color: var(--base-white);
  appearance: none;
}

.trigger:hover {
  border-color: var(--gray-300);
  background-color: var(--gray-50);
}

.trigger:active {
  background-color: var(--gray-100);
}

.trigger:checked {
  border: 4px solid var(--brand-500);
}

.trigger:checked:hover {
  border-color: var(--brand-600);
}
</style>
