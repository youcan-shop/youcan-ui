<script setup lang="ts">
import type { TableColumn } from './types';

defineProps<{
  columns: TableColumn[]
}>();

const emit = defineEmits<{
  (event: 'sort', column: TableColumn, index: number): void
}>();

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
