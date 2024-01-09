<script setup lang="ts">
import { computed, onBeforeMount, onUpdated } from 'vue';
import type { RatingInputProps } from './types';

const props = withDefaults(
  defineProps<RatingInputProps>(),
  { ceil: 5, modelValue: 0 },
);

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

onBeforeMount(() => {
  if (props.modelValue > props.ceil) {
    throw new Error(
      'The rating\'s ceil must be higher than or equal to the score.',
    );
  }
});

onUpdated(() => {
  if (props.modelValue > props.ceil) {
    throw new Error(
      'The rating\'s ceil must be higher than or equal to the score.',
    );
  }
});
</script>

<template>
  <div class="rating">
    <i v-for="star in ceil" :key="star" i-youcan-star class="star" :class="{ active: star <= model }" @mousedown="updateRatingModel(star)" />
  </div>
</template>

<style scoped>
.star {
  display: inline-block;
  box-sizing: border-box;
  margin-inline-end: 2px;
  color: var(--gray-100);
  cursor: pointer;
}

.star.active {
  color: var(--yellow-500);
}
</style>
