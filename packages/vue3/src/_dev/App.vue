<script setup lang="ts">
import { ref } from 'vue';
import { DateInput } from '~/components';
import type { DateRangeValue } from '~/components/DateInput/types';

const defaultStartDate = new Date();
const defaultEndDate = new Date();

const dateRange = ref<DateRangeValue>({ start: defaultStartDate, end: defaultEndDate });

const date = ref<Date>(new Date());
</script>

<template>
  <div class="picker-container">
    <DateInput v-model="date" is-single />
  </div>
  <div class="picker-container">
    <DateInput v-model="dateRange" />
  </div>
</template>

<style scoped>
.picker-container {
  z-index: 1;
}
</style>
