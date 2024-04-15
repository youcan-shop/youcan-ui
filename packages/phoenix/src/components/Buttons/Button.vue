<script setup lang="ts">
import { useSlots } from 'vue';
import type { ButtonProps } from '~/types';

withDefaults(
  defineProps<ButtonProps>(),
  {
    size: 'md',
    iconPosition: 'left',
    roundedFull: false,
    disabled: false,
    variant: 'primary',
  },
);

const slots = useSlots();
</script>

<template>
  <a v-if="link" :href="linkUrl" class="link">
    <button
      ref="button" class="base-button" :disabled="disabled"
      :class="[
        { 'rounded-full': roundedFull, [`size-${size}`]: true, [`icon-${iconPosition}`]: true },
        `variant-${variant}`,
      ]"
    >
      <span v-if="slots.icon" class="icon">
        <slot name="icon" />
      </span>
      <span class="text">
        <slot />
      </span>
    </button>
  </a>
  <button
    v-else
    ref="button" class="base-button" :disabled="disabled"
    :class="[
      { 'rounded-full': roundedFull, [`size-${size}`]: true, [`icon-${iconPosition}`]: true },
      `variant-${variant}`,
    ]"
  >
    <span v-if="slots.icon" class="icon">
      <slot name="icon" />
    </span>
    <span class="text">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.link {
  text-decoration: none;
}

.base-button {
  --text-color: var(--base-white);
  --icon-color: var(--base-white);
  --background-color: var(--base-black);
  --padding: 6px 12px;
  --border-radius: 8px;
  --icon-size: 20px;
  --text-style: var(--text-sm-medium);
  --icon-position: "row";
  --border: none;
  --shadow: var(--shadow-xs-gray);
  --gap: 8px;

  display: flex;
  box-sizing: border-box;
  flex-direction: var(--icon-position);
  align-items: center;
  justify-content: center;
  padding: var(--padding);
  border: var(--border);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--shadow);
  cursor: pointer;
  gap: var(--gap);
}

.base-button .text,
.base-button .icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.base-button .text {
  color: var(--text-color);
  font: var(--text-style);
}

.base-button .icon {
  color: var(--icon-color);
}

.base-button .icon i {
  flex: none;
  width: var(--icon-size);
  height: var(--icon-size);
}

.base-button.size-xxs {
  --padding: 4px 8px;
  --gap: 4px;
}

.base-button.size-xxs.icon-only {
  --padding: 6px;
}

.base-button.size-xs {
  --padding: 6px 12px;
}

.base-button.size-xs.icon-only {
  --padding: 8px;
}

.base-button.size-xs,
.base-button.size-xxs {
  --icon-size: 16px;
  --border-radius: 4px;
}

.base-button.size-sm {
  --padding: 8px 12px;
  --border-radius: 4px;
}

.base-button.size-sm.icon-only {
  --padding: 8px;
}

.base-button.size-md {
  --padding: 12px 16px;
}

.base-button.size-md.icon-only {
  --padding: 12px;
}

.base-button.size-lg {
  --padding: 12px 24px;
  --text-style: var(--text-md-medium);
}

.base-button.size-lg.icon-only,
.base-button.size-xl.icon-only {
  --padding: 14px;
}

.base-button.size-xl {
  --padding: 13px 24px;
}

.base-button.size-2xl {
  --padding: 15px 32px;
}

.base-button.size-2xl.icon-only {
  --padding: 16px;
}

.base-button.size-2xl,
.base-button.size-xl {
  --icon-size: 24px;
  --text-style: var(--text-lg-medium);
}

.base-button.rounded-full {
  --border-radius: 100px;
}

.base-button.icon-left {
  --icon-position: row;
}

.base-button.icon-right {
  --icon-position: row-reverse;
}

.base-button.icon-only .text {
  display: none;
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

.base-button:hover .text {
  color: var(--hover-text-color);
}

.base-button:hover .icon {
  color: var(--hover-icon-color);
}

.base-button:focus .text {
  color: var(--focus-text-color);
}

.base-button:focus .icon {
  color: var(--focus-icon-color);
}

.base-button:active .text {
  color: var(--active-text-color);
}

.base-button:active .icon {
  color: var(--active-icon-color);
}

.base-button:disabled .text {
  color: var(--disabled-text-color);
}

.base-button:disabled .icon {
  color: var(--disabled-icon-color);
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
  --icon-color: var(--brand-500);
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
  --disabled-icon-color: var(--gray-300);
  --disabled-background-color: var(--base-white);
  --disabled-shadow: none;
}

.base-button.variant-tertiary {
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
