<script setup lang="ts">
import { onBeforeMount } from 'vue';

const props = withDefaults(defineProps<{ ceil?: number; score: number }>(), {
  ceil: 5,
  score: 0,
});

onBeforeMount(() => {
  if (props.score > props.ceil) {
    throw new Error(
      'The rating\'s ceil must be higher than or equal to the score.',
    );
  }
});
</script>

<template>
  <div class="rating">
    <i v-for="idx in ceil" :key="idx" class="star i-youcan-star" :class="{ active: idx <= score }" />
  </div>
</template>

<style scoped>
.rating {
  display: flex;
  align-items: center;
}

.star {
  display: block;
  margin-inline-end: 2px;
  color: var(--gray-100);
}

.star.active {
  color: var(--yellow-500);
}
</style>
