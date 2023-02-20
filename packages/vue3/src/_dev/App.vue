<script setup lang="ts">
import { ref } from 'vue';
import type { DraggableItemType } from '~/components/Draggable/types';
import Draggable from '~/components/Draggable/Draggable.vue';
const items: DraggableItemType[] = [
  { id: 1, label: 'test 1', value: 'test', checked: false },
  { id: 2, label: 'test 2', value: 'test', checked: false },
  { id: 3, label: 'test 3', value: 'test', checked: false },
  { id: 4, label: 'test 4', value: 'test', checked: true },
];

const mode = ref(items);
</script>

<template>
  <Draggable v-model="mode" :can-check="true" />
</template>
