<script setup lang="ts">
import type { ButtonProps } from '~/types';

withDefaults(
  defineProps<ButtonProps>(),
  {
    size: 'md',
    rounded: false,
    disabled: false,
    variant: 'primary',
  },
);
</script>

<template>
  <component
    :is="href ? 'a' : 'button'" ref="button" :href="href" class="base-button" :disabled="disabled"
    :class="[
      { link: href, rounded, [`size-${size}`]: true },
      `variant-${variant}`,
    ]"
  >
    <span class="label">
      <slot />
    </span>
  </component>
</template>

<style scoped>
.base-button {
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

.base-button.link {
  color: inherit;
  text-decoration: none;
}

.base-button .label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: var(--text-color);
  font: var(--text-style);
}

.base-button.size-xxs {
  --padding: 4px 8px;
  --gap: 4px;
}

.base-button.size-xs {
  --padding: 6px 12px;
}

.base-button.size-xs,
.base-button.size-xxs {
  --border-radius: 4px;
}

.base-button.size-sm {
  --padding: 8px 12px;
  --border-radius: 4px;
}

.base-button.size-md {
  --padding: 12px 16px;
}

.base-button.size-lg {
  --padding: 12px 24px;
  --text-style: var(--text-md-medium);
}

.base-button.size-xl {
  --padding: 13px 24px;
}

.base-button.size-2xl {
  --padding: 15px 32px;
}

.base-button.size-2xl,
.base-button.size-xl {
  --text-style: var(--text-lg-medium);
}

.base-button.rounded {
  --border-radius: 100px;
}

.base-button:hover {
  border: var(--hover-border);
  background-color: var(--hover-background-color);
  box-shadow: var(--hover-shadow);
}

.base-button:focus {
  border: var(--focus-border);
  background-color: var(--focus-background-color);
  box-shadow: var(--focus-shadow);
}

.base-button:active {
  border: var(--active-border);
  background-color: var(--active-background-color);
  box-shadow: var(--active-shadow);
}

.base-button:disabled {
  border: var(--disabled-border);
  background-color: var(--disabled-background-color);
  box-shadow: var(--disabled-shadow);
}

.base-button:hover .label {
  color: var(--hover-text-color);
}

.base-button:focus .label {
  color: var(--focus-text-color);
}

.base-button:active .label {
  color: var(--active-text-color);
}

.base-button:disabled .label {
  color: var(--disabled-text-color);
}

.base-button.variant-primary {
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

.base-button.variant-destructive {
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

.base-button.variant-secondary {
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

.base-button.variant-tertiary {
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

.base-button.variant-secondary.size-2xl,
.base-button.variant-tertiary.size-2xl,
.base-button.variant-secondary.size-xl,
.base-button.variant-tertiary.size-xl {
  --text-style: var(--text-lg-medium);
}

.base-button.variant-secondary.size-lg,
.base-button.variant-tertiary.size-lg {
  --text-style: var(--text-md-medium);
}
</style>
