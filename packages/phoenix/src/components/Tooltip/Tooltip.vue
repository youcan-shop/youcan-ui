<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { setPosition } from '~/helpers';
import type { TooltipProps } from '~/types';

const props = withDefaults(defineProps<TooltipProps>(), {
  position: 'top',
});

const triggeredElement = ref<HTMLElement >();
const tooltip = ref<HTMLElement>();
const tooltipPosition = () => {
  if (triggeredElement.value && tooltip.value) {
    const { left, top } = setPosition(triggeredElement.value, tooltip.value, props.position);
    triggeredElement.value?.setAttribute('style', `top:${top}px;left:${left}px`);
  }
};

const handleScroll = () => {
  if (!triggeredElement.value?.classList.contains('triggered-element-hide')) {
    triggeredElement.value?.classList.add('triggered-element-hide');
  }
};

const handleMouseEnter = () => {
  triggeredElement.value?.classList.remove('triggered-element-hide');
  tooltipPosition();
};

onMounted(() => {
  triggeredElement.value?.classList.remove('triggered-element-hide');
  tooltipPosition();
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div v-if="label" ref="tooltip" class="tooltip" :class="position" @mouseenter="handleMouseEnter">
    <span ref="triggeredElement" class="triggered-element">{{ label }}</span>

    <slot />
  </div>
  <slot v-else />
</template>

<style scoped>
.tooltip {
  display: inline-block;
  position: relative;
}

.tooltip .triggered-element {
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
}

.tooltip .triggered-element-hide {
  visibility: hidden !important;
  opacity: 0 !important;
}

.tooltip:hover .triggered-element {
  visibility: visible;
  transition-delay: 0.2s;
  opacity: 1;
}
</style>
