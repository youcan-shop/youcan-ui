<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Slider } from '~/components';
import type { RangeValue } from '~/types';
const value = ref(300);
const rangeValue = ref<RangeValue>({ min: 300, max: 500 });
</script>

<template>
  <div class="container">
    <Slider
      v-model="value"
      :max="2000"
      :min="200"
    />

    <Slider
      v-model="rangeValue"
      :max="2000"
      :min="200"
      type="range"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  height: 100vh;
  margin: auto;
  padding: 0 40px;
  gap: 40px;
}
</style>
