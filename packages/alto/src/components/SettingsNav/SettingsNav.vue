<script setup lang="ts">
import { useSlots } from 'vue';

const slots = useSlots();
</script>

<template>
  <div class="settings-nav">
    <div v-if="slots.header" class="header">
      <slot name="header" />
    </div>

    <div class="items">
      <slot name="items" />
    </div>
  </div>
</template>

<style scoped>
.settings-nav {
  box-sizing: border-box;
  max-width: 240px;
  padding: 0 0 8px;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
}

.header {
  padding: 16px 8px 16px 20px;
  border-bottom: 1px solid var(--gray-200);
  font-weight: var(--text-md-medium);
}
</style>
