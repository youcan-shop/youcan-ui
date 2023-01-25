<script setup lang="ts">
import type { ToastType } from './types';

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
  console.log('close');
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
            'i-tabler:alert-triangle warning': type === 'warning',
            'i-tabler:circle-check success': type === 'success',
            'i-tabler:info-circle info': type === 'info',
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
        <button
          class="close-button" @click="handleClose"
        >
          <i class="i-tabler:x" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.toast-block {
  width: 396px;
  display: flex;
  padding: 12px 12px 16px;
  gap: 8px;
  background-color: var(--base-white);
  border-radius: 8px;
  position: relative;
  padding: 16px;
  border: 1px solid var(--gray-100);
}

.toast-block.warning {
  border-left: 4px solid var(--orange-500);
}

.toast-block.success {
  border-left: 4px solid var(--green-600);
}

.toast-block.info {
  border-left: 4px solid var(--blue-500);
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
  border: 0;
  background: transparent;
  padding: 0;
  color: var(--gray-500);
}

.icon {
  width: 18px;
  height: 18px;
}

.icon:hover {
  background: #f3f3f6;
}

.main {
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 10px;
}
.header {
  display: flex;
  column-gap: 10px;
}

.content-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.title {
  font: var(--text-sm-medium);
  padding-bottom: 4px;
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
