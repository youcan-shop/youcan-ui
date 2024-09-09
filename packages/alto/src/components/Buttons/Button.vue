<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import type { ButtonProps } from './types';

const props = withDefaults(
  defineProps<ButtonProps>(),
  {
    size: 'md',
    rounded: false,
    disabled: false,
    variant: 'primary',
    iconOnly: false,
  },
);

const attrs = useAttrs();

const isLink = computed(() => !!attrs.href);

const buttonClasses = computed(() => [
  'yc-button',
  { 'yc-link': isLink.value, 'yc-rounded': props.rounded, [`yc-size-${props.size}`]: true },
  `yc-${props.variant}`,
  { 'yc-icon-only': props.iconOnly },
]);
</script>

<template>
  <a
    v-if="isLink"
    :href="attrs.href as string"
    class="yc-button"
    :class="buttonClasses"
    v-bind="$attrs"
  >
    <span class="yc-button-label">
      <slot />
    </span>
  </a>
  <button
    v-else
    ref="button"
    class="yc-button"
    :disabled="disabled"
    :class="buttonClasses"
    v-bind="$attrs"
  >
    <span class="yc-button-label">
      <slot />
    </span>
  </button>
</template>

<style scoped>
@import '@youcan/styles/button';
</style>
