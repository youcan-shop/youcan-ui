<script setup lang="ts">
import { ref } from 'vue';
import type { DraggableItemType } from '~/components/Draggable/types';
import Draggable from '~/components/Draggable/Draggable.vue';
const items: DraggableItemType[] = [
  { label: 'test 1', value: 'test 1', checked: false },
  { label: 'test 2', value: 'test 2', checked: false },
  { label: 'test 3', value: 'test 3', checked: false },
  { label: 'test 4', value: 'test 4', checked: true },
];

const mode = ref(items);
</script>

<template>
  <Draggable v-model="mode" :can-check="true" />
</template>
