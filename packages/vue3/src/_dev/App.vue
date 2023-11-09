<script setup lang="ts">
import { ref } from 'vue';
import { DateInput } from '~/components';

const defaultStartDate = new Date();
const defaultEndDate = new Date();

const dateRange = ref<Date>(defaultStartDate);
</script>

<template>
  <div class="picker-container">
    <DateInput v-model="dateRange" is-single />
  </div>
</template>

<style scoped>
.picker-container {
  z-index: 1;
}
</style>
