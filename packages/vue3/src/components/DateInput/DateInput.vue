<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { DateUtils } from '@youcan/ui-core';
import { computed, ref } from 'vue';
import DatePicker from './DatePicker.vue';
import DateRangePicker from './DateRangePicker.vue';
import type { DateRangeValue } from './types';
import SecondaryButton from '~/components/Button/SecondaryButton.vue';

const props = withDefaults(defineProps<{
  modelValue: DateRangeValue | Date
  disabled?: boolean
  isSingle?: boolean
  placeholder?: string
}>(), {
  isSingle: false,
  placeholder: 'Select date range',
});

const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => props.modelValue,
  set: (value: Date | DateRangeValue) => emit('update:modelValue', value),
});

const isDatePickerVisible = ref(false);
const datePicker = ref<HTMLDivElement>();
const toggleDatePicker = (state = !isDatePickerVisible.value) => {
  if (!props.disabled) {
    isDatePickerVisible.value = state;
  }
};

const getLabel = computed(() => {
  if (model.value) {
    if (model.value instanceof Date) {
      return DateUtils.getCalendarDay(model.value, '');
    }
    else {
      return `${DateUtils.getCalendarDay(model.value.start, 'Start')} - ${DateUtils.getCalendarDay(model.value.end, 'End')}`;
    }
  }

  return props.placeholder;
});

onClickOutside(datePicker, () => toggleDatePicker(false));
</script>

<template>
  <div class="date-input">
    <SecondaryButton
      size="sm" icon-position="right" class="input-trigger" :disabled="disabled" type="button"
      @click="toggleDatePicker()"
    >
      <!--  <span v-show="model && model.start || model.end">
        {{ DateUtils.getCalendarDay(model.start, 'Start') }} - {{ DateUtils.getCalendarDay(model.end, 'End') }}
      </span>
      <span v-show="!model.start && !model.end">Select date range</span> -->
      <span>{{ getLabel }}</span>
      <template #icon>
        <i class="i-youcan-calendar-blank" />
      </template>
    </SecondaryButton>
    <div class="date-picker-container">
      <DatePicker v-if="isSingle" v-show="isDatePickerVisible" ref="datePicker" v-model="model" />
      <DateRangePicker v-else v-show="isDatePickerVisible" ref="datePicker" v-model="model" />
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
