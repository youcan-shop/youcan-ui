<script setup lang="ts">
import { computed } from 'vue';
import type { DropdownItemProps } from '../types';
import { Checkbox, Thumbnail } from '~/components';

const props = withDefaults(
  defineProps<DropdownItemProps>(),
  { checkbox: false },
);

const emit = defineEmits(['toggle']);

const model = computed<boolean>({
  get: () => props.selected,
  set: (value: boolean) => emit('toggle', value),
});

function toggle(event: Event) {
  event.preventDefault();
  model.value = !model.value;
}
</script>

<template>
  <button role="button" class="item" @click="(event) => toggle(event)">
    <Checkbox v-if="checkbox" v-model="model" tabindex="-1" class="checkbox" />
    <div v-if="item.image || item.icon" class="preview">
      <Thumbnail v-if="item.image" size="small" :src="item.image" :alt="item.label" class="preview-image" />
      <i class="preview-icon" :class="[item.icon]" />
    </div>
    <div class="label">
      {{ item.label }}
    </div>
    <slot />
  </button>
</template>

<style scoped>
.item {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  border: none;
  background-color: var(--base-white);
  cursor: pointer;
  user-select: none;
  gap: 8px;
}

.item .label {
  color: var(--gray-900);
  font: var(--text-sm-regular);
}

.item:hover {
  background-color: var(--gray-50);
}

.item:focus,
.item:active {
  outline: none;
  background: var(--gray-100);
}

.preview {
  color: var(--gray-500);
}
</style>
