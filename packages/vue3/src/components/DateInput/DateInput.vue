<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { computed, ref } from 'vue';
import { DateUtils } from '@youcan/ui-core';
import DatePicker from './DatePicker.vue';
import type { DateInputProps, DateInputValue } from '~/types';
import SecondaryButton from '~/components/Button/SecondaryButton.vue';

const props = withDefaults(defineProps<DateInputProps>(), {
  placeholder: 'Select date range',
});

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

function clearModelValue(e: Event) {
  e.stopPropagation();
  emit('update:modelValue', { start: null, end: null });
}
</script>

<template>
  <div class="date-input">
    <SecondaryButton
      size="sm" icon-position="right" class="input-trigger" :disabled="disabled" type="button"
      @click="toggleDatePicker()"
    >
      <span v-show="model.start || model.start">
        {{ DateUtils.getCalendarDay(model.start, 'Start') }} - {{ DateUtils.getCalendarDay(model.end, 'End') }}
      </span>
      <span v-show="!model.start && !model.start" class="placeholder">{{ placeholder }}</span>
      <template #icon>
        <TertiaryButton v-if="model.start || model.end" class="clear-button" @click="clearModelValue">
          <i class="i-youcan:x" />
        </TertiaryButton>
        <i class="i-youcan-calendar-blank" />
      </template>
    </SecondaryButton>
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

.date-input .input-trigger {
  --icon-color: gray(--gray-500);

  justify-content: space-between;
  width: 100%;
}

.date-input .input-trigger .placeholder {
  color: var(--gray-300);
  font: var(--text-sm-regular);
}

.date-picker-container {
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
