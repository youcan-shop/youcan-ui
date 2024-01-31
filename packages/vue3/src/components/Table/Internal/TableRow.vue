<script setup lang="ts">
import { computed } from 'vue';
import { TableDataRow } from '../types';
import type { HandleSubCompModel, TableActions, TableColumnValue, TableData, TableDataComposable } from '../types';
import TableButton from './Button.vue';
import type { TableRowProps } from './types';
import TertiaryButton from '~/components/Button/TertiaryButton.vue';
import Checkbox from '~/components/Checkbox/Checkbox.vue';
import { launder } from '~/helpers/type.util';
import Tooltip from '~/components/Tooltip/Tooltip.vue';

const props = defineProps<TableRowProps>();

const emit = defineEmits<{
  (event: 'update:selected-rows', data: boolean): void
  (event: 'update:expend', data: boolean): void
  (event: 'update:sub-comp-model', data: HandleSubCompModel): void
}>();

const rowActions = computed(() => {
  if (!props.actions) {
    return [];
  }

  return props.actions.map(action => ({
    ...action,
    events: Object.assign(
      {},
      action.events,
      {
        click: () => {
          action.events?.click(props.originalRow ? props.originalRow : props.data[props.index].row);
        },
      },
    ),
  }));
});

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

const checkActionCriteria = (action: TableActions, data: TableData | TableDataRow) => {
  return !action.criteria || action.criteria(data);
};

const castToTableDataComposable = (value: TableColumnValue['value']) => launder<TableDataComposable>(value);
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
        <div
          v-if="row.row[column.accessor].isString" class="text-column"
          :class="{ 'na': row.row[column.accessor].value.toString().toLocaleLowerCase() === 'n/a', 'cell-full-width': column.fullContent }"
        >
          <Tooltip v-if="column.tooltip" :label="column.tooltip" position="top">
            <span class="text"> {{ row.row[column.accessor].value }} </span>
          </Tooltip>

          <template v-else>
            <span class="text"> {{ row.row[column.accessor].value }} </span>
          </template>
        </div>
        <component
          :is="row.row[column.accessor].component" v-else-if="!row.row[column.accessor].isString"
          v-bind="castToTableDataComposable(row.row[column.accessor].value).data"
          :class="{ 'cell-full-width': column.fullContent }"
          @update:model-value="(data: HandleSubCompModel & unknown) => handleSubCompModel(index, column.accessor, data, data.child || false)"
          v-on="castToTableDataComposable(row.row[column.accessor].value).events || {}"
        />
      </template>
      <div v-if="column.accessor === 'actions' && actions?.length" class="cell-actions">
        <template v-for="action in rowActions" :key="action.label">
          <Tooltip v-if="action.tooltip && checkActionCriteria(action, isChild && originalRow ? originalRow : data[index])" :label="action.tooltip" position="top">
            <TableButton
              size="xs" :data="data"
              :icon-name="action.iconName" :label="action.label" :rounded-full="true" icon-position="only"
              v-on="action.events || {}"
            />
          </Tooltip>

          <TableButton
            v-else-if="checkActionCriteria(action, isChild && originalRow ? originalRow : data[index])" size="xs" :data="data"
            :icon-name="action.iconName" :label="action.label" :rounded-full="true" icon-position="only"
            v-on="action.events || {}"
          />
        </template>
      </div>
    </td>
  </tr>
  <template v-if="isExpended && row">
    <TableRow
      v-for="(child, i) in row.children" :key="i" :index="i" :row="child" :data="data" is-child
      :columns="columns" :actions="actions" :original-row="(data[index].children as TableDataRow[])[i]"
      @update:sub-comp-model="(data: HandleSubCompModel) => handleSubCompModel(i, data.accessor, data.data, true)"
    />
  </template>
</template>

<style scoped>
.table-row {
  height: 68px;
  border-bottom: 1px solid var(--gray-200);
  background-color: var(--base-white);
}

.table-row .table-cell {
  padding: 0 12px;
}

.table-cell:has(.text-column) {
  max-width: 250px;
}

.table-row.selected {
  background-color: var(--brand-50);
}

.table-row.selected .table-cell:first-of-type {
  position: relative;
}

.table-row.selected .table-cell:first-of-type::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: calc(100% + 1px);
  background-color: var(--brand-500);
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

.table-row .table-cell .cell-full-width {
  width: 100%;
}

.table-row.expended-child {
  background-color: var(--gray-50);
}

.table-row.expended-wrapper {
  position: relative;
  box-shadow: var(--shadow-sm-gray);
}

.text-column {
  display: flex;
  max-width: 100%;
  color: var(--gray-900);
  font: var(--text-sm-regular);
}

.text-column.na {
  color: var(--gray-300);
  font: var(--text-sm-medium);
  text-transform: uppercase;
}

.text-column .text {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
