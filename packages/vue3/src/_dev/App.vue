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
