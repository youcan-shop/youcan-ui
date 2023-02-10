<script setup lang="ts">
defineProps<{
  label: string
}>();
</script>

<template>
  <div class="tooltip">
    <span class="label">{{ label }}</span>
    <slot />
  </div>
</template>

<style scoped>
.tooltip {
  position: relative;
}

.tooltip:hover .label {
  display: block;
  display: none;
  position: absolute;
  z-index: 99999;
  bottom: -25px;
  min-width: max-content;
  padding: 3px 8px;
  border-radius: 2px;
  background: var(--gray-900);
  box-shadow: var(--shadow-xs-gray);
  color: var(--base-white);
  font: var(--text-xs-medium);
}
</style>
