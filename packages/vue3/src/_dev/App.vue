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
  <div class="container">
    <Dropdown
      v-model="category"
      searchable
      :items="items"
      placeholder="Select category"
    />
  </div>

  <div class="container" style="margin-top: calc(100vh - 200px);">
    <Dropdown
      v-model="category"
      searchable
      :items="items"
      placeholder="Select category"
    />
  </div>
</template>

<style scoped>
.container {
  max-width: 400px;
  margin: auto;
}
</style>
