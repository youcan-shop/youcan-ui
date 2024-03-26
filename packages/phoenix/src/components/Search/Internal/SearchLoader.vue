<script setup lang="ts">

</script>

<template>
  <div class="loader">
    <div class="icon">
      <i class="i-youcan-arrows-clockwise" />
    </div>
    <div class="label">
      Fetching resuts...
    </div>
  </div>
</template>

<style scoped>
.loader {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  gap: 8px;
}

.icon {
  animation: loader 1000ms ease infinite;
  color: var(--brand-500);
}

.label {
  color: var(--gray-900);
  font: var(--text-sm-regular);
}

@keyframes loader {
  to {
    transform: rotate(-360deg);
  }
}
</style>
