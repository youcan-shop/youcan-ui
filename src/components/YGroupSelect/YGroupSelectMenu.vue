<script setup lang="ts">
import { computed, reactive, ref, useSlots, watch, watchEffect } from 'vue';
import { useArrayFilter } from '@vueuse/core';
import YInput from '~/components/YInput/Yinput.vue';
import YButton from '~/components/YButton/YButton.vue';
import YSelectOption from '~/components/YSelect/YSelectOption.vue';
import { type GroupSelectItem, type SelectItem } from '~/components/YGroupSelect/groupSelect.types';
import { launder } from '~/utils/type.util';

const { selectedIndex = null, items = [] } = defineProps<{
  selectedIndex?: number | null
  items: GroupSelectItem[]
}>();

const selectedOption = ref(selectedIndex !== null ? items[selectedIndex] : null);
const searchValue = ref('');
const isSearching = computed(() => searchValue.value.length > 0);

const hasSubItems = (option: GroupSelectItem): Boolean => {
  return typeof option.subItems !== 'undefined' && option.subItems.length > 0;
};

const searchItems = ref({
  term: '',
  options: [] as GroupSelectItem[],
});
const findOptions = (options: GroupSelectItem[] | SelectItem[], searchTerm: string): void => {
  searchItems.value.options = [];
  searchItems.value.term = searchTerm;

  options.forEach((option: GroupSelectItem | SelectItem) => {
    const matchingItems = [];

    if (option.label.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
      matchingItems.push(option);
    }

    if (hasSubItems(option)) {
      findOptions(launder<GroupSelectItem>(option).subItems!, searchTerm);
    }

    searchItems.value.options.push(...matchingItems);
  });
};

watch(searchValue, () => findOptions(items, searchValue.value));

const hello = (value: string) => {
  console.log(value);
};
</script>

<template>
  <div class="menu">
    <div class="search">
      <YInput
        v-model="searchValue"
        input-type="text"
        input-icon="i-tabler-search"
        placeholder="Search..."
        :can-reset="true"
      />
    </div>
    <div class="menu-options">
      <template v-for="(option, index) in items">
        <YSelectOption v-if="!hasSubItems(option)" :key="index" v-model="option.value" @click="hello">
          <template v-if="option.icon" #icon>
            <i :class="`${option.icon}`" />
          </template>
          {{ option.label }}
        </YSelectOption>
      </template>
    </div>
  </div>
</template>

<style scoped>
  .menu {
    display: flex;
    flex-direction: column;
    background-color: var(--Base-White);
    border-radius: 8px;
    border: 1px solid var(--StormGray-100);
  }

  .search {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px;
    border-bottom: 1px solid var(--StormGray-100);
  }

  .menu-options {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 4px;
    max-height: 196px;
    overflow-y: auto;
  }
</style>
