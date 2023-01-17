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
  <BaseButton
    :size="size" :disabled="disabled" :icon-position="iconPosition" :rounded-full="roundedFull"
    class="secondary-destructive"
  >
    <template #icon>
      <slot name="icon" />
    </template>
    <slot />
  </BaseButton>
</template>

<style scoped>
.secondary-destructive {
  --text-color: var(--gray-900);
  --text-style: var(--text-sm-regular);
  --disabled-text-color: var(--gray-100);
  --icon-color: var(--red-500);
  --disabled-icon-color: var(--gray-100);
  --background-color: var(--base-white);
  --hover-background-color: var(--gray-50);
  --active-background-color: var(--gray-100);
  --disabled-background-color: var(--base-white);
  --focus-shadow: var(--focus-shadow-xs-red);
  --disabled-shadow: none;
  --border: 1px solid var(--gray-100);
  --focus-border: 1px solid var(--red-500);
}
</style>
