<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, useSlots } from 'vue';
import { onClickOutside } from '@vueuse/core';
import DropdownItem from './Internal/DropdownItem.vue';
import DropdownGroupName from './Internal/DropdownGroupName.vue';
import { elementChildrenNavigate } from './utils';
import type { DropdownProps, DropdownValue } from '~/types';
import { setPosition } from '~/helpers';
import { Spinner } from '~/components';

const props = withDefaults(defineProps<DropdownProps>(), {
  multiSelectLabel: 'Selected items',
  noDataText: 'No results were found',
  clearable: true,
  limit: 0,
  searchInputPlaceholder: 'Search',
});

const emit = defineEmits(['update:modelValue', 'scrollEnd']);

const slots = useSlots();

const dropdown = ref();
const dropdownContainer = ref();
const dropdownList = ref();
const searchInput = ref();
const show = ref(false);
const searchValue = ref('');
const itemsList = ref<DropdownValue[]>([]);
const groupNames = ref<Array<string>>([]);
const listWidth = ref('300px');

function asArray() {
  return props.modelValue ? (props.modelValue as DropdownValue[]) : [];
}

const selectedOptions = computed(() => {
  const { modelValue, placeholder, multiple, multiSelectLabel } = props;
  if (modelValue) {
    if (!multiple) {
      return (modelValue as DropdownValue).label;
    }

    if (multiple && asArray().length) {
      return multiSelectLabel;
    }
  }

  return placeholder;
});

const hasCount = computed(() => {
  const { multiple, modelValue } = props;

  return multiple && modelValue && asArray().length;
});

function ListPosition() {
  if (dropdown.value && dropdownContainer.value) {
    listWidth.value = `${dropdown.value.clientWidth}px`;
    nextTick(() => {
      const { left, top } = setPosition(dropdownContainer.value, dropdown.value, 'bottom', 8);
      dropdownContainer.value?.setAttribute('style', `top:${top}px;left:${left}px`);
    });
  }
}

function toggle(override = !show.value) {
  if (props.disabled) {
    return;
  }
  show.value = override;
  nextTick(() => {
    ListPosition();
    if (show.value && searchInput.value) {
      (searchInput.value as HTMLInputElement).focus();
    }
  });
}

function updateModel(item: DropdownValue) {
  const { limit, multiple } = props;

  if (multiple === false) {
    emit('update:modelValue', item);
    show.value = false;
  }
  else {
    const override: DropdownValue[] = asArray() ? asArray() : [];
    const index = override.findIndex((el: DropdownValue) => el.key === item.key);
    if (limit > 0 && limit === asArray().length && index === -1) {
      return;
    }
    if (index > -1) {
      override.splice(index, 1);
    }
    else {
      override.push(item);
    }
    ListPosition();
    emit('update:modelValue', override.length ? override : null);
  }
}

function getGroupNames() {
  const { items } = props;
  const Names = items.filter((obj, index, self) => index === self.findIndex(item => item.groupName === obj.groupName));
  Names.forEach((item) => {
    groupNames.value.push((item.groupName as string));
  });
}

function groupByName(name: string, inModel = false): DropdownValue[] {
  const { items } = props;
  if (inModel) {
    return asArray().filter(item => item.groupName === name);
  }

  return items.filter(item => item.groupName === name);
}

function clear() {
  emit('update:modelValue', null);
}

function selected(item: DropdownValue) {
  const { multiple, modelValue } = props;
  if (modelValue) {
    if (multiple) {
      const override = asArray();
      const index = override.findIndex((el: DropdownValue) => el.key === item.key);

      return index > -1;
    }

    return item.key === (modelValue as DropdownValue).key;
  }

  return false;
}

function handleScroll(event: Event) {
  const e = event.target as HTMLElement;
  const scrollHeight = e.scrollHeight;
  const scrollTop = e.scrollTop;
  const clientHeight = e.clientHeight;
  if (scrollTop + clientHeight >= scrollHeight) {
    emit('scrollEnd');
  }
}

let endTaping: ReturnType<typeof setTimeout>;

function handleSearch(event: Event) {
  const value = (event.target as HTMLInputElement).value.toLowerCase();
  const { search, items } = props;
  clearTimeout(endTaping);
  if (search) {
    endTaping = setTimeout(() => {
      search(value);
    }, 500);
  }
  else {
    endTaping = setTimeout(() => {
      const list = items.filter((item: DropdownValue) => {
        const element = item.label.toLowerCase();

        return element.includes(value);
      });

      itemsList.value = list;
    }, 200);
  }
}

function handleResize() {
  ListPosition();
}

let currentElement: Element | null = null;
function handleKeypress(event: KeyboardEvent) {
  const key = event.key;
  if (key === 'ArrowUp' || key === 'ArrowDown') {
    event.preventDefault();
    currentElement = elementChildrenNavigate(dropdownList.value, 'dropdown-item', key === 'ArrowUp' ? 'previous' : 'next');
    if (currentElement) {
      currentElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  if (key === 'Enter' && currentElement && show.value) {
    event.preventDefault();
    (currentElement as HTMLElement).click();
    nextTick(() => {
      currentElement?.classList.add('focus');
    });
  }
  if (key === 'Backspace' && !props.multiple) {
    clear();
  }
}
function selectGroupItems(checked: boolean, name: string) {
  const override: DropdownValue[] = asArray() ? asArray() : [];
  const { limit } = props;

  groupByName(name).forEach((item: DropdownValue) => {
    const index = override.findIndex((el: DropdownValue) => el.key === item.key);
    if ((limit > 0 && override.length < limit) || !checked || limit === 0) {
      if (checked && index === -1) {
        override.push(item);
      }
      else if (!checked && index > -1) {
        override.splice(index, 1);
      }
    }
  });
  ListPosition();
  emit('update:modelValue', override.length ? override : null);
}

onMounted(() => {
  window.addEventListener('resize', handleResize);

  dropdown.value?.addEventListener('keydown', handleKeypress);

  const { items } = props;
  const list = items.filter((item: DropdownValue) => item.groupName !== undefined && item.groupName !== '');
  if (list.length) {
    getGroupNames();

    return;
  }
  itemsList.value = Array.isArray(items) ? items : [];
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('keydown', handleKeypress);
});

onClickOutside(dropdown, () => show.value = false);
</script>

<template>
  <div ref="dropdown" class="dropdown" :class="[{ focus: show }, { multiple }, { disabled }]">
    <button class="dropdown-input" type="button" @click="toggle()">
      <label class="label" :class="{ placeholder: !modelValue || (multiple && !asArray().length) }">
        <span v-if="hasCount" class="selected-count">{{ asArray().length }}</span>
        <span class="text"> {{ selectedOptions }}</span>
        <i class="i-youcan-caret-down caret" />
      </label>
    </button>
    <div v-if="modelValue && !multiple && clearable" class="clear-button" @click="clear">
      <i class="i-youcan-x" />
    </div>

    <Transition name="animate-list">
      <div v-if="show" ref="dropdownContainer" class="list-container">
        <div v-if="searchable" class="search-input">
          <input ref="searchInput" v-model="searchValue" type="search" :placeholder="searchInputPlaceholder" @input="handleSearch">
        </div>
        <div v-if="items.length" ref="dropdownList" class="dropdown-list" @scroll="handleScroll">
          <template v-if="groupNames.length">
            <template v-for="name in groupNames" :key="name">
              <DropdownGroupName
                :selected="multiple && groupByName(name, true).length > 0"
                v-bind="{ multiple, name }"
                @on-select="selectGroupItems"
              />
              <DropdownItem v-for="item in groupByName(name)" :key="item.key" :selected="selected(item)" class="group-item" :multiple="multiple" :item="item" @on-select="updateModel(item)">
                <template v-if="slots.item">
                  <slot v-bind="item" name="item" />
                </template>
              </DropdownItem>
            </template>
          </template>
          <template v-else>
            <DropdownItem v-for="(item, index) in itemsList" :key="index" :selected="selected(item)" :multiple="multiple" :item="item" @on-select="updateModel(item)">
              <template v-if="slots.item">
                <slot v-bind="item" name="item" />
              </template>
            </DropdownItem>
          </template>
        </div>

        <div v-else class="no-results">
          {{ noDataText }}
        </div>
        <div v-if="isLoading" class="loading">
          <Spinner :size="15" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.dropdown {
  --input-border: 1px solid var(--gray-200);
  --input-shadow: var(--shadow-xs-gray);
  --caret-transform: rotate(0deg);
  --duration: 150ms;

  position: relative;
  width: 100%;
}

.dropdown .dropdown-input {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 44px;
  padding: 0  16px;
  border: var(--input-border);
  border-radius: 8px;
  outline: none;
  background-color: var(--base-white);
  box-shadow: var(--input-shadow);
  cursor: pointer;
}

.dropdown.focus {
  --caret-transform: rotate(-180deg);
}

.dropdown.focus,
.dropdown .dropdown-input:focus {
  --input-border: 1px solid var(--brand-500);
  --input-shadow: var(--focus-shadow-xs-brand);
}

.dropdown.disabled .dropdown-input:focus {
  --input-border: 1px solid var(--gray-200);
  --input-shadow: unset;
}

.dropdown .dropdown-input .label {
  display: flex;
  position: relative;
  z-index: 1;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  overflow: hidden;
  border: 0;
  outline: none;
  background-color: var(--base-white);
  color: var(--gray-900);
  font: var(--text-sm-regular);
  cursor: pointer;
  gap: 8px;
}

.dropdown .dropdown-input .label .text {
  display: flex;
  display: block;
  flex: 1;
  justify-content: flex-start;
  max-width: 100%;
  padding-right: 30px;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dropdown.multiple .dropdown-input .label .text {
  padding: 0 !important;
}

.dropdown .dropdown-input .label .selected-count {
  --size: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  min-width: var(--size);
  height: var(--size);
  border-radius: calc(var(--size) / 2);
  background-color: var(--blue-500);
  color: var(--base-white);
  font: var(--text-xs-medium);
  line-height: normal;
}

.dropdown .dropdown-input .label.placeholder {
  color: var(--gray-300);
}

.dropdown .dropdown-input .label .caret {
  width: 13px;
  min-width: 13px;
  height: 13px;
  min-height: 13px;
  transform: var(--caret-transform);
  transition: all var(--duration) linear;
  color: var(--gray-900);
}

.dropdown .clear-button {
  position: absolute;
  z-index: 2;
  top: 50%;
  right: 40px;
  transform: translateY(-50%);
  color: var(--red-500);
  cursor: pointer;
}

.dropdown .clear-button i {
  width: 18px;
  height: 18px;
}

.dropdown .list-container {
  display: flex;
  position: fixed;
  z-index: 9999999999;
  flex-direction: column;
  width: v-bind(listWidth);
  height: max-content;
  max-height: 240px;
  overflow: hidden;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-md-gray);
}

.dropdown .list-container .search-input {
  height: 44px;
  min-height: 44px;
  border-bottom: 1px solid var(--gray-200);
}

.dropdown .list-container .search-input input[type="search"] {
  width: 100%;
  height: 100%;
  padding: 0 16px;
  border: 0;
  outline: none;
  background-color: var(--base-white);
  color: var(--gray-900);
  font: var(--text-sm-regular);
}

.dropdown .list-container .search-input input[type="search"]::placeholder {
  color: var(--gray-400);
}

.dropdown .list-container .dropdown-list {
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  overflow: hidden auto;
  row-gap: 1px;
  scrollbar-width: thin;
  scrollbar-color: var(--brand-500) transparent;
}

.dropdown .list-container .dropdown-list::-webkit-scrollbar {
  width: 4px;
}

.dropdown .list-container .dropdown-list::-webkit-scrollbar-track {
  background: transparent;
}

.dropdown .list-container .dropdown-list::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background-color: var(--brand-500);
}

.dropdown .list-container .dropdown-list::-webkit-scrollbar-thumb:hover {
  background-color: var(--brand-500);
}

.dropdown .list-container .no-results {
  padding: 10px 16px;
  color: var(--gray-500);
  font: var(--text-sm-regular);
}

.dropdown .list-container .loading {
  display: flex;
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 10px;
  justify-content: center;
  width: calc(100% - 20px);
  margin: 0 auto;
  padding: 7px 0;
  background-image: linear-gradient(to top, var(--base-white), rgb(255 255 255 / 50%), transparent);
}

.dropdown .list-container .dropdown-list:deep(.group-name) {
  display: flex;
  align-items: center;
  padding: 16px;
  color: var(--gray-900);
  font: var(--text-sm-medium);
  cursor: not-allowed;
  user-select: none;
  gap: 16px;
}

.dropdown .list-container .dropdown-list:deep(.group-name .check-box) {
  pointer-events: none;
}

.dropdown.multiple .list-container .dropdown-list:deep(.group-name) {
  transition: background-color 150ms linear;
  cursor: pointer;
}

.dropdown.multiple .list-container .dropdown-list:deep(.group-name:hover) {
  background-color: var(--gray-50);
}

.dropdown .list-container .dropdown-list .group-item {
  padding-left: 30px;
}

.dropdown.disabled .dropdown-input .label,
.dropdown.disabled .dropdown-input .label .caret {
  color: var(--gray-300);
}

.dropdown.disabled .clear-button {
  display: none;
}

.dropdown.disabled .dropdown-input .label .selected-count {
  background-color: var(--gray-300);
}

.animate-list-enter-active {
  animation: fade var(--duration) ease-in-out;
}

.animate-list-leave-active {
  animation: fade var(--duration) reverse ease-in-out;
}

@keyframes fade {
  0% {
    transform: scale(0.99);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

html[dir="rtl"] .dropdown .dropdown-input .label .text {
  padding-right: 0;
  padding-left: 30px;
  text-align: right;
}

html[dir="rtl"] .dropdown .list-container .dropdown-list .group-item {
  padding-right: 30px;
  padding-left: 16px;
}

html[dir="rtl"] .dropdown .clear-button {
  right: unset;
  left: 40px;
}
</style>
