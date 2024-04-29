<script lang="ts" setup>
import { ref } from 'vue';
import { Days, MonthsSwitcher } from './Internal';

const month = ref(new Date());
const date = ref(new Date());
</script>

<template>
  <div class="calendar">
    <MonthsSwitcher v-model="month" />
    <Days v-model="date" :month="month" />
  </div>
</template>

<style>
.calendar {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: max-content;
  max-width: 100%;
  padding: 12px;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  row-gap: 20px;
}
</style>
