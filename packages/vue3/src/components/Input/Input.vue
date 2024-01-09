<script setup lang="ts">
import { computed, onBeforeMount, ref, useAttrs, useSlots } from 'vue';
import DropdownPrefix from './prefixes/DropdownPrefix.vue';
import type { InputProps } from './types';

const props = withDefaults(
  defineProps<InputProps>(),
  {
    type: 'text',
  },
);

const emit = defineEmits(['update:modelValue']);

const primitive = ref<HTMLInputElement>()!;
const slots = useSlots();
const attrs = useAttrs();
const showPassword = ref(false);

const model = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
});

const inputType = computed(() => {
  if (props.type === 'password') {
    return showPassword.value ? 'text' : props.type;
  }

  return props.type;
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
  <div :class="{ enabled: !attrs.disabled, error }" class="wrapper">
    <div v-if="slots.prefix" class="prefix">
      <slot name="prefix" />
    </div>
    <input ref="primitive" v-model="model" class="input" :type="inputType" v-bind="$attrs">
    <div v-if="type === 'password'" class="show-password" @click="showPassword = !showPassword">
      <i v-if="showPassword" class="i-youcan:eye" />
      <i v-else class="i-youcan:eye-slash" />
    </div>
    <div v-if="slots.icon || slots.suffix" class="tail">
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
  --border: 1px solid var(--gray-200);
  --shadow: var(--shadow-xs-gray);

  display: flex;
  box-sizing: border-box;
  align-items: center;
  border: var(--border);
  border-radius: 8px;
  background-color: var(--base-white);
  box-shadow: var(--shadow);
}

.wrapper.enabled:hover {
  --border: 1px solid var(--gray-300);
}

.wrapper.enabled:has(.input:focus) {
  --border: 1px solid var(--brand-500);
  --shadow: var(--focus-shadow-xs-brand);
}

.wrapper:not(.enabled) {
  background-color: var(--gray-50);
}

.wrapper.enabled.error {
  --border: 1px solid var(--red-500);
}

.wrapper.enabled.error:has(.input:focus) {
  --shadow: var(--focus-shadow-xs-red);
}

.input {
  width: 100%;
  padding: 11.5px 16px;
  border: none;
  outline: none;
  background-color: transparent;
  font: var(--text-sm-regular);
}

.input:placeholder {
  color: var(--gray-300);
}

.show-password {
  margin-right: 16px;
  cursor: pointer;
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
