<script setup lang="ts">
import { Utils } from '@youcan/ui-core';
import { computed, useSlots } from 'vue';
import type { RadioProps } from '~/types';

const props = defineProps<RadioProps>();

const emit = defineEmits<{
  (event: 'update:model-value', value: boolean): void
}>();

const slots = useSlots();

const model = computed({
  get: () => props.modelValue || false,
  set: (value: boolean) => emit('update:model-value', value),
});

const id = Utils.uid('radio_');
</script>

<template>
  <div class="yc-radio-group-item">
    <input :id="id" v-model="model" type="radio" :name="name" class="yc-radio-group-item-trigger" :checked="model">
    <label v-if="slots.default" class="yc-radio-group-item-label" :for="id">
      <slot />
    </label>
  </div>
</template>
