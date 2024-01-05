<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Draggable, DraggableItem } from '~/components';
import type { DraggableItemType } from '~/components/Draggable/types';

const items = ref<DraggableItemType[]>([
  {
    label: 'Navbar',
    value: 1,
  },
  {
    label: 'Hero',
    value: 2,
  },
  {
    label: 'Featured Products',
    value: 3,
  },
]);
</script>

<template>
  <div class="container">
    <Draggable v-model="items">
      <DraggableItem
        v-for="(item, index) in items"
        :key="item.value as number"
        v-model="items[index]"
      />
    </Draggable>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  margin: 10%;
  gap: 30px;
}
</style>
