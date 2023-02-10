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
    <object v-if="src" :data="src" type="image/png" class="image">
      <div class="placeholder">
        <i class="i-youcan-image icon" />
      </div>
    </object>
    <div v-else class="placeholder">
      <i class="i-youcan-image icon" />
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
  overflow: hidden;
  border: 1px solid var(--gray-100);
  border-radius: 4px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
}

.thumbnail.size-small {
  --size: 40px;
}

.thumbnail.size-large {
  --size: 44px;
}

.placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.placeholder .icon {
  display: block;
  width: 20px;
  height: 20px;
  color: var(--gray-300);
}

.image {
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
}
</style>
