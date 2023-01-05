<script setup lang="ts">
import { DateUtils } from '@youcan/ui-core';
import { computed, ref } from 'vue';
import Day from './Internal/Day.vue';
import MonthSwitcher from './Internal/MonthSwitcher.vue';

const month = ref(new Date());
const today = computed(() => month.value);

const days = computed(() => DateUtils.getDaysForDateMonthCycle(today.value));
const weekDays = DateUtils.weekDays();
</script>

<template>
  <div class="date-input">
    <MonthSwitcher v-model="month" />
    <div class="days-container">
      <Day v-for="(weekDay, index) in weekDays" :key="weekDay.getTime()" :date="weekDay" edge="none"
        :is-selected="false" :is-today="false" :disabled="true" :in-current-month="false" format="2-letters" />
      <Day v-for="(day, index) in days" :key="day.date.getTime()" :date="day.date" edge="both" :is-selected="false"
        :is-today="day.isToday" :disabled="false" :in-current-month="day.inCurrentMonth" />
    </div>
  </div>
</template>

<style scoped>
.date-input {
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
