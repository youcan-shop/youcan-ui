<script setup lang="ts">
import { computed } from 'vue';
import NavigationButton from './Internal/NavigationButton.vue';
import SecondaryButton from '~/components/Button/SecondaryButton.vue';

const props = defineProps<{
  count: number
  total: number
  current: number
  size: number
}>();

const emit = defineEmits<{
  (event: 'update:current', value: number): void
}>();

const handlePaginationButtons = computed(() => {
  const paginationButtons = [];

  if (props.size <= 3) {
    for (let i = 1; i <= props.size; i++) {
      paginationButtons.push(i);
    }
  }
  else if (props.current === 1) {
    paginationButtons.push(1, 2, 3, '...', props.size);
  }
  else if (props.current === 2) {
    paginationButtons.push(1, 2, 3, '...', props.size);
  }
  else if (props.current === props.size) {
    paginationButtons.push(1, '...', props.size - 2, props.size - 1, props.size);
  }
  else if (props.current === props.size - 1) {
    paginationButtons.push(1, '...', props.size - 2, props.size - 1, props.size);
  }
  else {
    paginationButtons.push(1, '...', props.current - 1, props.current, props.current + 1, '...', props.size);
  }

  return paginationButtons;
});

function updateCurrentPage(index: number) {
  if (index === props.current) {
    return;
  }

  emit('update:current', index);
}
</script>

<template>
  <div class="pagination-bar">
    <span class="text">Showing {{ count }} of {{ total }} results</span>
    <div class="navigation">
      <SecondaryButton size="sm" :disabled="current === 1" @click="updateCurrentPage(current - 1)">
        Previous
      </SecondaryButton>
      <NavigationButton v-for="index in handlePaginationButtons" :key="index" :current="current" :index="index"
        @click="updateCurrentPage(index as number)" />
      <SecondaryButton size="sm" :disabled="current === size" @click="updateCurrentPage(current + 1)">
        Next
      </SecondaryButton>
    </div>
  </div>
</template>

<style scoped>
.pagination-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--base-white);
  padding: 0 20px;
  height: 60px;
}

.pagination-bar .text {
  font: var(--text-sm-regular);
  color: var(--gray-500);
}

.pagination-bar .navigation {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
