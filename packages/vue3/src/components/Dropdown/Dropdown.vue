<script setup lang="ts">
import { computed, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import type { DropdownItemArray, DropdownItemDefinition, DropdownItemGroups } from './types';
import DropdownList from './DropdownList.vue';

const props = withDefaults(
  defineProps<{
    size?: 36 | 44
    icon?: string
    placeholder: string
    searchable?: boolean | 'async'
    modelValue: DropdownItemDefinition | null
    items: DropdownItemArray | DropdownItemGroups
    disabled?: boolean
  }>(),
  { searchable: false, size: 36, disabled: false },
);

const emit = defineEmits(['update:modelValue', 'search']);

const list = ref();
const button = ref();
const showList = ref(false);
const toggleList = (override = !showList.value) => showList.value = override;
onClickOutside(list, () => toggleList(false), { ignore: [button] });

const model = computed<DropdownItemDefinition | null>({
  get: () => props.modelValue,
  set: (item: DropdownItemDefinition | null) => {
    toggleList(false);
    emit('update:modelValue', item);
  },
});
</script>

<template>
  <div>
    <button ref="button" type="button" :class="[{ disabled }, `size-${size}`]" class="dropdown-input" @click="() => toggleList()">
      <i v-if="icon" class="icon" :class="icon" />
      <span class="label">
        {{ model?.label ?? placeholder }}
      </span>

      <i class="chevron i-youcan-carret-down" />
    </button>
    <div v-if="showList && !disabled" ref="list" class="dropdown-wrapper">
      <DropdownList
        class="dropdown-list" v-bind="{ items, searchable, selected: modelValue, multiple: false }"
        @select="(i) => model = i"
        @search="(s) => emit('search', s)"
      />
    </div>
  </div>
</template>

<style scoped>
.dropdown-input {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  border: 1px solid var(--gray-200);
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
  color: var(--gray-500);
  cursor: pointer;
  gap: 8px;
}

.dropdown-input.disabled {
  background-color: var(--gray-50);
  cursor: default;
}

.dropdown-input.size-36 {
  padding: 7.5px 12px;
  border-radius: 4px;
}

.dropdown-input.size-44 {
  padding: 11.5px 16px;
  border-radius: 8px;
}

.dropdown-input .label {
  overflow: hidden;
  color: var(--gray-900);
  font: var(--text-sm-regular);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dropdown-input:not(.disabled):hover {
  background-color: var(--gray-50);
}

.dropdown-input:not(.disabled):is(:focus, :active) {
  border: 1px solid var(--brand-500);
  outline: none;
  box-shadow: var(--focus-shadow-xs-brand);
}

.dropdown-input .chevron {
  margin-inline-start: auto;
}

.dropdown-wrapper {
  position: relative;
}

.dropdown-list {
  position: absolute;
  z-index: 10;
  top: 8px;
  width: 100%;
}
</style>
