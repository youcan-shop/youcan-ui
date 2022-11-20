<script setup lang="ts">
import Button from '~/components/Button/Button.vue';
</script>

<template>
  <Button
    v-bind="$attrs"
    ref="target"
    class="primary"
  >
    <slot />
  </Button>
</template>

<style scoped lang="scss">
  .button.primary {
    --button-bg-color: var(--primary-color);
    --button-color: var(--base-white);

    &:hover {
      background: var(--primary-500);
      transition: all 0.2s ease;
    }

    &:active {
      background: var(--primary-600);
    }
  }
</style>
