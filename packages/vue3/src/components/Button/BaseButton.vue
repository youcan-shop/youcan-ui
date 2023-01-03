<script setup lang="ts">
import type { ButtonIconPosition, ButtonSize } from './types';

defineProps<{
  size: ButtonSize
  disabled?: boolean
  iconPosition?: ButtonIconPosition
  roundedFull?: boolean
}>();
</script>

<template>
  <button ref="button" class="base-button" :disabled="disabled"
    :class="{ 'rounded-full': roundedFull, [`size-${size}`]: true, [`icon-${iconPosition || 'left'}`]: true }">
    <span class="icon">
      <slot name="icon" />
    </span>
    <span class="text">
      <slot />
    </span>
  </button>
</template>

<style scoped lang="scss">
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
  --shadow: none;

  // Disabled state tokens
  --disabled-text-color: var(--text-color);
  --disabled-icon-color: var(--icon-color);
  --disabled-background-color: var(--background-color);
  --disabled-border: var(--border);
  --disabled-shadow: var(--shadow);
  // --------------------------------

  // Active state tokens
  --active-text-color: var(--text-color);
  --active-icon-color: var(--icon-color);
  --active-background-color: var(--background-color);
  --active-border: var(--border);
  --active-shadow: var(--shadow);
  // --------------------------------

  // Hover state tokens
  --hover-text-color: var(--text-color);
  --hover-icon-color: var(--icon-color);
  --hover-background-color: var(--background-color);
  --hover-border: var(--border);
  --hover-shadow: var(--shadow);
  // --------------------------------

  // Focus state tokens
  --focus-text-color: var(--text-color);
  --focus-icon-color: var(--icon-color);
  --focus-background-color: var(--background-color);
  --focus-border: var(--border);
  --focus-shadow: var(--shadow);
  // --------------------------------

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

/**
  * Disabled state
 */
.base-button:disabled {
  background-color: var(--disabled-background-color);
  border: var(--disabled-border);
  box-shadow: var(--disabled-shadow);

  .text {
    color: var(--disabled-text-color);
  }

  .icon {
    color: var(--disabled-icon-color);
  }
}

/**
  * Active state
 */
.base-button:active {
  background-color: var(--active-background-color);
  border: var(--active-border);
  box-shadow: var(--active-shadow);

  .text {
    color: var(--active-text-color);
  }

  .icon {
    color: var(--active-icon-color);
  }
}

/**
  * Hover state
 */
.base-button:hover {
  background-color: var(--hover-background-color);
  border: var(--hover-border);
  box-shadow: var(--hover-shadow);

  .text {
    color: var(--hover-text-color);
  }

  .icon {
    color: var(--hover-icon-color);
  }
}

/**
  * Focus state
 */
.base-button:hover {
  background-color: var(--focus-background-color);
  border: var(--focus-border);
  box-shadow: var(--focus-shadow);

  .text {
    color: var(--focus-text-color);
  }

  .icon {
    color: var(--focus-icon-color);
  }
}
</style>
