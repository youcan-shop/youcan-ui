<script setup lang="ts">
import type { ThumbnailSize } from './types';

withDefaults(
  defineProps<{
    size: ThumbnailSize
    src?: string
    alt?: string
  }>(),
  {
    size: 'small',
  },
);
</script>

<template>
  <div class="thumbnail" :class="[`size-${size}`]">
    <img v-if="src" :src="src" :alt="alt" class="image" loading="lazy">
    <div v-else class="placeholder">
      <i class="i-youcan-camera icon" />
    </div>
  </div>
</template>

<style scoped>
.thumbnail {
  --size: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--size);
  height: var(--size);
  border-radius: 4px;
  box-shadow: var(--shadow-xs);
  background-color: var(--base-white);
  border: 1px solid var(--gray-100);
  overflow: hidden;
}

.thumbnail.size-small {
  --size: 40px;
}

.thumbnail.size-large {
  --size: 44px;
}

.placeholder .icon {
  display: block;
  color: var(--gray-300);
  width: 20px;
  height: 20px;
}

.image {
  width: 100%;
  height: 100%;
}
</style>
