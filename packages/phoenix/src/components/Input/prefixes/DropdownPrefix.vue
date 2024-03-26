<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { computed, ref } from 'vue';
import type { DropdownItemDefinition, DropdownPrefixProps } from '~/types';
import DropdownList from '~/components/Dropdown/DropdownList.vue';

const props = withDefaults(
  defineProps<DropdownPrefixProps>(),
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
    <button ref="button" type="button" class="dropdown-input" @click="() => toggleList()">
      <span class="label">
        {{ model?.label ?? placeholder }}
      </span>

      <i class="chevron i-youcan-carret-down" />
    </button>
    <div v-if="showList" ref="list" class="dropdown-wrapper">
      <DropdownList
        class="dropdown-list" v-bind="{ items, searchable, selected: modelValue, multiple: false }"
        @select="(i) => (model = i)"
      />
    </div>
  </div>
</template>

<style scoped>
.dropdown-input {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  border: none;
  border-right: 1px solid var(--gray-200);
  border-radius: 8px 0 0 8px;
  background-color: transparent;
  color: var(--gray-500);
  font: var(--text-sm-regular);
  cursor: pointer;
  gap: 8px;
}

.dropdown-input .label {
  overflow: hidden;
  color: var(--gray-900);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dropdown-input .chevron {
  width: 12px;
  height: 12px;
  margin-inline-start: auto;
}

.dropdown-input:hover {
  background-color: var(--gray-50);
}

.dropdown-input:is(:focus, :active) {
  outline: none;
  outline: 1px solid var(--brand-500);
  box-shadow: var(--focus-shadow-xs-brand);
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
