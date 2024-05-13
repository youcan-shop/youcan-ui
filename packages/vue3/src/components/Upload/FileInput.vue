<script setup lang="ts">
import { computed, useSlots } from 'vue';
import BaseFileInput from './Internal/BaseFileInput.vue';
import type { FileInputProps } from '~/types';

const props = withDefaults(
  defineProps<FileInputProps>(),
  {
    limit: 1,
    disabled: false,
    label: 'Browse your computer',
  },
);

const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => props.modelValue,
  set: (value: File[]) => {
    emit('update:modelValue', value);
  },
});

const slots = useSlots();
</script>

<template>
  <BaseFileInput v-model="model" :limit="limit" :disabled="disabled">
    <template #facade>
      <div class="label" :class="{ disabled }">
        <slot v-if="slots.label" name="label" />
        <div v-else class="default-label-content">
          <i class="i-youcan-upload-simple" />
          <div>{{ label }}</div>
        </div>
      </div>
    </template>
  </BaseFileInput>
</template>

<style scoped lang="scss">
.label {
  font: var(--text-sm-regular);

  i {
    color: var(--brand-500);
  }

  &.disabled {
    i {
      color: var(--gray-300);
    }
  }

  .default-label-content {
    gap: 8px;
    display: flex;
    align-items: center;
  }
}
</style>
