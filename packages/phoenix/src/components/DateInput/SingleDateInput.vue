<script lang="ts" setup>
// import type { Ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { computed, ref } from 'vue';
import type { SingleDateInputProps } from './types';
import { Button, SingleDatePicker } from '~/components';

const props = defineProps<SingleDateInputProps>();

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
  set: (value: Date | null) => {
    toggleDatePicker(false);
    emit('update:modelValue', value);
  },
});

onClickOutside(datePicker, () => toggleDatePicker(false));
</script>

<template>
  <div class="date-input">
    <Button
      size="sm" icon-position="right" class="input-trigger"
      :disabled="disabled" variant="secondary" @click="toggleDatePicker()"
    >
      <span v-show="model">
        {{ model?.toLocaleDateString() }}
      </span>
      <span v-show="!model">Select a date range</span>
      <template #icon>
        <i class="i-youcan-calendar-blank" />
      </template>
    </Button>
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

.input-trigger {
  --icon-color: gray(--gray-500);

  justify-content: space-between;
  width: 100%;
}

.date-picker-container {
  position: relative;
}

.date-picker-container .date-picker {
  position: absolute;
  top: 8px;
}
</style>
