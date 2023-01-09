<script setup lang="ts">
import { ref } from 'vue';
import '~/assets/main.css';
import { EditableStatus, StaticStatus } from '~/components';
import TableCell from '~/components/Table/TableCell.vue';
import TableRow from '~/components/Table/TableRow.vue';
import Table from '~/components/Table/Table.vue';
import type { TableColumn, TableData } from '~/components/Table/types';

const columns: TableColumn[] = [
  { label: '', accessor: 'image' },
  { label: 'Name', accessor: 'name', sortable: 'desc' },
  { label: 'Age', accessor: 'age' },
  { label: 'Email', accessor: 'email' },
  { label: 'Profile', accessor: 'profile' },
];

const data: TableData[] = [
  {
    name: 'John Doe',
    age: {
      variant: 'status',
      data: {
        statuses: [{ label: 'Old', color: 'red', value: 42 }, { label: 'Young', color: 'green', value: 22 }],
        modelValue: { label: 'Young', color: 'green', value: 22 },
      },
    },
    email: 'Doe@gmail.com',
  },
  {
    name: 'Ali baba',
    image: {
      variant: 'thumbnail',
      data: {
        size: 'small',
      },
    },
    profile: {
      variant: 'link',
      data: {
        href: 'https://www.google.com',
        label: 'Facebook',
      },
    },
    age: 42,
    email: 'Doe@gmail.com',
  },
  { name: 'John Smith', age: 22, email: 'Smith@gmail.com' },
];
</script>

<template>
  <div>
    <Table :columns="columns" :data="data">
      <TableRow>
        <TableCell column="name">
          John Doe
        </TableCell>
        <TableCell column="email">
          Doe@gmail.com
        </TableCell>
      </TableRow>
    </Table>
  </div>
</template>

<style scoped>

</style>
