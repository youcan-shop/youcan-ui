<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import type { TableActions, TableColumn } from '~/components/Table/types';
import Table from '~/components/Table/Table.vue';

const data = [
  {
    row: {
      name: 'joe',
      phone: '0611223344',
      address: 'rabat',
    },
  },
];

const tableColumns: TableColumn[] = [
  { label: 'Name', accessor: 'name' },
  { label: 'Phone', accessor: 'phone', tooltip: '0611223344' },
  { label: 'Address', accessor: 'address', tooltip: 'rabat, rue oum rabbie' },
];

const actions: TableActions[] = [
  {
    label: 'Delete',
    iconName: 'i-youcan-trash',
    tooltip: 'Delete user ',
  },
];
</script>

<template>
  <div>
    <Table :columns="tableColumns" :data="data" :actions="actions" />
  </div>
</template>

<style></style>
