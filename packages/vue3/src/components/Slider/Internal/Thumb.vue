<script lang="ts" setup>
defineProps<{
  position?: string
}>();
</script>

<template>
  <div class="thumb" />
</template>

<style>
.thumb {
  position: absolute;
  z-index: 3;
  left: v-bind(position);
  width: 14px;
  height: 14px;
  transform: translateX(-50%);
  border-radius: 50%;
  background-color: var(--brand-500);
}
</style>
