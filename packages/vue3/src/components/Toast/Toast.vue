<script setup lang="ts">
import type { ToastType } from './types';
import TertiaryButton from '~/components/Button/TertiaryButton.vue';

const props = withDefaults(
  defineProps<{
    type: ToastType
    closeAfterDuration?: number
  }>(),
  { type: 'info' },
);

const emit = defineEmits<{
  (e: 'close'): void
}>();

const handleClose = () => {
  emit('close');
  console.log('closed');
};

if (props.closeAfterDuration && typeof props.closeAfterDuration === 'number') {
  setTimeout(() => {
    handleClose();
  }, props.closeAfterDuration);
}
</script>

<template>
  <div class="toast-block" :class="[type]">
    <div class="main">
      <div class="icon-block" :class="[type]">
        <i
          class="icon" :class="{
            'i-youcan-warning-circle warning': type === 'warning',
            'i-youcan-check-circle success': type === 'success',
            'i-youcan-info info': type === 'info',
          }"
        />
      </div>
      <div class="content-container">
        <span class="title" :class="[type]">
          <slot name="title">
            Example: Short toast title
          </slot>
        </span>
        <span class="description" :class="[type]">
          <slot name="description">
            Example: Short description using toast.
          </slot>
        </span>
      </div>
      <!-- Close button -->
      <div class="btn">
        <TertiaryButton class="close-button" size="xs" icon-position="only" @click="handleClose">
          <template #icon>
            <i class="i-tabler:x" />
          </template>
        </TertiaryButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.toast-block {
  --border-color: var(--gray-500);
  width: 496px;
  display: flex;
  gap: 8px;
  background-color: var(--base-white);
  border-radius: 4px;
  position: relative;
  border: 1px solid var(--gray-100);
  border-width: 0px 0px 0px 1px;
  border-left: 4px solid var(--border-color);
  padding: 12px;
}

.toast-block.warning {
  --border-color: var(--orange-500);
}
.toast-block.success {
  --border-color: var(--green-600);
}
.toast-block.info {
  --border-color: var(--blue-500);
}

.content-container .description{
  padding-bottom: 4px;
}
.icon {
  width: 20px;
  height: 20px;
}
.icon.warning {
  color: var(--orange-500);
}

.icon.success {
  color: var(--green-600);
}

.icon.info {
  color: var(--blue-500);
}

.close-button {
  cursor: pointer;
  padding: 0;
  color: var(--gray-500);
}

.icon {
  width: 18px;
  height: 18px;
}

.main {
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 8px;
}
.header {
  display: flex;
  gap: 10px;
}

.content-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.title {
  font: var(--text-sm-medium);
}
.title.success {
  color: var(--green-600);
}

.title.info {
  color: var(--blue-500);
}

.title.warning {
  color: var(--orange-500);
}

.description {
  font: var(--text-sm-regular);
  color: var(--gray-900);
}

.actions-container {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
