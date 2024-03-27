<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Table } from '~/components';
import type { TableColumn } from '~/types';

export interface User {
  id?: number
  name?: string
  age?: number
}

const tableColumns = ref<TableColumn[]>([
  { label: 'Id', key: 'id', sortable: false },
  { label: 'Name', key: 'name', sortable: true },
  { label: 'Age', key: 'age', sortable: true },
]);
const usersList = Array.from({ length: 50 }, () => {
  return { name: 'Mostafa ARABI', id: `${Math.floor(Math.random() * 10000000000)}`, age: Math.floor(Math.random() * 80) + 20 };
});
const users = ref(usersList);
</script>

<template>
  <Table :table-columns="tableColumns" :items="users" selectable />
</template>
