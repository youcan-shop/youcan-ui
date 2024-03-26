<script setup lang="ts">
import type { TableButtonProps } from '~/types';
import SecondaryButton from '~/components/Button/SecondaryButton.vue';

withDefaults(
  defineProps<TableButtonProps>(),
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
