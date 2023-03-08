<script setup lang="ts">

</script>

<template>
  <div class="list">
    <slot />
  </div>
</template>

<style scoped>
.list {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  border-bottom: 1px solid var(--gray-200);
  gap: 40px;
}
</style>
