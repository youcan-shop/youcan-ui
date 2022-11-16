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
    <TextInput :model-value="selected" class="input" :placeholder="placeholder || 'Search items'"
      @update:model-value="filter" @focus="toggleMenu(true)" @blur="toggleMenu(false)" />
    <SelectMenu v-show="shown" :model-value="selectedItem" :items="filteredItems" @update:modelValue="itemSelected" />
  </div>
</template>

<style scoped>
.dropdown-content {
  margin-top: 7px;
}

.input {
  max-width: 460px;
}
</style>
