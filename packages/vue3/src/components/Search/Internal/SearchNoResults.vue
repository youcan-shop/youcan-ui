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
    gap: 8px;
    display: flex;
    padding: 10px 16px;
    align-items: center;
}

.icon {
    color: var(--gray-500);
    animation: loader 1000ms ease infinite;
}

.text {
    color: var(--gray-900);
    font: var(--text-sm-regular);
}
</style>
