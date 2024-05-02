<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { DatePicker } from '~/components';
import type { DateRangeValue, DateValue } from '~/types';

const date = ref<DateValue>(null);
const range = ref<DateRangeValue>({ start: null, end: null });
</script>

<template>
  <div class="container">
    <DatePicker v-model="date" placeholder="Select date" />
    <DatePicker v-model:range="range" placeholder="Select dates" />
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
