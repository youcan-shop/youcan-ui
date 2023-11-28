<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { setTooltipPosition } from './utils';

const props = withDefaults(defineProps<{
  label?: string
  position?: 'left' | 'right' | 'top' | 'bottom'
}>(), {
  position: 'top',
});

const tooltipTrigger = ref<HTMLElement >();
const tooltip = ref<HTMLElement>();
const tooltipPosition = () => {
  if (tooltipTrigger.value && tooltip.value) {
    setTooltipPosition(tooltipTrigger.value, tooltip.value, props.position);
  }
};

const handleScroll = () => {
  if (!tooltipTrigger.value?.classList.contains('tooltip-trigger-hide')) {
    tooltipTrigger.value?.classList.add('tooltip-trigger-hide');
  }
};

const handleMouseEnter = () => {
  tooltipPosition();
};

onMounted(() => {
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
    background-color: #000;
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
