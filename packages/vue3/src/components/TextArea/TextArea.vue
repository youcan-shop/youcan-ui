<script setup lang="ts">
import { useFocus } from '@vueuse/core';
import { computed, ref, useAttrs } from 'vue';

const props = defineProps<{
  modelValue: string
  error?: boolean
}>();

const emit = defineEmits(['update:modelValue']);

const primitive = ref<HTMLInputElement>()!;
const attrs = useAttrs();

const { focused } = useFocus(primitive);

const model = computed({
  get: () => props.modelValue,
  set: (value: string) => {
    emit('update:modelValue', value);
  },
});
</script>

<template>
  <div :class="{ enabled: !attrs.disabled, focused, error }" class="wrapper">
    <textarea ref="primitive" v-model="model" class="textarea" v-bind="$attrs" />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  height: max-content;
  align-items: center;
  border-radius: 8px;
  box-shadow: var(--shadow-xs-gray);
  border: 1px solid var(--gray-100);
  background-color: var(--base-white);
}

.wrapper.enabled:hover {
  border: 1px solid var(--gray-200);
}

.wrapper.enabled.focused {
  border: 1px solid var(--brand-500);
  box-shadow: var(--focus-shadow-xs-brand);
}

.wrapper:not(.enabled) {
  background-color: var(--gray-50);
}

.wrapper.enabled.error {
  border: 1px solid var(--red-500);
}

.wrapper.enabled.error.focused {
  box-shadow: var(--focus-shadow-xs-red);
}

.textarea {
  width: 100%;
  min-height: 130px;
  border: none;
  outline: none;
  padding: 11.5px 16px;
  background-color: transparent;
  font: var(--text-sm-regular);
  resize: none;
}

.textarea:placeholder {
  color: var(--gray-300);
}
</style>
