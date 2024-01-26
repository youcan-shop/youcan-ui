<script setup lang="ts">
import { computed, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

const show = ref(false);
const DropdownMenuContainer = ref();
const position = ref();

const getEdgePosition = (rect: any) => {
  const screenWidth = window.innerWidth;

  const isAtLeftEdge = rect.left <= 0;
  const isAtRightEdge = rect.right >= screenWidth;

  if (isAtLeftEdge) {
    position.value = 'left';

    return 'left';
  }
  if (isAtRightEdge) {
    position.value = 'right';

    return 'right';
  }

  return 'center';
};

const positionClasses = computed(() => {
  return {
    'position-right': position.value === 'right',
    'position-left': position.value === 'left',
  };
});

const toggleMenu = () => {
  show.value = !show.value;
  if (show.value) {
    const containerRect = DropdownMenuContainer?.value.getBoundingClientRect();
    getEdgePosition(containerRect);
  }
};

onClickOutside(DropdownMenuContainer, () => show.value = false);
</script>

<template>
  <div ref="DropdownMenuContainer">
    <div @click="toggleMenu">
      <slot />
    </div>
    <div v-if="show" :class="positionClasses" class="dropdown-menu-content">
      <slot name="MenuList" />
    </div>
  </div>
</template>

<style scoped>
.position-right {
  right: 0;
}

.position-left {
  left: 0;
}

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
  margin-top: 5px;
  padding: var(--padding);
  animation: fade-in-translate 200ms ease-in-out;
  border: 1px solid var(--gray-200);
  border-radius: var(--border-radius);
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
  color: var(--gray-500);
  gap: var(--gap);
}

@keyframes fade-in-translate {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
