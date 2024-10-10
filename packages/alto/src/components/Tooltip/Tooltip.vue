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
  if (!triggeredElement.value?.classList.contains('yc-tooltip__triggered--hide')) {
    triggeredElement.value?.classList.add('yc-tooltip__triggered--hide');
  }
};

const handleMouseEnter = () => {
  triggeredElement.value?.classList.remove('yc-tooltip__triggered--hide');
  tooltipPosition();
};

onMounted(() => {
  triggeredElement.value?.classList.remove('yc-tooltip__triggered--hide');
  tooltipPosition();
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div v-if="label" ref="tooltip" class="yc-tooltip" :class="position" @mouseenter="handleMouseEnter">
    <span ref="triggeredElement" class="yc-tooltip__triggered">{{ label }}</span>

    <slot />
  </div>
  <slot v-else />
</template>

<style scoped>
@import "@youcan/styles/tooltip";
</style>
