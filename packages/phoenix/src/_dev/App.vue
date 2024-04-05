<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Progress, Slider } from '~/components';

const value = ref(600);
const maxValue = 2000;
</script>

<template>
  <div class="container">
    <label class="progress-type"> Progress circle :</label>
    <Progress :value="value" :max-value="maxValue" />
    <label class="progress-type"> Progress bar :</label>
    <Progress :value="value" :max-value="maxValue" progress-type="bar" />
    <div class="slider-holder">
      <Slider
        v-model="value"
        :max="maxValue"
        :min="0"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  margin: 30px auto;
  gap: 30px;
}

.progress-type {
  font: var(--text-md-medium);
}

.container .slider-holder {
  width: 100%;
  margin-top: 20px;
}
</style>
