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
  box-sizing: border-box;
  padding: 5.5px 60px;
  border: none;
  background-color: transparent;
  color: var(--gray-400);
  font: var(--text-sm-regular);
  text-align: left;
  cursor: pointer;
}

.sidebar-subitem:first-child {
  margin-top: 8px;
}

.sidebar-subitem:last-child {
  margin-bottom: 8px;
}

.sidebar-subitem:is(:hover, :focus) {
  outline: none;
  color: var(--gray-200);
}

.sidebar-subitem.active {
  color: var(--gray-200);
  font: var(--text-sm-medium);
}
</style>
