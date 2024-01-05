<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { DateInput, Divider } from '~/components';
import type { DateInputValue } from '~/components/DateInput/types';

const defaultStartDate = new Date();
const defaultEndDate = new Date();

const dateRange = ref<DateInputValue>({ start: defaultStartDate, end: defaultEndDate });
</script>

<template>
  <div class="container">
    <Divider />
    <DateInput v-model="dateRange" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  margin: 10%;
  gap: 30px;
}
</style>
