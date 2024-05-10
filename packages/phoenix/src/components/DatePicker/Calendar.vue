<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import { Days, MonthsSwitcher, YearsAndMonths } from './Internal';
import type { ShowingType } from './types';
import type { CalendarProps, DateRangeValue, DateValue } from '~/types';
import { isMoreThan } from '~/helpers';

const props = defineProps<CalendarProps>();

const emit = defineEmits(['update:modelValue', 'update:range']);

const showYearsOrMonths = ref<ShowingType>(false);
const calendarContainer = ref();

function setDate() {
  const { modelValue, range } = props;
  if (modelValue) {
    return modelValue;
  }

  if (range && range.start) {
    return range.start;
  }

  return new Date();
}

const month = ref(setDate());

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

function show(target: ShowingType) {
  showYearsOrMonths.value = target;
}

watch(() => props.range, () => {
  month.value = setDate();
});
</script>

<template>
  <div class="calendar">
    <Transition name="fade">
      <div v-if="!showYearsOrMonths" ref="calendarContainer" class="calendar-container">
        <MonthsSwitcher v-model="month" :locale="locale" @on-click="show" />
        <Days v-model="model" v-model:hover-date="hoverDate" :month="month" :locale="locale" :range="range" />
      </div>
    </Transition>
    <YearsAndMonths v-model:date="month" v-model:show="showYearsOrMonths" :locale="locale" />
  </div>
</template>

<style>
.calendar {
  display: flex;
  position: relative;
  box-sizing: border-box;
  flex-direction: column;
  width: max-content;
  min-width: 304px;
  max-width: 100%;
  min-height: 310px;
  padding: 12px;
  overflow: hidden;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  row-gap: 20px;
}

.calendar .calendar-container {
  display: flex;
  flex-direction: column;
  width: max-content;
  max-width: 100%;
  row-gap: 20px;
}

.fade-enter-active {
  animation: fade 250ms ease-in-out;
}

.fade-leave-active {
  animation: fade 250ms reverse ease-in-out;
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
