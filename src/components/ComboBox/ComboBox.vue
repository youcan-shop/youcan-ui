<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { onClickOutside } from '@vueuse/core';
import SelectMenu from '~/components/_Select/SelectMenu.vue';
import type { SelectItem } from '~/components/_Select/types';
import TextInput from '~/components/TextInput/TextInput.vue';

const { modelValue = '', items } = defineProps<{
  items: SelectItem[]
  modelValue: string
  placeholder?: string
}>();

const emit = defineEmits(['update:modelValue']);

const selected = ref(modelValue);
const selectedItem = ref<SelectItem>();
const shown = ref(false);
const filteredItems = ref(items);
const refreshInputKey = ref(0);

const toggleMenu = (state: boolean) => shown.value = state;

const itemSelected = (item: SelectItem | undefined): void => {
  if (!item) {
    return;
  }

  selectedItem.value = item;
  selected.value = item.label;
  emit('update:modelValue', selectedItem.value.value);

  toggleMenu(false);
};

watchEffect(() => selectedItem.value = items.find(item => item.value === selected.value));

const filter = (term: string) => {
  filteredItems.value = items.filter((item) => {
    return item.label.includes(term) || item.value.includes(term);
  });
};

const _dropdown_trigger = ref();
onClickOutside(_dropdown_trigger, () => {
  refreshInputKey.value++;
  filteredItems.value = items;

  toggleMenu(false);
});
</script>

<template>
  <div class="dropdown">
    <div ref="_dropdown_trigger" class="input-container">
      <TextInput
        :key="refreshInputKey" :model-value="selected" class="input"
        :placeholder="placeholder || 'Search items'" @update:model-value="filter" @focus="toggleMenu(true)"
      />
      <div class="icon-container">
        <i class="icon" :class="[shown ? 'i-tabler:chevron-up' : 'i-tabler:chevron-down']" />
      </div>
    </div>
    <SelectMenu
      v-show="shown" class="items-menu" :model-value="selectedItem" :items="filteredItems"
      @update:modelValue="itemSelected"
    />
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
