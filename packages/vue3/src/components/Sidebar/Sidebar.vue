<script setup lang="ts">
import { ref } from 'vue';

const collapsed = ref(false);
const toggle = (override = !collapsed.value) => collapsed.value = override;
</script>

<template>
  <aside class="sidebar" :class="{ collapsed }">
    <div class="sidebar-header">
      <button class="item-icon" @click="() => toggle()">
        <i i-youcan-sidebar-collapse />
      </button>
      <div class="item-label">
        <slot name="header" />
      </div>
    </div>

    <div class="sidebar-items upper">
      <slot name="items" />
    </div>

    <div class="sidebar-items lower">
      <slot name="lower-items" />
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  --sidebar-width: 230px;
  --sidebar-height: 100vh;

  display: flex;
  flex-direction: column;
  width: var(--sidebar-width);
  height: var(--sidebar-height);
  background-color: var(--gray-800);
}

.sidebar-header {
  gap: 12px;
  height: 64px;
  display: flex;
  padding: 0 12px;
  align-items: center;
  font: var(--text-lg-medium);
  border-bottom: 1px solid var(--gray-700);
}

.sidebar-header:hover {
  background-color: var(--gray-700);
}

.sidebar-header:active {
  background-color: var(--gray-600);
}

.sidebar-items.lower {
  margin-top: auto;
}

.item-label,
:deep(.item-label) {
  color: var(--base-white);
  font: var(--text-sm-medium);
}

.item-icon,
:deep(.item-icon) {
  color: var(--gray-100);
  outline: none;
}

.sidebar-header .item-label {
  font: var(--text-lg-medium);
}

.sidebar-header .item-icon {
  padding: 0;
  border: none;
  cursor: pointer;
  background-color: transparent;
}

/* collapsed */

.sidebar.collapsed {
  width: fit-content;
}

.sidebar.collapsed .item-label,
.sidebar.collapsed:deep(.item-label),
.sidebar.collapsed:deep(.sidebar-subitem),
.sidebar.collapsed:deep(.expand-icon) {
  display: none;
}
</style>