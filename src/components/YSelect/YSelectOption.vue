<script setup lang="ts">
import { useSlots } from 'vue';

const { disabled = false, modelValue, selected = false } = defineProps<{
  modelValue: unknown
  disabled?: boolean
  selected?: boolean
}>();

const emit = defineEmits(['click']);

const slots = useSlots();
const hasIcon = typeof slots.icon !== 'undefined';

const clicked = () => {
  if (disabled === true) {
    return;
  }

  emit('click', modelValue);
};
</script>

<template>
  <div class="select-option" :class="{ selected }" :disabled="disabled" tabindex="0" @click="clicked">
    <span v-if="hasIcon" class="icon">
      <slot name="icon" />
    </span>
    <span class="text">
      <slot />
    </span>
    <i v-if="selected" i-tabler-check class="selected-icon" />
  </div>
</template>

<style scoped>
.select-option {
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  background-color: var(--Base-White);
  border-radius: 4px;
  padding: 10px 14px;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline: none;
  cursor: pointer;
  user-select: none;
}

.select-option.selected {
  background-color: var(--Primary-50);
}

.select-option.selected .icon {
  color: var(--Primary-600);
}

.select-option:not(.selected):hover {
  background-color: var(--StormGray-50);
}

.select-option:not(.selected):hover .text {
  color: var(--StormGray-700);
}

.select-option:not(.selected):hover .icon {
  color: var(--StormGray-700);
}

.select-option:focus {
  box-shadow: var(--focus_ring-shadow-4px-Primary-100);
}

.select-option[disabled="true"] {
  cursor: default;
}

.select-option[disabled="true"] .text {
  color: var(--StormGray-300);
}

.select-option[disabled="true"] .icon {
  color: var(--StormGray-300);
}

.icon {
  color: var(--StormGray-600);
  margin-inline-end: 8px;
}

.icon * {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

.text {
  color: var(--StormGray-900);
  font-size: var(--font-size-md);
  line-height: var(--line-height-md);
}

.selected-icon {
  width: 20px;
  height: 100%;
  position: absolute;
  right: 14px;
  color: var(--Primary-600);
}
</style>
