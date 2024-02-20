<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Slider } from '~/components';
import type { RangeValue } from '~/types';

const value = ref(102980);
const rangeValue = ref<RangeValue>({ min: 40, max: 50 });
</script>

<template>
  <div class="container">
    <div>
      <Slider
        v-model="rangeValue"
        suffix=""
        :max="200000"
        :min="2000"
        type="range"
        disabled
      />
      <div>min : {{ rangeValue.min }}  ==> max: {{ rangeValue.max }}</div>
      <Slider
        v-model="value"
        suffix=""
        :max="200000"
        :min="2000"
        disabled
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
