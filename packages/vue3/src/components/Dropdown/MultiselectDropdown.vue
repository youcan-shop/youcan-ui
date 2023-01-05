<script setup lang="ts">
import { ref } from 'vue';
import { Utils } from '@youcan/ui-core';
import { onClickOutside } from '@vueuse/core';
import { Badge } from '..';
import type { DropdownItemArray, DropdownItemDefinition, DropdownItemGroups } from './types';
import DropdownList from './Internal/DropdownList.vue';

const props = withDefaults(
  defineProps<{
    icon?: string
    label: string
    searchable?: boolean
    modelValue: DropdownItemDefinition[]
    items: DropdownItemArray | DropdownItemGroups
  }>(),
  { searchable: false },
);

const emit = defineEmits(['update:modelValue']);

const list = ref();
const showList = ref(false);
function toggleList(override = !showList.value) {
  showList.value = override;
}
onClickOutside(list, () => toggleList(false));

function toggle(item: DropdownItemDefinition, value: boolean): void {
  if (!value) {
    return emit(
      'update:modelValue',
      Utils.removeFromArray(
        props.modelValue,
        props.modelValue.map(i => i.value).indexOf(item.value),
      ),
    );
  }

  emit('update:modelValue', [...props.modelValue, item]);
}
</script>

<template>
  <div>
    <button class="dropdown-input" @click="() => toggleList()">
      <i v-if="icon" class="icon" :class="icon" />
      <span class="label">
        <span>
          {{ label }}
        </span>
        <Badge state="info">
          {{ modelValue.length }}
        </Badge>
      </span>

      <i i-youcan-down class="chevron" />
    </button>
    <div v-if="showList" ref="list" class="dropdown-wrapper">
      <DropdownList class="dropdown-list" v-bind="{ items, selected: modelValue, searchable, multiple: true }" @toggle="toggle" />
    </div>
  </div>
</template>

<style scoped>
.dropdown-input {
    gap: 8px;
    width: 100%;
    display: flex;
    cursor: pointer;
    padding: 12px 16px;
    border-radius: 8px;
    align-items: center;
    color: var(--gray-500);
    box-shadow: var(--shadow-xs);
    font: var(--text-sm-regular);
    border: 1px solid var(--gray-100);
    background-color: var(--base-white);
}

.dropdown-input .label {
    display: flex;
    gap: 8px;
    color: var(--gray-900);
}

.dropdown-input:hover {
    background-color: var(--gray-50);
}

.dropdown-input:is(:focus, :active) {
    outline: none;
    box-shadow: var(--focus-xs-brand);
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
    width: 100%;
    top: 8px;
}
</style>