<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core';
import { computed, ref } from 'vue';
import TertiaryButton from '../Button/TertiaryButton.vue';
import type { SingleDateInputProps } from './types';
import { SecondaryButton, SingleDatePicker } from '~/components';

const props = withDefaults(defineProps<SingleDateInputProps>(), {
  placeholder: 'Select date',
});

const emit = defineEmits(['update:modelValue']);

const isDatePickerVisible = ref(false);
const datePicker = ref<HTMLDivElement>();

const toggleDatePicker = (state = !isDatePickerVisible.value) => {
  if (!props.disabled) {
    isDatePickerVisible.value = state;
  }
};

const model = computed({
  get: () => props.modelValue,
  set: (value?: Date) => {
    toggleDatePicker(false);
    emit('update:modelValue', value);
  },
});

onClickOutside(datePicker, () => toggleDatePicker(false));

function clearModelValue(e: Event) {
  e.stopPropagation();
  emit('update:modelValue', null);
}
</script>

<template>
  <div class="date-input">
    <SecondaryButton
      size="sm" icon-position="right" class="input-trigger"
      :disabled="disabled" @click="toggleDatePicker()"
    >
      <span v-show="model">
        {{ model?.toLocaleDateString() }}
      </span>
      <span v-show="!model" class="placeholder">{{ placeholder }}</span>
      <div class="accessory" />
      <template #icon>
        <TertiaryButton v-if="modelValue" class="clear-button" @click="clearModelValue">
          <i class="i-youcan:x" />
        </TertiaryButton>
        <i class="i-youcan-calendar-blank" />
      </template>
    </SecondaryButton>
    <div class="date-picker-container">
      <SingleDatePicker v-show="isDatePickerVisible" ref="datePicker" v-model="model" />
    </div>
  </div>
</template>

<style scoped>
.date-input {
  --width: 460px;

  box-sizing: border-box;
  width: var(--width);
}

.date-input .input-trigger {
  --icon-color: gray(--gray-500);

  justify-content: space-between;
  width: 100%;
}

.date-input .input-trigger .placeholder {
  color: var(--gray-300);
  font: var(--text-sm-regular);
}

.date-input .date-picker-container {
  position: relative;
}

.date-input .date-picker-container .date-picker {
  position: absolute;
  top: 8px;
}

.date-input .clear-button {
  padding: 0 8px;
}

.date-input .clear-button i {
  background-color: var(--gray-400);
}
</style>
