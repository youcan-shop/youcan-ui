<script setup lang="ts">
import { computed } from 'vue';
import { SlickItem, SlickList } from 'vue-slicksort';
import type { DraggableItemType } from './types';
import DraggableItem from './DraggableItem.vue';

const props = defineProps<{
  modelValue: DraggableItemType[]
  canCheck?: boolean
}>();

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
  return model.value.findIndex(model => model.value === value);
}
</script>

<template>
  <SlickList v-model:list="model" axis="y" class="draggable" :use-drag-handle="true">
    <SlickItem v-for="(item, i) in model" :key="item.value" :index="i">
      <DraggableItem v-model="model[getItemModel(item.value)]" class="draggable-item" :can-check="canCheck" @check="handleCheck" />
    </SlickItem>
  </SlickList>
</template>

<style scoped>
.draggable {
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid var(--gray-100);
  border-radius: 4px;
  background-color: var(--gray-50);
  gap: 8px;
}
</style>
