<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { onMounted, ref } from 'vue';
import { ActionButton, PaginationBar, Table } from '~/components';
import type { SelectQuery, TableColumn } from '~/types';

export interface User {
  id?: string
  name?: string
  age?: number
}

const TOTAL = 15;
const PER_PAGE = 5;
const TOTAL_PAGES = Math.ceil(TOTAL / PER_PAGE);

const currentPage = ref(1);

const tableColumns = ref<TableColumn[]>([
  { label: 'Id', key: 'id', sortable: false },
  { label: 'Name', key: 'name', sortable: true, order: 'asc' },
  { label: 'Age', key: 'age', sortable: true },
  { label: 'Actions', key: 'actions' },
]);

const data: User[] = [
  { id: 'U-0001', name: 'Jack WILLIAMS', age: 40 },
  { id: 'U-0002', name: 'Jack WILLIAMS', age: 43 },
  { id: 'U-0003', name: 'Jack WILLIAMS', age: 30 },
  { id: 'U-0004', name: 'Jack WILLIAMS', age: 24 },
  { id: 'U-0005', name: 'Jack WILLIAMS', age: 56 },
  { id: 'U-0006', name: 'Jack WILLIAMS', age: 40 },
  { id: 'U-0007', name: 'Jack WILLIAMS', age: 43 },
  { id: 'U-0008', name: 'Jack WILLIAMS', age: 30 },
  { id: 'U-0009', name: 'Jack WILLIAMS', age: 24 },
  { id: 'U-00010', name: 'Jack WILLIAMS', age: 56 },
  { id: 'U-00011', name: 'Jack WILLIAMS', age: 40 },
  { id: 'U-00012', name: 'Jack WILLIAMS', age: 43 },
  { id: 'U-00013', name: 'Jack WILLIAMS', age: 30 },
  { id: 'U-00014', name: 'Jack WILLIAMS', age: 24 },
  { id: 'U-00055', name: 'Jack WILLIAMS', age: 56 },
];

const users = ref<User[]>([]);

function handleSelect(selected: SelectQuery) {
  console.log(selected);
}

function handleSort(columns: TableColumn[]) {
  console.log(columns);
}

function handlePagination(pageNumber: number) {
  currentPage.value = pageNumber;
  const override = data;
  const from = (pageNumber - 1) * PER_PAGE;
  const to = (PER_PAGE * pageNumber);
  users.value = override.slice(from, to);
}

onMounted(() => {
  handlePagination(currentPage.value);
});
</script>

<template>
  <div class="container">
    <Table :table-columns="tableColumns" table-id="users-list" :items="users" selectable @on-select="handleSelect" @on-sort="handleSort">
      <template #actions>
        <div class="actions">
          <ActionButton icon="i-youcan-trash" />
          <ActionButton icon="i-youcan-pencil-simple" />
        </div>
      </template>
    </Table>
    <PaginationBar
      :current="currentPage"
      :size="TOTAL_PAGES"
      :count="PER_PAGE"
      :total="TOTAL"
      @update:current="handlePagination"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 772px;
  margin: auto;
  margin-top: 60px;
  gap: 30px;
}

.actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
