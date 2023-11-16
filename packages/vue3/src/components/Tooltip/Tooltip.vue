<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const props = withDefaults(defineProps<{
  label?: string
  position?: 'left' | 'right' | 'top' | 'bottom'
}>(), {
  position: 'top',
});
const tooltipTrigger = ref<HTMLElement>();
const tooltip = ref<HTMLElement>();

const setTooltipPosition = (position = props.position) => {
  tooltipTrigger.value?.classList.remove('tooltip-trigger-hide');
  const offset = tooltip.value?.getBoundingClientRect();
  const triggerHeight = tooltipTrigger.value?.clientHeight || 0; // tooltip trigger height
  const triggerWidth = tooltipTrigger.value?.clientWidth || 0; // tooltip trigger width
  const tooltipHeight = tooltip.value?.clientHeight || 0; // tooltip  height
  const tooltipWidth = tooltip.value?.clientWidth || 0; // tooltip  width
  const windowWidth = window.innerWidth; // Window  width
  const windowHeight = window.innerHeight; // Window  width
  const gap = 6;
  const disableHorizontal = triggerWidth + tooltipWidth + gap > windowWidth;
  if (offset) {
    // set position top as default
    let centerTooltip = (triggerWidth - tooltipWidth) / 2;
    let top = offset.top - (triggerHeight + gap);
    let left = offset.left - centerTooltip;

    left = left < 0 ? gap / 2 : left + triggerWidth > windowWidth ? windowWidth - (triggerWidth + gap / 2) : left;

    const bottom = offset.bottom + triggerHeight + gap;
    const right = offset.right + triggerWidth + gap;

    if ((position === 'left' || position === 'right') && !disableHorizontal) {
      centerTooltip = (triggerHeight - tooltipHeight) / 2;
      top = offset.top - centerTooltip;
      top = top < 0 ? gap / 2 : top + triggerHeight > windowHeight ? windowHeight - (triggerHeight + gap / 2) : top;
      left = offset.left - (triggerWidth + gap);

      if ((position === 'right' || left < 0) && right < windowWidth) {
        left = offset.left + (tooltipWidth + gap);
      }
    }
    else if ((position === 'bottom' || top < 0) && bottom < windowHeight) {
      top = offset.top + (tooltipHeight + gap);
    }

    tooltipTrigger.value?.setAttribute('style', `top:${top}px;left:${left}px`);
  }
};

const handleScroll = () => {
  if (!tooltipTrigger.value?.classList.contains('tooltip-trigger-hide')) {
    tooltipTrigger.value?.classList.add('tooltip-trigger-hide');
  }
};

onMounted(() => {
  setTooltipPosition();
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div v-if="label" ref="tooltip" class="tooltip" :class="position" @mouseenter="setTooltipPosition()">
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
