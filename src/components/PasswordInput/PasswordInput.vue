<script setup lang="ts">
import { ref } from 'vue';

import Input from '~/components/Input/Input.vue';
const { modelValue, passwordHidden = true } = defineProps<{
  modelValue: string
  placeholder?: string
  passwordHidden?: boolean
}>();

const emit = defineEmits(['update:modelValue']);

const baseInput = ref();
const isPasswordHidden = ref(passwordHidden);
const inputValue = ref(modelValue);

const onInput = (emittedValue: string) => {
  emit('update:modelValue', emittedValue);
};
</script>

<template>
  <div class="password-input">
    <button class="password-icon" @click="isPasswordHidden = !isPasswordHidden">
      <i :class="!isPasswordHidden ? 'i-tabler-eye-off' : 'i-tabler-eye'" />
    </button>

    <Input
      ref="baseInput" :type="isPasswordHidden ? 'password' : 'text'" :placeholder="placeholder"
      :model-value="inputValue" class="input" @update:model-value="onInput"
    />
  </div>
</template>

<style scoped lang="scss">
.password-input {
  position: relative;
}

.password-input input {
  width: 100%;
  border: 1px solid var(--border-color);
  height: 48px;
  border-radius: 8px;
  color: var(--placeholder-color);
  font-size: 14px;
  color: var(--gray-400);
  padding: 0px 16px;
  font-weight: 400;
}

.password-input input:hover {
  border: 1px solid var(--gray-200);
  box-shadow: 0px 4px 4px var(--black-700);
}

.password-input input:focus {
  border: 1px solid var(--primary-color);
  color: var(--gray-400);
  box-shadow: 0px 4px 4px var(--black-700);
}

.password-icon {
  position: absolute;
  height: 100%;
  background: none;
  right: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  color: var(--placeholder-color);

 [dir='rtl'] & {
    right: auto;
    left: 20px;
  }
}
</style>
