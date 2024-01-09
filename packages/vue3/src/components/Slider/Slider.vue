<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import Tooltip from './Internal/Tooltip.vue';
import type { SliderProps } from './types';

const props = withDefaults(defineProps<SliderProps>(), {
  modelValue: 0,
  min: 0,
  max: 100,
  disabled: false,
  prefix: '',
  suffix: '',
});

const emit = defineEmits(['update:modelValue']);

const position = ref('0%');

const model = computed({
  get: () => props.modelValue,
  set: (value: number) => {
    const { max, min, disabled } = props;
    if (disabled) {
      return;
    }
    const percent = (Math.abs(Math.abs(value) - Math.abs(min)) / Math.abs(Math.abs(max) - Math.abs(min))) * 100;
    position.value = `${percent > 100 ? 100 : percent}%`;
    emit('update:modelValue', value);
  },
});
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
  <div class="slider-container" :class="{ disabled }">
    <span class="label">{{ `${prefix}${min}${suffix}` }}</span>
    <div class="slider" :class="{ disabled }">
      <input v-model="model" type="range" :min="min" :max="max">
      <div class="selected-rail">
        <Tooltip>
          {{ label }}
        </Tooltip>
      </div>
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
  width: 100%;
  min-height: 20px;
  column-gap: 8px;

  &-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    column-gap: 8px;

    .label {
      color: var(--gray-900);
      font: var(--text-xs-regular);
      font-style: italic;
      user-select: none;
    }

    &.disabled {
      * {
        cursor: not-allowed;
      }

      .label {
        color: var(--gray-200);
      }
    }
  }

  &::before {
    content: "";
    display: block;
    position: relative;
    z-index: 1;
    width: 100%;
    background-color: var(--gray-200);
  }

  .selected-rail {
    display: flex;
    position: absolute;
    z-index: 2;
    left: 0;
    align-items: center;
    width: v-bind(position);
    min-width: 14px;
    background-color: var(--brand-500);

    &::before,
    &::after {
      content: "";
      position: absolute;
      right: 0;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      border-radius: 50%;
    }

    &::before {
      z-index: 1;
      transition: transform 150ms linear;
      border: 1px solid var(--brand-500);
      background-color: var(--base-white);
    }

    &::after {
      z-index: 2;
      background-color: var(--brand-500);
    }
  }

  &::before,
  .selected-rail {
    height: 6px;
    border-radius: 7px;
  }

  &.disabled {
    * {
      cursor: not-allowed;
    }

    .selected-rail {
      &::before,
      &::after {
        border: 0;
        background-color: var(--gray-200);
      }
    }
  }

  input[type="range"] {
    position: absolute;
    z-index: 4;
    left: 0;
    width: 100%;
    margin: 0;
    opacity: 0;

    &:hover {
      ~ {
        .selected-rail {
          .tooltip {
            transform: translateX(50%) scale(1);
            opacity: 1;
          }
        }
      }
    }
  }

  &:not(.disabled) {
    &:hover {
      &::after {
        background-color: var(--brand-600);
      }
    }

    input[type="range"] {
      cursor: pointer;

      &:hover {
        ~ {
          .selected-rail {
            background-color: var(--brand-600);
          }
        }
      }

      &:active {
        ~ {
          .selected-rail {
            background-color: var(--brand-400);

            &::before {
              transform: scale(1.45);
            }
          }
        }
      }
    }
  }
}
</style>
