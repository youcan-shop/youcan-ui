<script setup lang="ts" generic="T">
import { ref, useSlots, watch } from 'vue';
import type { SelectQuery, TableColumn, TableProps } from '~/types';
import { Checkbox, Tooltip } from '~/components';

const props = withDefaults(defineProps<TableProps<T>>(), {
  tableColumns: () => [],
  items: () => [],
});

const emit = defineEmits(['onSelect', 'onSort']);

const selectedItems = ref<string[]>([]);
const unSelectedItems = ref<string[]>([]);
const sortColumns = ref<TableColumn[]>([]);
const selectAll = ref(false);

const slots = useSlots();

function activeOrder(key: string | undefined) {
  const column = sortColumns.value.find((col: TableColumn) => col.key === key);
  if (column) {
    return column.order;
  }

  return 'none';
}

function handleSort(column: TableColumn) {
  if (!column.sortable) {
    return false;
  }
  const override = sortColumns.value;
  const index = override.findIndex(col => col.key === column.key);
  if (index > -1) {
    const col = override[index];
    switch (col.order) {
      case 'asc':
        col.order = 'desc';
        break;
      case 'desc':
        override.splice(index, 1);
    }
  }
  else {
    column.order = 'asc';
    override.push(column);
  }
  sortColumns.value = override;
  emit('onSort', override);
}

function setSelected(all: boolean, included: string[], excluded: string[]) {
  const selectQ: SelectQuery = { all, included, excluded };
  emit('onSelect', selectQ);
}

const handleSelectAll = (value: boolean) => {
  const override: string[] = [];
  if (value) {
    for (const item of props.items) {
      override.push((item as any).id);
    }
  }
  selectedItems.value = override;
  unSelectedItems.value = [];
  setSelected(value, [], []);
};

function handleSelect(value: boolean, id: string) {
  const overrideSelected = selectedItems.value;
  const overrideUnselected = unSelectedItems.value;
  if (value) {
    overrideSelected.push(id);
    const index = overrideUnselected.indexOf(id);
    if (index > -1) {
      overrideUnselected.splice(index, 1);
    }
  }
  else {
    const index = overrideSelected.indexOf(id);
    selectAll.value && overrideUnselected.push(id);
    if (index > -1) {
      overrideSelected.splice(index, 1);
    }
  }
  selectedItems.value = overrideSelected;
  unSelectedItems.value = overrideUnselected;
  setSelected(selectAll.value, selectAll.value ? [] : overrideSelected, selectAll.value ? overrideUnselected : []);
}

function checkedRow(id: string) {
  return selectedItems.value.includes(id);
}

watch(() => props.items, (newItems: T[]) => {
  if (props.selectable === false) {
    return;
  }
  const overrideUnselected = unSelectedItems.value;
  const overrideSelected = selectedItems.value;
  if (selectAll.value) {
    for (const item of newItems) {
      const id = (item as any).id;
      const index = overrideSelected.indexOf(id);
      if (overrideUnselected.includes(id) === false && index === -1) {
        overrideSelected.push(id);
      }
    }
  }
  selectedItems.value = overrideSelected;
});
</script>

<template>
  <div class="table-container">
    <table class="table">
      <thead class="table-head">
        <tr>
          <th v-if="selectable" class="checkbox">
            <Checkbox v-model="selectAll" @on-change="handleSelectAll" />
          </th>
          <th v-for="column in tableColumns" :key="column.key" :class="[`th-${column.key}`]">
            <Tooltip v-if="column.sortable" :label="activeOrder(column.key)">
              <div class="content" @click="handleSort(column)">
                <span class="text">{{ column.label }}</span>
                <i class="i-youcan-caret-down" :class="activeOrder(column.key)" />
              </div>
            </Tooltip>
            <span v-else class="text">{{ column.label }}</span>
          </th>
        </tr>
      </thead>
      <tbody class="table-body">
        <tr v-for="(item, index) in items" :key="index" :class="{ checked: checkedRow((item as any).id) }">
          <td v-if="selectable" class="td-checkbox">
            <Checkbox :checked="checkedRow((item as any).id)" @on-change="handleSelect($event, (item as any).id)" />
          </td>
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
  --border: 1px solid var(--gray-200);

  width: 100%;
  max-width: 100%;
  overflow: auto hidden;
}

.table-container .table {
  width: 100%;
  border-spacing: 0;
  border: var(--border);
}

.table-container .table .table-head {
  border-bottom: var(--border);
  background-color: var(--gray-50);
}

.table-container .table .table-head th {
  color: var(--gray-700);
  font: var(--text-sm-medium);
  text-align: left;
  user-select: none;
}

.table-container .table .table-head th.checkbox {
  width: 50px;
}

.table-container .table .table-head th .content {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.table-container .table .table-head th .content i {
  width: 12px;
  height: 12px;
  transform: rotate(180deg);
  transition: all 150ms linear;
  color: var(--gray-500);
}

.table-container .table .table-head th .content i.desc {
  transform: rotate(0deg);
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
  box-sizing: border-box;
  border-bottom: var(--border);
}

.table-container .table .table-body tr td:not(:last-child),
.table-container .table .table-head tr th:not(:last-child) {
  border-right: var(--border);
}

.table-container .table .table-body td.td-checkbox {
  position: relative;
}

.table-container .table .table-body td.td-checkbox::before {
  content: "";
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  width: 3px;
  height: calc(100% + 1px);
  transition: all 100ms ease-in-out;
  opacity: 0;
  background-color: var(--brand-500);
}

.table-container .table .table-body tr {
  transition: background-color 100ms ease-in-out;
  background-color: transparent;
}

.table-container .table .table-body tr.checked {
  background-color: var(--brand-50);
}

.table-container .table .table-body tr.checked td.td-checkbox::before {
  opacity: 1;
}
</style>
