<script setup lang="ts">
import { computed } from 'vue';
import type { RadioListProps } from '~/types';

const props = defineProps<RadioListProps>();

const emit = defineEmits(['update:model-value']);

const model = computed({
  get: () => props.modelValue,
  set: value => emit('update:model-value', value),
});
</script>

<template>
  <div class="yc-radio-list">
    <label v-for="option in options" :key="option.label" class="yc-radio-list__item" :for="option.label">
      <input :id="option.label" v-model="model" :name="option.label" :value="option.label" type="radio" class="yc-radio-list__item__trigger">
      <span class="yc-radio-list__item__name">{{ option.label }}</span>
      <span class="yc-radio-list__item__suffix">{{ option.suffix }}</span>
    </label>
  </div>
</template>

<style scoped>
@import "@youcan/styles/radio-list";
</style>
