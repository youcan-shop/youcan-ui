<script lang="ts" setup>
import { computed, ref } from 'vue';
import Rail from './Internal/Rail.vue';
import type { SliderProps } from '~/types';

const props = withDefaults(defineProps<SliderProps>(), {
  modelValue: 0,
  min: 0,
  max: 100,
  prefix: '',
  suffix: '',
});

const minValue = ref(props.min);
const maxValue = ref(props.max);

const minLabel = computed(() => {
  const { prefix, suffix } = props;

  return `${prefix}${minValue.value}${suffix}`;
});

const maxLabel = computed(() => {
  const { prefix, suffix } = props;

  return `${prefix}${maxValue.value}${suffix}`;
});
</script>

<template>
  <div class="slider" :class="[{ disabled }, type]">
    <span class="label">{{ `${prefix}${min}${suffix}` }}</span>
    <div class="slide-area">
      <Rail v-model:min-value="minValue" v-model:max-value="maxValue" v-bind="{ min, max, disabled, minLabel, maxLabel, type }" />
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
  }
}
</style>
