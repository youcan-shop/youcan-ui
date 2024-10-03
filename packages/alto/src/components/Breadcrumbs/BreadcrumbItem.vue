<script setup lang="ts">
import type { BreadcrumbItemProps } from './types';

const { isCurrent, label, to } = defineProps<BreadcrumbItemProps>();
</script>

<template>
  <span v-if="isCurrent" aria-current="page" class="yc-breadcrumbs__link yc-breadcrumbs__link--current">
    {{ label }}
  </span>
  <a
    v-else
    class="yc-breadcrumbs__link"
    :href="to"
  >
    {{ label }}
  </a>
</template>

<style scoped>
@import "@youcan/styles/breadcrumbs";
</style>
