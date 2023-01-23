<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { computed, ref } from 'vue';
import DropdownList from '~/components/Dropdown/DropdownList.vue';
import type {
  DropdownItemArray,
  DropdownItemDefinition,
  DropdownItemGroups,
} from '~/components/Dropdown/types';

const props = withDefaults(
  defineProps<{
    placeholder: string
    searchable?: boolean
    modelValue: DropdownItemDefinition | null
    items: DropdownItemArray | DropdownItemGroups
  }>(),
  { searchable: false },
);

const emit = defineEmits(['update:modelValue']);

const list = ref();
const button = ref();
const showList = ref(false);
const toggleList = (override = !showList.value) => (showList.value = override);
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
  <div class="dropdown-prefix-wrapper">
    <button ref="button" class="dropdown-input" @click="() => toggleList()">
      <span class="label">
        {{ model?.label ?? placeholder }}
      </span>

      <i i-youcan-caretdown class="chevron" />
    </button>
    <div v-if="showList" ref="list" class="dropdown-wrapper">
      <DropdownList class="dropdown-list" v-bind="{ items, searchable, selected: modelValue, multiple: false }"
        @select="(i) => (model = i)" />
    </div>
  </div>
</template>

<style scoped>
.dropdown-prefix-wrapper {}

.dropdown-input {
  gap: 8px;
  width: 100%;
  border: none;
  display: flex;
  cursor: pointer;
  padding: 12px 16px;
  align-items: center;
  color: var(--gray-500);
  border-radius: 8px 0 0 8px;
  font: var(--text-sm-regular);
  background-color: transparent;
  border-right: 1px solid var(--gray-100);
}

.dropdown-input .label {
  color: var(--gray-900);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.dropdown-input .chevron {
  width: 12px;
  height: 12px;
}

.dropdown-input:hover {
  background-color: var(--gray-50);
}

.dropdown-input:is(:focus, :active) {
  outline: none;
  box-shadow: var(--focus-shadow-xs-brand);
  outline: 1px solid var(--brand-500);
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
