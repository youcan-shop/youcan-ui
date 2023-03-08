<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import type { TableActions, TableData } from '~/components/Table/types';
import Table from '~/components/Table/Table.vue';

const data = ref<TableData[]>([{
  row: {
    isEditable: true,
    image: {
      variant: 'counter',
      data: {
        modelValue: '6',
        min: 4,
        max: 7,
      },
    },
  },
  children: [
    {
      isEditable: true,
    },
    {
      isEditable: false,
    },
  ],
}]);

const actions = ref<TableActions[]>([
  {
    label: 'sss',
    criteria: (xxx) => {
      console.log(xxx);

      return true;
    },
    iconName: 'i-youcan-x',
  },
]);
</script>

<template>
  <div>
    <Table :actions="actions" :data="data" :columns="[{ accessor: 'image', label: 'input', fullContent: true }, { accessor: 'isEditable', label: 'input', size: '50.0%' }]" />
  </div>
</template>
