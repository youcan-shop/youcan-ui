<script setup lang="ts">
import type { Color } from '~/components/Button/Button.types';

const props = defineProps({
  color: {
    type: String as () => Color,
    default: 'primary',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    ref="target" class="button" :disabled="disabled"
    :class="{ [color]: color, disabled }"
  >
    <span class="text">
      <slot />
    </span>
  </button>
</template>

<style scoped lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 16px 32px;
  font-size: 16px;
  border: none;
  outline: none;
  user-select: none;
  width: max-content;

  &.primary {
    background: #B83375;
    color: #FFFFFF;
  }

  &.disabled {
    pointer-events: none;
  }
}

.text {
  color: currentColor;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0.02em;
}
</style>
