<script setup lang="ts">
import { useSlots } from 'vue';
import type { ButtonProps } from '~/components/Button/types';
import BaseButton from '~/components/Button/_BaseButton.vue';

defineProps<ButtonProps>();

const slots = useSlots();
</script>

<template>
  <BaseButton
    :size="size" :disabled="disabled" :icon-position="iconPosition" :rounded-full="roundedFull"
    class="secondary"
  >
    <template v-if="slots.icon" #icon>
      <slot name="icon" />
    </template>
    <slot />
  </BaseButton>
</template>

<style scoped>
.secondary {
  --text-color: var(--gray-900);
  --text-style: var(--text-sm-regular);
  --disabled-text-color: var(--gray-300);
  --icon-color: var(--brand-500);
  --disabled-icon-color: var(--gray-300);
  --background-color: var(--base-white);
  --hover-background-color: var(--gray-50);
  --active-background-color: var(--gray-100);
  --disabled-background-color: var(--base-white);
  --focus-shadow: var(--focus-shadow-xs-brand);
  --disabled-shadow: none;
  --border: 1px solid var(--gray-200);
  --focus-border: 1px solid var(--brand-500);
  --hover-border: 1px solid var(--gray-300);
  --active-border: 1px solid var(--gray-300);
}
</style>
