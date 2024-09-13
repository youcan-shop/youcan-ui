<script setup lang="ts">
import type { BreadcrumbItemProps } from './types';

const { isCurrent, label, to } = defineProps<BreadcrumbItemProps>();
</script>

<template>
  <span v-if="isCurrent" aria-current="page" class="yc-crumb-item yc-current">
    {{ label }}
  </span>
  <a
    v-else
    class="yc-crumb-item"
    :href="to"
  >
    {{ label }}
  </a>
</template>

<style scoped>
@import "@youcan/styles/breadcrumbs";
</style>
