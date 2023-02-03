<script setup lang="ts">
import { DateUtils } from '@youcan/ui-core';
import type { DayDisplayFormat, DayEdge } from '../types';

const { format, date } = withDefaults(defineProps<{
  edge: DayEdge
  date: Date
  isToday: boolean
  isSelected: boolean
  inCurrentMonth?: boolean
  format?: DayDisplayFormat
  disabled?: boolean
}>(), {
  inCurrentMonth: true,
  format: 'numeric',
});

// get two-letters day of the day
const getDay = () => {
  return format === 'numeric' ? date.getDate() : DateUtils.getAlphabeticalWeekday(date);
};
</script>

<template>
  <button
    :disabled="disabled" class="day" type="button"
    :class="{ isSelected, isToday, [`edge--${edge}`]: true, outOfMonth: !inCurrentMonth, [`format-${format}`]: true }"
  >
    <span class="text">{{ getDay() }}</span>
  </button>
</template>

<style scoped lang="scss">
.day {
  --font: var(--text-sm-regular);
  --background-color: var(--base-white);
  --color: var(--gray-900);

  width: 40px;
  height: 36px;
  background-color: var(--background-color);
  font: var(--font);
  color: var(--color);
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 0;
  outline: none;

  &:not(:disabled) {
    &:hover {
      --background-color: var(--gray-50);
      z-index: 1;
    }

    &:focus {
      box-shadow: var(--focus-shadow-xs-brand);
      z-index: 2;
    }

    &:disabled {
      --color: var(--gray-200);
    }
  }

  &.isToday {
    --font: var(--text-sm-medium);
    --color: var(--base-white);
    --background-color: var(--blue-500);

    &:not(:disabled):hover {
      --background-color: var(--blue-600);
    }
  }

  &.isSelected {
    --font: var(--text-sm-medium);
    --color: var(--base-white);
    --background-color: var(--brand-500);

    &:not(:disabled):hover {
      --background-color: var(--brand-600);
    }

    &.edge--middle {
      --color: var(--gray-900);
      --background-color: var(--brand-50);

      &:not(:disabled):hover {
        --background-color: var(--brand-100);
      }
    }
  }

  &.edge {
    &--none {
      border-radius: 0;
    }

    &--start {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &--end {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    &--both {
      border-radius: 4px;
    }
  }

  &.outOfMonth {
    color: var(--gray-200) !important;
  }

  &.format-2-letters {
    .text {
      font: var(--text-xs-medium);
      color: var(--gray-500);
    }
  }
}
</style>
