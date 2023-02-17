<script setup lang="ts">
import { ref } from 'vue';
import type { DraggableItemType } from '~/components/Draggable/types';
import DragV3 from '~/components/Draggable/DragV3.vue';
const items: DraggableItemType[] = [
  { label: 'test 1', value: 'test', checked: true },
  { label: 'test 2', value: 'test', checked: true },
  { label: 'test 3', value: 'test', checked: true },
  { label: 'test 4', value: 'test', checked: true },
];

const mode = ref(items);
</script>

<template>
  <!-- <Draggable v-model="mode" :can-check="true" /> -->
  <DragV3 :items="items" />
</template>
