<script setup lang="ts">
defineProps<{ file: File; progress?: number; error?: string }>();
const emit = defineEmits(['delete']);
</script>

<template>
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
      <i class="icon-remove i-youcan-trash" @click="emit('delete', file)" />
    </div>
  </div>
</template>

<style scoped>
.file {
  gap: 8px;
  display: flex;
  padding: 12px 16px;
  border-radius: 8px;
  align-items: center;
  box-shadow: var(--shadow-xs-gray);
  border: 1px solid var(--gray-100);
  background-color: var(--base-white);
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
  color: var(--blue-500);
  animation: spinner 1200ms linear infinite;
}

.actions {
  margin-inline-start: auto;
}

.actions .icon-remove {
  cursor: pointer;
  color: var(--red-500);
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
</style>
