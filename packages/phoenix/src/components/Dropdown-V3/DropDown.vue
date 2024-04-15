<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';

import type { DropdownProps } from './type';

import { setPosition } from '~/helpers';

defineProps<DropdownProps>();
const show = ref(false);
const dropdown = ref();
const dropdownList = ref();
const listWidth = ref('300px');

function ListPosition() {
  if (dropdown.value && dropdownList.value) {
    const { left, top } = setPosition(dropdownList.value, dropdown.value, 'bottom', 8);
    dropdownList.value?.setAttribute('style', `top:${top}px;left:${left}px`);
  }
}
function toggle() {
  show.value = !show.value;
  nextTick(() => {
    ListPosition();
  });
}

onMounted(() => {
  if (dropdown.value) {
    listWidth.value = `${dropdown.value.clientWidth}px`;
  }
  ListPosition();
});
</script>

<template>
  <div ref="dropdown" class="dropdown" :class="[{ focus: show }]">
    <div class="dropdown-input" @click="toggle()">
      <label class="text">{{ placeholder }}</label>
      <i class="i-youcan-caret-down caret" />
    </div>

    <Transition name="animate-list">
      <div v-if="show" ref="dropdownList" class="dropdown-list" />
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

.dropdown.focus {
  --input-border: 1px solid var(--brand-500);
  --input-shadow: var(--focus-shadow-xs-brand);
  --caret-transform: rotate(-180deg);
}

.dropdown .dropdown-input {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  height: 44px;
  padding: 10px  16px;
  border: var(--input-border);
  border-radius: 8px;
  box-shadow: var(--input-shadow);
  cursor: pointer;
}

.dropdown .dropdown-input .text {
  flex: 1;
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
  position: fixed;
  z-index: 9999999999;
  width: v-bind(listWidth);
  height: 240px;
  max-height: 240px;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-md-gray);
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
