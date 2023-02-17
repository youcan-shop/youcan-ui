<script setup lang="ts">
import { ref } from 'vue';
import Draggable from '~/components/Draggable/Draggable.vue';
import type { DraggableItemType } from '~/components/Draggable/types';
const items: DraggableItemType[] = [
  { label: 'test 1', value: 'test', checked: true },
  { label: 'test 2', value: 'test', checked: true },
  { label: 'test 3', value: 'test', checked: true },
  { label: 'test 4', value: 'test', checked: true },
];

const mode = ref(items);
</script>

<template>
  <Draggable v-model="mode" :list="items" :can-check="true" />
  <hr>
  <pre>
    {{ mode }}
  </pre>
</template>
