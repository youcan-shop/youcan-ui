<script setup lang="ts">
import { useSlots } from 'vue';
import { type iconPosition } from '~/components/YButton/button.types';

const props = defineProps({
  iconPosition: {
    type: String as () => iconPosition,
    default: 'left',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const slots = useSlots();

const hasText = typeof slots.default !== 'undefined';
const hasIcon = typeof slots.icon !== 'undefined';
</script>

<template>
  <button class="button" :disabled="disabled" :class="{ 'flip-order': hasIcon && props.iconPosition === 'right', 'disabled': disabled }">
    <span v-if="hasIcon" class="icon" :class="{ 'has-text': hasText, 'right': iconPosition === 'right' }">
      <slot name="icon" />
    </span>
    <span class="text">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline: none;
  user-select: none;
}

.button.disabled {
  pointer-events: none;
}

.button.flip-order {
  flex-direction: row-reverse;
}

.text {
  color: currentColor;
  font-weight: 500;
}

.icon {
  margin-right: 8px;
  margin-left: 0px;
}

.icon * {
  width: 18px;
  height: 18px;
  display: block;
  fill: currentColor;
}

.icon.has-text.right {
  margin-right: 0px;
  margin-left: 8px;
}
</style>
