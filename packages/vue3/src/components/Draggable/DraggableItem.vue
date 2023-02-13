<script setup lang="ts">
import { computed } from 'vue';
import Checkbox from '../Checkbox/Checkbox.vue';
import type { DraggableItemType } from './types';

const props = defineProps<{
  modelValue: DraggableItemType
  canCheck?: boolean
}>();

const emit = defineEmits<{
  (event: 'update:model-value', modelValue: DraggableItemType): void
  (event: 'check', item: DraggableItemType, checked: boolean): void
}>();

const model = computed({
  get: () => ({ ...props.modelValue, checked: props.modelValue.checked || false }),
  set: (value: DraggableItemType) => emit('update:model-value', value),
});

function handleCheck(value: boolean) {
  emit('check', model.value, value);

  model.value = { ...model.value, checked: value };
}
</script>

<template>
  <li class="draggable-item">
    <i class="handle i-youcan-dots-six-vertical" />
    <span class="label">{{ model.label }}</span>
    <Checkbox v-if="canCheck" v-model="model.checked" @update:model-value="handleCheck" />
  </li>
</template>

<style scoped>
.draggable-item {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 16px;
  border: 1px solid var(--gray-100);
  border-radius: 4px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
  gap: 8px;
  user-select: none;
}

.handle {
  flex: none;
  width: 20px;
  height: 20px;
  color: var(--gray-500);
  cursor: grab;
}

.handle:active {
  cursor: grabbing;
}

.label {
  width: 100%;
  color: var(--gray-900);
  font: var(--text-sm-regular);
}
</style>
