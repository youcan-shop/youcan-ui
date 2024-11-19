<script lang="ts" setup>
import { onMounted, onUnmounted, ref, useSlots } from 'vue';
import type { ModalProps } from '~/types';
import Overlay from '~/components/Overlay/Overlay.vue';
import { PrimaryButton, SecondaryButton, TertiaryButton } from '~/components';

const props = withDefaults(defineProps<ModalProps>(), {
  title: 'Customer address',
  confirmLabel: 'Save',
  cancelLabel: 'Cancel',
});

const emit = defineEmits(['update:visible', 'onConfirm']);
const confirmLabel = ref(props.confirmLabel);
const cancelLabel = ref(props.cancelLabel);

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

const slots = useSlots();
const showCustomFooter = !!slots.footer;
</script>

<template>
  <Transition name="fade">
    <Overlay v-if="visible" @on-backdrop-click="close" />
  </Transition>
  <Transition name="slide-up">
    <div v-if="visible" class="modal">
      <div class="header">
        <TertiaryButton @click="close">
          <i class="i-youcan-x" />
        </TertiaryButton>
        <span class="title">{{ title }}</span>
      </div>
      <div class="body">
        <slot />
      </div>
      <div class="footer">
        <div v-if="showCustomFooter">
          <slot name="footer" />
        </div>
        <div v-else class="footer-content">
          <PrimaryButton v-if="!cancelOnly" @click="emit('onConfirm')">
            <template v-if="confirmIcon" #icon>
              <i :class="confirmIcon" />
            </template>
            <span>{{ confirmLabel }}</span>
          </PrimaryButton>
          <SecondaryButton @click="close">
            <span>{{ cancelLabel }}</span>
          </SecondaryButton>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal {
  display: flex;
  position: fixed;
  z-index: 999999999;
  top: 50%;
  left: 50%;
  flex-direction: column;
  width: 900px;
  max-width: calc(100vw - 40px);
  max-height: calc(100vh - 40px);
  overflow: hidden;
  transform: translateX(-50%) translateY(-50%);
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-md-gray);
}

.modal > * {
  box-sizing: border-box;
  width: 100%;
}

.modal .header,
.modal .footer-content {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
}

.modal .header {
  padding: 14px 20px;
  border-bottom: 1px solid var(--gray-100);
}

.modal .header .title {
  color: var(--gray-700);
  font: var(--text-md-medium);
}

.modal .header i {
  color: var(--gray-500);
}

.modal .footer {
  padding: 14px 20px;
  border-top: 1px solid var(--gray-100);
}

.modal .body {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  font: var(--text-md-regular);
}

.modal .body::-webkit-scrollbar {
  width: 4px;
}

.modal .body::-webkit-scrollbar-track {
  background: transparent;
}

.modal .body::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background-color: var(--brand-500);
}

.modal .body::-webkit-scrollbar-thumb:hover {
  background-color: var(--brand-500);
}

.fade-enter-active {
  animation: fade 0.35s ease-in-out;
}

.fade-leave-active {
  animation: fade 0.35s reverse ease-in-out;
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.slide-up-enter-active {
  animation: slide-up 0.35s ease-in-out;
}

.slide-up-leave-active {
  animation: slide-up 0.35s reverse ease-in-out;
}

@keyframes slide-up {
  0% {
    transform: translateX(-50%) translateY(calc(-50% + 16px));
    opacity: 0;
  }

  100% {
    transform: translateX(-50%) translateY(-50%);
    opacity: 1;
  }
}
</style>
