<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import type { ColorInputProps } from './types';
import { ColorPicker } from '~/components';

const { error } = withDefaults(
  defineProps<ColorInputProps>(),
  {
    modelValue: '',
    error: true,
  },
);

const picker = ref();
const show = ref(false);
const colorv3 = ref('#A8B1FFFF');

function toggle(override = !show.value) {
  show.value = override;
}
onClickOutside(picker, () => toggle(false));
</script>

<template>
  <div class="wrapper">
    <div class="input-picker" :class="{ error }" @click="() => toggle()">
      <div class="preview" />
      <div>test</div>
    </div>
    <ColorPicker v-show="show" ref="picker" class="picker" :color="colorv3" />
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
}

.input-picker {
  display: flex;
  align-items: center;
  padding: 6px;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
  gap: 12px;
}

.input-picker:focus {
  border-color: green;

  /* Focus style */
  background-color: #e0e0e0;
}

.input-picker:hover {
  /* Hover style */
  background-color: red;
}

.input-picker:disabled {
  /* Disabled style */
  background-color: #ddd;
  cursor: not-allowed;
}

.input-picker.error {
  /* Error style */
  border-color: red;
}

.preview {
  width: 35px;
  height: 35px;
  border-radius: 6px;
  background-color: var(--brand-500);
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
