<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import Dropdown from '~/components/Dropdown-V3/Dropdown.vue';
import type { DropdownItemType } from '~/components/Dropdown-V3/type';

const model = ref(null);
const multiple = ref(false);

const items: Array<DropdownItemType> = [
  { label: 'Arabic', key: 1, groupName: 'test' },
  { label: 'French', key: 2, groupName: 'te' },
  { label: 'English', key: 3 },
  { label: 'Arabic', key: 4 ,groupName: 'test' },
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
