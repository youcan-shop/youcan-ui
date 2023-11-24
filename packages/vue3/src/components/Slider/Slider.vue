<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import Thumb from './Internal/Thumb.vue';

const props = withDefaults(defineProps<{
  modelValue?: number
  min?: number
  max?: number
}>(), {
  modelValue: 0,
  min: 0,
  max: 100,
});

const emit = defineEmits(['update:modelValue']);

const active = ref(false);
const slider = ref();

const model = computed<number>({
  get: () => props.modelValue,
  set: (value: number) => emit('update:modelValue', value),
});

const railWidth = computed((): string => {
  const { max, min } = props;
  const percent = Math.abs(props.modelValue - min) / Math.abs(max - min);

  return `${percent * 100}%`;
});

const handleMouseDown = () => {
  active.value = true;
};

const handleMouseUp = () => {
  active.value = false;
};
const handleMouseMove = (e: MouseEvent) => {
  const offset = slider.value?.getBoundingClientRect();
  const { max, min } = props;
  if (active.value && offset) {
    const pointerX = e.clientX - offset.left;
    const percent = (pointerX / offset.width);
    let newValue = percent * (max - min);
    newValue = newValue > max ? max : newValue < min ? min : newValue;
    model.value = newValue;
  }
};
onMounted(() => {
  window.addEventListener('mouseup', handleMouseUp);
  window.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener('mouseup', handleMouseUp);
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<template>
  <div ref="slider" class="slider">
    <div class="rail" />
    <div class="rail-selected" />
    <Thumb :position="railWidth" :active="active" @mousedown="handleMouseDown" />
  </div>
</template>

<style scoped lang="scss">
.slider {
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  width: 100%;
  min-height: 20px;

  .rail {
    position: relative;
    z-index: 1;
    width: 100%;
    background-color: var(--gray-200);
  }

  .rail-selected {
    position: absolute;
    z-index: 2;
    left: 0;
    width: v-bind(railWidth);
    background-color: var(--brand-500);
  }

  .rail,
  .rail-selected {
    height: 6px;
    border-radius: 7px;
  }

  &:hover {
    .rail-selected {
      background-color: var(--brand-600);
    }
  }
}
</style>
