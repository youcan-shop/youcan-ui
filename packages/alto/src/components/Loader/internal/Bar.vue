<script setup lang="ts">
import type { BarLoadingProps } from '~/types';

defineProps<BarLoadingProps>();
</script>

<template>
  <div class="yc-loader-block-bar" />
</template>

<style scoped>
.yc-loader-block-bar::before {
  background-color: v-bind(color);
}
</style>
