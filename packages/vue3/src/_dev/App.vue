<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { EditableStatus } from '~/components';
import type { StatusDefinition } from '~/components/Status/types';

const fruits: StatusDefinition[] = [
  {
    color: '#ffdecb',
    label: 'Peach 🍑',
    labelColor: 'red',
    value: 'peach',
  },
  {
    color: '#fffad2',
    label: 'Banana 🍌',
    labelColor: 'orange',
    value: 'banana',
  },
  {
    color: '#cbffd3',
    label: 'Kiwi 🥝',
    labelColor: 'green',
    value: 'kiwi',
  },
];
const favoriteFruit = ref(fruits[0]);
</script>

<template>
  <EditableStatus v-model="favoriteFruit" :statuses="fruits" />
</template>

<style scoped>
.container {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  min-height: 140px;
}

.file-input {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
