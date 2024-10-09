<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { DatePicker } from '~/components';

const date = ref(null);
</script>

<template>
  <DatePicker v-model="date" always-show-calender :close-on-select="false" />
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 0 auto;
  gap: 10px;
  padding: 10px;
}
</style>
