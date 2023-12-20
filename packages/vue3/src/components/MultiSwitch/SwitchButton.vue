<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';

const props = defineProps<{
  modelValue?: string
  label: string
  icon?: string
  active?: boolean
  disabled?: boolean
}>();

const emit = defineEmits(['update:modelValue']);

const handleClick = () => {
  if (!props.disabled) {
    emit('update:modelValue', props.modelValue);
  }
};
</script>

<template>
  <button
    :disabled="disabled || active"
    class="option"
    :class="{ active, disabled }"
    @click="handleClick"
  >
    <i v-if="icon" :class="icon" />
    <div v-if="label" class="label">
      {{ props.label }}
    </div>
  </button>
</template>

<style scoped>
button {
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

button:is(:focus, :active) {
  outline: none;
}

i {
  color: var(--gray-500);
}

.option {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 8px;
  gap: 4px;
  border: 1px solid transparent;
}

.option .label {
  border-radius: 4px;
  color: var(--gray-700);
  font: var(--text-md-regular);
}

.option:hover .label {
  color: var(--gray-900);
}

.option.active {
  border: 1px solid var(--gray-200, #e3e8ef);
  border-radius: 4px;
  background: var(--base-white, #fff);
  box-shadow: 0 1px 2px 0 rgb(18 25 38 / 5%);
  cursor: default;
}

.option.active i {
  color: var(--brand-500);
}

.option.error .label {
  color: var(--red-500);
}

.option.disabled .label {
  color: var(--gray-300);
}

.option.error:hover .label {
  color: var(--red-600);
}

.option.error.active {
  border-bottom: 1px solid var(--red-500);
}

.option.disabled {
  pointer-events: none;
}
</style>
