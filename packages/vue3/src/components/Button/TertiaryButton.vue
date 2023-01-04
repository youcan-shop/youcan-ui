<script setup lang="ts">
import type { ButtonIconPosition, ButtonSize } from '~/components/Button/types';
import BaseButton from '~/components/Button/_BaseButton.vue';

defineProps<{
  size: ButtonSize
  disabled?: boolean
  iconPosition?: ButtonIconPosition
  roundedFull?: boolean
}>();
</script>

<template>
  <BaseButton :size="size" :disabled="disabled" :icon-position="iconPosition" :rounded-full="roundedFull"
    class="tertiary">
    <template #icon>
      <slot name="icon" />
    </template>
    <slot />
  </BaseButton>
</template>

<style scoped>
.tertiary {
  --text-color: var(--gray-900);
  --disabled-text-color: var(--gray-100);
  --icon-color: var(--gray-500);
  --disabled-icon-color: var(--gray-100);
  --background-color: var(--base-white);
  --hover-background-color: var(--gray-50);
  --active-background-color: var(--gray-100);
  --disabled-background-color: var(--base-white);
  --focus-shadow: var(--focus-xs-brand);
  --disabled-shadow: none;
}
</style>
