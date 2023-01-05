<script setup lang="ts">
import { computed, ref } from 'vue';
import Day from './Internal/Day.vue';

const currentMonth = ref(new Date());

function getDaysInMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

function getDaysBeforeMonth(date: Date, daysBefore: number) {
  const days = [];
  const lastDayOfPreviousMonth = new Date(date.getFullYear(), date.getMonth(), 0);
  for (let i = 0; i < daysBefore; i++) {
    days.push(new Date(lastDayOfPreviousMonth.getFullYear(), lastDayOfPreviousMonth.getMonth(), lastDayOfPreviousMonth.getDate() - i));
  }

  return days.reverse();
}

function getDaysAfterMonth(date: Date, daysAfter: number) {
  const days = [];
  const firstDayOfNextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  for (let i = 0; i < daysAfter; i++) {
    days.push(new Date(firstDayOfNextMonth.getFullYear(), firstDayOfNextMonth.getMonth(), firstDayOfNextMonth.getDate() + i));
  }

  return days;
}

function getDaysInMonthArray(date: Date) {
  const daysInMonth = getDaysInMonth(date);
  const days = [];
  for (let i = 0; i < daysInMonth; i++) {
    days.push(new Date(date.getFullYear(), date.getMonth(), i + 1));
  }

  return days;
}

function addStatusToDays(days: Date[]) {
  return days.map((day) => {
    const isToday = day.toDateString() === new Date().toDateString();
    const isSelected = day.toDateString() === currentMonth.value.toDateString();
    const inCurrentMonth = day.getMonth() === currentMonth.value.getMonth();

    return {
      date: day,
      isToday,
      isSelected,
      inCurrentMonth,
    };
  });
}

const days = computed(() => {
  const daysInMonth = getDaysInMonth(currentMonth.value);
  const firstDayOfMonth = new Date(currentMonth.value.getFullYear(), currentMonth.value.getMonth(), 1);
  const lastDayOfMonth = new Date(currentMonth.value.getFullYear(), currentMonth.value.getMonth(), daysInMonth);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const lastDayOfWeek = lastDayOfMonth.getDay();
  const daysBefore = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
  const daysAfter = lastDayOfWeek === 0 ? 0 : 7 - lastDayOfWeek;
  const daysBeforeMonth = getDaysBeforeMonth(currentMonth.value, daysBefore);
  const daysAfterMonth = getDaysAfterMonth(currentMonth.value, daysAfter);

  return [...addStatusToDays(daysBeforeMonth), ...addStatusToDays(getDaysInMonthArray(currentMonth.value)), ...addStatusToDays(daysAfterMonth)];
});

// get the 7 week days starting from monday
const weekDays = computed(() => {
  const weekDays = [];
  const firstDayOfWeek = new Date(2021, 0, 4);

  for (let i = 0; i < 7; i++) {
    weekDays.push(new Date(firstDayOfWeek.getFullYear(), firstDayOfWeek.getMonth(), firstDayOfWeek.getDate() + i));
  }

  return weekDays;
});

console.log(days.value);
</script>

<template>
  <div class="days-container">
    <Day v-for="(weekDay, index) in weekDays" :key="index" :date="weekDay" edge="none" :is-selected="false"
      :is-today="false" :disabled="true" :in-current-month="false" format="2-letters" />
    <Day v-for="(day, index) in days" :key="index" :date="day.date" edge="both" :is-selected="false"
      :is-today="day.isToday" :disabled="false" :in-current-month="day.inCurrentMonth" />
  </div>
</template>

<style scoped>
.days-container {
  width: max-content;
  display: grid;
  grid-template-columns: repeat(7, auto);
  background-color: var(--base-white);
}
</style>
