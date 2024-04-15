<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import Dropdown from '~/components/Dropdown-V3/Dropdown.vue';
import type { DropdownItemType } from '~/components/Dropdown-V3/type';

const items: Array<DropdownItemType> = [
  { label: 'Arabic', value: 1 },
  { label: 'French', value: 2 },
  { label: 'English', value: 3 },
];
</script>

<template>
  <div class="container">
    <div>
      <Dropdown :items="items" placeholder="Select language" />
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
