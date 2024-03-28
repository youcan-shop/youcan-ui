<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { ActionButton, Table } from '~/components';
import type { TableColumn } from '~/types';

export interface User {
  id?: string
  name?: string
  age?: number
}

const tableColumns = ref<TableColumn[]>([
  { label: 'Id', key: 'id', sortable: false },
  { label: 'Name', key: 'name', sortable: true },
  { label: 'Age', key: 'age', sortable: true },
  { label: 'Actions', key: 'actions' },
]);

const users = ref<User[]>([
  { id: 'U-0001', name: 'Jack WILLIAMS', age: 40 },
  { id: 'U-0002', name: 'Jack WILLIAMS', age: 43 },
  { id: 'U-0003', name: 'Jack WILLIAMS', age: 30 },
  { id: 'U-0004', name: 'Jack WILLIAMS', age: 24 },
  { id: 'U-0005', name: 'Jack WILLIAMS', age: 56 },
]);
</script>

<template>
  <div class="container">
    <Table :table-columns="tableColumns" :items="users" selectable>
      <template #actions>
        <div class="actions">
          <ActionButton icon="i-youcan-trash" />
          <ActionButton icon="i-youcan-pencil-simple" />
        </div>
      </template>
    </Table>
  </div>
</template>

<style scoped>
.container {
  width: 772px;
  margin: auto;
  margin-top: 60px;
}

.actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
