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

<style scoped>
.rail {
  display: flex;
  position: absolute;
  z-index: 2;
  left: 0;
  align-items: center;
  width: 100%;
  min-width: 14px;
  cursor: pointer;
}

.rail .selected {
  display: flex;
  position: absolute;
  align-items: center;
  min-width: 14px;
  height: 6px;
  border-radius: 7px;
  background-color: var(--brand-500);
  cursor: pointer;
  user-select: none;
}

.rail .selected .thumb {
  position: absolute;
  right: 0;
  width: 14px;
  height: 14px;
}

.rail .selected .thumb::before,
.rail .selected .thumb::after {
  content: "";
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
}

.rail .selected .thumb::before {
  z-index: 1;
  transition: transform 150ms linear;
  border: 1px solid var(--brand-500);
  background-color: var(--base-white);
}

.rail .selected .thumb::after {
  z-index: 2;
  background-color: var(--brand-500);
}

.rail .selected.min {
  left: 0;
  width: v-bind(topercent(minWidth));
}

.rail .selected.min .thumb {
  right: 0;
}

.rail .selected.max {
  right: 0;
  width: v-bind(topercent(maxWidth));
}

.rail .selected.max .thumb {
  left: 0;
}

.rail .selected.max .tooltip {
  right: unset;
  left: 7px;
  transform: translateX(-50%) scale(0);
}

.rail .selected.active .thumb::before,
.rail .selected:hover .thumb::before {
  transform: scale(1.45);
}

.rail .selected.active .tooltip,
.rail .selected:hover .tooltip {
  transform: translateX(50%) scale(1);
  opacity: 1;
}

.rail .selected.active.max .tooltip,
.rail .selected:hover.max .tooltip {
  transform: translateX(-50%) scale(1);
  opacity: 1;
}

.rail.range .selected {
  max-width: calc(100% - 14px);
  background-color: var(--gray-200);
}

.rail.rtl .selected.min {
  right: 0;
  left: unset;
}

.rail.rtl .selected.min .thumb {
  right: unset;
  left: 0;
}

.rail.rtl .selected.min .tooltip {
  transform: translateX(-50%) scale(0);
}

.rail.rtl .selected.max {
  right: unset;
  left: 0;
}

.rail.rtl .selected.max .thumb {
  right: 0;
  left: unset;
}

.rail.rtl .selected.max .tooltip {
  right: 7px;
  left: unset;
  transform: translateX(50%) scale(0);
}

.rail.rtl .selected.active .tooltip,
.rail.rtl .selected:hover .tooltip {
  transform: translateX(-50%) scale(1);
  opacity: 1;
}

.rail.rtl .selected.active.max .tooltip,
.rail.rtl .selected:hover.max .tooltip {
  transform: translateX(50%) scale(1);
  opacity: 1;
}
</style>

<style scoped>
.rail.disabled .selected {
  background-color: var(--gray-100);
}

.rail.disabled .selected,
.rail.disabled .selected .thumb::before,
.rail.disabled .selected .thumb::after {
  cursor: not-allowed;
}

.rail.disabled .selected .thumb::before,
.rail.disabled .selected .thumb::after {
  border: 1px solid var(--gray-200);
  background-color: var(--gray-200);
}

.rail.disabled .selected.max .tooltip,
.rail.disabled .selected.min .tooltip {
  opacity: 1;
}

.rail.disabled .selected.min .tooltip {
  transform: translateX(50%) scale(1);
}

.rail.disabled .selected.max .tooltip {
  transform: translateX(-50%) scale(1);
}

.rail.disabled .selected:hover .thumb::before,
.rail.disabled .selected.active .thumb::before {
  transform: scale(1);
}

.rail.disabled.rtl .selected.min .tooltip {
  transform: translateX(-50%) scale(1);
}

.rail.disabled.rtl .selected.max .tooltip {
  transform: translateX(50%) scale(1);
}
</style>
