<script setup lang="ts">
import { onClickOutside, useFocus } from '@vueuse/core';
import { computed, ref, useAttrs } from 'vue';
import ColorPicker from './ColorPicker.vue';
import Backdrop from './Internal/Backdrop.vue';

const props = withDefaults(defineProps<{ modelValue?: string }>(), { modelValue: '#ff7420ff' });
const emit = defineEmits(['update:modelValue']);

const attrs = useAttrs();
const wrapper = ref<HTMLDivElement>();

const { focused } = useFocus(wrapper);

const picker = ref();
const show = ref(false);
function toggle(override = !show.value) {
  show.value = override;
}
onClickOutside(picker, () => toggle(false));

const model = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
});

const setColor = (color: { hexa: string }) => model.value = color.hexa;
</script>

<template>
  <div
    ref="wrapper" tabindex="0" :class="{ enabled: !attrs.disabled, focused }" class="wrapper" v-bind="$attrs"
    @click="() => toggle()"
  >
    <Backdrop class="preview" :width="40" :height="32" :color="model" />
    <div class="value">
      {{ model }}
    </div>
  </div>
  <div class="picker-wrapper">
    <ColorPicker
      v-if="show && !attrs.disabled" ref="picker" class="picker" :color="model" :defaults="[]"
      @setcolor="setColor"
    />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  padding: 6px;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
  gap: 12px;
}

.wrapper.enabled:hover {
  border: 1px solid var(--gray-300);
}

.wrapper.enabled.focused {
  border: 1px solid var(--brand-500);
  box-shadow: var(--focus-shadow-xs-brand);
}

.wrapper:not(.enabled) {
  background-color: var(--gray-50);
}

.wrapper.enabled.error.focused {
  box-shadow: var(--focus-shadow-xs-red);
}

.wrapper:focus,
.wrapper:active {
  outline: none;
}

.preview {
  border-radius: 4px;
}

.value {
  font: var(--text-sm-regular);
}

.picker-wrapper {
  position: relative;
}

.picker {
  position: absolute;
  z-index: 100;
  top: 12px;
  left: 0;
}
</style>
