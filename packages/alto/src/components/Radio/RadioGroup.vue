<script setup lang="ts">
import { computed } from 'vue';
import Radio from './Internal/Radio.vue';
import type { RadioData, RadioGroupProps } from '~/types';

const props = defineProps<RadioGroupProps>();

const emit = defineEmits<{
  (event: 'update:model-value', value: RadioData['value']): void
}>();

const model = computed({
  get: () => props.modelValue,
  set: (value: RadioData['value']) => {
    if (typeof value !== 'undefined') {
      emit('update:model-value', value);
    }
  },
});

const handleRadioCheck = (radio: RadioData) => model.value = radio.value;
</script>

<template>
  <fieldset role="radiogroup" class="yc-radio-group">
    <Radio
      v-for="(radio, i) in items"
      :key="i" :model-value="radio.value === model" :name="name" @update:model-value="() => handleRadioCheck(radio)"
    >
      {{ radio.label }}
    </Radio>
  </fieldset>
</template>

<style>
@import "@youcan/styles/radio-group";
</style>
