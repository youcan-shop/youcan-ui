<script setup lang="ts">

</script>

<template>
  <div class="wrapper">
    <div class="icon">
      <i i-youcan-prohibit />
    </div>
    <div class="label">
      No results were found
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  gap: 8px;
}

.icon {
  animation: loader 1000ms ease infinite;
  color: var(--gray-500);
}

.label {
  color: var(--gray-900);
  font: var(--text-sm-regular);
}
</style>
