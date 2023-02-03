<script setup lang="ts">
defineProps<{ label: string; active?: boolean }>();
</script>

<template>
  <button type="button" class="sidebar-subitem" :class="{ active }">
    {{ label }}
  </button>
</template>

<style scoped>
.sidebar-subitem {
  border: none;
  cursor: pointer;
  text-align: left;
  padding: 4px 44px;
  color: var(--gray-100);
  font: var(--text-sm-regular);
  background-color: transparent;
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
