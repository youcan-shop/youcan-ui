<script setup lang="ts">
import { DateUtils } from '@youcan/ui-core';
import { computed, ref } from 'vue';
import Day from './Internal/Day.vue';
import MonthSwitcher from './Internal/MonthSwitcher.vue';

const props = defineProps<{
  modelValue: Date
}>();

const emit = defineEmits(['update:modelValue']);

const month = ref(new Date());
const today = computed(() => month.value);
const model = computed({
  get: () => props.modelValue,
  set: (value: Date) => emit('update:modelValue', value),
});

const days = computed(() => DateUtils.getDaysForDateMonthCycle(today.value));
const weekDays = DateUtils.weekDays();
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
        v-for="day in days" :key="day.date.getTime()" :date="day.date" :edge="DateUtils.isSameDay(day.date, model) ? 'both' : 'none'"
        :is-selected="DateUtils.isSameDay(day.date, model)" :is-today="day.isToday" :disabled="false" :in-current-month="day.inCurrentMonth"
        @click="model = day.date;"
      />
    </div>
  </div>
</template>

<style scoped>
.date-picker {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: max-content;
  padding: 12px;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  background-color: var(--base-white);
  box-shadow: 0 6px 6px 0 rgb(0 0 0 / 6%);
  gap: 24px;
}

.days-container {
  display: grid;
  grid-template-columns: repeat(7, auto);
  width: max-content;
  background-color: var(--base-white);
}
</style>
