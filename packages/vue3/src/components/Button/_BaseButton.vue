<script setup lang="ts">
import type { ButtonIconPosition, ButtonSize } from './types';

withDefaults(
  defineProps<{
    size: ButtonSize
    disabled?: boolean
    iconPosition?: ButtonIconPosition
    roundedFull?: boolean
  }>(),
  {
    iconPosition: 'left',
    roundedFull: false,
    disabled: false,
  },
);
</script>

<template>
  <button ref="button" class="base-button" :disabled="disabled"
    :class="{ 'rounded-full': roundedFull, [`size-${size}`]: true, [`icon-${iconPosition}`]: true }">
    <span class="icon">
      <slot name="icon" />
    </span>
    <span class="text">
      <slot />
    </span>
  </button>
</template>

<style scoped lang="scss">
$states: hover, focus, active, disabled;

.base-button {
  --text-color: var(--base-white);
  --icon-color: var(--base-white);
  --background-color: var(--base-black);
  --padding: 6px 12px;
  --border-radius: 8px;
  --icon-size: 20px;
  --text-style: var(--text-sm-medium);
  --icon-position: 'row';
  --border: none;
  --shadow: var(--shadow-xs);

  $properties: background-color,
  border,
  shadow,
  text-color,
  icon-color;

  @each $state in $states {
    @each $property in $properties {
      --#{$state}-#{$property}: var(--#{$property});
    }
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: var(--icon-position);
  gap: 8px;
  border-radius: var(--border-radius);
  background-color: var(--background-color);
  border: var(--border);
  padding: var(--padding);
  box-shadow: var(--shadow);
  outline: none;

  .text {
    color: var(--text-color);
    font: var(--text-style);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon {
    color: var(--icon-color);
    width: var(--icon-size);
    height: var(--icon-size);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.size-xs {
    --padding: 6px 12px;
    --border-radius: 4px;
    --icon-size: 16px;

    &.icon-only {
      --padding: 8px;
    }
  }

  &.size-sm {
    --padding: 8px 12px;

    &.icon-only {
      --padding: 8px;
    }
  }

  &.size-md {
    --padding: 12px 16px;

    &.icon-only {
      --padding: 12px;
    }
  }

  &.size-lg {
    --padding: 12px 24px;
    --text-style: var(--text-md-medium);

    &.icon-only {
      --padding: 14px;
    }
  }

  &.size-xl {
    --padding: 13px 24px;

    &.icon-only {
      --padding: 14px;
    }
  }

  &.size-2xl {
    --padding: 15px 32px;

    &.icon-only {
      --padding: 16px;
    }
  }

  &.size-2xl,
  &.size-xl {
    --icon-size: 24px;
    --text-style: var(--text-lg-medium);
  }

  &.rounded-full {
    --border-radius: 100px;
  }

  &.icon-left {
    --icon-position: row;
  }

  &.icon-right {
    --icon-position: row-reverse;
  }

  &.icon-only {
    .text {
      display: none;
    }
  }
}

@each $state in $states {
  .base-button:#{$state} {
    background-color: var(--#{$state}-background-color);
    border: var(--#{$state}-border);
    box-shadow: var(--#{$state}-shadow);

    .text {
      color: var(--#{$state}-text-color);
    }

    .icon {
      color: var(--#{$state}-icon-color);
    }
  }
}
</style>