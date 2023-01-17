<script setup lang="ts">
import type { DayStatus } from '@youcan/ui-core';
import { DateUtils } from '@youcan/ui-core';
import { computed, ref } from 'vue';
import Day from './Internal/Day.vue';
import MonthSwitcher from './Internal/MonthSwitcher.vue';
import type { DateInputValue } from './types';

const props = defineProps<{
  modelValue: DateInputValue
}>();

const emit = defineEmits(['update:modelValue']);

const month = ref(new Date());
const today = computed(() => month.value);
const model = computed({
  get: () => props.modelValue,
  set: (value: DateInputValue | null) => emit('update:modelValue', value),
});

const days = computed(() => DateUtils.getDaysForDateMonthCycle(today.value));
const weekDays = DateUtils.weekDays();
const lockMouseHover = ref(false);

const handleDayClick = (day: DayStatus) => {
  lockMouseHover.value = !lockMouseHover.value;

  if (!model.value?.start || model.value?.end) {
    if (!lockMouseHover.value) {
      return;
    }

    model.value = {
      start: day.date,
      end: undefined,
    };

    return;
  }

  if (!model.value?.end) {
    const endIsBiggerThanStartDate = DateUtils.biggerThan(model.value.start, day.date);

    model.value = {
      start: endIsBiggerThanStartDate ? day.date : model.value.start,
      end: endIsBiggerThanStartDate ? model.value.start : day.date,
    };
  }
};

const handleDayHover = (day: DayStatus) => {
  if (!model.value?.start || !lockMouseHover.value) {
    return;
  }

  if (!model.value?.end || lockMouseHover.value) {
    if (DateUtils.isSameDay(day.date, model.value.start)) {
      return;
    }

    const endIsBiggerThanStartDate = DateUtils.biggerThan(model.value.start, day.date);

    model.value = {
      start: endIsBiggerThanStartDate ? day.date : model.value.start,
      end: model.value.end && endIsBiggerThanStartDate ? model.value.end : (endIsBiggerThanStartDate ? model.value.start : day.date),
    };
  }
};

const getEdge = (day: DayStatus) => {
  if (!model.value?.start && !model.value?.end) {
    return day.isToday ? 'both' : 'none';
  }

  if (model.value.start && model.value.end) {
    if (DateUtils.isSameDay(model.value.start, model.value.end)) {
      return 'both';
    }
    else if (DateUtils.isBetween(day.date, model.value.start, model.value.end)) {
      return 'middle';
    }
  }

  if (model.value.start && DateUtils.isSameDay(day.date, model.value.start)) {
    return 'start';
  }

  if (model.value.end && DateUtils.isSameDay(day.date, model.value.end)) {
    return 'end';
  }

  if (model.value?.start && model.value?.end && day.isToday) {
    return 'both';
  }

  return 'none';
};

const isActive = (day: DayStatus) => {
  if (
    (model.value?.start && DateUtils.isSameDay(day.date, model.value.start))
    || (model.value?.end && DateUtils.isSameDay(day.date, model.value.end))) {
    return true;
  }

  if (!model.value?.start || !model.value?.end) {
    return false;
  }

  return DateUtils.isBetween(day.date, model.value.start, model.value.end);
};
</script>

<template>
  <div class="date-picker">
    <MonthSwitcher v-model="month" />
    <div class="days-container">
      <Day
        v-for="weekDay in weekDays" :key="weekDay.getTime()" :date="weekDay" edge="none" :is-selected="false"
        :is-today="false" :disabled="true" :in-current-month="false" format="2-letters"
      />
      <Day
        v-for="day in days" :key="day.date.getTime()" :date="day.date" :edge="getEdge(day)"
        :is-selected="isActive(day)" :is-today="day.isToday" :disabled="false" :in-current-month="day.inCurrentMonth"
        @click="handleDayClick(day)" @mouseover="handleDayHover(day)"
      />
    </div>
  </div>
</template>

<style scoped>
.date-picker {
  display: flex;
  flex-direction: column;
  width: max-content;
  gap: 24px;
  padding: 12px;
  background-color: var(--base-white);
  border-radius: 8px;
  box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.06);
  border: 1px solid #EBEBEB;
}

.days-container {
  width: max-content;
  display: grid;
  grid-template-columns: repeat(7, auto);
  background-color: var(--base-white);
}
</style>
