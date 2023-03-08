<script setup lang="ts">
import { computed } from 'vue';
import type { RadioList, RadioListOption } from './types';

const props = defineProps<{
  modelValue?: RadioListOption
  options: RadioList
}>();

const emit = defineEmits(['update:model-value']);

const model = computed({
  get: () => props.modelValue,
  set: value => emit('update:model-value', value),
});
</script>

<template>
  <div class="radio-list">
    <label v-for="option in options" :key="option.label" class="radio-item" :for="option.label">
      <input :id="option.label" v-model="model" :name="option.label" :value="option.label" type="radio" class="trigger">
      <span class="name">{{ option.label }}</span>
      <span class="suffix">{{ option.suffix }}</span>
    </label>
  </div>
</template>

<style scoped>
.radio-list {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  gap: 8px;
}

.radio-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 11.5px 16px;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  box-shadow: var(--shadow-xs-gray);
  cursor: pointer;
}

.name,
.suffix {
  color: var(--gray-900);
  font: var(--text-sm-regular);
}

.name {
  flex-grow: 1;
}

.trigger {
  width: 14px;
  height: 14px;
  margin: 0;
  transition: 75ms all linear;
  border: 1px solid var(--gray-200);
  border-radius: 50%;
  outline: 2px solid var(--base-white);
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
  border: 3px solid var(--base-white);
  outline-color: var(--brand-500);
  background-color: var(--brand-500);
}
</style>
