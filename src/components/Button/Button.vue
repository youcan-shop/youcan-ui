<script setup lang="ts">
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    ref="target" class="button" :disabled="disabled"
    :class="{ disabled }"
  >
    <span class="text">
      <slot />
    </span>
  </button>
</template>

<style scoped lang="scss">
  .button {
    --button-bg-color: var(--stormGray-100);
    --button-color: var(--base-black);
    background: var(--button-bg-color);
    color: var(--button-color);
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
    cursor: pointer;

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
