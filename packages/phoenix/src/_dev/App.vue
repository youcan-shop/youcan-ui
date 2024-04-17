<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import Dropdown from '~/components/DropdownV3/Dropdown.vue';
import type { DropdownItemType } from '~/components/DropdownV3/type';

const multiple = ref(null);
const single = ref(null);
const value = ref(null);

const items: Array<DropdownItemType> = [
  { label: '+1 stars', key: 3, groupName: 'Rating' },
  { label: 'Visible', key: 2, groupName: 'Visibility' },
  { label: 'Hidden', key: 5, groupName: 'Visibility' },
  { label: '+3 stars', key: 4, groupName: 'Rating' },
  { label: '+4 stars', key: 1, groupName: 'Rating' },
];

const defaultItems: Array<DropdownItemType> = [
  { label: '+1 stars', key: 3 },
  { label: 'Visible', key: 2 },
  { label: 'Hidden', key: 5 },
  { label: '+3 stars', key: 4 },
  { label: '+4 stars', key: 1 },
];
</script>

<template>
  <div class="container">
    <div>
      <span>Default Dropdown : </span>
      <Dropdown v-model="value" :items="defaultItems" placeholder="Select item" />
    </div>
    <div>
      <span>Multiple Dropdown : </span>
      <Dropdown v-model="multiple" :items="items" multiple placeholder="Select items" />
    </div>
    <div>
      <span>Single Dropdown :</span>
      <Dropdown v-model="single" :items="items" placeholder="Select item" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  gap: 30px;
}

.container > div {
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 10px;
}

.container > div span {
  margin: 0;
  color: var(--gray-900);
  font: var(--text-sm-medium);
}
</style>
