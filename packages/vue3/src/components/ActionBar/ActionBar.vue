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
  align-items: center;
  justify-content: flex-end;
  padding: 12px;
}
</style>
