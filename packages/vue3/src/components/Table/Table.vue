<script setup lang="ts">
import { computed, shallowRef } from 'vue';
import type { TableColumn, TableColumnValue, TableData, TableDataComposable } from './types';
import ColumnRegistrar from './Internal/cr';
import { launder } from '~/utils/type.util';

const props = defineProps<{
  columns: TableColumn[]
  data: TableData[]
}>();

const emit = defineEmits<{
  (event: 'sort', column: TableColumn, index: number): void
  (event: 'update:data', data: TableData[]): void
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

function ougaBouga(ddd: Record<keyof TableData, TableColumnValue>[]): TableData[] {
  const yy: TableData[] = props.data.map((row: TableData, index: number) => {
    const rowObject: TableData = {};

    Object.keys(row).forEach((key: keyof TableData) => {
      const composedRow = rows.value[index][key];
      const propRow = row[key];

      if (typeof composedRow === 'undefined' || typeof propRow !== 'object') {
        rowObject[key] = propRow;

        return;
      }

      rowObject[key] = ddd[index][key].value;
    });

    return rowObject;
  });

  return yy;
}

function handleSubCompModel(row: number, accessor: string, data: unknown) {
  console.log(row, accessor, data);

  const ffff = shallowRef(rows.value);
  const propRow = props.data[row][accessor] as TableDataComposable;

  ffff.value[row][accessor].value = {
    // @ts-expect-error - TS is crying about variant type here, but it's not a problem since it's valid
    variant: propRow.variant,
    data: {
      ...propRow.data,
      // @ts-expect-error - Expected from TS to not know the type def here since the value is dynamically set
      modelValue: data,
    },
  };

  console.log(ougaBouga(ffff.value), props.data);

  emit('update:data', ougaBouga(ffff.value));
}
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
      <tbody class="table-body">
        <tr v-for="(row, index) in rows" :key="index">
          <td v-for="column in columns" :key="column.accessor">
            <template v-if="row[column.accessor]">
              <span v-if="row[column.accessor].isString" class="text-column">{{ row[column.accessor].value }}</span>
              <component :is="row[column.accessor].component" v-else-if="!row[column.accessor].isString"
                v-bind="launder<TableDataComposable>(row[column.accessor].value).data"
                @update:model-value="(data: unknown) => handleSubCompModel(index, column.accessor, data)" />
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
  border-bottom: 1px solid var(--gray-100);
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

.table-body tr {
  background-color: var(--base-white);
  height: 68px;
}

.table-body tr td {
  padding: 0 12px;
}

.table-body .text-column {
  font: var(--text-sm-regular);
  color: var(--gray-900);
}
</style>
