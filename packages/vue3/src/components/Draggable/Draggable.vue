<script setup lang="ts">
import { computed, ref } from 'vue';
import { Sortable } from 'sortablejs-vue3';
import DraggableItem from './DraggableItem.vue';
import type { DraggableItemType } from './types';

const props = defineProps<{
  list: DraggableItemType[]
  modelValue: DraggableItemType[]
  canCheck?: boolean
}>();

const emit = defineEmits<{
  (event: 'update:model-value', modelValue: DraggableItemType[]): void
  (event: 'check', item: DraggableItemType, checked: boolean): void
}>();

const list = ref(props.list);

const model = computed({
  get: () => props.modelValue,
  set: (value: DraggableItemType[]) => emit('update:model-value', value),
});

const handleCheck = (value: DraggableItemType, checked: boolean) => emit('check', value, checked);

function moveItemInArray(from: number, to: number) {
  const _new = list.value;
  console.log(_new);
  const item = _new.splice(from, 1)[0];
  _new.splice(to, 0, item);
  console.log('-----');
  console.log(list.value);
  list.value = _new;
  model.value = _new;
}

const handleEnd = (e: any) => {
  moveItemInArray(e.oldIndex, e.newIndex);
};
</script>

<template>
  {{ list }}
  <Sortable
    :list="list"
    tag="ul"
    item-key="value"
    class="draggable"
    @end="handleEnd"
  >
    <template #item="{ index }">
      <DraggableItem v-model="model[index]" :can-check="canCheck" @check="(value, checked) => handleCheck(value, checked)" />
    </template>
  </Sortable>
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
