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
  'button',
  { link: isLink.value, rounded: props.rounded, [`size-${props.size}`]: true },
  props.variant,
  { 'icon-only': props.iconOnly },
]);
</script>

<template>
  <a
    v-if="isLink"
    :href="attrs.href as string"
    class="button"
    :class="buttonClasses"
    v-bind="$attrs"
  >
    <span class="label">
      <slot />
    </span>
  </a>
  <button
    v-else
    ref="button"
    class="button"
    :disabled="disabled"
    :class="buttonClasses"
    v-bind="$attrs"
  >
    <span class="label">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.button {
  --text-color: var(--base-white);
  --background-color: var(--base-black);
  --padding: 6px 12px;
  --border-radius: 8px;
  --text-style: var(--text-sm-medium);
  --border: none;
  --shadow: var(--shadow-xs-gray);
  --gap: 8px;

  display: flex;
  box-sizing: border-box;
  flex-direction: var(--icon-position);
  align-items: center;
  justify-content: center;
  width: max-content;
  max-width: 100%;
  padding: var(--padding);
  border: var(--border);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--shadow);
  cursor: pointer;
  gap: var(--gap);
}

.button.icon-only {
  aspect-ratio: 1;
}

.button.link {
  color: inherit;
  text-decoration: none;
}

.button .label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: var(--text-color);
  font: var(--text-style);
}

.button.size-xxs {
  --padding: 4px 8px;
  --gap: 4px;
}

.button.size-xs {
  --padding: 6px 12px;
}

.button.size-xs,
.button.size-xxs {
  --border-radius: 4px;
}

.button.size-sm {
  --padding: 8px 16px;
  --border-radius: 4px;
}

.button.size-md {
  --padding: 12px 16px;
}

.button.size-lg {
  --padding: 12px 24px;
  --text-style: var(--text-md-medium);
}

.button.size-xl {
  --padding: 13px 24px;
}

.button.size-2xl {
  --padding: 15px 32px;
}

.button.size-2xl,
.button.size-xl {
  --text-style: var(--text-lg-medium);
}

.button.rounded {
  --border-radius: 100px;
}

.button:hover {
  border: var(--hover-border);
  background-color: var(--hover-background-color);
  box-shadow: var(--hover-shadow);
}

.button:focus {
  border: var(--focus-border);
  background-color: var(--focus-background-color);
  box-shadow: var(--focus-shadow);
}

.button:active {
  border: var(--active-border);
  background-color: var(--active-background-color);
  box-shadow: var(--active-shadow);
}

.button:disabled {
  border: var(--disabled-border);
  background-color: var(--disabled-background-color);
  box-shadow: var(--disabled-shadow);
}

.button:hover .label {
  color: var(--hover-text-color);
}

.button:focus .label {
  color: var(--focus-text-color);
}

.button:active .label {
  color: var(--active-text-color);
}

.button:disabled .label {
  color: var(--disabled-text-color);
}

.button.primary {
  --active-text-color: var(--base-white);
  --focus-text-color: var(--base-white);
  --hover-text-color: var(--base-white);
  --background-color: var(--brand-500);
  --hover-background-color: var(--brand-600);
  --active-background-color: var(--brand-800);
  --disabled-background-color: var(--gray-300);
  --focus-background-color: var(--brand-500);
  --focus-shadow: var(--focus-shadow-xs-brand);
  --disabled-shadow: none;
}

.button.destructive {
  --active-text-color: var(--base-white);
  --focus-text-color: var(--base-white);
  --hover-text-color: var(--base-white);
  --background-color: var(--red-500);
  --hover-background-color: var(--red-600);
  --active-background-color: var(--red-800);
  --disabled-background-color: var(--gray-300);
  --focus-background-color: var(--red-500);
  --focus-shadow: var(--focus-shadow-xs-red);
  --disabled-shadow: none;
}

.button.secondary {
  --text-color: var(--gray-900);
  --text-style: var(--text-sm-regular);
  --background-color: var(--base-white);
  --hover-background-color: var(--gray-50);
  --active-background-color: var(--gray-100);
  --focus-shadow: var(--focus-shadow-xs-brand);
  --border: 1px solid var(--gray-200);
  --focus-border: 1px solid var(--brand-500);
  --hover-border: 1px solid var(--gray-300);
  --active-border: 1px solid var(--gray-300);
  --disabled-text-color: var(--gray-300);
  --disabled-border: 1px solid var(--gray-200);
  --disabled-background-color: var(--base-white);
  --disabled-shadow: none;
}

.button.tertiary {
  --text-color: var(--gray-900);
  --text-style: var(--text-sm-regular);
  --disabled-text-color: var(--gray-300);
  --background-color: transparent;
  --hover-background-color: var(--gray-50);
  --active-background-color: var(--gray-100);
  --disabled-background-color: transparent;
  --shadow: none;
  --focus-shadow: var(--focus-no-shadow-brand);
}

.button.secondary.size-2xl,
.button.tertiary.size-2xl,
.button.secondary.size-xl,
.button.tertiary.size-xl {
  --text-style: var(--text-lg-medium);
}

.button.secondary.size-lg,
.button.tertiary.size-lg {
  --text-style: var(--text-md-medium);
}
</style>
