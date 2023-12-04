<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue';
import Overlay from '~/components/Overlay/Overlay.vue';
import { PrimaryButton, SecondaryButton, TertiaryButton } from '~/components';

const props = withDefaults(defineProps<{
  title?: string
  visible?: boolean
  confirmLabel?: string
  confirmIcon?: string
  cancelLabel?: string
  cancelOnly?: boolean
}>(), {
  title: 'Customer address',
  confirmLabel: 'Save',
  cancelLabel: 'Cancel',
});

const emit = defineEmits(['update:visible', 'onConfirm']);
const closeModal = () => {
  emit('update:visible', false);
};
const handleKeypress = (event: KeyboardEvent) => {
  if (props.visible && event.key === 'Escape') {
    closeModal();
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
    <Overlay v-show="visible" @on-backdrop-click="closeModal">
      <Transition name="slide-up">
        <div v-if="visible" class="modal">
          <div class="header">
            <TertiaryButton @click="closeModal">
              <i class="i-youcan-x" />
            </TertiaryButton>
            <span class="title">{{ title }}</span>
          </div>
          <div class="body">
            <slot />
          </div>
          <div class="footer">
            <PrimaryButton v-if="!cancelOnly" @click="emit('onConfirm')">
              <template v-if="confirmIcon" #icon>
                <i :class="confirmIcon" />
              </template>
              <span>{{ confirmLabel }}</span>
            </PrimaryButton>
            <SecondaryButton @click="closeModal">
              <span>{{ cancelLabel }}</span>
            </SecondaryButton>
          </div>
        </div>
      </Transition>
    </Overlay>
  </Transition>
</template>

<style scoped lang="scss">
.modal {
  display: flex;
  flex-direction: column;
  width: 900px;
  max-width: calc(100vw - 40px);
  max-height: calc(100vh - 40px);
  overflow: hidden;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-md-gray);

  > * {
    box-sizing: border-box;
    width: 100%;
  }

  .header,
  .footer {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
  }

  .header {
    padding: 14px 20px;
    border-bottom: 1px solid var(--gray-100);

    .title {
      color: var(--gray-700);
      font: var(--text-md-medium);
    }

    i {
      color: var(--gray-500);
    }
  }

  .footer {
    padding: 14px 20px;
    border-top: 1px solid var(--gray-100);
  }

  .body {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    font: var(--text-md-regular);
  }
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
    transform: translateY(16px);
  }

  100% {
    transform: translateY(0%);
  }
}
</style>
