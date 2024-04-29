<script lang="ts" setup>
import { computed } from 'vue';
import { getDisplayedDays, getWeekdayNames, isSameDay } from '~/helpers';
import type { Day, DaysProps } from '~/types';

const props = defineProps<DaysProps>();

const emit = defineEmits(['update:modelValue']);

const calendarDays = computed(() => getDisplayedDays(props.month));
const dayNames = getWeekdayNames();

function select(day: Day) {
  emit('update:modelValue', day.date);
}

function isSelected(date: Date | undefined) {
  const { modelValue } = props;
  if (modelValue && date) {
    return isSameDay(date, modelValue);
  }

  return false;
}
</script>

<template>
  <div class="days">
    <div v-for="day in dayNames" :key="day" class="day name">
      {{ day }}
    </div>
    <button
      v-for="(day, index) in calendarDays"
      :key="index" class="day"
      :class="[{ 'is-tody': day.isToday }, { selected: isSelected(day.date) }, `${day.isInMonth ? 'in' : 'out'}`]"
      type="button"
      @click="select(day)"
    >
      {{ day.date?.getDate() }}
    </button>
  </div>
</template>

<style scoped>
.days {
  display: grid;
  grid-template-columns: repeat(7, 36px);
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
}

.day.in {
  transition: background-color 70ms ease-in-out;
  cursor: pointer;
}

.day.selected {
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
</style>
