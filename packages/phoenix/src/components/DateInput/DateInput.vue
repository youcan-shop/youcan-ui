<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { computed, ref } from 'vue';
import { DateUtils } from '@youcan/ui-core';
import DatePicker from './DatePicker.vue';
import type { DateInputProps, DateInputValue } from '~/types';
import { Button } from '~/components';

const props = defineProps<DateInputProps>();

const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => props.modelValue,
  set: (value: DateInputValue | null) => emit('update:modelValue', value),
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
    <Button
      size="sm" icon-position="right" class="input-trigger" :disabled="disabled" type="button"
      variant="secondary" @click="toggleDatePicker()"
    >
      <span v-show="model.start || model.start">
        {{ DateUtils.getCalendarDay(model.start, 'Start') }} - {{ DateUtils.getCalendarDay(model.end, 'End') }}
      </span>
      <span v-show="!model.start && !model.start">Select date range</span>
      <template #icon>
        <i class="i-youcan-calendar-blank" />
      </template>
    </Button>
    <div class="date-picker-container">
      <DatePicker v-show="isDatePickerVisible" ref="datePicker" v-model="model" />
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
