<script setup lang="ts">
import { watch } from 'fs';
import { computed, ref, shallowRef, watchEffect } from 'vue';
import Checkbox from '../Checkbox/Checkbox.vue';
import type { TableActions, TableColumn, TableColumnValue, TableData, TableDataComposable } from './types';
import ColumnRegistrar from './Internal/cr';
import TableButton from './Internal/Button.vue';
import { launder } from '~/utils/type.util';

const props = defineProps<{
  columns: TableColumn[]
  data: TableData[]
  actions?: TableActions[]
  selectable?: boolean
  selectedRows?: TableData[]
}>();

const emit = defineEmits<{
  (event: 'sort', column: TableColumn, index: number): void
  (event: 'update:data', data: TableData[]): void
  (event: 'update:selected-rows', data: TableData[]): void
  (event: 'check', indexes: Array<number>): void
}>();

const tableColumns = computed(() => {
  if (props.actions && props.actions.length > 0) {
    return [
      props.selectable ? { accessor: 'check', label: 'Checkbox' } : null,
      ...props.columns,
      { accessor: 'actions', label: 'Actions' },
    ].filter(column => column !== null) as TableColumn[];
  }

  return props.columns;
});

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

const looooog = () => console.log('sss');

const allChecked = ref(false);
const checkedRows = ref(Array<boolean>(props.data.length).fill(false));

watchEffect(() => {
  emit('update:selected-rows', props.data.filter((_, index) => checkedRows.value[index]));

  const selectedIndexes = checkedRows.value.map((_, index) => {
    return _ ? index : null;
  }).filter(index => index !== null) as Array<number>;

  emit('check', selectedIndexes);

  allChecked.value = checkedRows.value.every(row => row);
});

const batchSelect = (value: boolean) => checkedRows.value = Array<boolean>(props.data.length).fill(value);
</script>

<template>
  <div class="table-container">
    <table class="table">
      <thead class="table-head">
        <th v-for="(column, index) in tableColumns" :key="column.accessor" class="head-column">
          <template v-if="column.accessor === 'check'">
            <Checkbox v-model="allChecked" @update:model-value="batchSelect" />
          </template>
          <template v-else>
            <span class="text">{{ column.label }}</span>
            <i v-if="column.sortable && column.sortable !== 'none'" class="i-youcan-caretdown sort-icon"
              :style="{ transform: column.sortable === 'asc' ? 'rotate(180deg)' : '' }" tabindex="1"
              @click="emitSort(column, index)" />
          </template>
        </th>
      </thead>
      <tbody class="table-body">
        <tr v-for="(row, index) in rows" :key="index" class="table-row" :class="{ selected: checkedRows[index] }">
          <td v-for="column in tableColumns" :key="column.accessor" class="table-cell">
            <div v-if="column.accessor === 'check'" class="row-checker">
              <Checkbox v-model="checkedRows[index]" />
            </div>
            <template v-else-if="row[column.accessor]">
              <span v-if="row[column.accessor].isString" class="text-column"
                :class="{ na: row[column.accessor].value.toString().toLocaleLowerCase() === 'n/a' }">
                {{ row[column.accessor].value }}
              </span>
              <component :is="row[column.accessor].component" v-else-if="!row[column.accessor].isString"
                v-bind="launder<TableDataComposable>(row[column.accessor].value).data"
                @update:model-value="(data: unknown) => handleSubCompModel(index, column.accessor, data)"
                v-on="launder<TableDataComposable>(row[column.accessor].value).events || {}" />
            </template>
            <div v-if="column.accessor === 'actions'" class="cell-actions">
              <template v-for="action in actions" :key="action.label">
                <TableButton v-if="!action.criteria || action.criteria(data[index])" size="xs"
                  :icon-name="action.iconName" :label="action.label" :rounded-full="true" icon-position="only"
                  v-on="action.events || {}" />
              </template>
            </div>
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

.table-body .table-row {
  background-color: var(--base-white);
  height: 68px;
  border-bottom: 1px solid var(--gray-100);
}

.table-body .table-row.selected {
  background-color: var(--brand-50);
}

.table-body .table-row.selected .table-cell:first-of-type::before {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  background-color: var(--brand-500);
  width: 3px;
  height: calc(100% + 1px);
}

.table-body .table-row .table-cell {
  position: relative;
  padding: 0 12px;
}

.table-body .table-row .table-cell .cell-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.table-body .table-row .table-cell .cell-actions .secondary {
  --icon-color: var(--gray-500);
}

.table-body .text-column {
  font: var(--text-sm-regular);
  color: var(--gray-900);
}

.table-body .text-column.na {
  font: var(--text-sm-medium);
  color: var(--gray-300);
  text-transform: uppercase;
}

.table-body .table-row .table-cell .row-checker {
  padding-left: 4px;
}

.table-body .table-row .table-cell .percentage {
  width: fit-content;
}

.table-body .table-row .table-cell .increment {
  --width: max-content;
}

.table-body .table-row .table-cell .increment:deep(input) {
  width: 30px;
}
</style>
