<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { setPosition } from './utils';
import type { TooltipProps } from '~/types';

const props = withDefaults(defineProps<TooltipProps>(), {
  position: 'top',
});

const tooltipTrigger = ref<HTMLElement >();
const tooltip = ref<HTMLElement>();
const tooltipPosition = () => {
  if (tooltipTrigger.value && tooltip.value) {
    const { left, top } = setPosition(tooltipTrigger.value, tooltip.value, props.position);
    tooltipTrigger.value?.setAttribute('style', `top:${top}px;left:${left}px`);
  }
};

const handleScroll = () => {
  if (!tooltipTrigger.value?.classList.contains('tooltip-trigger-hide')) {
    tooltipTrigger.value?.classList.add('tooltip-trigger-hide');
  }
};

const handleMouseEnter = () => {
  tooltipTrigger.value?.classList.remove('tooltip-trigger-hide');
  tooltipPosition();
};

onMounted(() => {
  tooltipTrigger.value?.classList.remove('tooltip-trigger-hide');
  tooltipPosition();
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div v-if="label" ref="tooltip" class="tooltip" :class="position" @mouseenter="handleMouseEnter">
    <span ref="tooltipTrigger" class="tooltip-trigger">{{ label }}</span>

    <slot />
  </div>
  <slot v-else />
</template>

<style scoped lang="scss">
.tooltip {
  display: inline-block;
  position: relative;

  .tooltip-trigger {
    visibility: hidden;
    position: fixed;
    z-index: 9999999999;
    width: max-content;
    max-width: 200px;
    padding: 8px 12px;
    transition: opacity 0.3s ease-in-out;
    transition-delay: 0.1s;
    border-radius: 4px;
    opacity: 0;
    background-color: var(--base-black);
    color: var(--base-white);
    font: var(--text-xs-regular);

    &-hide {
      visibility: hidden !important;
      opacity: 0 !important;
    }
  }

  &:hover {
    .tooltip-trigger {
      visibility: visible;
      transition-delay: 0.2s;
      opacity: 1;
    }
  }
}
</style>
