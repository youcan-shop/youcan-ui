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
function toggle(override = !show.value) { show.value = override; }
onClickOutside(picker, () => toggle(false));

const model = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
});

const setColor = (color: { hexa: string }) => model.value = color.hexa;
</script>

<template>
  <div>
    <div
      ref="wrapper" tabindex="0" :class="{ enabled: !attrs.disabled, focused }" class="wrapper"
      @click="() => toggle()"
    >
      <Backdrop class="preview" :width="40" :height="32" :color="model" />
      <div class="value">
        {{ model }}
      </div>
    </div>
    <ColorPicker
      v-if="show && !attrs.disabled" ref="picker" class="picker" :color="model" :defaults="[]"
      @setcolor="setColor"
    />
  </div>
</template>

<style scoped>
.wrapper {
    gap: 12px;
    padding: 6px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    box-shadow: var(--shadow-xs);
    border: 1px solid var(--gray-100);
    background-color: var(--base-white);
}

.wrapper.enabled:hover {
    border: 1px solid var(--gray-200);
}

.wrapper.enabled.focused {
    border: 1px solid var(--brand-500);
    box-shadow: var(--focus-xs-brand);
}

.wrapper:not(.enabled) {
    background-color: var(--gray-50);
}

.wrapper.enabled.error.focused {
    box-shadow: var(--focus-xs-red);
}

.wrapper:focus,
.wrapper:active {
    outline: none
}

.preview {
    border-radius: 4px;
}

.value {
    font: var(--text-sm-regular)
}
</style>