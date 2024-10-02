<script setup lang="ts">
import type { SkeletonProps } from '~/types';

withDefaults(
  defineProps<SkeletonProps>(),
  {
    type: 'text',
    lines: 5,
  },
);
</script>

<template>
  <div v-if="type === 'text'" class="yc-skeleton__content">
    <div v-for="index in lines" :key="index" class="yc-skeleton__pulse">
      <div class="yc-skeleton__content__line" />
    </div>
  </div>
  <div v-if="type === 'media'" class="yc-skeleton__media yc-skeleton__pulse">
    <i class="i-youcan:image yc-skeleton__media__icon" />
  </div>
  <div v-if="type === 'card'" class="yc-skeleton__card yc-skeleton__pulse" />
</template>

<style scoped>
@import "@youcan/styles/skeleton";
</style>
