<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import type { TableData } from '~/components/Table/types';
import Table from '~/components/Table/Table.vue';

const data = ref<TableData[]>([{
  row: {
    isEditable: true,
    image: {
      variant: 'counter',
      data: {
        label: 'ssss',
        modelValue: '6',
        min: 4,
        max: 7,
      },
    },
  },
}]);
</script>

<template>
  <div>
    <Table :data="data" :columns="[{ accessor: 'image', label: 'input', fullContent: true }, { accessor: 'isEditable', label: 'input', size: '30.0%' }]" />
  </div>
</template>
