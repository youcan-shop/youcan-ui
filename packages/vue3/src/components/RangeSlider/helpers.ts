import type { ComputedRef, Ref, SetupContext } from 'vue';
import { computed, ref, watch, watchEffect } from 'vue';
import type { Props } from './props';

export interface State {
  slider: Ref<HTMLDivElement>
  rawModelValue: Ref<number>
  parsedSliderValue: Ref<number>
  fillWidth: Ref<number>
  pixelsPerStep: Ref<number>
  sliderRange: ComputedRef<number>
  sliderWidth: Ref<number>
  sliding: Ref<boolean>
}

export function useState(props: Props): State {
  const slider = ref(document.createElement('div'));

  const rawModelValue = ref(props.modelValue as number);
  if (props.min !== 0) {
    rawModelValue.value -= props.min;
  }

  const parsedSliderValue = ref(0);

  const sliderWidth = ref(0);
  const fillWidth = ref(0);
  const pixelsPerStep = ref(1);

  const sliderRange = computed(() => props.min < 0
    ? props.max + Math.abs(props.min)
    : props.max - props.min,
  );

  const sliding = ref(false);

  return {
    rawModelValue,
    slider,
    parsedSliderValue,
    fillWidth,
    pixelsPerStep,
    sliderWidth,
    sliderRange,
    sliding,
  };
}

export function useModelValue(state: State, props: Props, emit: SetupContext['emit']) {
  const reference = ref(props.modelValue);

  function parseModelValue(value: number): number {
    const step = props.step;

    const rounded = (value > 0 ? Math.round(value / step) * step : 0) + props.min;

    return props.limit !== undefined
      ? Math.min(rounded, props.limit)
      : rounded;
  }

  function updateModelValue(value: number): void {
    state.parsedSliderValue.value = parseModelValue(value);
    state.rawModelValue.value = value;

    emit('update:modelValue', state.parsedSliderValue.value);
    emit('change', state.parsedSliderValue.value);
  }

  watchEffect(() => reference.value = props.modelValue);

  watch(reference, (value) => {
    if (state.parsedSliderValue.value !== value) {
      if (props.limit !== undefined) {
        value = Math.min(value, props.limit);
      }

      const processedModelValue = Math.min(
        props.min < 0 ? value + Math.abs(props.min) : value - props.min,
        state.sliderRange.value,
      );

      updateModelValue(processedModelValue);
    }
  });

  return {
    reference,
    parseModelValue,
    updateModelValue,
  };
}

export function useSlide(
  state: State,
  props: Props,
  emit: SetupContext['emit'],
  updateModelValue: (value: number) => void,
) {
  function resolveSliderValue(x: number): number {
    const rect = state.slider.value.getBoundingClientRect();
    const resolved = Math.min(
      state.sliderRange.value,
      Math.max((x - rect.x) / state.pixelsPerStep.value, 0),
    );

    return props.limit !== undefined
      ? Math.min(resolved, props.limit + Math.abs(props.min))
      : resolved;
  }

  const handleSlide = (e: MouseEvent | TouchEvent): void => {
    const click = e.type === 'mousemove'
      ? e as MouseEvent
      : (<TouchEvent>e).touches.length > 1 ? undefined : (<TouchEvent>e).touches[0];

    if (state.sliding.value) {
      updateModelValue(resolveSliderValue(click?.pageX ?? 0 - window.scrollX));
      emit('sliding', state.parsedSliderValue.value, click);
    }
  };

  const handleRelease = (e: MouseEvent | TouchEvent): void => {
    if (state.sliding.value) {
      state.sliding.value = false;
    }

    if (e.type === 'mouseup') {
      window.removeEventListener('mouseup', handleRelease);
      window.removeEventListener('mousemove', handleSlide);
    }
    else {
      window.removeEventListener('touchend', handleRelease);
      window.removeEventListener('touchmove', handleSlide);
    }
    emit('slideend', state.parsedSliderValue.value, e);
  };

  const handleClick = (e: MouseEvent | TouchEvent): void => {
    e.preventDefault();

    state.sliding.value = true;
    emit('slidestart', state.parsedSliderValue.value, e);

    if (e.type === 'touchstart') {
      const touch = (<TouchEvent>e).touches.length <= 1
        ? (<TouchEvent>e).touches[0]
        : undefined;

      updateModelValue(resolveSliderValue(touch?.pageX ?? 0 - window.scrollX));

      window.addEventListener('touchend', handleRelease);
      window.addEventListener('touchmove', handleSlide);
    }
    else {
      updateModelValue(resolveSliderValue((<MouseEvent>e).pageX - window.scrollX));

      window.addEventListener('mouseup', handleRelease);
      window.addEventListener('mousemove', handleSlide);
    }
  };

  return { handleClick };
}

function resolveFillWidth(state: State): number {
  const slider = state.slider;
  if (!slider.value) {
    return 0;
  }

  state.pixelsPerStep.value = slider.value.clientWidth / state.sliderRange.value;

  return Math.max(
    Math.min(
      state.rawModelValue.value * state.pixelsPerStep.value,
      slider.value.clientWidth,
    ),
    0,
  );
}

export function watchFillWidth(state: State): void {
  watchEffect(() => state.fillWidth.value = resolveFillWidth(state));
  if (!state.slider.value) {
    return;
  }

  const observer = new ResizeObserver((entries) => {
    state.fillWidth.value = resolveFillWidth(state);

    state.sliderWidth.value = state.slider.value
      ? state.slider.value.clientWidth
      : 0;

    if (state.slider.value !== entries[0].target && state.slider.value instanceof Element) {
      observer.unobserve(entries[0].target);
      observer.observe(state.slider.value);
    }
  });

  observer.observe(state.slider.value);
}

export function watchToolTip(tooltipElement: Ref<HTMLDivElement | undefined>, tooltipWidth: Ref<number>): void {
  if (!tooltipElement.value) {
    return;
  }

  const observer = new ResizeObserver((entries) => {
    if (tooltipElement.value) {
      tooltipWidth.value = tooltipElement.value.clientWidth;

      if (tooltipElement.value !== entries[0].target) {
        observer.unobserve(entries[0].target);
        observer.observe(tooltipElement.value);
      }
    }
  });

  observer.observe(tooltipElement.value);
}
