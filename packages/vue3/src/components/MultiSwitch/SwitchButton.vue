<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';
import type { SwitchButtonProps } from '~/types';

const props = defineProps<SwitchButtonProps>();

const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click', props.option);
};
</script>

<template>
  <button
    class="option"
    :class="{ active, disabled: option.disabled }"
    :disabled="option.disabled || active"
    @click="handleClick"
  >
    <i v-if="option.icon" :class="option.icon" />
    <span v-if="option.label" class="label">
      {{ props.option.label }}
    </span>
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
  width: 100%;
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
  border: 1px solid var(--gray-200);
  border-radius: 4px;
  background: var(--base-white);
  box-shadow: 0 1px 2px 0 rgb(18 25 38 / 5%);
  cursor: default;
}

.option.active i {
  color: var(--brand-500);
}

.option.error .label {
  color: var(--red-500);
}

.option.disabled .label,
.option.disabled:not(.active) i {
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

@media screen and (width < 768px) {
  .option {
    width: 100%;
    height: 44px;
  }
}
</style>
