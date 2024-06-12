<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import type { ColorInputProps } from './types';
import { ColorPicker } from '~/components';
import { setPosition } from '~/helpers';

const props = withDefaults(
  defineProps<ColorInputProps>(),
  {
    modelValue: '',
    error: false,
    disabled: false,
    preserveTransparency: true,
  },
);

const emit = defineEmits(['update:modelValue']);

const picker = ref();
const inputPicker = ref();
const show = ref(false);

function toggle(override = !show.value) {
  if (props.disabled) {
    return;
  }
  show.value = override;

  nextTick(() => {
    if (picker.value && inputPicker.value && show.value) {
      const { top, left } = setPosition(picker.value, inputPicker.value, 'bottom', 5);
      picker.value?.setAttribute('style', `top:${top}px;left:${left}px`);
    }
  });
}

function updateModelValue(value: string) {
  emit('update:modelValue', value);
}

function handleScroll() {
  if (show.value) {
    show.value = false;
  }
}

onClickOutside(picker, () => toggle(false));

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="wrapper">
    <div ref="inputPicker" class="input-picker" tabindex="0" :class="{ error: props.error, disabled: props.disabled }" @click="() => toggle()">
      <div class="preview" :style="{ 'background-color': props.modelValue }" />
      <span>{{ props.modelValue }}</span>
    </div>
    <div v-show="show" ref="picker" class="picker">
      <ColorPicker :preserve-transparency="preserveTransparency" :model-value="props.modelValue" @update:model-value="updateModelValue" />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
}

.wrapper .input-picker {
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

.wrapper .input-picker:focus {
  border: 1px solid var(--brand-500);
  box-shadow: var(--focus-shadow-xs-brand);
}

.wrapper .input-picker.error {
  border: 1px solid var(--red-500);
  box-shadow: var(--focus-shadow-xs-red);
}

.wrapper .input-picker.disabled {
  opacity: 0.5;
  background-color: #ddd;
  cursor: not-allowed;
}

.wrapper .input-picker.disabled:focus {
  border: 1px solid var(--gray-500);
  box-shadow: var(--focus-shadow-xs-gray);
}

.wrapper .input-picker .preview {
  width: 35px;
  height: 35px;
  border: 1px solid var(--gray-100);
  border-radius: 6px;
}

.wrapper .picker {
  position: fixed;
  z-index: 100;
  transform: translate3d(0, 5px, 0);
  box-shadow: var(--shadow-md-gray);
}
</style>
