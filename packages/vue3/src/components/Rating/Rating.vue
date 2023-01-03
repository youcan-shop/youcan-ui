<script setup lang="ts">
import { onBeforeMount } from 'vue';

const props = withDefaults(
  defineProps<{ ceil?: number; score: number }>(),
  { ceil: 5, score: 0 },
);

onBeforeMount(() => {
  if (props.score > props.ceil) {
    throw new Error('The rating\'s ceil must be higher than or equal to the score.');
  }
});
</script>

<template>
  <div class="rating">
    <i v-for="idx in score" :key="idx" i-youcan-star class="star active" />
    <i v-for="idx in ceil - score" :key="score + idx" i-youcan-star class="star inactive" />
  </div>
</template>

<style scoped>
.star {
  display: inline-block;
  margin-inline-end: 2px;
}

.star.inactive {
  color: var(--gray-100);
}

.star.active {
  color: var(--yellow-500);
}
</style>
