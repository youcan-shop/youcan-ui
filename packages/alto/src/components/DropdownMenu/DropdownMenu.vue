<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { setPosition } from '~/helpers';
import type { DropdownMenuProps } from '~/types';

const props = withDefaults(defineProps<DropdownMenuProps>(), { position: 'bottom' });

const show = ref(false);
const dropdownMenu = ref();
const trigger = ref();
const triggeredElement = ref();

const toggleMenu = () => {
  show.value = !show.value;

  nextTick(() => {
    if (trigger.value && triggeredElement.value && show.value) {
      const { top, left } = setPosition(triggeredElement.value, trigger.value, props.position, 5);
      triggeredElement.value?.setAttribute('style', `top:${top}px;left:${left}px`);
    }
  });
};

const handleScroll = () => {
  show.value = false;
};

const closeMenu = () => {
  show.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

onClickOutside(dropdownMenu, () => show.value = false);
</script>

<template>
  <div ref="dropdownMenu" class="dropdown-menu">
    <div ref="trigger" class="trigger" @click="toggleMenu">
      <slot />
    </div>
    <Transition name="fade-in">
      <div v-if="show" ref="triggeredElement" class="triggered-element" @click="closeMenu">
        <slot name="MenuItems" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.dropdown-menu .triggered-element {
  display: flex;
  position: fixed;
  z-index: 10;
  box-sizing: border-box;
  flex-direction: column;
  width: max-content;
  min-width: 200px;
  padding: 8px;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  opacity: 1;
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
  color: var(--gray-500);
  gap: 1px;
}

.dropdown-menu .trigger {
  width: max-content;
  max-width: 100%;
  margin: 0;
}

.fade-in-enter-active {
  animation: fade-in 0.1s ease-in-out;
}

.fade-in-leave-active {
  animation: fade-in 0.1s reverse ease-in-out;
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
