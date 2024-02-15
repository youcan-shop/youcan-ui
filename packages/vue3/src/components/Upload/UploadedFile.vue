<script setup lang="ts">
import type { UploadedFileProps } from './types';

defineProps<UploadedFileProps>();
const emit = defineEmits(['delete']);
</script>

<template>
  <div class="file-container">
    <div class="file">
      <div class="status-icon">
        <i v-if="error" class="icon-error i-youcan-warning-circle" />
        <i v-else-if="progress" class="icon-loading i-youcan-circle-notch" />
        <i v-else class="icon-success i-youcan-check-circle" />
      </div>
      <div class="name">
        {{ file.name }}
      </div>
      <div class="actions">
        <i class="icon-remove i-youcan-trash" @click="() => emit('delete')" />
      </div>
    </div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
  </div>
</template>

<style scoped>
.file-container {
  display: flex;
  flex-direction: column;
  row-gap: 4px;
}

.file {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 12px 16px;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
  gap: 8px;
}

.file .name {
  color: var(--gray-500);
  font: var(--text-sm-regular);
}

.file .status-icon .icon-error {
  color: var(--yellow-500);
}

.file .status-icon .icon-success {
  color: var(--green-500);
}

.file .status-icon .icon-loading {
  animation: spinner 1200ms linear infinite;
  color: var(--blue-500);
}

.actions {
  margin-inline-start: auto;
}

.actions .icon-remove {
  color: var(--red-500);
  cursor: pointer;
}

.error {
  color: var(--red-500);
  font: var(--text-sm-regular);
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
</style>
