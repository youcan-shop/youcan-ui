<script setup lang="ts">
import { ref } from 'vue';
import { useFocus } from '@vueuse/core';
import type { HTMLInputTypeAttribute } from '~/components/Yinput/input.types';
import { uniqueId } from '~/utils/string.util';
import YButton from '~/components/YButton/YButton.vue';

defineProps({
  modelValue: String,
  inputType: {
    type: String as () => HTMLInputTypeAttribute,
    default: 'text',
  },
  placeholder: {
    type: String || null,
    default: null,
  },
  isError: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String || null,
    default: null,
  },
  hint: {
    type: String || null,
    default: null,
  },
  inputIcon: {
    type: String || null,
    default: null,
  },
  canReset: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue', 'reset']);

const _base_input = ref();
const { focused } = useFocus(_base_input);
const inputId = uniqueId();

const emitInputChange = () => {
  emit('update:modelValue', _base_input.value.value);
};

const resetInput = () => {
  emit('update:modelValue', '');
  emit('reset');
};
</script>

<template>
  <div class="input-container">
    <label v-if="label !== null" :for="inputId" class="label">
      {{ label }}
    </label>

    <div
      class="sub-input-container" :class="{
        'is-error': isError,
        'focused': focused && !isError,
        'is-focused-error': isError && focused,
      }"
    >
      <i v-if="inputIcon !== null" class="input-icon" :class="inputIcon" />
      <input
        :id="inputId"
        v-bind="$attrs"
        ref="_base_input"
        :value="modelValue"
        :type="inputType"
        :placeholder="placeholder"
        :aria-label="placeholder"
        class="input"
        @input="emitInputChange"
      >
      <YButton v-if="canReset" class="reset-button" :disabled="typeof modelValue !== 'undefined' && modelValue!.length === 0" @click="resetInput()">
        <template #icon>
          <i i-tabler-backspace />
        </template>
      </YButton>
    </div>

    <span v-if="hint !== null" class="hint" :class="{ error: isError }">
      {{ hint }}
    </span>
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  max-width: 420px;
  text-align: start;
}

.label {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
  color: var(--StormGray-700);
  font-weight: 500;
}

.sub-input-container {
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 8px 14px;
  border: 1px solid var(--StormGray-300);
  background: var(--Base-White);
  box-shadow: var(--shadow-xs);
  position: relative;
}

.sub-input-container.focused {
  border-color: var(--Primary-300);
  box-shadow: var(--focus_ring-shadow-4px-Primary-100);
}

.sub-input-container.is-error {
  border-color: var(--HotRed-600);
}

.sub-input-container.is-focused-error {
  box-shadow: var(--focus_ring-shadow-4px-HotRed-100);
}

.input-icon {
  color: var(--StormGray-600);
  margin-inline-end: 8px;
  width: 20px;
  height: 24px;
}

.input {
  width: 100%;
  font-size: var(--font-size-md);
  line-height: var(--line-height-md);
  color: var(--StormGray-900);
  outline: none;
  border: none;
}

.input::placeholder {
  color: var(--StormGray-600);
}

.reset-button {
  margin-inline-start: 8px;
}

.hint {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
  color: var(--StormGray-600);
  font-weight: 400;
}

.hint.error {
  color: var(--HotRed-600);
}
</style>
