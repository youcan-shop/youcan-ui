<script setup lang="ts">
import type { BarLoadingProps } from '~/types';

defineProps<BarLoadingProps>();
</script>

<template>
  <div class="bar-loading" />
</template>

<style scoped>
.bar-loading {
  position: relative;
  width: 160px;
  height: 4px;
  overflow: hidden;
  border-radius: 2px;
  background-color: var(--gray-100);
}

.bar-loading::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  animation: progress 1200ms ease-in-out backwards alternate  infinite;
  border-radius: 2px;
  background-color: v-bind(color);
}

@keyframes progress {
  0% { transform: translateX(-93%); }
  100% { transform: translateX(93%); }
}
</style>
