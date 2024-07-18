<script setup lang="ts">
import type { BreadcrumbItemProps } from './types';

const { isCurrent, label, to } = defineProps<BreadcrumbItemProps>();
</script>

<template>
  <span v-if="isCurrent" aria-current="page" class="crumb-item current">
    {{ label }}
  </span>
  <a
    v-else
    class="crumb-item"
    :href="to"
  >
    {{ label }}
  </a>
</template>

<style scoped>
.crumb-item {
  transition: color 0.3s ease;
  color: var(--gray-400);
  text-decoration: none;
}

.crumb-item:hover {
  color: var(--brand-400);
  text-decoration: underline;
  text-underline-offset: 8px;
}

.current {
  color: var(--base-black);
}

.current:hover {
  color: var(--base-black);
  text-decoration: none;
}
</style>
