<script setup lang="ts">
import { DateUtils } from '@youcan/ui-core';
import { computed, ref } from 'vue';
import Day from './Internal/Day.vue';

const currentMonth = ref(new Date());

const days = computed(() => DateUtils.getDaysForDateMonthCycle(currentMonth.value));
const weekDays = DateUtils.weekDays();
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
