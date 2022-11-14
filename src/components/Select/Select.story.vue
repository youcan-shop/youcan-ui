<script setup lang="ts">
import Dropdown from './Select.vue';

const items = [{ label: 'Test 1' }, { label: 'Test 2', icon: 'i-tabler:home' }];
</script>

<template>
  <Story>
    <Dropdown :items="items" />
  </Story>
</template>
