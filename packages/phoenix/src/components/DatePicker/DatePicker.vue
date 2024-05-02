<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { computed, nextTick, ref } from 'vue';
import { Button, Calendar } from '~/components';
import { dateFormat, setPosition } from '~/helpers';
import type { DatePickerProps, DateRangeValue, DateValue } from '~/types';

const props = withDefaults(defineProps<DatePickerProps>(), {
  locale: 'en',
});

const emit = defineEmits(['update:modelValue', 'update:range']);

const date = ref<DateValue>(props.modelValue);
const rangeDate = ref<DateRangeValue>(props.range);

const show = ref(false);
const calendarWrap = ref();
const datePicker = ref();

const datesFormat = computed(() => {
  const { modelValue, locale, range } = props;
  if (modelValue) {
    return dateFormat(modelValue, locale);
  }

  if (range) {
    if (range.start || range.end) {
      return `${range.start ? dateFormat(range.start, locale) : ''} ${range.end ? ` - ${dateFormat(range.end, locale)}` : ''}`;
    }

    return '';
  }

  return '';
});

function updateModel(value: DateValue) {
  emit('update:modelValue', value);
}

function updateRange(value: DateRangeValue) {
  emit('update:range', value);
}

function ListPosition() {
  show.value = !show.value;
  nextTick(() => {
    if (datePicker.value && calendarWrap.value) {
      const { top, left } = setPosition(calendarWrap.value, datePicker.value, 'bottom', 8, false);
      calendarWrap.value?.setAttribute('style', `top:${top}px;left:${left}px;`);
    }
  });
}

onClickOutside(datePicker, () => show.value = false);
</script>

<template>
  <div ref="datePicker" class="date-picker">
    <Button variant="secondary" class="picker-output" :class="{ placeholder: !datesFormat }" @click="ListPosition">
      <span class="input-value">{{ datesFormat || placeholder }}</span>
      <i class="i-youcan:calendar-blank" />
    </Button>
    <Transition name="animate">
      <div v-if="show" ref="calendarWrap" class="calendar-wrap">
        <Calendar
          v-model="date"
          v-model:range="rangeDate"
          :locale="locale"
          @update:model-value="updateModel"
          @update:range="updateRange"
        />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.date-picker {
  --duration: 150ms;

  box-sizing: border-box;
  width: 100%;
}

.date-picker .picker-output {
  width: 100%;
  padding: 12px 16px;
}

.date-picker .picker-output i {
  color: var(--gray-500);
}

.date-picker .picker-output:deep(.label) {
  width: 100%;
}

.date-picker .picker-output .input-value {
  display: flex;
  flex: 1;
  justify-content: flex-start;
  color: var(--gray-900);
  font: var(--text-sm-regular);
}

.date-picker .picker-output.placeholder .input-value {
  color: var(--gray-400);
}

.date-picker .calendar-wrap {
  position: fixed;
  z-index: 9999999999;
  background-color: var(--base-white);
}

.animate-enter-active {
  animation: animate var(--duration) ease-in-out;
}

.animate-leave-active {
  animation: animate var(--duration) reverse ease-in-out;
}

@keyframes animate {
  0% {
    transform: scale(0.99);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
