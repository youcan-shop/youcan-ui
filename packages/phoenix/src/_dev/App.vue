<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Status } from '~/components';
import type { StatusObject } from '~/components/Status/types';

const staticFruit = ref<StatusObject>({
  color: '#fffad2',
  label: 'Banana 🍌',
  labelColor: '#555022',
});

const fruits = [
  {
    color: '#ffdecb',
    label: 'Peach 🍑',
    labelColor: '#35192b',
    value: 'peach',
  },
  {
    color: '#fffad2',
    label: 'Banana 🍌',
    labelColor: '#555022',
    value: 'banana',
  },
  {
    color: '#cbffd3',
    label: 'Kiwi 🥝',
    labelColor: '#2c4730',
    value: 'kiwi',
  },
];

const favoriteFruit = ref<StatusObject>(fruits[0]);
</script>

<template>
  <div class="container">
    <!-- Single status badge -->
    <Status :status="staticFruit" />

    <!-- Dropdown of badges -->
    <Status v-model="favoriteFruit" :status="fruits" :editable="true" />
    {{ favoriteFruit }}
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
  gap: 0.5rem;
}
</style>
