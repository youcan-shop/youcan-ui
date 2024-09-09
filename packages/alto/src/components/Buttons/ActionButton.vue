<script lang="ts" setup>
import type { ActionButtonProps } from './types';

defineProps<ActionButtonProps>();
</script>

<template>
  <button class="yc-action-button">
    <i :class="icon" />
  </button>
</template>

<style scoped>
@import '@youcan/styles/action-button';
</style>
