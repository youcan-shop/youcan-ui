<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Slider } from '~/components';

const value = ref(50);
</script>

<template>
  <div class="container">
    <Slider v-model="value" :min="-100" :max="500" />

    <div>{{ value }}</div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  height: 100vh;
  margin: auto;
}

p {
  margin-bottom: 0;
  color: var(--gray-600);
  font: var(--text-sm-regular);
}
</style>
