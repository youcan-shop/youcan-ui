<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { DatePicker } from '~/components';
import type { DateRangeValue, DateValue, Preset } from '~/types';

const date = ref<DateValue>(null);
const range = ref<DateRangeValue>({ start: null, end: null });

function DatesDiff(days: number) {
  return new Date(new Date().getTime() - days * 24 * 60 * 60 * 1000);
}

const presets: Preset[] = [
  { label: 'Last 7 days', from: DatesDiff(7), to: new Date() },
  { label: 'Last 30 days', from: DatesDiff(30), to: new Date() },
  { label: 'Last 90 days', from: DatesDiff(90), to: new Date() },
];
</script>

<template>
  <div class="container">
    <DatePicker v-model="date" placeholder="Select date" />
    <DatePicker v-model:range="range" :presets="presets" placeholder="Select dates" :close-on-select="false" />
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
