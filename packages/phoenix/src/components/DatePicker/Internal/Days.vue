<script lang="ts" setup>
import { computed } from 'vue';
import { generateDisplayedDays, getWeekdayNames, isMoreThan, isRTL, isSameDate } from '~/helpers';
import type { Day, DaysProps } from '~/types';

const props = defineProps<DaysProps>();

const emit = defineEmits(['update:modelValue', 'update:hoverDate']);

const calendarDays = computed(() => {
  const { minDate, maxDate } = props;
  const datesLimit = { minDate, maxDate };

  return generateDisplayedDays(props.month, datesLimit);
});
const dayNames = getWeekdayNames(props.locale);

function select(day: Day) {
  if (!day.isInMonth || day.disabled) {
    return;
  }

  emit('update:modelValue', day.date);
}

function isSelected(day: Day) {
  const { modelValue, range, hoverDate } = props;
  if (modelValue && day.isInMonth && day.date) {
    return isSameDate(day.date, modelValue);
  }
  else if (range && day.date) {
    return (isSameDate(day.date, (range.start as Date)) || isSameDate(day.date, (range.end as Date)) || isSameDate(day.date, (hoverDate as Date)));
  }

  return false;
}

function canSelect(day: Day) {
  return !day.disabled && day.isInMonth;
}

function whichOne(day: Day) {
  const { range, hoverDate } = props;

  if (range && day.date) {
    const start = (range.start as Date);
    const end = (range.end as Date);
    const hDate = (hoverDate as Date);

    if (isSameDate(day.date, start) && isSameDate(day.date, end)) {
      return '';
    }

    if (((isMoreThan(end, day.date) || isMoreThan(hDate, day.date)) && isMoreThan(day.date, start) && day.isInMonth && !isSameDate(day.date, end))
      || (isMoreThan(start, day.date) && isMoreThan(day.date, hDate))) {
      return 'middle';
    }

    if (isSameDate(day.date, start) || isMoreThan(start, hDate)) {
      return 'start';
    }

    if (isSameDate(day.date, end) || isSameDate(day.date, hDate)) {
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
  <div class="days" :class="[{ rtl: isRTL() }]" @mouseleave="() => emit('update:hoverDate', null)">
    <div v-for="day in dayNames" :key="day" class="day name">
      {{ day }}
    </div>
    <button
      v-for="(day, index) in calendarDays" :key="index" class="day"
      :class="[{ 'is-tody': day.isToday }, { selected: isSelected(day) }, `${canSelect(day) ? 'in' : 'out'}`, whichOne(day)]"
      type="button" @click="select(day)"
      @mouseover="handleHover(day)"
    >
      {{ day.date?.getDate() }}
    </button>
  </div>
</template>

<style scoped>
.days {
  display: grid;
  position: relative;
  z-index: 2;
  grid-template-columns: repeat(7, 40px);
  user-select: none;
  row-gap: 4px;
}

.days .day {
  display: flex;
  position: relative;
  box-sizing: border-box;
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

.days .day.name {
  color: var(--gray-500);
  font: var(--text-xs-medium);
  text-transform: capitalize;
}

.days .day.in {
  transition: background-color 70ms ease-in-out;
  cursor: pointer;
}

.days .day.in:not(.name, .selected):focus {
  border: 1px solid var(--brand-500);
  box-shadow: var(--focus-shadow-xs-brand);
}

.days .day.in.selected {
  background-color: var(--brand-500);
  color: var(--base-white);
  font: var(--text-sm-medium);
}

.days .day.in:not(.selected):hover {
  background-color: var(--gray-50);
}

.days .day.out {
  color: var(--gray-300);
  cursor: not-allowed;
}

.days .day.is-tody::after {
  --size: 6px;

  content: "";
  position: absolute;
  z-index: 2;
  bottom: 5px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: var(--brand-500);
}

.days .day.is-tody.selected::after {
  background-color: var(--base-white);
}

.days .day.in.start {
  border-radius: 4px 0 0 4px;
}

.days .day.in.end {
  border-radius: 0 4px 4px 0;
}

.days .day.in.middle {
  border-radius: 0;
  background-color: var(--brand-50);
}

.days.rtl .day.in.start {
  border-radius: 0 4px 4px 0;
}

.days.rtl .day.in.end {
  border-radius: 4px 0 0 4px;
}
</style>
