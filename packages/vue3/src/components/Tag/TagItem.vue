<script setup lang="ts">
import { computed, ref, watch, watchEffect } from 'vue';
import type { ColorObject } from '@youcan/ui-core';
import { onClickOutside } from '@vueuse/core';
import type { TagItemType, TagItemValue } from './types';
import Backdrop from '~/components/Color/Internal/Backdrop.vue';
import ColorPicker from '~/components/Color/ColorPicker.vue';

const props = withDefaults(defineProps<{
  modelValue: TagItemValue
  type?: TagItemType
}>(), {
  type: 'text',
});

const emit = defineEmits(['update:modelValue', 'remove']);

const model = computed({
  get: () => props.modelValue,
  set: (value: TagItemValue) => emit('update:modelValue', value),
});

const colorValue = computed({
  get: () => model.value.hexColor || '#eb5685',
  set: (value?: string) => model.value = Object.assign({}, model.value, { hexColor: value }),
});

const isColorPickerVisible = ref(false);
const colorPicker = ref<HTMLDivElement>();

const toggleColorPicker = (state = !isColorPickerVisible.value) => isColorPickerVisible.value = state;
const setColor = (color: ColorObject) => colorValue.value = color.hexa;
const removeItem = () => emit('remove');

onClickOutside(colorPicker, () => toggleColorPicker(false));
</script>

<template>
  <div class="tag-item">
    <Backdrop v-if="type === 'color'" class="preview" :width="15" :height="15" :color="colorValue"
      @click="toggleColorPicker" />
    <div v-if="type === 'color'" class="color-picker-container">
      <ColorPicker v-show="isColorPickerVisible" ref="colorPicker" :color="colorValue" :defaults="[]"
        @setcolor="setColor" />
    </div>
    <span class="text">{{ model.label }}</span>
    <i class="i-youcan-x icon" @click="removeItem" />
  </div>
</template>

<style scoped>
.tag-item {
  display: flex;
  align-items: center;
  gap: 4px;
  width: max-content;
  height: 32px;
  padding: 0 8px;
  border-radius: 4px;
  background: var(--gray-50);
  box-shadow: var(--shadow-xs);
  position: relative;
}

.tag-item .text {
  color: var(--gray-900);
  font: var(--text-sm-medium);
}

.tag-item .icon {
  color: var(--gray-500);
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.tag-item .preview {
  border-radius: 50%;
  cursor: pointer;
}

.color-picker-container {
  position: absolute;
  top: 40px;
  left: 0;
}
</style>
