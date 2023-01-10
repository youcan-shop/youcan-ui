<script setup lang="ts">
import { useFocus } from '@vueuse/core';
import { computed, defineExpose, onBeforeMount, ref, useAttrs, useSlots } from 'vue';
import DropdownPrefix from './prefixes/DropdownPrefix.vue';

const props = defineProps<{
  modelValue: string
  error?: boolean
}>();

const emit = defineEmits(['update:modelValue']);

const primitive = ref<HTMLInputElement>()!;
const slots = useSlots();
const attrs = useAttrs();

const { focused } = useFocus(primitive);

const model = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
});

onBeforeMount(() => {
  if (!slots.prefix) {
    return;
  }

  const type = slots.prefix()[0].type;

  if (typeof type !== 'symbol' && [DropdownPrefix].find(n => n === type)) {
    return;
  }

  throw new TypeError('Invalid prefix');
});
</script>

<template>
  <div :class="{ enabled: !attrs.disabled, focused, error }" class="wrapper">
    <div v-if="slots.prefix" class="prefix">
      <slot name="prefix" />
    </div>
    <input ref="primitive" v-model="model" class="input" type="text" v-bind="$attrs">
    <div class="tail">
      <div v-if="slots.icon" class="icon">
        <slot name="icon" />
      </div>
      <div v-if="slots.suffix" class="suffix">
        <slot name="suffix" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
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

.wrapper.enabled.error {
  border: 1px solid var(--red-500);
}

.wrapper.enabled.error.focused {
  box-shadow: var(--focus-xs-red);
}

.input {
  width: 100%;
  border: none;
  outline: none;
  padding: 11.5px 16px;
  background-color: transparent;
  font: var(--text-sm-regular);
}

.input:placeholder {
  color: var(--gray-300);
}

.tail {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 11.5px 0 0;
}

.icon {
  color: var(--gray-500);
}
</style>
