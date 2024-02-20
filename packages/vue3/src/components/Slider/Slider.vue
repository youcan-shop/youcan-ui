<script lang="ts" setup>
import { computed, onMounted } from 'vue';
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

const modelValues = computed({
  get: () => props.modelValue,
  set: (value: number | RangeValue) => {
    emit('update:modelValue', value);
  },
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
  const { min, max } = props;
  if (typeof model === 'number') {
    modelValues.value = model < min ? min : model > max ? max : model;
  }
  else {
    const values = (model as RangeValue);
    const minValue = values.min < min ? min : values.min > max ? max : values.min;
    const maxValue = values.max > max ? max : values.max < min ? min : values.max;
    modelValues.value = { min: minValue, max: maxValue };
  }
};

onMounted(() => {
  setValues(props.modelValue);
});
</script>

<template>
  <div class="slider" :class="[{ disabled }, type]">
    <span class="label">{{ `${prefix}${min}${suffix}` }}</span>
    <div class="slide-area">
      <Rail v-model="modelValues" v-bind="{ min, max, disabled, minLabel, maxLabel, type }" />
    </div>
    <span class="label">{{ `${prefix}${max}${suffix}` }}</span>
  </div>
</template>

<style scoped lang="scss">
.slider {
  display: flex;
  position: relative;
  flex: 1;
  flex-direction: row;
  align-items: center;
  column-gap: 8px;

  .slide-area {
    display: flex;
    position: relative;
    flex: 1;
    align-items: center;
    min-height: 20px;

    &::before {
      content: "";
      display: block;
      position: relative;
      z-index: 1;
      width: 100%;
      height: 6px;
      border-radius: 7px;
      background-color: var(--gray-200);
    }
  }

  .label {
    color: var(--gray-900);
    font: var(--text-xs-regular);
    font-style: italic;
    user-select: none;
  }

  &.range {
    .slide-area {
      &::before {
        background-color: var(--brand-500);
      }
    }

    &:hover {
      .slide-area {
        &::before {
          background-color: var(--brand-400);
        }
      }
    }
  }
}
</style>
