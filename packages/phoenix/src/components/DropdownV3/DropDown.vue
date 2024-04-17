<script setup lang="ts">
import { computed, nextTick, onMounted, ref, useSlots } from 'vue';
import { onClickOutside } from '@vueuse/core';
import type { DropdownItemType, DropdownProps } from './type';
import DropdownItem from './Internal/DropdownItem.vue';
import { setPosition } from '~/helpers';

const props = defineProps<DropdownProps>();

const emit = defineEmits(['update:modelValue']);

const slots = useSlots();

const dropdown = ref();
const dropdownList = ref();
const show = ref(false);
const itemsList = ref<DropdownItemType[]>([]);
const groupNames = ref<Array<string>>([]);
const listWidth = ref('300px');

const selectedOptions = computed(() => {
  const { modelValue, placeholder, multiple } = props;
  if (modelValue && !multiple) {
    return (modelValue as DropdownItemType).label;
  }

  return placeholder;
});

function ListPosition() {
  if (dropdown.value && dropdownList.value) {
    listWidth.value = `${dropdown.value.clientWidth}px`;
    nextTick(() => {
      const { left, top } = setPosition(dropdownList.value, dropdown.value, 'bottom', 8);
      dropdownList.value?.setAttribute('style', `top:${top}px;left:${left}px`);
    });
  }
}

function toggle() {
  show.value = !show.value;
  nextTick(() => {
    ListPosition();
  });
}

function updateModel(item: DropdownItemType) {
  const { multiple, modelValue } = props;
  if (!multiple) {
    emit('update:modelValue', item);
  }
  else {
    let override: DropdownItemType[] = (modelValue as DropdownItemType[]);
    if (override && override.length) {
      const index = override.findIndex((el: DropdownItemType) => el.key === item.key);
      if (index > -1) {
        override.splice(index, 1);
      }
      else {
        override.push(item);
      }
    }
    else {
      override = [];
      override.push(item);
      emit('update:modelValue', override);
    }
  }
}

function getGroupNames() {
  const { items } = props;
  const Names = items.filter((obj, index, self) => index === self.findIndex(item => item.groupName === obj.groupName));
  Names.forEach((item) => {
    groupNames.value.push((item.groupName as string));
  });
}

function groupByName(name: string) {
  const { items } = props;

  return items.filter(item => item.groupName === name);
}

onMounted(() => {
  const { items } = props;
  const list = items.filter((item: DropdownItemType) => item.groupName !== undefined && item.groupName !== '');
  if (list.length) {
    getGroupNames();

    return;
  }
  itemsList.value = Array.isArray(items) ? items : [];
});

onClickOutside(dropdown, () => show.value = false);
</script>

<template>
  <div ref="dropdown" class="dropdown" :class="[{ focus: show }]">
    <button class="dropdown-input" type="button" @click="toggle()">
      <label class="label" :class="{ placeholder: !modelValue }">{{ selectedOptions }}</label>
      <i class="i-youcan-caret-down caret" />
    </button>

    <Transition name="animate-list">
      <div v-if="show" ref="dropdownList" class="list-container">
        <div class="dropdown-list">
          <template v-if="groupNames.length">
            <template v-for="name in groupNames" :key="name">
              <div class="group-name">
                {{ name }}
              </div>
              <DropdownItem v-for="item in groupByName(name)" :key="item.key" class="group-item" :multiple="multiple" :item="item" @on-select="updateModel(item)">
                <template v-if="slots.item">
                  <slot v-bind="item" name="item" />
                </template>
              </DropdownItem>
            </template>
          </template>
          <template v-else>
            <DropdownItem v-for="(item, index) in itemsList" :key="index" :multiple="multiple" :item="item" @on-select="updateModel(item)">
              <template v-if="slots.item">
                <slot v-bind="item" name="item" />
              </template>
            </DropdownItem>
          </template>
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
  --duration: 250ms;

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
  padding: 10px  16px;
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

.dropdown .dropdown-input .label {
  display: flex;
  flex: 1;
  justify-content: flex-start;
  color: var(--gray-900);
  font: var(--text-sm-regular);
  cursor: pointer;
}

.dropdown .dropdown-input .label.placeholder {
  color: var(--gray-300);
}

.dropdown .dropdown-input .caret {
  width: 13px;
  height: 13px;
  transform: var(--caret-transform);
  transition: all var(--duration) linear;
}

.dropdown .list-container {
  display: flex;
  position: fixed;
  z-index: 9999999999;
  flex-direction: column;
  width: v-bind(listWidth);
  height: max-content;
  max-height: 240px;
  padding: 8px 0;
  overflow: hidden;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-md-gray);
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

.dropdown-list::-webkit-scrollbar {
  width: 4px;
}

.dropdown-list::-webkit-scrollbar-track {
  background: transparent;
}

.dropdown-list::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background-color: var(--brand-500);
}

.dropdown-list::-webkit-scrollbar-thumb:hover {
  background-color: var(--brand-500);
}

.dropdown .list-container .dropdown-list .group-name {
  padding: 6px 16px;
  color: var(--dark-900);
  font: var(--text-sm-medium);
  cursor: not-allowed;
  user-select: none;
}

.dropdown .list-container .dropdown-list .group-item {
  padding: 16px 30px;
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
</style>
