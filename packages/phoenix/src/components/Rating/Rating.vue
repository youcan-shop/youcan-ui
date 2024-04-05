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
    <i v-for="star in stars" :key="star" i-youcan-star class="editable-star" :class="{ active: star <= model }" @mousedown="updateRatingModel(star)" />
  </div>
  <div v-else class="rating">
    <i v-for="star in stars" :key="star" class="star i-youcan-star" :class="{ active: star <= rating }" />
  </div>
</template>

<style scoped>
.rating {
  display: flex;
  box-sizing: border-box;
  align-items: center;
}

.rating .star {
  display: block;
  margin-inline-end: 2px;
  color: var(--gray-100);
}

.editable-star {
  display: inline-block;
  box-sizing: border-box;
  margin-inline-end: 2px;
  color: var(--gray-100);
  cursor: pointer;
}

.editable-star.active,
.star.active {
  color: var(--yellow-500);
}
</style>
