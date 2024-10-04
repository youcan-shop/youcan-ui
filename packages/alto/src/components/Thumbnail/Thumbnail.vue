<script setup lang="ts">
import type { ThumbnailProps } from '~/types';

withDefaults(
  defineProps<ThumbnailProps>(),
  {
    size: 'small',
    objectFit: 'cover',
  },
);
</script>

<template>
  <div class="yc-thumbnail" :class="[`yc-thumbnail--${size}`]">
    <img v-if="src" :src="src" class="yc-thumbnail__image">
    <div v-else class="yc-thumbnail__placeholder">
      <i class="i-youcan-image yc-thumbnail__icon" />
    </div>
  </div>
</template>

<style scoped>
@import "@youcan/styles/thumbnail";
</style>
