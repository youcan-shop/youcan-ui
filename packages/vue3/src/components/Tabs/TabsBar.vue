<script setup lang="ts">

</script>

<template>
  <div class="list">
    <slot />
  </div>
</template>

<style scoped>
.list {
    gap: 40px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--gray-100);
}
</style>
