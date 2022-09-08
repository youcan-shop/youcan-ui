<script setup lang="ts">
import { useSlots } from 'vue';

const props = defineProps({
  modelValue: String,
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['click']);

const slots = useSlots();
const hasIcon = typeof slots.icon !== 'undefined';

const clicked = () => {
  if (props.disabled === true) {
    return;
  }

  emit('click', props.modelValue);
};
</script>

<template>
  <div class="select-option" :disabled="disabled" tabindex="0" @click="clicked">
    <span v-if="hasIcon" class="icon">
      <slot name="icon" />
    </span>
    <span class="text">
      <slot />
    </span>
  </div>
</template>

<style scoped>
.select-option {
  display: flex;
  width: 100%;
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

.select-option:hover {
  background-color: var(--StormGray-100);
}

.select-option:hover .text {
  color: var(--StormGray-700);
}

.select-option:hover .icon {
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
</style>
