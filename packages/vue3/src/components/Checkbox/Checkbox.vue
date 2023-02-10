<script setup lang="ts">
import { Utils } from '@youcan/ui-core';
import { computed, useSlots } from 'vue';

const props = defineProps<{ modelValue: boolean }>();
const emit = defineEmits(['update:modelValue']);
const slots = useSlots();

const model = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value),
});

const idAttr = Utils.uid('checkbox');
</script>

<template>
  <label :for="idAttr" v-bind="$attrs">
    <div class="checkbox" :class="{ 'has-label': slots.label }">
      <input v-bind="$attrs" :id="idAttr" v-model="model" type="checkbox" class="input">
      <span class="checkmark" :class="{ checked: model }"> <i class="i-youcan-check" /> </span>
    </div>
    <div v-if="slots.label" class="label">
      <slot name="label" />
    </div>
  </label>
</template>

<style scoped>
label {
  display: flex;
  align-items: center;
}

.label {
  display: inline-block;
  font: var(--text-sm-regular);
}

.checkbox {
  display: block;
  cursor: pointer;
  user-select: none;
}

.checkbox.has-label {
  margin-inline-end: 8px;
}

.input {
  position: absolute;
  opacity: 0;
}

.checkmark {
  display: grid;
  width: 16px;
  height: 16px;
  border: 1px solid var(--gray-100);
  border-radius: 4px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
  place-items: center;
}

.checkmark i {
  display: none;
  width: 14px;
  height: 14px;
  color: var(--base-white);
}

.checkmark.checked {
  border: 1px solid transparent;
  background-color: var(--brand-500);
}

.checkmark.checked i {
  display: inline-block;
}

input:disabled ~ .checkmark {
  border: 1px solid var(--gray-50);
  background: var(--base-white);
  box-shadow: none;
  cursor: default;
}

input:enabled:is(:focus, :active) ~ .checkmark {
  box-shadow: var(--focus-shadow-xs-brand);
}

label:hover input:enabled ~ .checkmark {
  background-color: var(--gray-50);
}

input:disabled ~ .checkmark.checked {
  background-color: var(--gray-100);
}

label:hover input:enabled ~ .checkmark.checked {
  background-color: var(--brand-600);
}

.checkbox:has(.input:disabled) ~ .label {
  color: var(--gray-300);
}
</style>
