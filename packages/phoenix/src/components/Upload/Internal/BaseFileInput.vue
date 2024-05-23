<script setup lang="ts">
import { Utils } from '@youcan/ui-core';
import { ref } from 'vue';
import type { BaseFileInputProps } from './types';

const props = withDefaults(defineProps<BaseFileInputProps>(), {
  limit: 1,
  disabled: false,
});
const emit = defineEmits(['update:modelValue', 'update:disabled']);
const dragging = ref(false);
const idAttr = Utils.uid('input');

const handleInput = (event: Event) => {
  const target = (event.target as HTMLInputElement);
  let override: File[] = [];
  const { limit, modelValue, disabled } = props;
  if (!target.files?.length || (modelValue && modelValue.length >= limit) || disabled) {
    return;
  }

  if (modelValue && limit > 1) {
    override = modelValue;
    for (let i = 0; i < target.files.length; i++) {
      if (override.length < limit) {
        override.push(target.files[i]);
      }
    }
  }
  else {
    override.push(target.files[0]);
  }
  emit('update:modelValue', override);
  target.value = '';
  dragging.value = false;
};
</script>

<template>
  <label :for="idAttr" class="dropzone" :class="{ disabled: props.disabled }">
    <input
      :id="idAttr" type="file"
      :accept="props.accept"
      :multiple="props.limit > 1"
      :class="{ dragging }"
      :disabled="props.disabled "
      @change="handleInput"
      @dragover.prevent="dragging = true"
      @dragleave.prevent="dragging = false"
    >
    <span
      class="input-shadow"
    />
    <div>
      <slot name="facade" />
    </div>
  </label>
</template>

<style scoped lang="scss">
.dropzone {
  display: grid;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 14px 16px;
  border: 1px solid var(--gray-200);
  border-radius: 4px;
  background-color: var(--gray-50);
  box-shadow: var(--shadow-xs-gray);
  place-items: center;

  > * {
    position: relative;
    z-index: 1;
  }

  &.disabled {
    background-color: var(--base-white);

    * {
      color: var(--gray-300) !important;
      cursor: no-drop;
    }
  }

  .input-shadow {
    z-index: 0;
  }

  input[type="file"],
  .input-shadow {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }

  input[type="file"] {
    z-index: 2;
    opacity: 0;
    cursor: pointer;
  }

  &:not(.disabled) {
    &:hover {
      background-color: var(--gray-100);
    }

    input[type="file"] {
      &:active,
      &:focus {
        ~ .input-shadow {
          border: 1px solid var(--brand-500);
          outline: none;
          box-shadow: var(--focus-shadow-xs-brand);
        }
      }

      &.dragging {
        ~ .input-shadow {
          background-color: var(--gray-100);
        }
      }
    }
  }
}
</style>
