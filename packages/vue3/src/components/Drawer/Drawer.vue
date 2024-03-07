<script lang="ts" setup>
import { onMounted, onUnmounted, useSlots } from 'vue';
import type { DrawerProps } from '~/types';
import Overlay from '~/components/Overlay/Overlay.vue';

const props = withDefaults(defineProps<DrawerProps>(), {
  visible: false,
  position: 'right',
});

const emit = defineEmits(['update:visible']);

const slots = useSlots();

const close = () => {
  emit('update:visible', false);
};

const handleKeypress = (event: KeyboardEvent) => {
  if (props.visible && event.key === 'Escape') {
    close();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeypress);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeypress);
});
</script>

<template>
  <Transition name="fade">
    <Overlay v-show="visible" class="drawer-overlay" :class="position" @on-backdrop-click="close">
      <Transition :name="position">
        <div v-if="visible" class="drawer">
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
    </Overlay>
  </Transition>
</template>

<style scoped lang="scss">
.drawer-overlay {
  --duration: 0.45s;

  flex-direction: row-reverse;
  align-items: flex-start;
}

.drawer-overlay .drawer {
  display: flex;
  flex: 1;
  flex-direction: column;
  width: max-content;
  max-width: 80vw;
  overflow: hidden;
  border: 1px solid var(--gray-200);
  background-color: var(--base-white);
  box-shadow: var(--shadow-md-gray);
}

@media only screen and (max-width: 992px) {
  .drawer-overlay .drawer {
    max-width: 100vw;
  }
}

.drawer-overlay .drawer > * {
  box-sizing: border-box;
  width: 100%;
}

.drawer-overlay .drawer .header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid var(--gray-100);
}

.drawer-overlay .drawer .header .close {
  cursor: pointer;
}

.drawer-overlay .drawer .header .close i {
  color: var(--gray-500);
}

.drawer-overlay .drawer .footer {
  padding: 10px 20px;
  border-top: 1px solid var(--gray-100);
}

.drawer-overlay .drawer .body {
  flex: 1;
  padding: 14px 20px;
  overflow-y: auto;
  font: var(--text-md-regular);
}

.drawer-overlay .drawer .body::-webkit-scrollbar {
  width: 4px;
}

.drawer-overlay .drawer .body::-webkit-scrollbar-track {
  background: transparent;
}

.drawer-overlay .drawer .body::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background-color: var(--brand-500);
}

.drawer-overlay .drawer .body::-webkit-scrollbar-thumb:hover {
  background-color: var(--brand-500);
}

.drawer-overlay.left {
  flex-direction: row;
}

.drawer-overlay.left .drawer .header {
  flex-direction: row-reverse;
}

.drawer-overlay > :deep(.body) {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
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

html[dir="rtl"] .drawer-overlay {
  flex-direction: row;
  align-items: flex-start;
  direction: rtl;
}

html[dir="rtl"] .drawer-overlay.left {
  flex-direction: row-reverse;
}
</style>
