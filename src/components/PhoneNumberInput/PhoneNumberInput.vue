<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import { onClickOutside } from '@vueuse/core';
import SelectMenu from '~/components/_Select/SelectMenu.vue';
import type { SelectItem } from '~/components/_Select/types';
import TextInput from '~/components/TextInput/TextInput.vue';

const { modelValue, dialCode, items, placeholder } = defineProps<{
  items: SelectItem[]
  dialCode: string
  modelValue: string
  placeholder?: string
}>();

const emit = defineEmits(['update:modelValue', 'update:dialCode']);

const searchTerm = ref(modelValue);
const selected = computed(() => dialCode);
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
  searchTerm.value = '';

  emit('update:dialCode', item.value);

  toggleMenu(false);
};

watchEffect(() => selectedItem.value = items.find(item => item.value === selected.value));

const filterOrEmitUpdate = (term: string) => {
  term = term.toLowerCase();
  filteredItems.value = items.filter((item) => {
    return item.label.toLowerCase().includes(term) || item.value.toLowerCase().includes(term);
  });

  if (selectedItem.value) {
    emit('update:modelValue', term);
  }
};

const _dropdown_trigger = ref();
onClickOutside(_dropdown_trigger, () => {
  filteredItems.value = items;
  if (searchTerm.value !== '') {
    refreshInputKey.value++;
  }

  toggleMenu(false);
});
</script>

<template>
  <div class="dropdown">
    <div ref="_dropdown_trigger" class="handler">
      <div class="trigger" @click="toggleMenu(!shown)">
        <span class="text">{{ selectedItem?.value || 'unknown' }}</span>
        <i class="icon" :class="[shown ? 'i-tabler:chevron-up' : 'i-tabler:chevron-down']" />
      </div>
      <div class="input-container">
        <TextInput
          :key="refreshInputKey" :model-value="searchTerm" class="input"
          :placeholder="placeholder || 'Search by country or dialing code'" @update:model-value="filterOrEmitUpdate"
          @focus="!selectedItem?.value && toggleMenu(true)"
        />
      </div>
    </div>
    <SelectMenu
      v-show="shown" class="items-menu" :model-value="selectedItem" :items="items"
      @update:modelValue="itemSelected"
    />
  </div>
</template>

<style lang="scss" scoped>
.handler {
  display: grid;
  grid-template-columns: auto 1fr;
  box-shadow: 0px 4px 4px var(--black-700);
  border: 1px solid var(--border-color);
  border-radius: 8px;

  &:hover {
    border: 1px solid var(--gray-200);

    .trigger {
      background-color: var(--gray-20);
    }
  }

  &:focus-within {
    border: 1px solid var(--primary-color);
  }

  .trigger {
    display: flex;
    align-items: center;
    gap: 4px;
    background-color: white;
    padding: 0 12px;
    border-radius: 8px 0px 0px 8px;
    border-right: 1px solid var(--border-color);

    [dir='rtl'] & {
      border-radius: 0 8px 8px 0;
      border-right: unset;
      border-left: 1px solid var(--border-color);
    }

    &:hover {
      border-color: var(--gray-200);
    }

    .text {
      font-size: 14px;
      color: var(--gray-700);
    }

    .icon {
      color: var(--gray-400);
    }
  }

  .input-container {
    .input {
      border-width: 0;

      &:focus {
        border-color: var(--border-color);
      }
    }
  }
}

.dropdown {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.items-menu {
  box-shadow: 0px 4px 4px var(--black-700), 0px 4px 4px var(--black-700);
}
</style>
