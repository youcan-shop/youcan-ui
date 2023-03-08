<script setup lang="ts">

</script>

<template>
  <div class="action-bar">
    <slot />
  </div>
</template>

<style scoped>
.action-bar {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-end;
  height: 68px;
  padding: 12px;
  gap: 8px;
}
</style>
