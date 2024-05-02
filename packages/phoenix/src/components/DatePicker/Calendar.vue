<script lang="ts" setup>
import { computed, ref } from 'vue';
import { Days, MonthsSwitcher } from './Internal';
import type { CalendarProps, DateRangeValue, DateValue } from '~/types';
import { isMoreThan } from '~/helpers';

const props = defineProps<CalendarProps>();

const emit = defineEmits(['update:modelValue', 'update:range']);

const month = ref(props.modelValue ? props.modelValue : new Date());

const hoverDate = ref<Date | null>(null);

const model = computed({
  get: () => props.modelValue,
  set: (value: DateValue) => {
    if (props.range) {
      updateRange(value);
    }
    else {
      emit('update:modelValue', value);
    }
  },
});

function updateRange(value: DateValue) {
  const { range } = props;
  const newValue: DateRangeValue = { start: null, end: null };
  if (range) {
    if (range.start && range.end === null) {
      newValue.start = range.start;
      newValue.end = value;
    }
    else if (range.start == null || (range.start && range.end)) {
      newValue.start = value;
    }

    if (newValue.start && newValue.end && isMoreThan(newValue.start, newValue.end)) {
      const { end, start } = newValue;
      newValue.start = end;
      newValue.end = start;
    }
  }

  emit('update:range', newValue);
}
</script>

<template>
  <div class="calendar">
    <MonthsSwitcher v-model="month" :locale="locale" />
    <Days v-model="model" v-model:hover-date="hoverDate" :month="month" :locale="locale" :range="range" />
  </div>
</template>

<style>
.calendar {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: max-content;
  max-width: 100%;
  padding: 12px;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  row-gap: 20px;
}
</style>
