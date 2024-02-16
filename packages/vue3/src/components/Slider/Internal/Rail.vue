<script setup lang="ts">
import { computed, ref } from 'vue';
import Tooltip from './Tooltip.vue';
import type { RailProps } from '~/types';

const props = withDefaults(defineProps<RailProps>(), {
  modelValue: 0,
});

const emit = defineEmits(['update:modelValue']);

const width = ref('0%');
const rail = ref();

const model = computed({
  get: () => props.modelValue,
  set: (value: number) => {
    const { max, min, disabled } = props;
    if (disabled) {
      return;
    }
    const percent = (Math.abs(Math.abs(value) - Math.abs(min)) / Math.abs(Math.abs(max) - Math.abs(min))) * 100;
    width.value = `${percent > 100 ? 100 : percent}%`;
    emit('update:modelValue', value);
  },
});
</script>

<template>
  <div ref="rail" class="rail">
    <input v-model.number="model" type="range" :min="min" :max="max">
    <div class="selected">
      <Tooltip>
        {{ label }}
      </Tooltip>
    </div>
  </div>
</template>

<style scoped lang="scss">
.rail {
  display: flex;
  position: absolute;
  z-index: 2;
  left: 0;
  align-items: center;
  width: 100%;
  min-width: 14px;
  cursor: pointer;

  .selected {
    display: flex;
    position: relative;
    align-items: center;
    width: v-bind(width);
    min-width: 14px;
    height: 6px;
    border-radius: 7px;
    background-color: var(--brand-500);
    cursor: pointer;

    &::before,
    &::after {
      content: "";
      position: absolute;
      right: 0;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      cursor: pointer;
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

    &:hover {
      background-color: var(--brand-600);

      .tooltip {
        transform: translateX(50%) scale(1);
        opacity: 1;
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
        .selected {
          background-color: var(--brand-600);

          .tooltip {
            transform: translateX(50%) scale(1);
            opacity: 1;
          }
        }
      }
    }

    &:active {
      ~ {
        .selected {
          background-color: var(--brand-400);

          &::before {
            transform: scale(1.45);
          }
        }
      }
    }
  }
}
</style>
