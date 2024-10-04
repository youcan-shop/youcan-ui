<script setup lang="ts">
import { computed } from 'vue';
import type { RatingProps } from '~/types';

const props = withDefaults(defineProps<RatingProps>(), {
  stars: 5,
  rating: 0,
  modelValue: 0,
  editable: false,
});

const emit = defineEmits(['update:modelValue']);

const model = computed<number>({
  get: () => props.modelValue,
  set: (value: number) => emit('update:modelValue', value),
});

const updateRatingModel = (star: number) => {
  if (model.value === star) {
    model.value = 0;

    return;
  }
  model.value = star;
};
</script>

<template>
  <div v-if="editable">
    <i v-for="star in stars" :key="star" i-youcan-star class="yc-rating--editable" :class="{ 'yc-rating--active': star <= model }" @mousedown="updateRatingModel(star)" />
  </div>
  <div v-else class="yc-rating">
    <i v-for="star in stars" :key="star" class="yc-rating--star i-youcan-star" :class="{ 'yc-rating--active': star <= rating }" />
  </div>
</template>

<style scoped>
@import "@youcan/styles/rating";
</style>
