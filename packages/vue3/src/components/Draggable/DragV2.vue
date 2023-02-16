<script setup lang="ts">
import { computed, ref } from 'vue';
import { launder } from '~/utils/type.util';
const itemsList = [
  { id: 'ui-1', title: 'test 1' },
  { id: 'ui-2', title: 'test 2' },
  { id: 'ui-3', title: 'test 3' },
  { id: 'ui-4', title: 'test 4' },
];

const draggableItems = ref([]);
const showDropTarget = ref(false);
const dragItemClientY = ref();

const handleDragStart = () => {
  showDropTarget.value = true;
};

const handleDrag = (payload: DragEvent) => {
  dragItemClientY.value = payload.clientY;
};

const handleDragEnd = (payload: DragEvent) => {
  showDropTarget.value = false;
};

const dragArea = computed(() => {
  const v = draggableItems.value?.reverse().find((el) => {
    const { bottom, height } = launder<HTMLDivElement>(el)?.getBoundingClientRect();

    return dragItemClientY.value >= bottom - height;
  });

  const _dragArea = `${v?.id?.split('el_')[1]}`;

  return _dragArea;
});
</script>

<template>
  {{ dragArea }}

  <div class="draggable">
    <div
      v-for="item in itemsList"
      :id="item.id"
      :key="item.id"
    >
      <div v-if="showDropTarget && dragArea === item.id" class="drop-target" />
      <div v-else :id="`el_${item.id}`" ref="draggableItems" class="draggable-item" :draggable="true" @dragstart="handleDragStart" @drag="handleDrag" @dragend="handleDragEnd">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<style scoped>
    .draggable {
        padding: 10px;
        background: #eaeaea;
    }
    .draggable-item{
        padding: 10px;
        background: #e2e0e0;
        margin-bottom: 10px;
    }
    .drop-target{
        background-color: #bababa;
        width:100%;
        height: 40px;
    }
    .hidden {
        opacity: 0;
    }
</style>
