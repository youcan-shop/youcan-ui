<script setup lang="ts">
import type { DayEdge } from '../types';

const props = withDefaults(defineProps<{
  edge: DayEdge
  date: Date
  isToday: boolean
  isSelected: boolean
  inCurrentMonth?: boolean
  disabled?: boolean
}>(), {
  inCurrentMonth: true,
});
</script>

<template>
  <button :disabled="disabled" class="day"
    :class="{ isSelected, isToday, [`edge--${edge}`]: true, outOfMonth: !inCurrentMonth }">
    <span class="text">{{ date.getDate() }}</span>
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

  &:not(:disabled, .outOfMonth) {
    &:hover {
      --background-color: var(--gray-50);
    }

    &:focus {
      box-shadow: var(--focus-xs-brand);
    }

    &:disabled {
      --color: var(--gray-300);
    }
  }

  &.isToday:not(.outOfMonth) {
    --font: var(--text-sm-medium);
    --color: var(--base-white);
    --background-color: var(--blue-500);

    &:not(:disabled):hover {
      --background-color: var(--blue-600);
    }
  }

  &.isSelected:not(.outOfMonth) {
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
    --background-color: var(--base-white);

    .text {
      display: none;
    }
  }
}
</style>
