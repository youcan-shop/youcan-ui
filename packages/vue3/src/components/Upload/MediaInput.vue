<script setup lang="ts">
import { computed } from 'vue';
import BaseFileInput from './Internal/BaseFileInput.vue';

const props = withDefaults(
  defineProps<{
    modelValue: File[]
    limit?: number
    disabled?: boolean
    label: string
    subLabel: string
    highlightedLabel: string
  }>(),
  {
    limit: 1,
    disabled: false,
    highlightedLabel: 'Click to upload',
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
  <BaseFileInput v-model="model" :limit="limit" :disabled="disabled">
    <template #facade>
      <div class="label" :class="{ disabled }">
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

  &-sub-text {
    color: var(--gray-500);
    font: var(--text-sm-regular);
  }
}
</style>
