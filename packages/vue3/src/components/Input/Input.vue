<script setup lang="ts">
import { useFocus } from '@vueuse/core';
import { computed, onBeforeMount, onMounted, ref, useAttrs, useSlots } from 'vue';
import DropdownPrefix from './prefixes/DropdownPrefix.vue';

const props = defineProps<{
  modelValue: string
  label?: string
  icon?: string
  hint?: string
}>();

const emit = defineEmits(['update:modelValue']);

const primitive = ref<HTMLInputElement>()!;
const { prefix } = useSlots();
const attrs = useAttrs();

const { focused } = useFocus(primitive);

const model = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
});

onBeforeMount(() => {
  if (!prefix) {
    return;
  }

  const type = prefix()[0].type;

  if (typeof type !== 'symbol' && [DropdownPrefix].find(n => n === type)) {
    return;
  }

  throw new TypeError('Invalid prefix');
});
</script>

<template>
  <div :class="{ enabled: !attrs.disabled, focused }" class="wrapper">
    <div class="prefix">
      <slot name="prefix" />
    </div>

    <input ref="primitive" v-model="model" class="input" type="text" v-bind="$attrs">
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
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
</style>
