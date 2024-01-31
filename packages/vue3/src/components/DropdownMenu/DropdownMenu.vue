<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { setPosition } from '../Tooltip/utils';
import type { DropdownMenuProps } from './types';

const props = withDefaults(defineProps<DropdownMenuProps>(), { position: 'bottom' });

const show = ref(false);
const DropdownMenuContainer = ref();
const DropdownMenuTrigger = ref();
const DropdownMenuContent = ref();

const toggleMenu = () => {
  show.value = !show.value;

  nextTick(() => {
    if (DropdownMenuTrigger.value && DropdownMenuContent.value && show.value) {
      const { top, left } = setPosition(DropdownMenuContent.value, DropdownMenuTrigger.value, props.position, 5);
      DropdownMenuContent.value?.setAttribute('style', `top:${top}px;left:${left}px`);
    }
  });
};

const handleScroll = () => {
  show.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

onClickOutside(DropdownMenuContainer, () => show.value = false);
</script>

<template>
  <div ref="DropdownMenuContainer">
    <div ref="DropdownMenuTrigger" class="dropdown-menu-trigger" @click="toggleMenu">
      <slot />
    </div>
    <Transition name="fade-in">
      <div v-if="show" ref="DropdownMenuContent" class="dropdown-menu-content">
        <slot name="MenuItems" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.dropdown-menu-content {
  --border-radius: 8px;
  --min-width: 200px;
  --padding: 8px;
  --z-index: 10;
  --gap: 1px;

  display: flex;
  position: fixed;
  z-index: var(--z-index);
  box-sizing: border-box;
  flex-direction: column;
  width: max-content;
  min-width: var(--min-width);
  padding: var(--padding);
  border: 1px solid var(--gray-200);
  border-radius: var(--border-radius);
  opacity: 1;
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
  color: var(--gray-500);
  gap: var(--gap);
}

.fade-in-enter-active {
  animation: fade-in 0.1s ease-in-out;
}

.fade-in-leave-active {
  animation: fade-in 0.1s reverse ease-in-out;
}

.dropdown-menu-trigger {
  width: max-content;
  max-width: 100%;
  margin: 0;
}

@keyframes fade-in {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
