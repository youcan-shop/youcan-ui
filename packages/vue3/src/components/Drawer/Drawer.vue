<script lang="ts" setup>
import { computed, onMounted, onUnmounted, useSlots } from 'vue';
import type { DrawerProps } from '~/types';
import Overlay from '~/components/Overlay/Overlay.vue';

const props = withDefaults(defineProps<DrawerProps>(), {
  visible: false,
  position: 'right',
  duration: 450,
});

const emit = defineEmits(['update:visible']);

const slots = useSlots();

const close = () => {
  emit('update:visible', false);
};

const transitionDuration = computed(() => {
  return `${props.duration}ms`;
});

function handleKeypress(event: KeyboardEvent) {
  if (props.visible && event.key === 'Escape') {
    close();
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeypress);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeypress);
});
</script>

<template>
  <Transition name="fade">
    <Overlay v-if="visible" class="drawer-overlay" @on-backdrop-click="close" />
  </Transition>
  <Transition :name="position">
    <div v-if="visible" class="drawer" :class="position">
      <div class="header">
        <div class="close" @click="close">
          <i class="i-youcan-x" />
        </div>
      </div>
      <div class="body">
        <slot />
      </div>
      <div v-if="slots.footer" class="footer">
        <slot name="footer" />
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.drawer-overlay {
  z-index: 999999998;
}

.drawer-overlay,
.drawer {
  --duration: v-bind(transitionDuration);
}

.drawer {
  display: flex;
  position: fixed;
  z-index: 999999999;
  top: 0;
  flex: 1;
  flex-direction: column;
  width: max-content;
  max-width: 80vw;
  height: 100%;
  overflow: hidden;
  border: 1px solid var(--gray-200);
  background-color: var(--base-white);
  box-shadow: var(--shadow-md-gray);
}

.drawer.right {
  right: 0;
}

.drawer.left {
  right: unset;
  left: 0;
}

@media only screen and (max-width: 992px) {
  .drawer {
    max-width: 100vw;
  }
}

.drawer > * {
  box-sizing: border-box;
  width: 100%;
}

.drawer .header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid var(--gray-100);
}

.drawer.left .header {
  flex-direction: row-reverse;
}

.drawer .header .close {
  cursor: pointer;
}

.drawer .header .close i {
  color: var(--gray-500);
}

.drawer .footer {
  padding: 10px 20px;
  border-top: 1px solid var(--gray-100);
}

.drawer .body {
  flex: 1;
  padding: 14px 20px;
  overflow-y: auto;
  font: var(--text-md-regular);
}

.drawer .body::-webkit-scrollbar {
  width: 4px;
}

.drawer .body::-webkit-scrollbar-track {
  background: transparent;
}

.drawer .body::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background-color: var(--brand-500);
}

.drawer .body::-webkit-scrollbar-thumb:hover {
  background-color: var(--brand-500);
}

.fade-enter-active {
  animation: fade var(--duration) ease-in-out;
}

.fade-leave-active {
  animation: fade var(--duration) reverse ease-in-out;
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.right-enter-active {
  animation: right var(--duration) ease-in-out;
}

.right-leave-active {
  animation: right var(--duration) reverse ease-in-out;
}

@keyframes right {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0%);
  }
}

.left-enter-active {
  animation: left var(--duration) ease-in-out;
}

.left-leave-active {
  animation: left var(--duration) reverse ease-in-out;
}

@keyframes left {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0%);
  }
}

html[dir="rtl"] .drawer.right .header {
  flex-direction: row-reverse;
}

html[dir="rtl"] .drawer.left .header {
  flex-direction: row;
}
</style>
