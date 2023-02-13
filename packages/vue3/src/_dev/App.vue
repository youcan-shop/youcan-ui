<script setup lang="ts">
import { ref } from 'vue';
import '~/assets/main.css';
import { Draggable, DraggableItem } from '~/components';

const helloKitty = ref({
  label: 'Order ID',
  value: 'order_id',
  selected: false,
});

const helloKitties = ref([{
  label: 'Order ID',
  value: 'order_id',
  selected: false,
}, {
  label: 'Order ID 2',
  value: 'order_id',
  selected: false,
}]);
</script>

<template>
  <div>
    <DraggableItem v-model="helloKitty" />
    <Draggable v-model="helloKitties" />
    <textarea cols="30" v-text="JSON.stringify(helloKitties)" />
  </div>
</template>
