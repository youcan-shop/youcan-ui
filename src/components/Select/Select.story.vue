<script setup lang="ts">
import Select from './Select.vue';

const items = [{ label: 'Test 1' }, { label: 'Test 2', icon: 'i-tabler:home' }];
</script>

<template>
  <Story>
    <Select
      :items="items"
    />
  </Story>
</template>
