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
    searchable?: boolean
    modelValue: DropdownItemDefinition | null
    items: DropdownItemArray | DropdownItemGroups
    type?: 'button' | 'submit' | 'reset'
  }>(),
  { searchable: false, size: 36 },
);

const emit = defineEmits(['update:modelValue']);

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
    <button ref="button" :type="type" :class="`size-${size}`" class="dropdown-input" @click="() => toggleList()">
      <i v-if="icon" class="icon" :class="icon" />
      <span class="label">
        {{ model?.label ?? placeholder }}
      </span>

      <i class="chevron i-youcan-carret-down" />
    </button>
    <div v-if="showList" ref="list" class="dropdown-wrapper">
      <DropdownList
        class="dropdown-list" v-bind="{ items, searchable, selected: modelValue, multiple: false }"
        @select="(i) => model = i"
      />
    </div>
  </div>
</template>

<style scoped>
.dropdown-input {
  gap: 8px;
  width: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  color: var(--gray-500);
  box-shadow: var(--shadow-xs-gray);
  border: 1px solid var(--gray-100);
  background-color: var(--base-white);
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
  color: var(--gray-900);
  overflow: hidden;
  white-space: nowrap;
  font: var(--text-sm-regular);
  text-overflow: ellipsis;
}

.dropdown-input:hover {
  background-color: var(--gray-50);
}

.dropdown-input:is(:focus, :active) {
  outline: none;
  box-shadow: var(--focus-shadow-xs-brand);
  border: 1px solid var(--brand-500);
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
  width: 100%;
  top: 8px;
}
</style>
