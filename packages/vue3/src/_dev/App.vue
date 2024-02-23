<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Slider } from '~/components';
import type { RangeValue } from '~/types';

const value = ref(2000);
const rangeValue = ref<RangeValue>({ min: 200, max: 500 });
</script>

<template>
  <div class="container">
    <div>
      <Slider
        v-model="rangeValue"
        suffix=""
        :max="2000"
        :min="200"
        type="range"
      />
      <div>min : {{ rangeValue.min }}  ==> max: {{ rangeValue.max }}</div>
      <Slider
        v-model="value"
        suffix=""
        :max="2000"
        :min="200"
      />
      <div>{{ value }}</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}

.container > div {
  display: flex;
  flex-direction: column;
  width: 450px;
  gap: 30px;
}

.container > div > div {
  font: var(--text-sm-medium);
}
</style>
