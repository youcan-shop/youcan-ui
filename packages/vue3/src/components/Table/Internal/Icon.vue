<script setup lang="ts">
defineProps<{
  iconName: string
}>();
</script>

<template>
  <i class="icon" :class="iconName" />
</template>

<style scoped>
.icon {
  --size: 16px;

  width: var(--size);
  height: var(--size);
  color: var(--blue-600);
}
</style>
