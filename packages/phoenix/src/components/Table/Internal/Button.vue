<script setup lang="ts">
import type { TableButtonProps } from '~/types';
import Button from '~/components/Button/Button.vue';

withDefaults(
  defineProps<TableButtonProps>(),
  {
    size: 'sm',
  },
);
</script>

<template>
  <Button v-bind="$props" variant="secondary" :size="size">
    <template v-if="iconName" #icon>
      <i :class="iconName" />
    </template>
    {{ label }}
  </Button>
</template>
