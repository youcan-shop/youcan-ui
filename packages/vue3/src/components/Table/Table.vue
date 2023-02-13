<script setup lang="ts">
import { computed, ref, shallowRef, toRaw, watchEffect } from 'vue';
import CellsRegistrar from './Internal/cells-registrar';
import TableRow from './Internal/TableRow.vue';
import type { TableActions, TableColumn, TableColumnValue, TableColumnValues, TableData, TableDataComposable, TableDataRow, TableInternalData } from './types';
import Checkbox from '~/components/Checkbox/Checkbox.vue';

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
  (event: 'update:cell', data: { row: unknown; accessor: string }): void
}>();

const allChecked = ref(false);
const expandedRows = ref(Array<boolean>(props.data.length).fill(false));
const hasChildren = computed(() => props.data.some(row => row.children && row.children.length > 0));

const checkedRows = ref<boolean[]>([]);

if (props.selectedRows && props.selectedRows.length) {
  checkedRows.value = props.data.map(row => props.selectedRows!.some(selectedRow => selectedRow.row.id === row.row.id));
}
else {
  checkedRows.value = Array(props.data.length).fill(false);
}

const tableColumns = computed(() => {
  if (props.actions && props.actions.length > 0) {
    return [
      props.selectable ? { accessor: 'check', label: 'Checkbox' } : null,
      hasChildren.value ? { accessor: '_expand', label: 'Expand' } : null,
      ...props.columns,
      { accessor: 'actions', label: 'Actions' },
    ].filter(column => column !== null) as TableColumn[];
  }

  return props.columns;
});

const rows = computed(
  () => props.data.map(({ row, children }) => {
    const rowObject: TableInternalData = {
      row: {},
      children: [],
    };

    function fieldsMapper(dataRow: TableDataRow) {
      const tableRowObject: Record<Exclude<keyof TableDataRow, number>, TableColumnValue> = {};

      Object.keys(dataRow).forEach((key) => {
        const value = dataRow[key];

        if (typeof value === 'undefined') {
          return null;
        }

        tableRowObject[key] = {
          value,
          accessor: key as string,
          isString: typeof value !== 'object',
          component: typeof value === 'object' ? CellsRegistrar(value.variant) : undefined,
        };
      });

      return tableRowObject;
    }

    rowObject.row = fieldsMapper(row);
    if (children) {
      rowObject.children = children.map(child => ({ row: fieldsMapper(child) }));
    }

    return rowObject;
  }).filter(row => row !== null),
);

const emitSort = (column: TableColumn, index: number) => emit('sort', column, index);

function mapRowsToTableData(records: TableInternalData[]): TableData[] {
  return props.data.map(({ row, children }: TableData, index: number) => {
    function mapRowObjToPropsOriginalObj(obj: TableDataRow, innerObj: TableColumnValues) {
      const mappedObj: TableDataRow = {};

      Object.keys(obj).forEach((key: Exclude<keyof TableDataRow, number>) => {
        const composedRow = rows.value[index].row[key];
        const propRow = obj[key];

        if (typeof composedRow === 'undefined' || typeof propRow !== 'object') {
          return mappedObj[key] = propRow;
        }

        mappedObj[key] = innerObj[key].value;
      });

      return mappedObj;
    }

    const innerRow = records[index];
    const childrenRaw = children ? toRaw(children) : [];
    const tableData = {
      row: mapRowObjToPropsOriginalObj(row, innerRow.row),
      children: childrenRaw.map((child, index) => mapRowObjToPropsOriginalObj(child, innerRow.children ? innerRow.children[index].row : {})),
    };

    return tableData;
  });
}

function handleSubCompModel(row: number, accessor: string, data: unknown, parentRow?: number) {
  if (typeof parentRow === 'undefined') {
    const rowsReplica = shallowRef(rows.value);
    const propRow = props.data[row].row[accessor] as TableDataComposable;

    rowsReplica.value[row].row[accessor].value = {
      // @ts-expect-error - TS is crying about variant type here, but it's not a problem since it's valid
      variant: propRow.variant,
      data: {
        ...propRow.data,
        // @ts-expect-error - Expected from TS to not know the type def here since the value is dynamically set
        modelValue: data,
      },
    };

    const patchedData = mapRowsToTableData(rowsReplica.value);

    emit('update:cell', { row: patchedData[row].row, accessor });
    emit('update:data', patchedData);
  }
  else {
    const rowsReplica = shallowRef(rows.value);
    const propRow = props.data[parentRow].children![row][accessor] as TableDataComposable;

    rowsReplica.value[parentRow].children![row].row[accessor].value = {
      // @ts-expect-error - TS is crying about variant type here, but it's not a problem since it's valid
      variant: propRow.variant,
      data: {
        ...propRow.data,
        // @ts-expect-error - Expected from TS to not know the type def here since the value is dynamically set
        modelValue: data,
      },
    };

    const patchedData = mapRowsToTableData(rowsReplica.value);

    emit('update:cell', { row: patchedData[parentRow].children![row], accessor });
    emit('update:data', patchedData);
  }
}

watchEffect(() => {
  console.log(props.selectedRows);
  checkedRows.value = props.data.map(row => props.selectedRows!.some(selectedRow => selectedRow.row.id === row.row.id));
});

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
          <template v-else-if="column.accessor === '_expand'">
            <span />
          </template>
          <template v-else>
            <span class="text">{{ column.label }}</span>
            <i
              v-if="column.sortable && column.sortable !== 'none'" class="i-youcan-caret-down sort-icon"
              :style="{ transform: column.sortable === 'asc' ? 'rotate(180deg)' : '' }" tabindex="1"
              @click="emitSort(column, index)"
            />
          </template>
        </th>
      </thead>
      <tbody class="table-body">
        <template v-for="(row, index) in rows" :key="index">
          <TableRow
            :index="index" :row="row" :columns="tableColumns" :selected="checkedRows[index]"
            :expended="expandedRows[index]" :actions="actions" :data="data"
            @update:selected-rows="checkedRows[index] = $event"
            @update:expend="expandedRows[index] = $event"
            @update:sub-comp-model="handleSubCompModel($event.index, $event.accessor, $event.data, $event.child ? index : undefined)"
          />
        </template>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.table {
  width: 100%;
  overflow: hidden;
  border-collapse: collapse;
}

.table-head {
  height: 52px;
  border-bottom: 1px solid var(--gray-100);
  background-color: var(--gray-50);
}

.table-head .head-column {
  height: 100%;
  padding: 0 16px;
  text-align: start;
}

.table-head .head-column .text {
  color: var(--gray-700);
  font: var(--text-sm-medium);
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

.table-body .text-column {
  color: var(--gray-900);
  font: var(--text-sm-regular);
}

.table-body .text-column.na {
  color: var(--gray-300);
  font: var(--text-sm-medium);
  text-transform: uppercase;
}
</style>
