<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import Dropdown from '~/components/Dropdown-V3/Dropdown.vue';
import type { DropdownItemType } from '~/components/Dropdown-V3/type';

const model = ref(null);
const multiple = ref(true);

const items: Array<DropdownItemType> = [
  { label: '+1 stars', key: 3,groupName: 'Rating' },
  { label: 'Visible', key: 2, groupName: 'Visibility' },
  { label: 'Hidden', key: 3, groupName: 'Visibility' },
  { label: '+3 stars', key: 4 ,groupName: 'Rating' },
  { label: '+4 stars', key: 1, groupName: 'Rating' },
];
</script>

<template>
  <div class="container">
    <div>
      <Dropdown v-model="model" :items="items" :multiple="multiple" placeholder="Select language" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  gap: 8px;
}

.container > div {
  width: 500px;
}
</style>
