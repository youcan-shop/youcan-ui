<script setup lang="ts">
import { computed, defineEmits, reactive, ref, useSlots, watch, watchEffect } from 'vue';
import YInput from '~/components/YInput/Yinput.vue';
import YSelectOption from '~/components/YSelect/YSelectOption.vue';
import { type GroupSelectItem, type SelectItem } from '~/components/YGroupSelect/groupSelect.types';
import { launder } from '~/utils/type.util';

const props = defineProps<{
  selectedItem: GroupSelectItem | null
  items: GroupSelectItem[]
}>();

const emit = defineEmits(['selectOption']);
const options = reactive(props.items);
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

watch(searchValue, () => findOptions(options, searchValue.value));

const selectOption = (value: unknown) => {
  emit('selectOption', value);
};
</script>

<template>
  <div class="menu">
    <div class="search">
      <YInput
        v-model="searchValue" input-type="text" input-icon="i-tabler-search" placeholder="Search..."
        :can-reset="true"
      />
    </div>
    <div v-show="!isSearching" class="menu-options">
      <template v-for="(option, index) in options">
        <YSelectOption v-if="!hasSubItems(option)" :key="index" v-model="options[index]" :selected="selectedItem?.value === option.value" @click="selectOption">
          <template v-if="option.icon" #icon>
            <i :class="`${option.icon}`" />
          </template>
          {{ option.label }}
        </YSelectOption>
      </template>
    </div>
    <div v-show="isSearching" class="menu-options">
      <div v-show="searchItems.options.length === 0" class="search-placeholder">
        <span>placeholder</span>
      </div>
      <template v-for="(option, index) in searchItems.options">
        <YSelectOption v-if="!hasSubItems(option)" :key="index" v-model="searchItems.options[index]" :selected="selectedItem?.value === option.value" @click="selectOption">
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
