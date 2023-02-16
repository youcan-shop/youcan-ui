<script setup lang="ts">
import { ref, watch } from 'vue';
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

watch(dragItemClientY, () => {
  draggableItems.value?.forEach((el, index) => {
    const { bottom, height } = launder<HTMLDivElement>(el)?.getBoundingClientRect();

    document.querySelectorAll('.drop-target').forEach((el) => {
      console.log(dragItemClientY);
      console.log(el.parentElement.getBoundingClientRect());

    //   el.style.display = 'none';
    });

    if (bottom - height > dragItemClientY.value) {
      document.querySelector(`.before[data-index="${index}"]`).style.background = 'red';
      document.querySelector(`.after[data-index="${index}"]`).style.background = 'white';
      console.log('before', el.id, index);
    }
    else {
    //   document.querySelector('.after').style.display = 'block';
      document.querySelector(`.before[data-index="${index}"]`).style.background = 'white';
      document.querySelector(`.after[data-index="${index}"]`).style.background = 'blue';
      console.log('after', el.id, index);
    }
  });
});
</script>

<template>
  <div class="draggable">
    <div
      v-for="(item, index) in itemsList"

      :key="item.id"
    >
      <div class="drop-target before" :data-index="index">
        {{ (index + 1) * 2 - 1 }}
      </div>
      <div :id="item.id" ref="draggableItems" class="draggable-item" :draggable="true" @dragstart="handleDragStart" @drag="handleDrag" @dragend="handleDragEnd">
        {{ item.title }}
      </div>
      <div class="drop-target after" :data-index="index">
        {{ (index + 1) * 2 }}
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
    .drop-target .before, .drop-taget .after {
        display: none;
    }
    .hidden {
        opacity: 0;
    }
</style>
