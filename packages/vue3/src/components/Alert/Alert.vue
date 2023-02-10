<script setup lang="ts">
import type { AlertType } from './types';
import TertiaryButton from '~/components/Button/TertiaryButton.vue';

const props = withDefaults(
  defineProps<{
    type: AlertType
    closeAfterDuration?: number
  }>(),
  { type: 'warning' },
);

const emit = defineEmits<{
  (e: 'close'): void
}>();

const handleClose = () => {
  emit('close');
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
            'i-youcan-info-1 info': type === 'info',
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

  display: flex;
  position: relative;
  width: 496px;
  margin-bottom: 12px;
  padding: 12px;
  border: 1px solid var(--gray-100);
  border-left: 4px solid var(--border-color);
  border-width: 0 0 0 1px;
  border-radius: 4px;
  background-color: var(--base-white);
  box-shadow: rgb(144 135 135 / 2%) 0 1px 3px 0, rgb(27 31 35 / 15%) 0 0 0 1px;
  gap: 8px;
}

.toast-block.warning {
  --border-color: var(--yellow-700);
}

.toast-block.success {
  --border-color: var(--green-600);
}

.toast-block.info {
  --border-color: var(--blue-500);
}

.content-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
}

.description {
  color: var(--gray-900);
  font: var(--text-sm-regular);
}

.content-container .description {
  padding-bottom: 4px;
}

.icon {
  width: 18px;
  height: 18px;
}

.icon.warning {
  color: var(--yellow-700);
}

.icon.success {
  color: var(--green-600);
}

.icon.info {
  color: var(--blue-500);
}

.close-button {
  padding: 0;
  color: var(--gray-500);
  cursor: pointer;
}

.main {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 8px;
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
  color: var(--yellow-700);
}
</style>
