<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import type { TableData } from '~/components/Table/types';
import Table from '~/components/Table/Table.vue';

const data = ref<TableData[]>([{
  row: {
    image: {
      variant: 'input',
      data: {
        modelValue: '6',
        type: 'number',
        min: 4,
        max: 7,
      },
    },
  },
}]);
</script>

<template>
  <div>
    <Table :data="data" :columns="[{ accessor: 'image', label: 'input' }]" />
  </div>
</template>
