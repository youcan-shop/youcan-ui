<script setup lang="ts">
import { computed, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import type { TagItemProps, TagItemValue } from '~/types';
import ColorPicker from '~/components/Color/ColorPicker.vue';

const props = withDefaults(defineProps<TagItemProps>(), {
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
const updateColor = (color: string) => colorValue.value = color;
const removeItem = () => emit('remove');

onClickOutside(colorPicker, () => toggleColorPicker(false));
</script>

<template>
  <div class="tag-item">
    <div v-if="type === 'color'" class="preview" :style="{ 'background-color': colorValue }" @click="() => toggleColorPicker()" />
    <div v-if="type === 'color'" class="color-picker-container">
      <ColorPicker v-show="isColorPickerVisible" ref="colorPicker" :model-value="colorValue" @update:model-value="updateColor" />
    </div>
    <span class="text">{{ model.label }}</span>
    <i class="i-youcan-x icon" @click="removeItem" />
  </div>
</template>

<style scoped>
.tag-item {
  display: flex;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  width: max-content;
  height: 32px;
  padding: 0 8px;
  border-radius: 4px;
  background: var(--gray-50);
  box-shadow: var(--shadow-xs-gray);
  gap: 4px;
}

.tag-item .text {
  color: var(--gray-900);
  font: var(--text-sm-medium);
}

.tag-item .icon {
  width: 16px;
  height: 16px;
  color: var(--gray-500);
  cursor: pointer;
}

.tag-item .preview {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  cursor: pointer;
}

.color-picker-container {
  position: absolute;
  z-index: 999999;
  top: 40px;
  left: 0;
}
</style>
