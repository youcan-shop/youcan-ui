<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Slider } from '~/components';

const value = ref('85');
</script>

<template>
  <div class="container">
    <Slider v-model="value" :min="40" :max="2000" suffix="$" disabled />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  height: 100vh;
  margin: auto;
  column-gap: 30px;
}

p {
  margin-bottom: 0;
  color: var(--gray-600);
  font: var(--text-sm-regular);
}
</style>
