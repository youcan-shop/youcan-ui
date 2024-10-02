<script setup lang="ts">
import { Utils } from '@youcan/ui-core';
import { computed, useSlots } from 'vue';
import type { CheckboxProps } from '~/types';

const props = defineProps<CheckboxProps>();

const emit = defineEmits(['update:modelValue', 'onChange']);
const slots = useSlots();

const model = computed({
  get: () => props.modelValue,
  set: (value: boolean | Array<number | string> | undefined) => {
    emit('update:modelValue', value);
    emit('onChange', value);
  },
});

const idAttr = props.uid ? props.uid : Utils.uid('checkbox');
const ariaDescribedby = `${idAttr}-aria-describedby`;
</script>

<template>
  <label :for="idAttr" v-bind="$attrs" class="yc-checkbox-content">
    <div class="yc-checkbox" :class="{ 'yc-has-label': slots.label }">
      <input v-bind="$attrs" :id="idAttr" v-model="model" type="checkbox" :checked="checked" class="yc-input" :value="value" :aria-describedby="ariaDescribedby">
      <span class="yc-checkmark">
        <i v-if="!$attrs.indeterminate" class="i-youcan-check" />
        <i v-else class="i-youcan-minus" />
      </span>
    </div>
    <div v-if="slots.label" :id="ariaDescribedby" class="yc-label">
      <slot name="label" />
    </div>
  </label>
</template>

<style scoped>
@import "@youcan/styles/checkbox";
</style>
