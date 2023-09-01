<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import DropDown from '~/components/DropDown/DropDown.vue';

const items = [
  { label: 'Shoes', value: 1 },
  { label: 'Cosmetics', value: 2 },
  { label: 'Gym', value: 3 },
];

const category = ref(null);
const search = ref('');
</script>

<template>
  <div>
    <div style="padding: 5rem;background: red;">
      {{ search }}
    </div>
    <DropDown
      v-model="category"
      searchable="async"
      :items="items"
      placeholder="Select category"
      @search="(s) => search = s"
    />
  </div>
</template>
