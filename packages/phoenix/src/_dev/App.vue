<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Dropdown } from '~/components';
import type { DropdownValue } from '~/components/DropdownV3/type';

const multiple = ref(null);
const single = ref(null);
const value = ref(null);

const items: Array<DropdownValue> = [
  { label: '+1 stars', key: 3, groupName: 'Rating' },
  { label: 'Visible', key: 2, groupName: 'Visibility' },
  { label: 'Hidden', key: 5, groupName: 'Visibility' },
  { label: '+3 stars', key: 4, groupName: 'Rating' },
  { label: '+4 stars', key: 1, groupName: 'Rating' },
];

const singleItems: Array<DropdownValue> = [
  { label: 'Shoes', key: 1 },
  { label: 'Cosmetics', key: 2 },
  { label: 'Gym', key: 3 },
];

const languages: Array<DropdownValue> = [
  { label: 'Arabic', key: 1 },
  { label: 'English', key: 2 },
  { label: 'German', key: 3 },
];
</script>

<template>
  <div class="container">
    <div>
      <span>Default Dropdown : </span>
      <Dropdown v-model="value" :items="languages" placeholder="Select item" />
    </div>
    <div>
      <span>Multiple Dropdown : </span>
      <Dropdown v-model="multiple" :items="items" multiple placeholder="Select items" />
    </div>
    <div>
      <span>Single Dropdown :</span>
      <Dropdown v-model="single" :items="singleItems" placeholder="Select item" />
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
~/components/Dropdown/type
