<script lang="ts" setup>
import { Days, MonthsSwitcher } from './Internal';
</script>

<template>
  <div class="calendar">
    <MonthsSwitcher />
    <Days />
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
