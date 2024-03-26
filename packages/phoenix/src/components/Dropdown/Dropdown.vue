<script setup lang="ts">
import { computed, ref, useSlots } from 'vue';
import { onClickOutside } from '@vueuse/core';
import DropdownList from './DropdownList.vue';
import type { DropdownItemDefinition, DropdownProps } from '~/types';

const props = withDefaults(
  defineProps<DropdownProps>(),
  { searchable: false, size: 36, disabled: false },
);

const emit = defineEmits(['update:modelValue', 'scrollEnd']);

const slots = useSlots();

const list = ref();
const button = ref();
const showList = ref(false);
const showListInTop = ref(false);

const toggleList = (override = !showList.value) => {
  list.value.classList.remove('dropdown-top');
  const offset = list.value.getBoundingClientRect();
  if (offset) {
    showListInTop.value = offset.bottom > window.innerHeight;
  }
  showList.value = override;
};
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
  <div class="dropdown">
    <button ref="button" type="button" :class="[{ disabled }, { error }, `size-${size}`]" class="dropdown-input" @click="() => toggleList()">
      <i v-if="icon" class="icon" :class="icon" />
      <span class="label">
        {{ model?.label ?? placeholder }}
      </span>

      <i class="chevron i-youcan-carret-down" />
    </button>
    <div ref="list" :class="{ 'dropdown-show': showList && !disabled, 'dropdown-top': showListInTop }" class="dropdown-wrapper">
      <DropdownList
        :search-handler="searchHandler"
        v-bind="{ items, searchable, selected: modelValue, multiple: false }"
        :show="showList"
        :loading="loading"
        @scroll-end="() => emit('scrollEnd')"
        @select="(item:DropdownItemDefinition) => model = item"
      >
        <template v-if="slots.accessory" #accessory="item">
          <slot name="accessory" v-bind="item" />
        </template>
      </DropdownList>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dropdown {
  position: relative;
}

.dropdown-wrapper {
  visibility: hidden;
  position: absolute;
  z-index: 10;
  top: calc(100% + 8px);
  width: 100%;
  opacity: 0;

  &.dropdown-show {
    visibility: visible;
    opacity: 1;
  }

  &.dropdown-top {
    top: unset;
    bottom: calc(100% + 8px);
  }
}

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

  &.disabled {
    background-color: var(--gray-50);
    cursor: default;
  }

  &:not(.disabled) {
    &:hover {
      background-color: var(--gray-50);
    }

    &:is(:focus, :active) {
      border: 1px solid var(--brand-500);
      outline: none;
      box-shadow: var(--focus-shadow-xs-brand);
    }

    &.error {
      border: 1px solid var(--red-500);

      &:focus {
        box-shadow: var(--focus-shadow-xs-red);
      }
    }
  }

  &.size {
    &-36 {
      padding: 7.5px 12px;
      border-radius: 4px;
    }

    &-44 {
      padding: 11.5px 16px;
      border-radius: 8px;
    }
  }

  .label {
    overflow: hidden;
    color: var(--gray-900);
    font: var(--text-sm-regular);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .chevron {
    margin-inline-start: auto;
  }
}
</style>
