<script setup lang="ts">

</script>

<template>
  <div class="action-bar">
    <slot />
  </div>
</template>

<style scoped>
.action-bar {
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
</style>
