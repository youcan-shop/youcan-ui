<script setup lang="ts">
import { computed } from 'vue';
import BaseFileInput from './Internal/BaseFileInput.vue';

const props = withDefaults(
  defineProps<{
    modelValue: File[]
    limit?: number
    disabled?: boolean
    label: string
    sousLabel: string
    highLightText: string
  }>(),
  {
    limit: 1,
    disabled: false,
    highLightText: 'Click to upload',
    label: 'or drag and drop',
  },
);

const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => props.modelValue,
  set: (value: File[]) => {
    emit('update:modelValue', value);
  },
});
</script>

<template>
  <BaseFileInput
    v-model="model" :limit="limit"
    :disabled="disabled"
  >
    <template #facade>
      <div class="label" :class="{ disabled }">
        <span class="label-icon">
          <i class="i-youcan-upload-simple" />
        </span>
        <span class="label-text">
          <span class="label-text-light">{{ highLightText }}</span> <span>{{ label }}</span>
        </span>
        <span v-if="sousLabel" class="label-sous-text">
          {{ sousLabel }}
        </span>
      </div>
    </template>
  </BaseFileInput>
</template>

<style scoped lang="scss">
.label {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;

  &-icon {
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

  &-text {
    color: var(--gray-900);
    font: var(--text-md-medium);

    &-light {
      color: var(--brand-500);
      font: var(--text-md-medium);
    }
  }

  &-sous-text {
    color: var(--gray-500);
    font: var(--text-sm-regular);
  }
}
</style>
