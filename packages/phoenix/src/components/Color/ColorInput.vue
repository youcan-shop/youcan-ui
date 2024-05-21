<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import type { ColorInputProps } from './types';
import { ColorPicker } from '~/components';

const props = withDefaults(
  defineProps<ColorInputProps>(),
  {
    modelValue: '',
    error: false,
    disabled: false,
  },
);

const emit = defineEmits(['update:modelValue']);

const picker = ref();
const show = ref(false);

function toggle(override = !show.value) {
  if (!props.disabled) {
    show.value = override;
  }
}

function updateModelValue(value: string) {
  emit('update:modelValue', value);
}
onClickOutside(picker, () => toggle(false));
</script>

<template>
  <div class="wrapper">
    <div class="input-picker" tabindex="0" :class="{ error: props.error, disabled: props.disabled }" @click="() => toggle()">
      <div class="preview" :style="{ 'background-color': props.modelValue }" />
      <span>{{ props.modelValue }}</span>
    </div>
    <ColorPicker v-show="show" ref="picker" class="picker" :model-value="props.modelValue" @update:model-value="updateModelValue" />
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
}

.input-picker {
  display: flex;
  align-items: center;
  width: 150px;
  padding: 6px;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
  cursor: pointer;
  gap: 12px;
}

.input-picker:focus {
  border: 1px solid var(--brand-500);
  box-shadow: var(--focus-shadow-xs-brand);
}

.input-picker.error {
  border: 1px solid var(--red-500);
  box-shadow: var(--focus-shadow-xs-red);
}

.input-picker.disabled {
  opacity: 0.5;
  background-color: #ddd;
  cursor: not-allowed;
}

.input-picker.disabled:focus {
  border: 1px solid var(--gray-500);
  box-shadow: var(--focus-shadow-xs-gray);
}

.preview {
  width: 35px;
  height: 35px;
  border: 1px solid var(--gray-100);
  border-radius: 6px;
}

.picker {
  position: absolute;
  z-index: 100;
  margin: 0;
  transform: translate3d(0, 56px, 0);
  border: 1px solid var(--gray-200);
  box-shadow: var(--shadow-md-gray);
  inset: 0 auto auto 0;
}
</style>
