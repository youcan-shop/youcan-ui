<script lang="ts" setup>
import { computed } from 'vue';
import { getDisplayedDays, getWeekdayNames, isMoreThan, isSameDay } from '~/helpers';
import type { Day, DaysProps } from '~/types';

const props = defineProps<DaysProps>();

const emit = defineEmits(['update:modelValue', 'update:hoverDate']);

const calendarDays = computed(() => getDisplayedDays(props.month));
const dayNames = getWeekdayNames(props.locale);

function select(day: Day) {
  if (day.isInMonth === false) {
    return;
  }

  emit('update:modelValue', day.date);
}

function isSelected(day: Day) {
  const { modelValue, range, hoverDate } = props;
  if (modelValue && day.isInMonth && day.date) {
    return isSameDay(day.date, modelValue);
  }
  else if (range && day.date) {
    return (isSameDay(day.date, (range.start as Date)) || isSameDay(day.date, (range.end as Date)) || isSameDay(day.date, (hoverDate as Date)));
  }

  return false;
}

function whichOne(day: Day) {
  const { range, hoverDate } = props;

  if (range && day.date) {
    const start = (range.start as Date);
    const end = (range.end as Date);
    const hDate = (hoverDate as Date);

    if (isSameDay(day.date, start) && isSameDay(day.date, end)) {
      return '';
    }

    if (((isMoreThan(end, day.date) || isMoreThan(hDate, day.date)) && isMoreThan(day.date, start) && day.isInMonth)
      || (isMoreThan(start, day.date) && isMoreThan(day.date, hDate))) {
      return 'middle';
    }

    if (isSameDay(day.date, start) || isMoreThan(start, hDate)) {
      return 'start';
    }

    if (isSameDay(day.date, end) || isSameDay(day.date, hDate)) {
      return 'end';
    }
  }

  return '';
}

function handleHover(day: Day) {
  const { range, hoverDate } = props;
  if (range && range.start && !range.end && day.date && day.isInMonth) {
    emit('update:hoverDate', day.date);
  }
  else if (hoverDate) {
    emit('update:hoverDate', null);
  }
}
</script>

<template>
  <div class="days" :class="locale" @mouseleave="() => emit('update:hoverDate', null)">
    <div v-for="day in dayNames" :key="day" class="day name">
      {{ day }}
    </div>
    <button
      v-for="(day, index) in calendarDays" :key="index" class="day"
      :class="[{ 'is-tody': day.isToday }, { selected: isSelected(day) }, `${day.isInMonth ? 'in' : 'out'}`, whichOne(day)]"
      type="button" @click="select(day)" @mouseover="handleHover(day)"
    >
      {{ day.date?.getDate() }}
    </button>
  </div>
</template>

<style scoped>
.days {
  display: grid;
  grid-template-columns: repeat(7, 40px);
  row-gap: 4px;
}

.day {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 36px;
  border: 0;
  border-radius: 4px;
  outline: none;
  background-color: transparent;
  color: var(--gray-900);
  font: var(--text-sm-regular);
}

.day.name {
  color: var(--gray-500);
  font: var(--text-xs-medium);
  text-transform: capitalize;
}

.day.in {
  transition: background-color 70ms ease-in-out;
  cursor: pointer;
}

.day.in.selected {
  background-color: var(--brand-500);
  color: var(--base-white);
  font: var(--text-sm-medium);
}

.day.in:not(.selected):hover {
  background-color: var(--gray-50);
}

.day.out {
  color: var(--gray-300);
  cursor: not-allowed;
}

.day.is-tody::after {
  --size: 6px;

  content: "";
  position: absolute;
  z-index: 2;
  bottom: 3px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: var(--brand-500);
}

.day.in.start {
  border-radius: 4px 0 0 4px;
}

.day.in.end {
  border-radius: 0 4px 4px 0;
}

.day.in.middle {
  border-radius: 0;
  background-color: var(--brand-50);
}
</style>
