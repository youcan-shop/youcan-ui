<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { DatePicker } from '~/components';
import type { DateRangeValue, DateValue, Preset } from '~/types';
import { getDateLast, navigateToMonth } from '~/helpers';

const date = ref<DateValue>(null);
const range = ref<DateRangeValue>({ start: null, end: null });

const MIN = new Date(2024, 3, 1);
const MAX = new Date(2030, 9, 20);

const DateNow = new Date();
const presets = ref<Preset[]> ([
  {
    label: 'Last 7 days',
    start: getDateLast(7),
    end: DateNow,
  },
  {
    label: 'Last 30 days',
    start: getDateLast(30),
    end: DateNow,
    active: true,
  },
  {
    label: 'Last month',
    start: navigateToMonth(new Date(), -1),
    end: new Date(DateNow.getFullYear(), DateNow.getMonth(), 0),
  },
  {
    label: 'Last 90 days',
    start: getDateLast(90),
    end: DateNow,
  },
  {
    label: 'Last 3 months',
    start: navigateToMonth(DateNow, -3),
    end: new Date(DateNow.getFullYear(), DateNow.getMonth(), 0),
  },
]);
</script>

<template>
  <div class="container">
    <DatePicker
      v-model="date"
      :min-date="MIN"
      :max-date="MAX"
      placeholder="Select date"
    />
    <DatePicker
      v-model:range="range"
      v-model:presets="presets"
      :min-date="MIN"
      :max-date="MAX"
      placeholder="Select dates"
      :close-on-select="false"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 30px auto;
  gap: 60px;
}
</style>
