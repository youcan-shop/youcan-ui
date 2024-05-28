<script setup lang="ts">
import { computed } from 'vue';
import BaseFileInput from './Internal/BaseFileInput.vue';
import type { UploadProps } from '~/types';

const props = withDefaults(
  defineProps<UploadProps>(),
  {
    limit: 1,
    disabled: false,
    error: false,
    highlightedLabel: 'Click to upload',
    label: 'or drag and drop',
    subLabel: 'Recommended: 800 x 800px',
    accept: 'file/*',
  },
);

const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => props.modelValue,
  set: (value: File[]) => {
    emit('update:modelValue', value);
  },
});

const labelClasses = computed(() => ({
  disabled: props.disabled,
}));
</script>

<template>
  <BaseFileInput v-model="model" :limit="limit" :disabled="disabled" :error="error" :accept="accept">
    <template #facade>
      <div class="label" :class="labelClasses">
        <span class="label-icon">
          <i class="i-youcan-upload-simple" />
        </span>
        <span class="label-text">
          <span class="label-text-light">{{ highlightedLabel }}</span> <span>{{ label }}</span>
        </span>
        <span v-if="subLabel" class="label-sub-text">
          {{ subLabel }}
        </span>
      </div>
    </template>
  </BaseFileInput>
</template>

<style scoped>
.label {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
}

.label .label-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  background-color: var(--base-white);
  color: var(--brand-500);
}

.label .label-text {
  display: flex;
  color: var(--gray-900);
  font: var(--text-md-medium);
  gap: 5px;
}

.label .label-text .label-text-light {
  color: var(--brand-500);
  font: var(--text-md-medium);
}

.label .label-sub-text {
  color: var(--gray-500);
  font: var(--text-sm-regular);
}

.label.disabled .label-icon,
.label.disabled .label-text,
.label.disabled .label-text .label-text-light,
.label.disabled .label-sub-text {
  color: var(--gray-300);
}
</style>
