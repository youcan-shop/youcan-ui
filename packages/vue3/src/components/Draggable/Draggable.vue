<script setup lang="ts">
import { computed } from 'vue';
import { SlickItem, SlickList } from 'vue-slicksort';
import DraggableItem from './DraggableItem.vue';
import type { DraggableItemType } from './types';

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

const handleCheck = (value: DraggableItemType, checked: boolean) => emit('check', value, checked);
</script>

<template>
  {{ model }}
  <div class="draggable">
    <SlickList v-model:list="model" axis="y">
      <SlickItem v-for="(_, i) in model" :key="i" :index="i">
        <DraggableItem v-model="model[i]" :can-check="canCheck" @check="(value, checked) => handleCheck(value, checked)" />
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
</style>
