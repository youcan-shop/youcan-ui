<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  modelValue: boolean
}>();

const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value),
});
</script>

<template>
  <button aria-label="toggle button" class="toggle" role="switch" type="button" :aria-checked="model"
    @click="model = !model" />
</template>

<style scoped lang="scss">
.toggle {
  --knob-size: 16px;
  --padding: calc(var(--knob-size) / 8);
  --toggle-width: calc((var(--knob-size) * 2) + (var(--padding) * 2));

  width: var(--toggle-width);
  height: calc(var(--knob-size) + (var(--padding) * 2));
  background-color: var(--gray-100);
  border-radius: var(--knob-size);
  box-shadow: var(--shadow-xs);
  padding: var(--padding);
  display: flex;
  align-items: center;
  position: relative;
  border: none;
  transition: background-color 80ms linear;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: var(--padding);
    left: var(--padding);
    width: var(--knob-size);
    height: var(--knob-size);
    background-color: var(--base-white);
    border-radius: 50%;
    box-shadow: var(--shadow-xs);
    transition: transform 120ms ease-in-out;
  }

  &[aria-checked='true'] {
    background-color: var(--blue-700);

    &::before {
      transform: translateX(calc(var(--toggle-width) - var(--knob-size) - (var(--padding) * 2)));
    }
  }
}
</style>
