<script setup lang="ts">
import { computed } from 'vue';
import type { ToggleProps } from '~/types';

const props = defineProps<ToggleProps>();

const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value),
});
</script>

<template>
  <button
    aria-label="toggle button" class="yc-toggle" role="switch" type="button" :aria-checked="model"
    @click="model = !model"
  />
</template>

<style scoped lang="scss">
@import "@youcan/styles/toggle";
</style>
