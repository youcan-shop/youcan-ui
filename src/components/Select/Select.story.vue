<script setup lang="ts">
import Select from './Select.vue';
const value = [{ label: 'Test 1' }, { label: 'Test 2', icon: 'i-tabler:home' }];
</script>

<template>
  <Story>
    <Select
      v-model="value"
    />
  </Story>
</template>
