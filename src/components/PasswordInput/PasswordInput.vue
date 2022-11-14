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
    <button @click="isPasswordHidden = !isPasswordHidden">
      <i :class="!isPasswordHidden ? 'i-tabler-eye-off' : 'i-tabler-eye'" />
    </button>

    <Input ref="baseInput" :type="isPasswordHidden ? 'password' : 'text'" :placeholder="placeholder"
      :model-value="inputValue" class="input" @update:model-value="onInput" />
  </div>
</template>

<style scoped>
.password-input {
  position: relative;
}

.password-input input {
  width: 100%;
  border: 1px solid var(--border-color);
  height: 54px;
  border-radius: 8px;
  padding: 4px 16px;
  color: var(--placeholder-color);
  font-weight: 400;
}

.password-input input::placeholder {
  color: var(--placeholder-color);
}

.password-input button {
  position: absolute;
  height: 100%;
  background: none;
  right: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  color: var(--placeholder-color);
}
</style>
