<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import NavigationButton from './Internal/NavigationButton.vue';
import type { DropdownValue, PaginationBarProps } from '~/types';
import { Button, Dropdown } from '~/components';

const props = withDefaults(defineProps<PaginationBarProps>(), {
  hidePerPage: false,
  previousLabel: 'Previous',
  nextLabel: 'Next',
  perPageLabel: 'Showing :count of :total results',
});

const emit = defineEmits(['update:current', 'update:perPage']);

const perPageItems = ref<DropdownValue[]>([]);
const perPageModel = ref<DropdownValue | null>(null);

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

function updatePerPageModel(perPage: DropdownValue) {
  emit('update:perPage', parseInt(perPage.label));
}

const barJustifyContentStyle = props.hidePerPage ? 'center' : 'space-between';

onMounted(() => {
  if (props.perPageOptions && props.perPageOptions.length) {
    const options: DropdownValue[] = [];
    props.perPageOptions.forEach((el, i) => {
      const item = { key: i, label: String(el) };
      options.push(item);
      if (el === props.perPage) {
        perPageModel.value = item;
      }
    });
    perPageItems.value = options;
  }
});
</script>

<template>
  <div class="pagination-bar">
    <span v-if="!hidePerPage" class="text">{{ formattedPerPageLabel }}</span>
    <div class="navigation">
      <Dropdown v-if="perPage && perPageItems.length" v-model="perPageModel" :clearable="false" class="per-page-dropdown" :items="perPageItems" @update:model-value="updatePerPageModel" />
      <Button variant="secondary" size="sm" :disabled="current === 1" @click="updateCurrentPage(current - 1)">
        {{ previousLabel }}
      </Button>
      <NavigationButton
        v-for="index in handlePaginationButtons" :key="index" :current="current" :index="index"
        @click="updateCurrentPage(index as number)"
      />
      <Button variant="secondary" size="sm" :disabled="current === size" @click="updateCurrentPage(current + 1)">
        {{ nextLabel }}
      </Button>
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

.per-page-dropdown {
  min-width: 85px;
  max-width: 85px;
}

.per-page-dropdown:deep(.dropdown-input .label .text) {
  padding: 0 !important;
}
</style>
