<script setup lang="ts" generic="T">
import { useSlots } from 'vue';
import type { TableProps } from '~/types';

withDefaults(defineProps<TableProps<T>>(), {
  tableColumns: () => [],
  items: () => [],
});

const slots = useSlots();
</script>

<template>
  <div class="table-container">
    <table class="table">
      <thead class="table-head">
        <tr>
          <th v-for="column in tableColumns" :key="column.key" :class="[`th-${column.key}`]">
            <span class="text">{{ column.label }}</span>
          </th>
        </tr>
      </thead>
      <tbody class="table-body">
        <tr v-for="(item, index) in items" :key="index">
          <td v-for="column in tableColumns" :key="column.key" :class="[`td-${column.key}`]">
            <template v-if="slots[column.key as string]">
              <slot :name="column.key" v-bind="item" />
            </template>
            <span v-else class="text">{{ item[column.key as keyof T] }}</span>
          </td>
        </tr>
      </tbody>
      <tbody />
    </table>
  </div>
</template>

<style scoped>
.table-container {
  width: 100%;
  max-width: 100%;
  overflow: auto hidden;
}

.table-container .table {
  width: 100%;
  border-spacing: 0;
}

.table-container .table .table-head {
  border-bottom: 1px solid var(--gray-100);
  background-color: var(--gray-50);
}

.table-container .table .table-head th {
  color: var(--gray-700);
  font: var(--text-sm-medium);
  text-align: left;
}

.table-container .table .table-head th,
.table-container .table .table-body td {
  padding: 16px;
}

.table-container .table .table-body td {
  color: var(--gray-900);
  font: var(--text-sm-regular);
}

.table-container .table .table-body tr:not(:last-child) td {
  border-bottom: 1px solid var(--gray-200);
}
</style>
