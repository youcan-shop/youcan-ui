<script setup lang="ts">
const props = defineProps<{
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
}

.tooltip .label {
    display: none;
    padding:  3px 8px;
    background: var(--gray-900);
    font: var(--text-xs-medium);
    color: var(--base-white);
    box-shadow: var(--shadow-xs-gray);
    position: absolute;
    bottom: -25px;
    border-radius: 2px;
    min-width: max-content;
    z-index: 99999;
}
</style>
