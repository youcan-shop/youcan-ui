<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import SelectButton from '~/components/_Select/SelectButton.vue';
import SelectMenu from '~/components/_Select/SelectMenu.vue';
import type { SelectItem } from '~/components/_Select/types';
import TextInput from '~/components/TextInput/TextInput.vue';

const { modelValue = '', items } = defineProps<{
  items: SelectItem[]
  modelValue: string | undefined
  placeholder?: string
}>();

const emit = defineEmits(['update:modelValue']);

const selected = ref(modelValue);
const selectedItem = ref<SelectItem>();
const shown = ref(false);
const filteredItems = ref(items);

const toggleMenu = (state: boolean) => {
  shown.value = state;
};

const itemSelected = (item: SelectItem | undefined): void => {
  if (!item) {
    return;
  }

  selectedItem.value = item;
  emit('update:modelValue', selectedItem.value.value);

  toggleMenu(false);
};

watchEffect(() => selectedItem.value = items.find(item => item.value === selected.value));

const filter = (term: string) => {
  selected.value = term;

  filteredItems.value = items.filter((item) => {
    return item.label.includes(term) || item.value.includes(term);
  });
};
</script>

<template>
  <div class="dropdown">
    <div class="input-container">
      <TextInput :model-value="selected" class="input" :placeholder="placeholder || 'Search items'"
        @update:model-value="filter" @focus="toggleMenu(true)" @blur="toggleMenu(false)" />
      <div class="icon-container">
        <i class="icon" :class="[shown ? 'i-tabler:chevron-up' : 'i-tabler:chevron-down']" />
      </div>
    </div>
    <SelectMenu v-show="shown" class="items-menu" :model-value="selectedItem" :items="filteredItems"
      @update:modelValue="itemSelected" />
  </div>
</template>

<style scoped>
.dropdown {
  display: flex;
  flex-direction: column;
  gap: 7px;
  max-width: 460px;
}

.input-container {
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02);
}

.icon-container {
  position: absolute;
  right: 16px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-400);
}

.items-menu {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02), 0px 4px 4px rgba(0, 0, 0, 0.02);
}
</style>
