<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import { onClickOutside } from '@vueuse/core';
import type { ColorInputProps } from './types';
import ColorPicker from './ColorPicker.vue';
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
const inputValue = ref(props.modelValue);
const pickerValue = ref(props.modelValue);
const focus = ref(false);

const focused = computed(() => focus.value && !props.disabled);

const maxInputLength = computed(() => props.preserveTransparency ? 9 : 7);

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
  if (props.preserveTransparency && value.length < 8) {
    inputValue.value = `${value}FF`;
  }
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

watch(() => props.modelValue, (newValue) => {
  inputValue.value = newValue;
  pickerValue.value = newValue;
});

watch(inputValue, (newValue) => {
  updateModelValue(newValue);
});
</script>

<template>
  <div class="wrapper">
    <div ref="inputPicker" class="input-picker" tabindex="0" :class="[{ error: props.error, disabled: props.disabled }, { focused }]" @focusin="() => focus = true" @focusout="() => focus = false" @click="() => toggle()">
      <div class="preview" :style="{ 'background-color': inputValue }" />
      <input v-model="inputValue" class="color-input" :class="{ disabled: props.disabled }" :disabled="props.disabled" :maxlength="maxInputLength">
    </div>
    <div v-show="show" ref="picker" class="picker">
      <ColorPicker :preserve-transparency="preserveTransparency" :model-value="pickerValue" @update:model-value="updateModelValue" />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
}

.wrapper .input-picker {
  display: flex;
  flex-direction: row;
  width: 150px;
  padding: 5px;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
  cursor: pointer;
  gap: 8px;
}

.wrapper .input-picker.focused {
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
  border-radius: 8px;
  box-shadow: var(--shadow-md-gray);
}

.wrapper .input-picker .color-input {
  width: 60%;
  border: none;
  outline: none;
}

.wrapper .input-picker .color-input.disabled {
  cursor: not-allowed;
}
</style>
