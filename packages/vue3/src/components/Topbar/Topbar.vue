<script setup lang="ts">

</script>

<template>
  <div class="topbar">
    <div class="topbar-start">
      <slot name="start" />
    </div>

    <div class="topbar-end">
      <slot name="end" />
    </div>
  </div>
</template>

<style scoped>
.topbar,
.topbar-start,
.topbar-end {
  display: flex;
  align-items: center;
}

.topbar {
  justify-content: space-between;
  width: 100%;
  padding: 12px 12px 12px 24px;
}

.topbar-end {
  gap: 8px;
}
</style>
