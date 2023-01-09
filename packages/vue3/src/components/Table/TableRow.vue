<template>
  <tr class="table-row">
    <slot :test="111" />
  </tr>
</template>

<style scoped>
.table-row {
  background-color: var(--base-white);
  height: 68px;
}
</style>
