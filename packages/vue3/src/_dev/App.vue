<script setup lang="ts">
import { ref } from 'vue';
import '~/assets/main.css';
import { Draggable } from '~/components';

const items = ref([{
  label: 'Order ID',
  value: 'order_id',
}, {
  label: 'Order ID 2',
  value: 'order_id',
}]);
</script>

<template>
  <div>
    <Draggable v-model="items" :can-check="true" />
    <textarea cols="30" v-text="JSON.stringify(items)" />
  </div>
</template>
