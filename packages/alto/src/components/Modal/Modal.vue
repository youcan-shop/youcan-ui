<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue';
import type { ModalProps } from '~/types';
import Overlay from '~/components/Overlay/Overlay.vue';
import { Button } from '~/components';

const props = withDefaults(defineProps<ModalProps>(), {
  title: 'Customer address',
  confirmLabel: 'Save',
  cancelLabel: 'Cancel',
});

const emit = defineEmits(['update:visible', 'onConfirm']);
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
    <Overlay v-if="visible" @on-backdrop-click="close" />
  </Transition>
  <Transition name="slide-up">
    <div v-if="visible" class="yc-modal">
      <div class="yc-modal__header ">
        <Button variant="tertiary" @click="close">
          <i class="i-youcan-x yc-modal__icon" />
        </Button>
        <span class="yc-modal__title">{{ title }}</span>
      </div>
      <div class="yc-modal__body">
        <slot />
      </div>
      <div class="yc-modal__footer">
        <Button v-if="!cancelOnly" variant="primary" @click="emit('onConfirm')">
          <template v-if="confirmIcon" #icon>
            <i :class="confirmIcon" />
          </template>
          <span>{{ confirmLabel }}</span>
        </Button>
        <Button variant="secondary" @click="close">
          <span>{{ cancelLabel }}</span>
        </Button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
@import "@youcan/styles/modal";
</style>
