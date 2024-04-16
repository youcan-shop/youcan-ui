<script setup lang="ts">
import { nextTick, onMounted, ref, useSlots } from 'vue';
import { onClickOutside } from '@vueuse/core';
import type { DropdownItemType, DropdownProps } from './type';
import DropdownItem from './Internal/DropdownItem.vue';
import { setPosition } from '~/helpers';
import { log } from 'console';

const props = defineProps<DropdownProps>();

const emit = defineEmits(['update:modelValue']);

const slots = useSlots();

const dropdown = ref();
const dropdownList = ref();
const show = ref(true);
const itemsList = ref<DropdownItemType[]>([]);
const groupNames = ref<Array<string>>([]);
const listWidth = ref('300px');

function ListPosition() {
  if (dropdown.value && dropdownList.value) {
    const { left, top } = setPosition(dropdownList.value, dropdown.value, 'bottom', 8);
    dropdownList.value?.setAttribute('style', `top:${top}px;left:${left}px`);
    listWidth.value = `${dropdown.value.clientWidth}px`;
  }
}

function toggle() {
  show.value = !show.value;
  nextTick(() => {
    ListPosition();
  });
}

function updateModel(item: DropdownItemType) {
  const { multiple } = props;
  if (!multiple) {
    emit('update:modelValue', item);
  }
}

function getNames() {
  const { items } = props;
  const Names = items.filter((obj, index, self) => index === self.findIndex((item) => item.groupName === obj.groupName));
  Names.forEach(item => {
    groupNames.value.push((item.groupName as string));
  }); 
  nextTick(()=>{
    console.log(groupNames.value);
  })
}

function groupByName(name: string) {
  const { items } = props;
  return items.filter((item) => item.groupName === name);
}

onMounted(() => {
  const { items } = props;
  const list = items.filter((item: DropdownItemType) => item.groupName !== undefined && item.groupName !== '');
  if (list.length) {
    getNames();

    return;
  }
  itemsList.value = Array.isArray(items) ? items : [];
});

onClickOutside(dropdown, () => show.value = true);
</script>

<template>
  <div ref="dropdown" class="dropdown" :class="[{ focus: show }]">
    <button class="dropdown-input" type="button" @click="toggle()">
      <label class="text">{{ placeholder }}</label>
      <i class="i-youcan-caret-down caret" />
    </button>

    <Transition name="animate-list">
      <div v-if="show" ref="dropdownList" class="dropdown-list">
        <template v-if="groupNames.length"  v-for="name in groupNames" :key="name">
          <div>{{ name }}</div>
          <DropdownItem v-for="item in groupByName(name)" :key="item.key" :multiple="multiple" :item="item" @on-select="updateModel(item)">
            <template v-if="slots.item">
              <slot v-bind="item" name="item" />
            </template>
          </DropdownItem>
        </template>
       <template v-else>
        <DropdownItem v-for="(item, index) in itemsList" :key="index" :multiple="multiple" :item="item" @on-select="updateModel(item)">
          <template v-if="slots.item">
            <slot v-bind="item" name="item" />
          </template>
        </DropdownItem>
       </template>
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

.dropdown .dropdown-input .text {
  display: flex;
  flex: 1;
  justify-content: flex-start;
  color: var(--gray-300);
  font: var(--text-sm-regular);
  cursor: pointer;
}

.dropdown .dropdown-input .caret {
  width: 13px;
  height: 13px;
  transform: var(--caret-transform);
  transition: all var(--duration) linear;
}

.dropdown .dropdown-list {
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
  row-gap: 1px;
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
