<script setup lang="ts">
import { computed } from 'vue';
import draggable from 'vuedraggable';
import DraggableItem from './DraggableItem.vue';
import type { DraggableItemType } from './types';

const props = defineProps<{
  modelValue: DraggableItemType[]
}>();

const emit = defineEmits<{
  (event: 'update:model-value', modelValue: DraggableItemType[]): void
}>();

const model = computed({
  get: () => props.modelValue,
  set: (value: DraggableItemType[]) => emit('update:model-value', value),
});
</script>

<template>
  <draggable
    v-model="model"
    :component-data="{
      name: 'fade',
      type: 'transition-group',
    }"
    tag="ul"
    item-key="value"
    class="draggable"
    handle=".handle"
  >
    <template #item="{ index }">
      <DraggableItem v-model="model[index]" />
    </template>
  </draggable>
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
