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

function getItemModel(itemId: string | number) {
  return model.value.findIndex(model => model.id === itemId);
}
</script>

<template>
  <div class="draggable">
    <SlickList v-model:list="model" axis="y">
      <SlickItem v-for="(item, i) in model" :key="item.id" :index="i">
        <DraggableItem v-model="model[getItemModel(item.id)]" class="draggable-item" :can-check="canCheck" @check="(value: DraggableItemType, checked:boolean) => handleCheck(value, checked)" />
      </SlickItem>
    </SlickList>
  </div>
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

.draggable-item{
  margin-bottom: 10px;
}
</style>
