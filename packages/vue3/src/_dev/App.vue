<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Slider, Spinner, StaticStatus } from '~/components';
import type { StaticStatusDefinition } from '~/components/Status/types';

const value = ref(100);
const fruits: StaticStatusDefinition[] = [
  {
    color: '#ffdecb',
    label: 'Peach 🍑',
    labelColor: '#35192b',
  },
  {
    color: '#fffad2',
    label: 'Banana 🍌',
    labelColor: '#555022',
  },
  {
    color: '#cbffd3',
    label: 'Kiwi 🥝',
    labelColor: '#2c4730',
  },
];
</script>

<template>
  <div class="container">
    <Slider
      v-model="value"
      suffix=""
      :max="500"
      :min="0"
    />
    <Spinner
      color="var(--brand-500)"
      size="40px"
      label=""
    />
    <StaticStatus v-for="fruit in fruits" :key="fruit.color" :status="fruit" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 10%;
}
</style>
