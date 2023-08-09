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
    position: absolute;
    z-index: 99;
    top: 100%;
    left: 50%;
    width: max-content;
    max-width: 300px;
    padding: 8px 12px;
    transform: translateX(-50%);
    transition: all 0.2s ease-in-out;
    border-radius: 4px;
    background-color: #000;
    color: var(--base-white);
    font: var(--text-xs-regular);
  }

  &:hover {
    .tooltip-trigger {
      visibility: visible !important;
    }
  }

  &.left {
    .tooltip-trigger {
        top: 50%;
        right: calc(70% + 8px);
        left: unset;
        transform: translateY(calc(-50%));
    }
  }

  &.right {
    .tooltip-trigger {
        top: 50%;
        right: unset;
        left: calc(70% + 8px);
        transform: translateY(-50%);
    }
  }

  &.top {
    .tooltip-trigger {
        top: unset;
        bottom: calc(70% + 8px);
    }
  }

  &.bottom {
    .tooltip-trigger {
        top: calc(70% + 8px);
        bottom: unset;
    }
  }
}
</style>
