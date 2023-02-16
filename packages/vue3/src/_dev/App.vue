<script setup lang="ts">
import Draggable from '~/components/Draggable/Draggable.vue';
import DraggableItem from '~/components/Draggable/DraggableItem.vue';
import DragV2 from '~/components/Draggable/DragV2.vue'
import {ref} from "vue"
import type { DraggableItemType } from '~/components/Draggable/types';
const items: DraggableItemType[] = [
  {label: 'test 1', value: 'test', checked:true},
  {label: 'test 2', value: 'test', checked:true},
  {label: 'test 3', value: 'test', checked:true} ,
  {label: 'test 4', value: 'test', checked:true} 
]

const mode = ref(items);



</script>

<template>
  <DragV2/>

</template>