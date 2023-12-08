<script setup lang="ts">
import { computed } from 'vue';
import NavigationButton from './Internal/NavigationButton.vue';
import SecondaryButton from '~/components/Button/SecondaryButton.vue';

const {
  count,
  total,
  current,
  size,
  hidePerPage,
} = withDefaults(defineProps<{
  count: number
  total: number
  current: number
  size: number
  hidePerPage: boolean
}>(), {
  hidePerPage: false,
});

const emit = defineEmits<{
  (event: 'update:current', value: number): void
}>();

const handlePaginationButtons = computed(() => {
  const paginationButtons = [];

  if (size <= 3) {
    for (let i = 1; i <= size; i++) {
      paginationButtons.push(i);
    }
  }
  else if (current === 1) {
    paginationButtons.push(1, 2, 3, '...', size);
  }
  else if (current === 2) {
    paginationButtons.push(1, 2, 3, '...', size);
  }
  else if (current === size) {
    paginationButtons.push(1, '...', size - 2, size - 1, size);
  }
  else if (current === size - 1) {
    paginationButtons.push(1, '...', size - 2, size - 1, size);
  }
  else {
    paginationButtons.push(1, '...', current - 1, current, current + 1, '...', size);
  }

  return paginationButtons;
});

function updateCurrentPage(index: number) {
  if (index === current) {
    return;
  }

  emit('update:current', index);
}

const barJustificationStyle = hidePerPage ? 'center' : 'space-between';
</script>

<template>
  <div class="pagination-bar">
    <span v-if="!hidePerPage" class="text">Showing {{ count }} of {{ total }} results</span>
    <div class="navigation">
      <SecondaryButton size="sm" :disabled="current === 1" @click="updateCurrentPage(current - 1)">
        Previous
      </SecondaryButton>
      <NavigationButton
        v-for="index in handlePaginationButtons" :key="index" :current="current" :index="index"
        @click="updateCurrentPage(index as number)"
      />
      <SecondaryButton size="sm" :disabled="current === size" @click="updateCurrentPage(current + 1)">
        Next
      </SecondaryButton>
    </div>
  </div>
</template>

<style scoped>
.pagination-bar {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: v-bind(barJustificationStyle);
  height: 60px;
  padding: 0 20px;
  background-color: var(--base-white);
}

.pagination-bar .text {
  color: var(--gray-500);
  font: var(--text-sm-regular);
}

.pagination-bar .navigation {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
