<script setup lang="ts">
import { useSlots } from 'vue';
import type { ButtonIconPosition, ButtonSize } from '~/components/Button/types';
import BaseButton from '~/components/Button/_BaseButton.vue';

defineProps<{
  size?: ButtonSize
  disabled?: boolean
  iconPosition?: ButtonIconPosition
  roundedFull?: boolean
  loading?: boolean
}>();

const slots = useSlots();
</script>

<template>
  <BaseButton
    :size="size" :disabled="disabled" :icon-position="iconPosition" :rounded-full="roundedFull" :loading="loading"
    class="tertiary"
  >
    <template v-if="slots.icon" #icon>
      <slot name="icon" />
    </template>
    <slot />
  </BaseButton>
</template>

<style scoped>
.tertiary {
  --text-color: var(--gray-900);
  --text-style: var(--text-sm-regular);
  --disabled-text-color: var(--gray-300);
  --icon-color: var(--gray-700);
  --disabled-icon-color: var(--gray-300);
  --background-color: transparent;
  --hover-background-color: var(--gray-50);
  --active-background-color: var(--gray-100);
  --disabled-background-color: transparent;
  --shadow: none;
  --focus-shadow: var(--focus-no-shadow-brand);
}
</style>
