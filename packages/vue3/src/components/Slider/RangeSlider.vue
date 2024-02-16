<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import Rail from './Internal/Rail.vue';
import type { SliderProps } from '~/types';

const props = withDefaults(defineProps<SliderProps>(), {
  modelValue: 0,
  min: 0,
  max: 100,
  prefix: '',
  suffix: '',
});

const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => props.modelValue,
  set: (value: number) => emit('update:modelValue', value),
},
);

const label = computed(() => {
  const { prefix, suffix } = props;

  return `${prefix}${model.value}${suffix}`;
});

onMounted(() => {
  const { max, min, modelValue } = props;
  model.value = modelValue > max ? max : modelValue < min ? min : modelValue;
});
</script>

<template>
  <div class="slider" :class="{ disabled }">
    <span class="label">{{ `${prefix}${min}${suffix}` }}</span>
    <div class="slide-area">
      <Rail v-model="model" :label="label" :min="min" :max="max" :disabled="disabled" />
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
}
</style>
