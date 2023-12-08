<script setup lang="ts">
import { computed } from 'vue';
import NavigationButton from './Internal/NavigationButton.vue';
import SecondaryButton from '~/components/Button/SecondaryButton.vue';

const props = withDefaults(defineProps<{
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

  if (props.size <= 3) {
    for (let i = 1; i <= size; i++) {
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

const barJustifyContentStyle = props.hidePerPage ? 'center' : 'space-between';
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
  justify-content: v-bind(barJustifyContentStyle);
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
