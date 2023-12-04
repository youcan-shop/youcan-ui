<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { DateInput } from '~/components';
import type { DateInputValue } from '~/components/DateInput/types';

const defaultStartDate = new Date();
const defaultEndDate = new Date('12/24/2023');

const dateRange = ref<DateInputValue>({ start: defaultStartDate, end: defaultEndDate });
</script>

<template>
  <div class="picker-container">
    <DateInput v-model="dateRange" />
  </div>
</template>

<style scoped>
.picker-container {
  z-index: 1;
}
</style>
