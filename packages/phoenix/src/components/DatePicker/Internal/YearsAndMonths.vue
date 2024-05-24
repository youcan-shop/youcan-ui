<script lang="ts" setup>
import { computed, ref } from 'vue';
import type { YearsAndMonthsProps } from '../types';
import { Button } from '~/components';
import { getMonthName, isMoreThan } from '~/helpers';

const props = defineProps<YearsAndMonthsProps>();

const emit = defineEmits(['update:date', 'update:show']);

const minYear = (props.minDate as Date).getFullYear();
const maxYear = (props.maxDate as Date).getFullYear();

const from = ref(props.date.getFullYear());
const year = computed(() => props.date.getFullYear());
const month = computed(() => props.date.getMonth());
const perPage = 25;
const to = computed(() => from.value - (perPage - 1));

const years = computed(() => {
  return [...Array(perPage)].map((_, i: number) => from.value - i).slice().reverse();
});

function disableYear(y: number) {
  return y < minYear || y > maxYear;
}

function disableMonth(m: number) {
  const min = (props.minDate as Date);
  const max = (props.maxDate as Date);
  const { date } = props;

  return (m < min.getMonth() && date.getFullYear() === min.getFullYear())
  || (m > max.getMonth() && date.getFullYear() === max.getFullYear());
}

function select(x: number, target: 'year' | 'month' = 'year') {
  const { date } = props;
  const min = (props.minDate as Date);
  const max = (props.maxDate as Date);
  if ((target === 'year' && disableYear(x)) || (target === 'month' && disableMonth(x))) {
    return;
  }
  let d = new Date(x, date.getMonth(), date.getDate());
  if (target === 'month') {
    d = new Date(year.value, x, date.getDate());
  }
  d = isMoreThan(d, max) ? max : isMoreThan(min, d) ? min : d;
  emit('update:date', d);
  emit('update:show', false);
}

function update(direction: 'next' | 'previous') {
  let newValue = from.value;
  switch (direction) {
    case 'previous':
      newValue -= perPage;
      from.value = newValue < minYear ? minYear : newValue;
      break;
    default:
      newValue += perPage;
      from.value = newValue > maxYear ? maxYear : newValue;
      break;
  }
}
</script>

<template>
  <Transition name="slide-up">
    <div v-if="show === 'years'" class="years">
      <div class="years-switcher">
        <Button variant="tertiary" class="navigation-button" :disabled="from === minYear" type="button" @click="update('previous')">
          <i class="i-youcan:caret-left" />
        </Button>
        {{ from }} - {{ to }}
        <Button variant="tertiary" class="navigation-button" :disabled="from === maxYear" type="button" @click="update('next')">
          <i class="i-youcan:caret-right" />
        </Button>
      </div>
      <div class="years-grid">
        <button
          v-for="y in years" :key="y"
          class="year" :class="[{ selected: y === year }, `${disableYear(y) ? 'out' : 'in'}`]" type="button" @click="select(y)"
        >
          {{ y }}
        </button>
      </div>
    </div>
  </Transition>
  <Transition name="slide-up">
    <div v-if="show === 'months'" class="months">
      <div class="months-grid">
        <button
          v-for="m in 12" :key="m" class="month"
          :class="[{ selected: m - 1 === month }, `${disableMonth(m - 1) ? 'out' : 'in'}`]" @click="select(m - 1, 'month')"
        >
          {{ getMonthName(m - 1, locale) }}
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.years,
.months {
  display: flex;
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 12px;
  border-radius: 8px;
  background-color: var(--base-white);
  gap: 20px;
  user-select: none;
}

.years {
  flex-direction: column;
}

.years .years-switcher {
  display: flex;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  color: var(--gray-900);
  font: var(--text-sm-medium);
  user-select: none;
  gap: 8px;
}

.years .years-switcher .navigation-button {
  padding: 5px;
}

.years .years-switcher .navigation-button i {
  width: 18px;
  height: 18px;
  color: var(--gray-500);
}

.years .years-grid {
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  gap: 4px;
}

.years .years-grid .year.out,
.months .months-grid .month.out {
  color: var(--gray-300);
  cursor: not-allowed;
}

.years .years-grid .year,
.months .months-grid .month {
  box-sizing: border-box;
  padding: 10px 5px;
  transition: background-color 150ms ease-in-out;
  border: 0;
  border: 1px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: var(--base-white);
  color: var(--gray-900);
  font: var(--text-sm-regular);
  cursor: pointer;
}

.years .years-grid .year:hover:not(.out, .selected),
.months .months-grid .month:hover:not(.out, .selected) {
  background-color: var(--gray-50);
}

.years .years-grid .year.selected,
.months .months-grid .month.selected {
  background-color: var(--brand-500);
  color: var(--base-white);
}

.years .years-grid .year:focus:not(.out),
.months .months-grid .month:focus:not(.out) {
  border: 1px solid var(--brand-500);
  box-shadow: var(--focus-shadow-xs-brand);
}

.months {
  align-items: center;
}

.months-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  width: 100%;
}

.slide-up-enter-active {
  animation: slide-up 250ms ease-in-out;
}

.slide-up-leave-active {
  animation: slide-up 250ms reverse ease-in-out;
}

@keyframes slide-up {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
