<script setup lang="ts">
import { computed, onBeforeMount, onUpdated } from 'vue';

const props = withDefaults(
  defineProps<{ ceil?: number; modelValue: number }>(),
  { ceil: 5, modelValue: 0 },
);

const emit = defineEmits(['update:modelValue']);

const model = computed<number>({
  get: () => props.modelValue,
  set: (value: number) => emit('update:modelValue', value),
});

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
    <i
      v-for="idx in ceil" :key="idx" i-youcan-star class="star" :class="{ active: idx <= model }"
      @mousedown="() => model = idx"
    />
  </div>
</template>

<style scoped>
.star {
  display: inline-block;
  margin-inline-end: 2px;
  color: var(--gray-100);
  cursor: pointer;
}

.star.active {
  color: var(--yellow-500);
}
</style>
