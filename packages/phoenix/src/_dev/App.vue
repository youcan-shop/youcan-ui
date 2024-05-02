<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { DatePicker } from '~/components';
import type { DateRangeValue } from '~/types';

const range = ref<DateRangeValue>({ start: null, end: null });
</script>

<template>
  <div class="container">
    <DatePicker v-model:range="range" />
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
