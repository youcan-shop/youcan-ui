<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue';
import type { DropdownItemArray, DropdownItemDefinition, DropdownItemGroups } from './types';
import DropdownItem from './Internal/DropdownItem.vue';
import { searchHandler } from './helpers';
import { Spinner } from '~/components';

const props = withDefaults(
  defineProps<{
    selected: DropdownItemArray | DropdownItemDefinition | null
    items: DropdownItemArray | DropdownItemGroups
    searchable?: boolean
    loading?: boolean
    multiple?: boolean
    show?: boolean
    searchHandler?: (searchTerm: string, items?: DropdownItemArray | DropdownItemGroups) => void
  }>(),
  {
    searchable: false,
    multiple: false,
    searchHandler,
  },
);

const emit = defineEmits(['toggle', 'select', 'endOfScroll']);

const searchTerm = ref<string>('');
const searchInput = ref();

const search = computed<string>({
  get: () => searchTerm.value,
  set: (value: string) => {
    searchTerm.value = value.trim();
    props.searchHandler(value.trim(), props.items);
  },
});

const results = computed<DropdownItemArray | DropdownItemGroups>(() => {
  const data = props.searchHandler(search.value.trim(), props.items);

  if (Array.isArray(data)) {
    return data;
  }

  return props.items;
});

function isSelected(item: DropdownItemDefinition): boolean {
  if (props.selected == null) {
    return false;
  }

  return Array.isArray(props.selected)
    ? !!props.selected.find(s => s.value === item.value)
    : props.selected.value === item.value;
}

function toggle(item: DropdownItemDefinition, value: boolean): void {
  if (props.multiple) {
    return emit('toggle', item, value);
  }
  value && emit('select', item);
}

const handleScroll = async (event: Event) => {
  const e = event.target as HTMLElement;
  const scrollHeight = e.scrollHeight;
  const scrollTop = e.scrollTop;
  const clientHeight = e.clientHeight;
  if (scrollTop + clientHeight >= scrollHeight) {
    emit('endOfScroll');
  }
};

watch(() => props.show, (newValue) => {
  if (newValue && searchInput.value) {
    nextTick(() => {
      searchInput.value.focus();
    });
  }
});
</script>

<template>
  <div :class="{ searchable }" class="dropdown-list">
    <div v-if="searchable" class="search">
      <input ref="searchInput" v-model="search" type="text" placeholder="Search..">
    </div>

    <div class="inner" @scroll="handleScroll">
      <!-- item array -->
      <template v-if="Array.isArray(results)">
        <DropdownItem
          v-for="item in results" :key="item.value" :checkbox="multiple" :item="item"
          :selected="isSelected(item)" @toggle="(value:boolean) => toggle(item, value)"
        >
          <slot name="accessory" v-bind="item" />
        </DropdownItem>
      </template>

      <!-- categorized items -->
      <template v-else-if="Object.entries(results).length">
        <div v-for="[label, group] in Object.entries(results)" :key="label">
          <div class="title">
            {{ label }}
          </div>
          <div class="array-list">
            <DropdownItem
              v-for="item in group" :key="item.value" :checkbox="multiple" :selected="isSelected(item)"
              :item="item" @toggle="(value:boolean) => toggle(item, value)"
            >
              <slot name="accessory" v-bind="item" />
            </DropdownItem>
          </div>
        </div>
      </template>

      <div v-else class="no-results">
        No results were found
      </div>
      <div v-if="loading" class="loading">
        <Spinner size="15px" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown-list {
  position: relative;
  box-sizing: border-box;
  min-width: fit-content;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-md);
}

.dropdown-list .inner {
  min-height: 10px;
  max-height: 240px;
  padding: 8px 0;
  padding-bottom: 20px;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 8px;
  box-shadow: var(--shadow-md-gray);
  text-overflow: ellipsis;
  white-space: nowrap;
  scrollbar-width: thin;
  scrollbar-color: var(--brand-500) transparent;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: var(--brand-500);
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: var(--brand-500);
  }
}

.dropdown-list.searchable {
  padding-top: 0;
}

.search {
  position: sticky;
  top: 0;
  left: 0;
  padding-top: 4px;
  background-color: transparent;
}

.search input {
  box-sizing: border-box;
  width: 100%;
  padding: 10px 16px;
  border: none;
  border-bottom: 1px solid var(--gray-200);
  outline: none;
  font: var(--text-sm-regular);
}

.search::placeholder {
  color: var(--gray-300);
}

.inner .title {
  padding: 6px 16px;
  color: var(--gray-900);
  font: var(--text-sm-medium);
}

.no-results {
  padding: 10px 16px;
  color: var(--gray-500);
  font: var(--text-sm-regular);
}

.loading {
  display: flex;
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 10px;
  justify-content: center;
  width: calc(100% - 20px);
  margin: 0 auto;
  padding: 7px 0;
  background-image: linear-gradient(to top, var(--base-white), rgb(255 255 255 / 50%), transparent);
}
</style>
