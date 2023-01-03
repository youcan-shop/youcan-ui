<script setup lang="ts">
import { Utils } from '@youcan/ui-core';
import * as numberInput from '@zag-js/number-input';
import { normalizeProps, useMachine } from '@zag-js/vue';
import { computed } from 'vue';
import type { IncrementMachineValue } from './types';

const props = withDefaults(defineProps<{
  modelValue: string
  max?: number
  min?: number
  step?: number
  id?: string
}>(), {
  modelValue: '1',
  id: Utils.uid('increment_'),
  min: 0,
  step: 1,
});

const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
});

console.log(model.value);

const [state, send] = useMachine(numberInput.machine({
  value: model.value,
  onChange: (value: IncrementMachineValue) => console.log(value),
  id: props.id,
  min: props.min,
  max: props.max,
  step: props.step,
  allowMouseWheel: false,
}));

const api = computed(() =>
  numberInput.connect(state.value, send, normalizeProps),
);
</script>

<template>
  <div ref="ref" v-bind="api.rootProps">
    <label v-bind="api.labelProps">Enter number</label>
    <div>
      <button v-bind="api.decrementTriggerProps">
        DEC
      </button>
      <input v-bind="api.inputProps">
      <button v-bind="api.incrementTriggerProps">
        INC
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
