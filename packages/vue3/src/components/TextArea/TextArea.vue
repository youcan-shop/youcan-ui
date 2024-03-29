<script setup lang="ts">
import { computed, ref, useAttrs } from 'vue';
import type { TextAreaProps } from '~/types';

const props = defineProps<TextAreaProps>();

const emit = defineEmits(['update:modelValue']);

const primitive = ref<HTMLInputElement>()!;
const attrs = useAttrs();

const model = computed({
  get: () => props.modelValue,
  set: (value: string) => {
    emit('update:modelValue', value);
  },
});
</script>

<template>
  <div :class="{ enabled: !attrs.disabled, error }" class="wrapper">
    <textarea ref="primitive" v-model="model" class="textarea" v-bind="$attrs" />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  height: max-content;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
}

.wrapper.enabled:hover {
  border: 1px solid var(--gray-300);
}

.wrapper .textarea {
  box-sizing: border-box;
  width: 100%;
  min-height: 130px;
  padding: 11.5px 16px;
  border: none;
  border-radius: 8px;
  outline: none;
  background-color: transparent;
  font: var(--text-sm-regular);
  resize: none;
}

.wrapper.enabled .textarea:focus {
  border: 1px solid var(--brand-500);
  box-shadow: var(--focus-shadow-xs-brand);
}

.wrapper:not(.enabled) {
  background-color: var(--gray-50);
}

.wrapper.enabled.error {
  border: 1px solid var(--red-500);
}

.wrapper.enabled.error .textarea:focus {
  box-shadow: var(--focus-shadow-xs-red);
}

.wrapper .textarea:placeholder {
  color: var(--gray-300);
}
</style>
