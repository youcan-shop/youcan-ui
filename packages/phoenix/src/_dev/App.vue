<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Progress, Slider } from '~/components';

const value = ref(0);
const maxValue = 2000;
</script>

<template>
  <div class="container">
    <Progress :value="value" :max-value="maxValue" />
    <Slider
      v-model="value"
      :max="maxValue"
      :min="0"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  margin: 30px auto;
  gap: 30px;
}
</style>
