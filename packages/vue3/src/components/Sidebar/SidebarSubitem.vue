<script setup lang="ts">
defineProps<{ label: string; active?: boolean }>();
</script>

<template>
  <button class="sidebar-subitem" :class="{ active }">
    {{ label }}
  </button>
</template>

<style scoped>
.sidebar-subitem {
  padding: 4px 44px;
  border: none;
  background-color: transparent;
  color: var(--gray-100);
  font: var(--text-sm-regular);
  text-align: left;
  cursor: pointer;
}

.sidebar-subitem:is(:hover, :active, :focus) {
  outline: none;
  background-color: var(--gray-700);
}

.sidebar-subitem.active {
  color: var(--base-white);
  font: var(--text-sm-medium);
}
</style>
