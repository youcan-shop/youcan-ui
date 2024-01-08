<script setup lang="ts">
import { computed } from 'vue';
import type { ToggleProps } from './types';

const props = defineProps<ToggleProps>();

const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value),
});
</script>

<template>
  <button
    aria-label="toggle button" class="toggle" role="switch" type="button" :aria-checked="model"
    @click="model = !model"
  />
</template>

<style scoped lang="scss">
.toggle {
  --knob-size: 16px;
  --padding: calc(var(--knob-size) / 8);
  --toggle-width: calc((var(--knob-size) * 2) + (var(--padding) * 2));

  display: flex;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  width: var(--toggle-width);
  height: calc(var(--knob-size) + (var(--padding) * 2));
  padding: var(--padding);
  transition: background-color 80ms linear;
  border: none;
  border-radius: var(--knob-size);
  background-color: var(--gray-100);
  box-shadow: var(--shadow-xs-gray);
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: var(--padding);
    left: var(--padding);
    width: var(--knob-size);
    height: var(--knob-size);
    transition: transform 120ms ease-in-out;
    border-radius: 50%;
    background-color: var(--base-white);
    box-shadow: var(--shadow-xs-gray);
  }

  &[aria-checked="true"] {
    background-color: var(--blue-700);

    &::before {
      transform: translateX(calc(var(--toggle-width) - var(--knob-size) - (var(--padding) * 2)));
    }
  }
}
</style>
