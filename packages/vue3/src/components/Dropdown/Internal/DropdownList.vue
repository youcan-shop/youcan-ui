<script setup lang="ts">
import { computed, ref } from 'vue';

import type { DropdownItemArray, DropdownItemGroups } from '../types';

import DropdownItem from './DropdownItem.vue';
import { Input } from '~/components';

const props = withDefaults(
  defineProps<{
    items: DropdownItemArray | DropdownItemGroups
    searchable?: boolean
    multiple?: boolean
  }>(),
  {
    searchable: false,
    multiple: false,
  },
);

const search = ref<string>('');

function matches(haystack: string, needle: string) {
  return haystack.toLowerCase().includes(needle.toLowerCase());
}

const results = computed<DropdownItemArray | DropdownItemGroups>(() => {
  if (!search.value) {
    return props.items;
  }

  if (Array.isArray(props.items)) {
    return props.items.filter(item => matches(item.label, search.value));
  }

  return Object.fromEntries(
    Object.entries(props.items)
      .map(([label, group]) => [
        label,
        group.filter(item => matches(item.label, search.value)),
      ])
      .filter(([, group]) => group.length),
  );
});
</script>

<template>
  <div :class="{ searchable }" class="dropdown-list">
    <div v-if="searchable" class="search">
      <input v-model="search" type="text" placeholder="Search..">
    </div>

    <!-- item array -->
    <div v-if="Array.isArray(results)" class="inner">
      <DropdownItem
        v-for="item in results"
        :key="item.value"
        :checkbox="multiple"
        :item="item"
        :selected="false"
      />
    </div>

    <!-- categorized items -->
    <div v-else-if="Object.entries(results).length" class="inner">
      <div v-for="[label, group] in Object.entries(results)" :key="label">
        <div class="title">
          {{ label }}
        </div>
        <div class="array-list">
          <DropdownItem
            v-for="item in group"
            :key="item.value"
            :checkbox="multiple"
            :selected="false"
            :item="item"
          />
        </div>
      </div>
    </div>

    <div v-else class="no-results">
      No results were found
    </div>
  </div>
</template>

<style scoped>
.dropdown-list {
  padding: 8px 0;
  overflow-x: auto;
  position: relative;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--gray-100);
  background-color: var(--base-white);
}

.dropdown-list .inner {
  --max-height: 240px;

  max-height: var(--max-height);
  overflow-y: auto;
}

.dropdown-list.searchable {
  padding-top: 0;
}

.search {
  top: 0;
  left: 0;
  position: sticky;
  padding-top: 4px;
  background: var(--base-white);
}

.search input {
  width: 100%;
  border: none;
  outline: none;
  padding: 10px 16px;
  font: var(--text-sm-regular);
  border-bottom: 1px solid var(--brand-500);
}

.search::placeholder {
  color: var(--gray-300);
}

.inner .title {
  padding: 6px 16px;
  font: var(--text-sm-medium);
}

.no-results {
  padding: 10px 16px;
  color: var(--gray-500);
  font: var(--text-sm-regular);
}
</style>
