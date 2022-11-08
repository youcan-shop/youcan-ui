<script setup lang="ts">
import { defineProps, ref } from 'vue';

defineProps<{
  modelValue: string
  type: string
  placeholder?: string
}>();

const emit = defineEmits(['update:modelValue']);

const inputValue = ref();

const onInput = () => {
  emit('update:modelValue', inputValue.value.value);
};
</script>

<template>
  <input
    ref="inputValue"
    :value="modelValue"
    class="input"
    v-bind="$attrs"
    @input="onInput"
  >
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
  letter-spacing: 2%;
  line-height: 19.2px;
}

.input::placeholder {
  color: var(--placeholder-color);
}
</style>
