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
  cursor: pointer;
  user-select: none;
  display: block;
}

.checkbox.has-label {
  margin-inline-end: 8px;
}

.input {
  position: absolute;
  opacity: 0;
}

.checkmark {
  width: 16px;
  height: 16px;
  display: grid;
  border-radius: 4px;
  place-items: center;
  box-shadow: var(--shadow-xs-gray);
  border: 1px solid var(--gray-100);
  background-color: var(--base-white);
}

.checkmark i {
  width: 14px;
  height: 14px;
  display: none;
  color: var(--base-white);
}

.checkmark.checked {
  background-color: var(--brand-500);
  border: 1px solid transparent;
}

.checkmark.checked i {
  display: inline-block;
}

label:hover input:enabled~.checkmark {
  background-color: var(--gray-50);
}

label:hover input:enabled~.checkmark.checked {
  background-color: var(--brand-600);
}

input:enabled:is(:focus, :active)~.checkmark {
  box-shadow: var(--focus-shadow-xs-brand);
}

input:disabled~.checkmark {
  cursor: default;
  box-shadow: none;
}

.checkbox:has(.input:disabled)~.label {
  color: var(--gray-300);
}

input:disabled~.checkmark {
  background: var(--base-white);
  border: 1px solid var(--gray-50);
}

input:disabled~.checkmark.checked {
  background-color: var(--gray-100);
}
</style>
