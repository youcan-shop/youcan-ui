<script setup lang="ts">
import { computed, ref, useSlots } from 'vue';
import BaseFileInput from './Internal/BaseFileInput.vue';

const props = withDefaults(
  defineProps<{ modelValue: File[]; size?: 'sm' | 'md' | 'lg'; limit?: number }>(),
  { size: 'md', limit: 1 },
);

const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => props.modelValue,
  set: (value: File[]) => {
    emit('update:modelValue', value);
  },
});

const slots = useSlots();

const dragging = ref<boolean>(false);
</script>

<template>
  <BaseFileInput
    v-model="model" :limit="limit"
  >
    <template #facade>
      <div role="button" tabindex="0" class="facade" :class="{ dragging, sm: size === 'sm', lg: size === 'lg' }">
        <div>
          <div class="label">
            <slot v-if="slots.label" name="label" />
            <div v-else class="default-label-content">
              <i class="i-youcan-upload-simple" />
              <div>Browse your computer</div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </BaseFileInput>
</template>

<style scoped>
.facade {
  display: grid;
  box-sizing: border-box;
  padding: 12px 16px;
  border: 1px solid var(--gray-200);
  border-radius: 4px;
  background-color: var(--gray-50);
  box-shadow: var(--shadow-xs-gray);
  place-items: center;
}

.facade.sm {
  max-width: 148px;
  min-height: 148px;
}

.facade.lg {
  min-height: 148px;
}

.facade:hover,
.facade.dragging {
  background-color: var(--gray-100);
}

.facade:active,
.facade:focus {
  border: 1px solid var(--brand-500);
  outline: none;
  box-shadow: var(--focus-shadow-xs-brand);
}

.facade.dragging {
  background: var(--gray-100);
}

.label i {
  color: var(--brand-500);
}

.default-label-content {
  gap: 8px;
  display: flex;
  align-items: center;
  font: var(--text-sm-regular);
}

.facade.sm .default-label-content {
  flex-direction: column;
}
</style>
