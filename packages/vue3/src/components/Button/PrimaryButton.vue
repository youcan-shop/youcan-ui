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
    class="primary"
  >
    <template #icon>
      <slot name="icon" />
    </template>
    <slot />
  </BaseButton>
</template>

<style scoped>
.primary {
  --background-color: var(--brand-500);
  --hover-background-color: var(--brand-600);
  --active-background-color: var(--brand-800);
  --disabled-background-color: var(--gray-100);
  --focus-shadow: var(--focus-shadow-xs-brand);
  --disabled-shadow: none;
}
</style>
