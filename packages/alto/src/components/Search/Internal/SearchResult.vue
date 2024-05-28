<script setup lang="ts">
import type { SearchResultProps } from '~/types';
import { Rating, Thumbnail } from '~/components';

defineProps<SearchResultProps>();
</script>

<template>
  <button class="result" type="button">
    <Thumbnail v-if="thumbnail" :src="result.thumbnail" :alt="result.label" />

    <div class="label">
      {{ result.label }}
    </div>

    <div v-if="result.description" class="description">
      {{ result.description }}
    </div>

    <div v-if="result.suffix" class="suffix">
      <Rating v-if="result.suffix.type === 'rating'" :stars="result.suffix.stars" :rating="result.suffix.rating" />
    </div>
  </button>
</template>

<style scoped>
button {
  width: 100%;
  border: none;
  background: none;
  text-align: left;
}

.result {
  display: flex;
  align-items: center;
  height: 52px;
  padding: 0 16px;
  cursor: pointer;
  gap: 8px;
}

.label,
.description {
  font: var(--text-sm-regular);
}

.description {
  color: var(--gray-500);
}

.suffix {
  margin-inline-start: auto;
}

.result:hover {
  background-color: var(--gray-50);
}

.result:focus,
.result:active {
  outline: none;
  background: var(--gray-100);
}
</style>
