<script setup lang="ts">
import type { DropdownItemArray, DropdownItemDefinition, DropdownItemGroups } from '../types';
import DropdownItem from './DropdownItem.vue';

const props = defineProps<{ items: DropdownItemArray | DropdownItemGroups }>();
</script>

<template>
  <div class="dropdown-list">
    <!-- item array -->
    <div v-if="Array.isArray(items)" class="array-list">
      <DropdownItem v-for="item in items" :key="item.value" :item="item" :selected="false" />
    </div>

    <!-- categorized items -->
    <div v-else class="grouped-list">
      <div v-for="[label, group] in Object.entries(items)" :key="label">
        <div>{{ label }}</div>
        <div class="array-list">
          <DropdownItem v-for="item in group" :key="item.value" :item="item" :selected="false" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown-list {
    --max-height: 240px;

    padding: 8px 0;
    background-color: var(--base-white);
    border: 1px solid var(--gray-100);
    box-shadow: var(--shadow-md);
    max-height: var(--max-height);
    border-radius: 8px;
    overflow-x: auto;
}
</style>
