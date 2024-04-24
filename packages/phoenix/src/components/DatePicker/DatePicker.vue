<script setup lang="ts">
import { Button, Calendar } from '~/components';
</script>

<template>
  <div class="date-picker">
    <Button variant="secondary" class="picker-output">
      <span class="input-value" />
      <i class="i-youcan:calendar-blank" />
    </Button>
    <div class="calendar-wrap">
      <Calendar />
    </div>
  </div>
</template>

<style scoped>
  .date-picker {
    box-sizing: border-box;
    width: 100%;
  }

  .date-picker .picker-output {
    width: 100%;
    padding: 12px 16px;
  }

  .date-picker .picker-output:deep(.label) {
    width: 100%;
  }

  .date-picker .picker-output .input-value {
    flex: 1;
    color: var(--gray-900);
    font: var(--text-sm-regular);
  }
</style>
