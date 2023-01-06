<script setup lang="ts">
import { computed } from 'vue';
import type { TableColumn, TableColumnValue, TableData, TableDataComposable } from './types';
import ColumnRegistrar from './cr';

const props = defineProps<{
  columns: TableColumn[]
  data: TableData[]
}>();

const emit = defineEmits<{
  (event: 'sort', column: TableColumn, index: number): void
}>();

const rows = computed(
  () => props.data.map((row) => {
    const rowObject = {} as Record<keyof TableData, TableColumnValue>;

    Object.keys(row).forEach((key: keyof TableData) => {
      const value = row[key];

      if (typeof value === 'undefined') {
        return null;
      }

      rowObject[key] = {
        value,
        accessor: key as string,
        isString: typeof value !== 'object',
        component: typeof value !== 'string' ? ColumnRegistrar(value.variant) : '',
      };
    });

    return rowObject;
  }).filter(row => row !== null),
);

const emitSort = (column: TableColumn, index: number) => emit('sort', column, index);
</script>

<template>
  <div class="table-container">
    <table class="table">
      <thead class="table-head">
        <th v-for="(column, index) in columns" :key="column.accessor" class="head-column">
          <span class="text">{{ column.label }}</span>
          <i v-if="column.sortable && column.sortable !== 'none'" class="i-youcan-caretdown sort-icon"
            :style="{ transform: column.sortable === 'asc' ? 'rotate(180deg)' : '' }" tabindex="1"
            @click="emitSort(column, index)" />
        </th>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td v-for="column in columns" :key="column.accessor">
            <template v-if="row[column.accessor]">
              <span v-if="row[column.accessor].isString">{{ row[column.accessor].value }}</span>
              <component :is="row[column.accessor].component" v-else-if="row[column.accessor].component"
                v-bind="row[column.accessor].value" />
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table-head {
  background-color: var(--gray-50);
  height: 52px;
}

.table-head .head-column {
  text-align: start;
  /* display: flex; */
  /* align-items: center; */
  height: 100%;
  padding: 0 16px;
}

.table-head .head-column .text {
  font: var(--text-sm-bold);
  color: var(--gray-500);
}

.table-head .head-column .sort-icon {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-inline-start: 8px;
  color: var(--gray-500);
  cursor: pointer;
}

.table-head .head-column * {
  vertical-align: middle;
}
</style>
