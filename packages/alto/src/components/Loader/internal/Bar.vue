<script setup lang="ts">
import type { BarLoadingProps } from '~/types';

defineProps<BarLoadingProps>();
</script>

<template>
  <div class="yc-loader__bar" />
</template>

<style scoped>
.yc-loader__bar::before {
  background-color: v-bind(color);
}
</style>
