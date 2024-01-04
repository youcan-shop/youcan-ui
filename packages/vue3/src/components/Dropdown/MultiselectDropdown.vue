<script setup lang="ts">
import { ref, useSlots } from 'vue';
import { Utils } from '@youcan/ui-core';
import { onClickOutside } from '@vueuse/core';
import { Badge } from '..';
import type { DropdownItemArray, DropdownItemDefinition, DropdownItemGroups } from './types';
import DropdownList from './DropdownList.vue';

const props = withDefaults(
  defineProps<{
    icon?: string
    label: string
    searchable?: boolean
    loading?: boolean
    modelValue: DropdownItemDefinition[]
    items: DropdownItemArray | DropdownItemGroups
  }>(),
  { searchable: false },
);

const emit = defineEmits(['update:modelValue', 'scrollEnd']);

const slots = useSlots();

const list = ref();
const button = ref();
const showList = ref(false);
const toggleList = (override = !showList.value) => showList.value = override;
onClickOutside(list, () => toggleList(false), { ignore: [button] });

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
    <button ref="button" type="button" class="dropdown-input" @click="() => toggleList()">
      <i v-if="icon" class="icon" :class="icon" />
      <span class="label">
        <span>
          {{ label }}
        </span>
        <Badge state="info">
          {{ modelValue.length }}
        </Badge>
      </span>

      <i class="chevron i-youcan-carret-down" />
    </button>
    <div v-if="showList" ref="list" class="dropdown-wrapper">
      <DropdownList
        class="dropdown-list" v-bind="{ items, selected: modelValue, searchable, multiple: true }"
        :loading="loading"
        @toggle="toggle"
        @scroll-end="() => emit('scrollEnd')"
      >
        <template v-if="slots.accessory" #accessory="item">
          <slot name="accessory" v-bind="item" />
        </template>
      </DropdownList>
    </div>
  </div>
</template>

<style scoped>
.dropdown-input {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
  color: var(--gray-500);
  font: var(--text-sm-regular);
  cursor: pointer;
  gap: 8px;
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
