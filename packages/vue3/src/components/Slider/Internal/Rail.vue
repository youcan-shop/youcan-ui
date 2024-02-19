<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue';
import Tooltip from './Tooltip.vue';
import type { RailProps } from '~/types';

const props = withDefaults(defineProps<RailProps>(), {
  modelValue: 0,
});

const emit = defineEmits(['update:minValue', 'update:maxValue']);

const minWidth = ref(0);
const maxWidth = ref(0);
const selectedThumb = ref('min');
const active = ref(false);
const rail = ref();

const isRtl = () => {
  return document.dir === 'rtl';
};

const setValues = (percent: number) => {
  const { min, max, maxValue, minValue } = props;
  const total = max - min;
  const value = Math.floor(total * (percent / 100)) + min;

  if (selectedThumb.value === 'max') {
    const newValue = (max - value) + min;
    if (newValue >= minValue) {
      maxWidth.value = percent;
      emit('update:maxValue', newValue);
    }

    return;
  }

  if (value <= maxValue) {
    minWidth.value = percent;
    emit('update:minValue', value);
  }
};

const mousedown = (selected = 'min') => {
  selectedThumb.value = selected;
  nextTick(() => {
    active.value = true;
  });
};

const mousemove = (event: MouseEvent, clickEvent = false) => {
  if ((active.value || (clickEvent && props.type !== 'range')) && rail.value) {
    const offset = rail.value.getBoundingClientRect();

    const mousePosition = (isRtl() || selectedThumb.value === 'max') ? offset.right - event.clientX : event.clientX - offset.left;

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
};
const topercent = (val: number) => {
  return `${val}%`;
};

onMounted(() => {
  window.addEventListener('mousemove', mousemove);
  window.addEventListener('mouseup', mouseup);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', mousemove);
  window.removeEventListener('mouseup', mouseup);
});
</script>

<template>
  <div ref="rail" class="rail" :class="[{ active }, { rtl: isRtl() }, type]" @click="handleClick">
    <div class="selected min">
      <div class="thumb" @mousedown="mousedown()" />
      <Tooltip>
        {{ minLabel }}
      </Tooltip>
    </div>
    <div v-if="type === 'range'" class="selected max">
      <div class="thumb" @mousedown="mousedown('max')" />
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
    }
  }

  &.range {
    .selected {
      background-color: var(--gray-200);

      &.min {
        max-width: calc(100% - 14px);
      }
    }
  }

  &:hover,
  &.active {
    .selected {
      .tooltip {
        transform: translateX(50%) scale(1);
        opacity: 1;
      }

      &.max {
        .tooltip {
          right: unset;
          left: 7px;
          transform: translateX(-50%) scale(1);
          opacity: 1;
        }
      }
    }
  }

  &.active {
    .selected {
      .thumb {
        &::before {
          transform: scale(1.45);
        }
      }
    }
  }
}
</style>
