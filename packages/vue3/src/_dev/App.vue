<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Dropdown } from '~/components';
const category = ref(null);

const items = [
  { label: 'Shoes', value: 1 },
  { label: 'Cosmetics', value: 2 },
  { label: 'Gym', value: 3 },
];
</script>

<template>
  <Dropdown
    v-model="category"
    searchable
    :items="items"
    placeholder="Select category"
  />
</template>
