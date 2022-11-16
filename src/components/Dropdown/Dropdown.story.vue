<script setup lang="ts">
import { ref } from 'vue';
import Dropdown from './Dropdown.vue';

const items = [{ label: 'Test 1', value: 't1' }, { label: 'Test 2', icon: 'i-tabler:home', value: 't2' }];
const selectedItem = ref();
</script>

<template>
  <Story>
    <Dropdown v-model="selectedItem" :items="items" />
  </Story>
</template>
