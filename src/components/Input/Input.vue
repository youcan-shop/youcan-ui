<script setup lang="ts">
import { defineProps, ref } from 'vue';
import type { HTMLInputTypes } from '~/components/Input/Input.types';

defineProps({
  placeholder: {
    type: String || null,
  },
  inputType: {
    type: String as () => HTMLInputTypes,
    default: 'text',
  },
  modelValue: {
    type: String,
  },
});

const inputValue = ref<HTMLInputElement | null>(null);

const modelValue = ref('');

const oninput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  modelValue.value = target.value;
};
</script>

<template>
  <div>
    <input
      ref="inputValue"
      :type="inputType"
      :placeholder="placeholder"
      :value="modelValue"
      class="input"
      @input="oninput"
    >
    <p>{{ modelValue }}</p>
  </div>
</template>

<style scoped>
.input {
  width: 100%;
  border: 1px solid var(--border-color);
  height: 54px;
  border-radius: 8px;
  padding: 6px 12px;
  outline: none;
  font-weight: 400;
}

.input::placeholder {
  color: var(--placeholder-color);
}
</style>
