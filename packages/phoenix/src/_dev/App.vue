<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { DatePicker } from '~/components';

const date = ref(new Date('10/2/2023'));
</script>

<template>
  <div class="container">
    <DatePicker v-model="date" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  max-width: 500px;
  margin: 30px auto;
}
</style>
