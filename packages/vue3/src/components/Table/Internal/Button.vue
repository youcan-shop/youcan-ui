<script setup lang="ts">
import SecondaryButton from '~/components/Button/SecondaryButton.vue';
import type { ButtonIconPosition, ButtonSize } from '~/components/Button/types';

withDefaults(
  defineProps<{
    label: string
    iconName?: string
    size?: ButtonSize
    disabled?: boolean
    iconPosition?: ButtonIconPosition
    roundedFull?: boolean
  }>(),
  {
    size: 'sm',
  },
);
</script>

<template>
  <SecondaryButton v-bind="$props" :size="size">
    <template v-if="iconName" #icon>
      <i :class="iconName" />
    </template>
    {{ label }}
  </SecondaryButton>
</template>
