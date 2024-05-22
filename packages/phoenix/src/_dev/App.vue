<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { DatePicker } from '~/components';
import type { DateRangeValue, DateValue, Preset } from '~/types';
import { getDateDaysAgo, moveToMonth } from '~/helpers';

const date = ref<DateValue>(null);
const range = ref<DateRangeValue>({ start: null, end: null });
const rangePresets = ref<DateRangeValue>({ start: null, end: null });
const rangeMinMax = ref<DateRangeValue>({ start: null, end: null });

const MIN = new Date();
const MAX = new Date(2030, 9, 20);

const DateNow = new Date();
const presets = ref<Preset[]> ([
  {
    label: 'Last 7 days',
    start: getDateDaysAgo(7),
    end: DateNow,
  },
  {
    label: 'Last 30 days',
    start: getDateDaysAgo(30),
    end: DateNow,
    active: true,
  },
  {
    label: 'Last month',
    start: moveToMonth(new Date(), -1),
    end: new Date(DateNow.getFullYear(), DateNow.getMonth(), 0),
  },
  {
    label: 'Last 90 days',
    start: getDateDaysAgo(90),
    end: DateNow,
  },
  {
    label: 'Last 3 months',
    start: moveToMonth(DateNow, -3),
    end: new Date(DateNow.getFullYear(), DateNow.getMonth(), 0),
  },
]);
</script>

<template>
  <div class="container">
    <div class="row">
      <span class="title">Single date :</span>
      <DatePicker
        v-model="date"
        placeholder="Select date"
        locale="ar"
      />
    </div>
    <div class="row">
      <span class="title">Range date :</span>
      <DatePicker
        v-model:range="range"
        placeholder="Select dates"
        :close-on-select="false"
      />
    </div>
    <div class="row">
      <span class="title">Range date with presets :</span>
      <DatePicker
        v-model:range="rangePresets"
        v-model:presets="presets"
        placeholder="Select dates"
        :close-on-select="false"
      />
    </div>
    <div class="row">
      <span class="title">Range date with min and max :</span>
      <DatePicker
        v-model:range="rangeMinMax"
        :min-date="MIN"
        :max-date="MAX"
        placeholder="Select dates"
        :close-on-select="false"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 30px auto;
  gap: 40px;
}

.container .row {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.container .row .title {
  color: var(--gray-900);
  font: var(--text-md-medium);
}
</style>
