<script setup lang="ts">
import { Utils } from '@youcan/ui-core';
import { computed, onMounted, ref, watchEffect } from 'vue';
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
  set: (value: string) => {
    const inputValue = Number(value);

    if (typeof props.max !== 'undefined' && inputValue > props.max) {
      model.value = String(props.max);

      return;
    }
    else if (typeof props.min !== 'undefined' && inputValue < props.min) {
      model.value = String(props.min);

      return;
    }

    emit('update:modelValue', value);
  },
});

const input = ref<HTMLInputElement>();

const increment = () => {
  model.value = String(Number(model.value) + props.step);
};

const decrement = () => {
  model.value = String(Number(model.value) - props.step);
};

onMounted(() => {
  input.value?.addEventListener('beforeinput', (event) => {
    if (event.data === '-') {
      return;
    }

    const inputValue = Number(event.data);

    if (isNaN(inputValue) || event.data === ' ') {
      event.preventDefault();
    }

    if (
      (typeof props.max !== 'undefined' && inputValue > props.max)
      || (typeof props.min !== 'undefined' && inputValue < props.min)
    ) {
      event.preventDefault();
    }
  });

  input.value?.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault();

      increment();
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();

      decrement();
    }
  });
});
</script>

<template>
  <div ref="ref">
    <div>
      <button @click="decrement">
        DEC
      </button>
      <input :id="id" ref="input" v-model="model">
      <button @click="increment">
        INC
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
