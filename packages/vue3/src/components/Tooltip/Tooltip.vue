<script setup lang="ts">
defineProps<{
  label?: string
  position?: 'left' | 'right' | 'top' | 'bottom'
}>();
</script>

<template>
  <div v-if="label" class="tooltip" :class="position">
    <span class="tooltip-trigger">{{ label }}</span>

    <slot />
  </div>
  <slot v-else />
</template>

<style scoped lang="scss">
.tooltip {
  position: relative;
  display: inline-block;

  .tooltip-trigger {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    z-index: 99;
    width: max-content;
    max-width: 300px;
    padding: 8px 12px;
    transition: all 0.2s ease-in-out;
    border-radius: 4px;
    background-color: #000;
    color: var(--base-white);
    font: var(--text-xs-regular);
  }

  &:hover {
    .tooltip-trigger {
      visibility: visible;
      opacity: 1;
    }
  }

  &.left {
    .tooltip-trigger {
      top: 50%;
      transform: translate(calc(-100% - 4px), -50%);
      left: 0;
    }
  }

  &.right {
    .tooltip-trigger {
      top: 50%;
      transform: translate(calc(100% + 4px), -50%);
      right: 0;
    }
  }

  &.top {
    .tooltip-trigger {
      left: 50%;
      transform: translate(-50%, calc(-100% - 4px));
      top: 0;
    }
  }

  &.bottom {
    .tooltip-trigger {
      left: 50%;
      transform: translate(-50%, calc(100% + 4px));
      bottom: 0;
    }
  }
}

[dir="rtl"] {
  .tooltip {
    &.left {
      .tooltip-trigger {
        top: 50%;
        transform: translate(calc(100% + 4px), -50%);
        right: 0;
      }
    }

    &.right {
      .tooltip-trigger {
        top: unset;
        right: unset;
        transform: unset;
        top: 50%;
        transform: translate(calc(-100% - 4px), -50%);
        left: 0;
      }
    }
  }
}
</style>
