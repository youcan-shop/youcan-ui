<script setup lang="ts">
import { ref } from 'vue';
import '~/assets/main.css';
import { DraggableItem } from '~/components';

const helloKitty = ref({
  label: 'Order ID',
  value: 'order_id',
  selected: false,
});
</script>

<template>
  <div>
    <DraggableItem v-model="helloKitty" />
  </div>
</template>
