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
  align-items: center;
  height: max-content;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
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
  padding: 11.5px 16px;
  border: none;
  outline: none;
  background-color: transparent;
  font: var(--text-sm-regular);
  resize: none;
}

.textarea:placeholder {
  color: var(--gray-300);
}
</style>
