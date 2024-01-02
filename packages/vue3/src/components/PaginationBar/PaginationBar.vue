<script setup lang="ts">
import { computed } from 'vue';
import NavigationButton from './Internal/NavigationButton.vue';
import SecondaryButton from '~/components/Button/SecondaryButton.vue';

const props = withDefaults(defineProps<{
  count: number | string
  total: number
  current: number
  size: number
  hidePerPage?: boolean
  previousLabel?: string
  nextLabel?: string
  perPageLabel?: string
}>(), {
  hidePerPage: false,
  previousLabel: 'Previous',
  nextLabel: 'Next',
  perPageLabel: 'Showing :count of :total results',
});

const emit = defineEmits<{
  (event: 'update:current', value: number): void
}>();

const variables: Array<string> = ['count', 'total'];

const formattedPerPageLabel = computed(() => {
  let text = props.perPageLabel;
  for (const variable of variables) {
    text = text.replace(`:${variable}`, `${props[variable as keyof typeof props]}`);
  }

  return text;
});

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

const barJustifyContentStyle = props.hidePerPage ? 'center' : 'space-between';
</script>

<template>
  <div class="pagination-bar">
    <span v-if="!hidePerPage" class="text">{{ formattedPerPageLabel }}</span>
    <div class="navigation">
      <SecondaryButton size="sm" :disabled="current === 1" @click="updateCurrentPage(current - 1)">
        {{ previousLabel }}
      </SecondaryButton>
      <NavigationButton
        v-for="index in handlePaginationButtons" :key="index" :current="current" :index="index"
        @click="updateCurrentPage(index as number)"
      />
      <SecondaryButton size="sm" :disabled="current === size" @click="updateCurrentPage(current + 1)">
        {{ nextLabel }}
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
