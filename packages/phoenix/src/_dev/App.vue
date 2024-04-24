<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { DatePicker } from '~/components';
</script>

<template>
  <div class="container">
    <DatePicker />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  max-width: 500px;
  margin: 30px auto;
}
</style>
