<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { computed, onMounted, ref, useAttrs } from 'vue';
import { createPopper } from '@popperjs/core';
import ColorPicker from './ColorPicker.vue';
import Backdrop from './Internal/Backdrop.vue';

const props = withDefaults(
  defineProps<{
    modelValue?: string
    preserveTransparency?: boolean
  }>(),
  {
    modelValue: '#ffffff',
    preserveTransparency: false,
  },
);
const emit = defineEmits(['update:modelValue']);

const attrs = useAttrs();
const wrapper = ref<HTMLDivElement>();

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

const pickerWrapper = ref();

onMounted(() => {
  if (!wrapper.value || !pickerWrapper.value) {
    return;
  }

  createPopper(wrapper.value, pickerWrapper.value, {
    placement: 'bottom',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ],
  });
});
</script>

<template>
  <div class="color-input">
    <div
      ref="wrapper" tabindex="0" :class="{ enabled: !attrs.disabled }" class="wrapper" v-bind="$attrs"
      @click="() => toggle()"
    >
      <Backdrop class="preview" :width="40" :height="32" :color="model" />
      <div class="value">
        {{ model }}
      </div>
    </div>
    <div ref="pickerWrapper" class="picker-wrapper">
      <ColorPicker
        v-show="show && !attrs.disabled" ref="picker" class="picker" :color="model" :defaults="[]"
        :preserve-transparency="preserveTransparency" @setcolor="setColor"
      />
    </div>
  </div>
</template>

<style scoped>
.color-input {
  position: relative;
}

.wrapper {
  display: flex;
  box-sizing: border-box;
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

.wrapper.enabled:focus {
  border: 1px solid var(--brand-500);
  box-shadow: var(--focus-shadow-xs-brand);
}

.wrapper:not(.enabled) {
  background-color: var(--gray-50);
}

.wrapper.enabled.error:focus {
  box-shadow: var(--focus-shadow-xs-red);
}

.wrapper:focus,
.wrapper:active {
  outline: none;
}

.preview {
  border-radius: 4px;
  border: 1px solid var(--gray-200);
}

.value {
  font: var(--text-sm-regular);
}

.picker-wrapper {
  z-index: 100;
  width: 100%;
}

.picker {
  border: 1px solid var(--gray-200);
  box-shadow: var(--shadow-md-gray);
}
</style>
