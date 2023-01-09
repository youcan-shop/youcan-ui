<script setup lang="ts">
defineProps<{
  column: string
}>();
</script>

<template>
  <tr class="table-cell">
    <slot />
  </tr>
</template>

<style scoped>
.table-cell {
  padding: 0 12px;
}
</style>
