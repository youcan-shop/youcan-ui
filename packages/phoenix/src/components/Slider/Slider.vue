<script lang="ts" setup>
import { computed, nextTick, onMounted, ref } from 'vue';
import Rail from './Internal/Rail.vue';
import type { RangeValue, SliderProps } from '~/types';

const props = withDefaults(defineProps<SliderProps>(), {
  modelValue: 0,
  min: 0,
  max: 100,
  prefix: '',
  suffix: '',
  type: 'number',
});

const emit = defineEmits(['update:modelValue']);

const refreshValues = ref(false);

const modelValues = computed({
  get: () => props.modelValue,
  set: (value: number | RangeValue) => {
    emit('update:modelValue', value);
  },
});

const MIN = computed(() => {
  const { min, max } = props;

  return Math.min(min, max);
});

const MAX = computed(() => {
  const { min, max } = props;

  return Math.max(min, max);
});

const minLabel = computed(() => {
  const { prefix, suffix } = props;
  const label = typeof modelValues.value === 'number' ? modelValues.value : modelValues.value.min;

  return `${prefix}${label}${suffix}`;
});

const maxLabel = computed(() => {
  const { prefix, suffix } = props;

  return `${prefix}${(modelValues.value as RangeValue).max}${suffix}`;
});

const setValues = (model: number | RangeValue) => {
  let override = modelValues.value;
  if (typeof model === 'number') {
    override = model < MIN.value ? MIN.value : model > MAX.value ? MAX.value : model;
  }
  else {
    const values = (model as RangeValue);
    const minValue = values.min < MIN.value ? MIN.value : values.min > MAX.value ? MAX.value : values.min;
    const maxValue = values.max > MAX.value ? MAX.value : values.max < MIN.value ? MIN.value : values.max;
    override = { min: minValue, max: maxValue };
  }

  modelValues.value = override;
  emit('update:modelValue', override);
  nextTick(() => {
    refreshValues.value = true;
  });
};

onMounted(() => {
  setValues(props.modelValue);
});
</script>

<template>
  <div v-if="refreshValues" class="slider" :class="[{ disabled }, type]">
    <span class="label">{{ `${prefix}${MIN}${suffix}` }}</span>
    <div class="slide-area">
      <Rail v-model="modelValues" :min="MIN" :max="MAX" v-bind="{ disabled, minLabel, maxLabel, type }" />
    </div>
    <span class="label">{{ `${prefix}${MAX}${suffix}` }}</span>
  </div>
</template>

<style scoped>
.slider {
  display: flex;
  position: relative;
  flex: 1;
  flex-direction: row;
  align-items: center;
  column-gap: 8px;
}

.slider .slide-area {
  display: flex;
  position: relative;
  flex: 1;
  align-items: center;
  min-height: 20px;
}

.slider .slide-area::before {
  content: "";
  display: block;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 6px;
  border-radius: 7px;
  background-color: var(--gray-200);
}

.slider .label {
  color: var(--gray-900);
  font: var(--text-xs-regular);
  font-style: italic;
  user-select: none;
}

.slider.range .slide-area::before {
  background-color: var(--brand-500);
}

.slider.range.disabled .slide-area::before {
  background-color: var(--gray-100);
}

.slider.range:hover:not(.disabled) .slide-area::before {
  background-color: var(--brand-400);
}

.slider.disabled {
  cursor: not-allowed;
}
</style>
