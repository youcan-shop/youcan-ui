<script setup lang="ts">
import type { CSSProperties, SetupContext } from 'vue';
import { computed, onMounted, ref } from 'vue';
import RangeSliderProps from './props';
import { useModelValue, useSlide, useState, watchFillWidth, watchToolTip } from './helpers';

const props = defineProps(RangeSliderProps);

const emit = defineEmits([
  'update:modelValue',
  'change',
  'sliding',
  'slideend',
  'slidestart',
]);

const HEIGHT = 6;

if (props.modelValue < props.min || props.modelValue > props.max) {
  console.error('[YouCanUI/RangeSlider] Error: model value exceeds defined bounds');
}

if (props.max <= props.min) {
  console.error('[YouCanUI/RangeSlider] Error: the max value is smaller than or equal to the min value');
}

const state = useState(props);

const { updateModelValue, parseModelValue } = useModelValue(state, props, emit as SetupContext['emit']);
const { handleClick } = useSlide(state, props, emit as SetupContext['emit'], updateModelValue);

const hovered = ref(false);
const appearHovered = computed<boolean>(() => state.sliding.value || hovered.value);

const tooltipWidth = ref(0);
const tooltipElement = ref<HTMLDivElement>();

const tooltipText = computed<string>(() => {
  if (!props.tooltipVisible) {
    return '';
  }

  if (props.formatToolTip != null) {
    return props.formatToolTip(
      state.parsedSliderValue.value || parseModelValue(state.rawModelValue.value),
    );
  }

  return state.parsedSliderValue.value || parseModelValue(state.rawModelValue.value);
});

const tooltipOffset = computed<number>(() => {
  if (!props.tooltipVisible) {
    return 0;
  }

  const width = tooltipWidth.value
    ? tooltipWidth.value + HEIGHT / 3
    : 40 + state.parsedSliderValue.value.toString().length * 9;

  return state.fillWidth.value - width / 2;
});

const tooltipStyles = computed<CSSProperties>(() => ({
  'top': 'unset',
  'bottom': 'var(--tooltip-margin)',
  'transform': `translate(${tooltipOffset.value}px)`,
  '--tooltip-margin': `max(
    calc(var(--height, 6px) + 12px),
    calc(var(--height, 6px) * ${
      appearHovered.value
        ? 'var(--handle-scale, 1.35)'
        : '1.35'
    })
  )`,
}));

const filledTrackStyles = computed<CSSProperties>(() => ({
  width: `${state.fillWidth.value}px`,
}));

const knobStyles = computed<CSSProperties>(() => ({
  left: `${state.fillWidth.value - (HEIGHT * 2.333) / 2}px`,
}));

onMounted(() => {
  watchFillWidth(state);
  watchToolTip(tooltipElement, tooltipWidth);
});
</script>

<template>
  <div
    :ref="(el) => state.slider.value = el as HTMLDivElement"
    class="range-slider"
    :tabindex="disabled ? undefined : 0"
    :disabled="disabled ? '' : undefined"
    :class="{ disabled, hover: !disabled && hovered, sliding: !disabled && state.sliding.value }"
    @touchstart="!disabled ? handleClick($event) : null"
    @mousedown="!disabled ? handleClick($event) : null"
    @mouseenter="!disabled ? (hovered = true) : null"
    @mouseleave="!disabled ? (hovered = false) : null"
  >
    <Transition name="range-slider-fade">
      <div
        v-show="tooltipVisible && !disabled && (hovered || state.sliding.value)"
        ref="tooltip"
        class="range-slider-tooltip-wrapper"
        :style="tooltipStyles"
      >
        <div class="range-slider-tooltip">
          {{ tooltipText }}
        </div>
      </div>
    </Transition>

    <div
      class="range-slider-track"
    />

    <div
      class="range-slider-track-filled"
      :style="filledTrackStyles"
    />

    <div
      class="range-slider-knob"
      :style="knobStyles"
      :class="{ hover: !disabled && appearHovered }"
    />
  </div>
</template>

<style scoped>
.range-slider-fade-enter-active,
.range-slider-fade-leave-active {
  transition: opacity 0.2s;
}

.range-slider-fade-enter,
.range-slider-fade-leave-to {
  opacity: 0;
}

.range-slider {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: v-bind("`${HEIGHT}px`");
  margin: 3px 0;
  font-family: inherit;
  cursor: pointer;
}

.range-slider.disabled {
  cursor: unset;
}

.range-slider .range-slider-track {
  width: 100%;
  height: 100%;
  border-radius: v-bind("`${HEIGHT / 2}px`");
  background-color: var(--gray-100);
}

.range-slider .range-slider-track-filled {
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: 100%;
  transition: background-color 150ms ease-in;
  border-radius: v-bind("`${HEIGHT / 2}px`");
  opacity: 1;
  background-color: var(--brand-500);
}

.range-slider.hover .range-slider-track-filled {
  background-color: var(--brand-600);
}

.range-slider.sliding .range-slider-track-filled {
  background-color: var(--brand-400);
}

.range-slider * {
  -webkit-user-drag: none;
  -webkit-app-region: no-drag;
}

.range-slider.disabled > * {
  background-color: var(--gray-100);
}

.range-slider.disabled .range-slider-knob {
  background-color: var(--gray-200);
}

.range-slider .range-slider-tooltip {
  margin-bottom: -8px;
  padding: 6px 10px;
  padding-bottom: 12px;
  border-radius: 4px;
  background-color: var(--base-white);
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 60% 75%, 50% 90%, 40% 75%, 0% 75%);
}

.range-slider .range-slider-tooltip-wrapper {
  display: grid;
  position: absolute;
  left: 0;
  padding: 2px;
  padding-top: 0;
  transition: bottom 0.3s ease, left 0.3s ease, top 0.3s ease, right 0.3s ease;
  border-radius: 4px;
  box-shadow: var(--shadow-sm-gray);
  color: var(--gray-900);
  font: var(--text-xs-regular);
  line-height: 100%;
  place-items: center;
}

.range-slider .range-slider-knob {
  position: absolute;
  top: 0;
  width: 6px;
  height: 6px;
  transform: scale(2.333);
  border-radius: 50%;
  background-color: var(--brand-500);
  user-select: none;
}

.range-slider .range-slider-knob.hover {
  outline: 1px solid var(--base-white);
}

.range-slider .range-slider-knob.hover::after {
  content: "";
  position: absolute;
  z-index: -1;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  outline: 1.5px solid var(--brand-500);
}
</style>
