<script setup lang="ts">
import { computed } from 'vue';
import type { SpinnerProps } from '~/types';

const props = defineProps<SpinnerProps>();

const spinnerSize = computed(() => `${props.size}px`);
const borderWidth = computed(() => `${props.size * 0.1}px`);
</script>

<template>
  <div class="yc-loader-block-spinner" />
</template>

<style scoped>
.yc-loader-block-spinner {
  width: v-bind(spinnerSize);
  border: v-bind(borderWidth) solid var(--gray-100);
  border-right-color: v-bind(color);
}
</style>
