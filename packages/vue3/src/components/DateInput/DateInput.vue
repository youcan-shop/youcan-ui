<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { computed, ref } from 'vue';
import DatePicker from './DatePicker.vue';
import type { DateInputValue } from './types';
import SecondaryButton from '~/components/Button/SecondaryButton.vue';

const props = withDefaults(defineProps<{
  modelValue: DateInputValue
  disabled?: boolean
  isSingle?: boolean
}>(), {
  isSingle: false,
});

const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => props.modelValue,
  set: (value: DateInputValue) => emit('update:modelValue', value),
});

const isDatePickerVisible = ref(false);
const datePicker = ref<HTMLDivElement>();
const toggleDatePicker = (state = !isDatePickerVisible.value) => {
  if (!props.disabled) {
    isDatePickerVisible.value = state;
  }
};

onClickOutside(datePicker, () => toggleDatePicker(false));
</script>

<template>
  <div class="date-input">
    <SecondaryButton
      size="sm" icon-position="right" class="input-trigger" :disabled="disabled" type="button"
      @click="toggleDatePicker()"
    >
      <!-- <span v-show="model && model.start || model.end">
        {{ DateUtils.getCalendarDay(model.start, 'Start') }} - {{ DateUtils.getCalendarDay(model.end, 'End') }}
      </span>
      <span v-show="!model.start && !model.end">Select date range</span> -->
      <template #icon>
        <i class="i-youcan-calendar-blank" />
      </template>
    </SecondaryButton>
    <div class="date-picker-container">
      <DatePicker v-show="isDatePickerVisible" ref="datePicker" v-model="model" :is-single="isSingle" />
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
