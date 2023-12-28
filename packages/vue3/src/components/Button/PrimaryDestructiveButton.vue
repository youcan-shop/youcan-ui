<script setup lang="ts">
import { useSlots } from 'vue';
import type { ButtonIconPosition, ButtonSize, ButtonType } from '~/components/Button/types';
import BaseButton from '~/components/Button/_BaseButton.vue';

defineProps<{
  type?: ButtonType
  size?: ButtonSize
  disabled?: boolean
  iconPosition?: ButtonIconPosition
  roundedFull?: boolean
}>();

const slots = useSlots();
</script>

<template>
  <BaseButton
    :size="size" :disabled="disabled" :icon-position="iconPosition" :rounded-full="roundedFull" :type="type"
    class="primary-destructive"
  >
    <template v-if="slots.icon" #icon>
      <slot name="icon" />
    </template>
    <slot />
  </BaseButton>
</template>

<style scoped>
.primary-destructive {
  --background-color: var(--red-500);
  --hover-background-color: var(--red-600);
  --active-background-color: var(--red-800);
  --disabled-background-color: var(--gray-300);
  --focus-shadow: var(--focus-shadow-xs-red);
  --disabled-shadow: none;
}
</style>
