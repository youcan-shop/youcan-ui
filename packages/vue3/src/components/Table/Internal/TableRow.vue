<script setup lang="ts">
import { computed } from 'vue';
import type { HandleSubCompModel, TableActions, TableColumn, TableColumnValue, TableData, TableDataComposable, TableDataRow, TableInternalData } from '../types';
import TableButton from './Button.vue';
import TertiaryButton from '~/components/Button/TertiaryButton.vue';
import Checkbox from '~/components/Checkbox/Checkbox.vue';
import { launder } from '~/utils/type.util';

const props = defineProps<{
  row: TableInternalData
  columns: TableColumn[]
  actions?: TableActions[]
  index: number
  selected?: boolean
  expended?: boolean
  isChild?: boolean
  data: TableData[]
}>();

const emit = defineEmits<{
  (event: 'update:selected-rows', data: boolean): void
  (event: 'update:expend', data: boolean): void
  (event: 'update:sub-comp-model', data: HandleSubCompModel): void
}>();

const isSelected = computed({
  get: () => props.selected || false,
  set: (value) => {
    emit('update:selected-rows', value!);
  },
});

const isExpended = computed({
  get: () => props.expended,
  set: (value) => {
    emit('update:expend', value!);
  },
});

const handleSubCompModel = (index: number, accessor: string, data: unknown, child: boolean) => {
  emit('update:sub-comp-model', {
    index,
    accessor,
    data,
    child,
  });
};

const checkActionCriteria = (action: TableActions, data: TableData) => {
  return !action.criteria || action.criteria(data);
};
</script>

<template>
  <tr class="table-row" :class="{ 'selected': isSelected, 'expended-child': isChild, 'expended-wrapper': expended }">
    <td v-for="column in columns" :key="column.accessor" class="table-cell">
      <div v-if="column.accessor === 'check'" class="row-checker">
        <Checkbox v-model="isSelected" />
      </div>
      <template v-else-if="column.accessor === '_expand' && row.children && row.children.length > 0">
        <TertiaryButton size="xs" icon-position="only" rounded-full @click="isExpended = !isExpended">
          <template #icon>
            <i class="" :class="[isExpended ? 'i-youcan-carret-down' : 'i-youcan-caret-right']" />
          </template>
        </TertiaryButton>
      </template>
      <template v-else-if="row.row[column.accessor]">
        <div v-if="row.row[column.accessor].isString" class="text-column"
          :class="{ na: row.row[column.accessor].value.toString().toLocaleLowerCase() === 'n/a' }">
          {{ row.row[column.accessor].value }}
        </div>
        <component :is="row.row[column.accessor].component" v-else-if="!row.row[column.accessor].isString"
          v-bind="launder<TableDataComposable>(row.row[column.accessor].value).data"
          @update:model-value="(data: HandleSubCompModel & unknown) => handleSubCompModel(index, column.accessor, data, data.child || false)"
          v-on="launder<TableDataComposable>(row.row[column.accessor].value).events || {}" />
      </template>
      <div v-if="column.accessor === 'actions' && actions?.length" class="cell-actions">
        <template v-for="action in actions" :key="action.label">
          <!-- v-if="!action.criteria || action.criteria(data[index])" -->
          <TableButton v-if="checkActionCriteria(action, data[index])" size="xs" :data="data"
            :icon-name="action.iconName" :label="action.label" :rounded-full="true" icon-position="only"
            v-on="action.events || {}" />
        </template>
      </div>
    </td>
  </tr>
  <template v-if="isExpended && row">
    <TableRow v-for="(child, i) in row.children" :key="i" :index="i" :row="child" :data="data" is-child
      :columns="columns" :actions="actions"
      @update:sub-comp-model="(data: HandleSubCompModel) => handleSubCompModel(i, data.accessor, data.data, true)" />
  </template>
</template>

<style scoped>
.table-row {
  background-color: var(--base-white);
  height: 68px;
  border-bottom: 1px solid var(--gray-100);
}

.table-row.selected {
  background-color: var(--brand-50);
}

.table-row.selected .table-cell:first-of-type {
  position: relative;
}

.table-row.selected .table-cell:first-of-type::before {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  background-color: var(--brand-500);
  width: 3px;
  height: calc(100% + 1px);
}

.table-row .table-cell {
  padding: 0 12px;
}

.table-row .table-cell .cell-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.table-row .table-cell .cell-actions .secondary {
  --icon-color: var(--gray-500);
}

.table-row .table-cell .row-checker {
  padding-left: 4px;
}

.table-row .table-cell .percentage {
  width: fit-content;
}

.table-row .table-cell .increment {
  --width: max-content;
}

.table-row .table-cell .increment:deep(input) {
  width: 30px;
}

.table-row.expended-child {
  background-color: var(--gray-50);
}

.table-row.expended-wrapper {
  box-shadow: var(--shadow-sm-gray);
  position: relative;
}

.text-column {
  font: var(--text-sm-regular);
  color: var(--gray-900);
}

.text-column.na {
  font: var(--text-sm-medium);
  color: var(--gray-300);
  text-transform: uppercase;
}
</style>
