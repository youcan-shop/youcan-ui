<script setup lang="ts">
import { Utils } from '@youcan/ui-core';
import { computed, onMounted, ref } from 'vue';
import type { IncrementProps } from '~/types';
import Button from '~/components/Button/Button.vue';

const props = withDefaults(defineProps<IncrementProps>(), {
  modelValue: 1,
  id: Utils.uid('increment_'),
  min: 0,
  step: 1,
  disabled: false,
});

const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => props.modelValue,
  set: (value: number) => {
    const inputValue = Number(value);
    if (typeof props.max !== 'undefined' && inputValue > props.max) {
      model.value = props.max;

      return;
    }
    else if (typeof props.min !== 'undefined' && inputValue < props.min) {
      model.value = props.min;

      return;
    }

    emit('update:modelValue', value);
  },
});

const input = ref<HTMLInputElement>();
const container = ref<HTMLInputElement>();

function update(status: 'increment' | 'decrement' = 'increment') {
  const newValue = status === 'increment' ? model.value + props.step : model.value - props.step;
  model.value = newValue;
}

function handleInput(event: Event) {
  const value = parseInt((event.target as HTMLInputElement).value);
  model.value = isNaN(value) ? 0 : value;
}

onMounted(() => {
  input.value?.addEventListener('keypress', (event) => {
    if ((props.max && model.value >= props.max) || (props.min && model.value <= props.min)) {
      event.preventDefault();
    }
  });

  input.value?.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
    }
  });

  container.value?.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault();

      update();
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();

      update('decrement');
    }
  });
});
</script>

<template>
  <div ref="container" class="increment" tabindex="0" :disabled="disabled">
    <Button variant="tertiary" size="xs" icon-position="only" :disabled="disabled" @click="update('decrement')">
      <template #icon>
        <i class="i-youcan-minus" />
      </template>
    </Button>
    <input :id="id" ref="input" v-model.number="model" class="input" tabindex="-1" @input="handleInput">
    <Button variant="tertiary" size="xs" icon-position="only" :disabled="disabled" @click="update()">
      <template #icon>
        <i class="i-youcan-plus" />
      </template>
    </Button>
  </div>
</template>

<style scoped>
.increment {
  --border: 1px solid var(--gray-200);
  --shadow: var(--shadow-xs-gray);

  display: flex;
  box-sizing: border-box;
  align-items: center;
  width: 460px;
  max-width: 100%;
  padding: 6px 10px;
  border: var(--border);
  border-radius: 8px;
  outline: none;
  background-color: var(--base-white);
  box-shadow: var(--shadow);
  gap: 8px;
}

.increment .input {
  flex: 1;
  height: 21px;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background-color: var(--base-white);
  color: var(--gray-900);
  font: var(--text-sm-regular);
  text-align: center;
}

.increment:hover {
  --border: 1px solid var(--gray-300);
}

.increment[disabled="false"]:focus,
.increment[disabled="false"]:focus-within {
  --border: 1px solid var(--brand-500);
  --shadow: var(--focus-shadow-xs-brand);
}

.increment[disabled="true"] {
  background-color: var(--gray-50);
}

.increment[disabled="true"],
.increment[disabled="true"] * {
  cursor: not-allowed;
}

.increment[disabled="true"] .input {
  background-color: var(--gray-50);
  color: var(--gray-300);
  pointer-events: none;
}

.increment[disabled="true"] .tertiary {
  --disabled-icon-color: var(--gray-300);
  --disabled-background-color: var(--gray-50);
}
</style>
