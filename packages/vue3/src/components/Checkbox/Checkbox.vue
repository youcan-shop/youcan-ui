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
  <label :for="idAttr">
    <div class="checkbox">
      <input
        v-bind="$attrs"
        :id="idAttr"
        v-model="model"
        tabindex="0"
        type="checkbox"
        class="input"
      >
      <span class="checkmark"> <i i-youcan-checkmark /> </span>
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
  display: inline-block;
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
  box-shadow: var(--shadow-xs);
  border: 1px solid var(--gray-100);
  background-color: var(--base-white);
}

.checkmark i {
  width: 14px;
  height: 14px;
  display: none;
  color: var(--base-white);
}

.input:checked ~ .checkmark {
  background-color: var(--brand-500);
  border: none;
}

.input:checked ~ .checkmark i {
  display: inline-block;
}

label:hover input:enabled:checked ~ .checkmark {
  background-color: var(--brand-600);
}

label:hover input:enabled:not(:checked) ~ .checkmark {
  background-color: var(--gray-50);
}

input:enabled:is(:focus, :active) ~ .checkmark {
  box-shadow: var(--focus-xs-brand);
}

input:disabled ~ .checkmark {
  cursor: default;
  box-shadow: none;
}

.checkbox:has(.input:disabled) ~ .label {
  color: var(--gray-300);
}

input:disabled:checked ~ .checkmark {
  background-color: var(--gray-100);
}

input:disabled:not(checked) ~ .checkmark {
  background: var(--base-white);
  border: 1px solid var(--gray-50);
}
</style>
