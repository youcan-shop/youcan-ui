<script setup lang="ts">

</script>

<template>
  <div class="settings-nav">
    <div class="header">
      <slot name="header" />
    </div>

    <div class="items">
      <slot name="items" />
    </div>
  </div>
</template>

<style scoped>
.settings-nav {
  padding: 0 0 8px;
  max-width: 240px;
  border-radius: 8px;
  box-shadow: var(--shadow-xs-gray);
  border: 1px solid var(--gray-100);
  background-color: var(--base-white);
}

.header {
  border-bottom: 1px solid var(--gray-100);
  font-weight: var(--text-md-medium);
  padding: 16px 8px 16px 20px;
}
</style>
