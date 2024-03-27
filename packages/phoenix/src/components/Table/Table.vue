<script setup lang="ts" generic="T">
import type { TableProps } from '~/types';

withDefaults(defineProps<TableProps<T>>(), {
  tableColumns: () => [],
  items: () => [],
});
</script>

<template>
  <div class="table-container">
    <table class="table">
      <thead class="table-head">
        <th v-for="column in tableColumns" :key="column.key">
          <span class="th-text">{{ column.label }}</span>
        </th>
      </thead>
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
}

.table-container .table .table-head {
  background-color: var(--gray-50);
}

.table-container .table .table-head th {
  padding: 16px;
}
</style>
