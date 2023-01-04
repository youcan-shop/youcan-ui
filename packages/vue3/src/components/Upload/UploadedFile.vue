<script setup lang="ts">
defineProps<{ file: File; progress?: number; error?: string }>();
const emit = defineEmits(['delete']);
</script>

<template>
  <div class="file">
    <div class="status-icon">
      <i v-if="error" i-youcan-warning class="icon-error" />
      <i v-else-if="progress" i-youcan-loading class="icon-loading" />
      <i v-else i-youcan-check class="icon-success" />
    </div>
    <div class="name">
      {{ file.name }}
    </div>
    <div class="actions">
      <i i-youcan-remove class="icon-remove" @click="emit('delete', file)" />
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
  box-shadow: var(--shadow-xs);
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
  margin-left: auto;
}

.actions .icon-remove {
  cursor: pointer;
  color: var(--red-500);
}

@keyframes spinner {
  to {transform: rotate(360deg);}
}
</style>
