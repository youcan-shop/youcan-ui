<script setup lang="ts">
import { computed, ref } from 'vue';
import { DateUtils } from '@youcan/ui-core';
import DatePicker from './DatePicker.vue';
import type { DateInputValue } from './types';
import SecondaryButton from '~/components/Button/SecondaryButton.vue';

const props = defineProps<{
  modelValue: DateInputValue
  disabled?: boolean
}>();

const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => props.modelValue,
  set: (value: DateInputValue | null) => emit('update:modelValue', value),
});

const isDatePickerVisible = ref(false);
const toggleDatePicker = (state = !isDatePickerVisible.value) => {
  if (!props.disabled) {
    isDatePickerVisible.value = state;
  }
};
</script>

<template>
  <div class="date-input">
    <SecondaryButton
      size="sm" icon-position="right" class="input-trigger" :disabled="disabled" type="button"
      @click="toggleDatePicker()"
    >
      <span v-show="model.start || model.end">
        {{ DateUtils.getCalendarDay(model.start, 'Start') }} - {{ DateUtils.getCalendarDay(model.end, 'End') }}
      </span>
      <span v-show="!model.start && !model.end">Select date range</span>
      <template #icon>
        <i class="i-youcan-calendar-blank" />
      </template>
    </SecondaryButton>
    <div class="date-picker-container">
      <DatePicker v-show="isDatePickerVisible" v-model="model" @on-click-outside="toggleDatePicker(false)" />
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
