<script setup lang="ts">
import { computed } from 'vue';
import Radio from './Radio.vue';
import type { RadioData } from './types';

const props = defineProps<{
  items: RadioData[]
  name: string
  modelValue?: RadioData
}>();

const emit = defineEmits<{
  (event: 'update:model-value', value: RadioData): void
}>();

const model = computed({
  get: () => props.modelValue,
  set: (value?: RadioData) => {
    if (typeof value !== 'undefined') {
      emit('update:model-value', value);
    }
  },
});
</script>

<template>
  <fieldset role="radiogroup" class="radio-group">
    <Radio v-for="(radio, i) in items" :key="i" :model-value="radio === model" :name="name">
      {{ radio.label }}
    </Radio>
  </fieldset>
</template>

<style scoped></style>
