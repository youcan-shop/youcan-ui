<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue';
import Tooltip from './Tooltip.vue';
import type { RailProps, RangeValue } from '~/types';

const props = withDefaults(defineProps<RailProps>(), {
  modelValue: 0,
});

const emit = defineEmits(['update:modelValue']);

const minWidth = ref(0);
const maxWidth = ref(0);
const selectedThumb = ref('');
const active = ref(false);
const rail = ref();

const isRtl = () => {
  return document.dir === 'rtl';
};

const setValues = (percent: number) => {
  const { min, max, modelValue } = props;
  const total = max - min;
  const value = Math.floor(total * (percent / 100)) + min;

  if (typeof modelValue === 'number') {
    minWidth.value = percent;
    emit('update:modelValue', value);
  }
  else {
    const convertedModel = (modelValue as RangeValue);
    const newModelValue: RangeValue = convertedModel;

    if (selectedThumb.value === 'max') {
      const newValue = (max - value) + min;
      if (newValue >= convertedModel.min) {
        maxWidth.value = percent;
        newModelValue.max = newValue;
      }
    }
    else if (value <= convertedModel.max && selectedThumb.value === 'min') {
      minWidth.value = percent;
      newModelValue.min = value;
    }

    emit('update:modelValue', newModelValue);
  }
};

const mousedown = (event: MouseEvent, selected = 'min') => {
  if (event.button !== 0) {
    return;
  }
  selectedThumb.value = selected;
  nextTick(() => {
    active.value = true;
  });
};

const mousemove = (event: MouseEvent, clickEvent = false) => {
  if (props.disabled) {
    return;
  }
  if ((active.value || (clickEvent && props.type !== 'range')) && rail.value) {
    const offset = rail.value.getBoundingClientRect();

    let mousePosition = (isRtl() || selectedThumb.value === 'max') ? offset.right - event.clientX : event.clientX - offset.left;
    mousePosition = (isRtl() && selectedThumb.value === 'max') ? event.clientX - offset.left : mousePosition;

    let percent = Math.floor((mousePosition / offset.width) * 100);
    percent = percent >= 100 ? 100 : percent;
    percent = percent <= 0 ? 0 : percent;
    setValues(percent);
  }
};

const handleClick = (event: MouseEvent) => {
  mousemove(event, true);
};

const mouseup = () => {
  active.value = false;
  selectedThumb.value = '';
};
const topercent = (val: number) => {
  return `${val}%`;
};

const initValues = () => {
  const { min, max, modelValue } = props;
  if (typeof modelValue === 'number') {
    minWidth.value = Math.abs((modelValue - min) * 100 / (max - min));
  }
  else {
    const convertedModel = (modelValue as RangeValue);
    minWidth.value = Math.abs((convertedModel.min - min) * 100 / (max - min));
    maxWidth.value = Math.abs((max - convertedModel.max) * 100 / (max - min));
  }
};

onMounted(() => {
  window.addEventListener('mousemove', mousemove);
  window.addEventListener('mouseup', mouseup);
  initValues();
});

onUnmounted(() => {
  window.removeEventListener('mousemove', mousemove);
  window.removeEventListener('mouseup', mouseup);
});
</script>

<template>
  <div ref="rail" class="rail" :class="[{ rtl: isRtl() }, { disabled }, type]" @click="handleClick">
    <div class="selected min" :class="{ active: selectedThumb === 'min' }">
      <div class="thumb" @mousedown="mousedown($event)" />
      <Tooltip>
        {{ minLabel }}
      </Tooltip>
    </div>
    <div v-if="type === 'range'" class="selected max" :class="{ active: selectedThumb === 'max' }">
      <div class="thumb" @mousedown="mousedown($event, 'max')" />
      <Tooltip>
        {{ maxLabel }}
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
    position: absolute;
    align-items: center;
    min-width: 14px;
    height: 6px;
    border-radius: 7px;
    background-color: var(--brand-500);
    cursor: pointer;
    user-select: none;

    .thumb {
      position: absolute;
      right: 0;
      width: 14px;
      height: 14px;

      &::before,
      &::after {
        content: "";
        position: absolute;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
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
    }

    &.min {
      left: 0;
      width: v-bind(topercent(minWidth));

      .thumb {
        right: 0;
      }
    }

    &.max {
      right: 0;
      width: v-bind(topercent(maxWidth));

      .thumb {
        left: 0;
      }

      .tooltip {
        right: unset;
        left: 7px;
        transform: translateX(-50%) scale(0);
      }
    }

    &.active,
    &:hover {
      .thumb {
        &::before {
          transform: scale(1.45);
        }
      }

      .tooltip {
        transform: translateX(50%) scale(1);
        opacity: 1;
      }

      &.max {
        .tooltip {
          transform: translateX(-50%) scale(1);
          opacity: 1;
        }
      }
    }
  }

  &.range {
    .selected {
      max-width: calc(100% - 14px);
      background-color: var(--gray-200);
    }
  }

  &.rtl {
    .selected {
      &.min {
        right: 0;
        left: unset;

        .thumb {
          right: unset;
          left: 0;
        }

        .tooltip {
          transform: translateX(-50%) scale(0);
        }
      }

      &.max {
        right: unset;
        left: 0;

        .thumb {
          right: 0;
          left: unset;
        }

        .tooltip {
          right: 7px;
          left: unset;
          transform: translateX(50%) scale(0);
        }
      }

      &.active,
      &:hover {
        .tooltip {
          transform: translateX(-50%) scale(1);
          opacity: 1;
        }

        &.max {
          .tooltip {
            transform: translateX(50%) scale(1);
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>

<style scoped lang="scss">
.rail.disabled {
  .selected {
    background-color: var(--gray-100);

    &,
    .thumb::before,
    .thumb::after {
      cursor: not-allowed;
    }

    .thumb {
      &::before,
      &::after {
        border: 1px solid var(--gray-200);
        background-color: var(--gray-200);
      }
    }

    &.max,
    &.min {
      .tooltip {
        opacity: 1;
      }
    }

    &.min {
      .tooltip {
        transform: translateX(50%) scale(1);
      }
    }

    &.max {
      .tooltip {
        transform: translateX(-50%) scale(1);
      }
    }

    &:hover,
    &.active {
      .thumb {
        &::before {
          transform: scale(1);
        }
      }
    }
  }

  &.rtl {
    .selected {
      &.min {
        .tooltip {
          transform: translateX(-50%) scale(1);
        }
      }

      &.max {
        .tooltip {
          transform: translateX(50%) scale(1);
        }
      }
    }
  }
}
</style>