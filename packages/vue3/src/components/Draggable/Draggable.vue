<script setup lang="ts">
import { computed } from 'vue';
import { SlickItem, SlickList } from 'vue-slicksort';
import DraggableItem from './DraggableItem.vue';
import type { DraggableItemType, DraggableProps } from '~/types';

const props = defineProps<DraggableProps>();

const emit = defineEmits<{
  (event: 'update:model-value', modelValue: DraggableItemType[]): void
  (event: 'check', item: DraggableItemType, checked: boolean): void
}>();

const model = computed({
  get: () => props.modelValue,
  set: (value: DraggableItemType[]) => emit('update:model-value', value),
});

const handleCheck = (value: DraggableItemType, checked: boolean) => {
  emit('check', value, checked);
};

function getItemModel(value: unknown) {
  if (typeof value === 'undefined') return -1; // Handle error case
  return model.value.findIndex(model => model.value === value);
}
</script>

<template>
  <SlickList v-model:list="model" axis="y" class="draggable" :use-drag-handle="true">
    <SlickItem v-for="(item, i) in model" :key="item.value" :index="i">
      <DraggableItem v-model="model[getItemModel(item.value)]" :can-check="canCheck" @check="handleCheck" />
    </SlickItem>
  </SlickList>
</template>

<style scoped>
.draggable {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 16px;
  border: 1px solid var(--gray-200);
  border-radius: 4px;
  background-color: var(--gray-50);
  gap: 8px;
}
</style>
