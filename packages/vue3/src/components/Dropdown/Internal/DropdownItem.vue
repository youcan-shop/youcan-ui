<script setup lang="ts">
import { computed } from 'vue';
import type { DropdownItemDefinition } from '../types';
import { Checkbox, Thumbnail } from '~/components';

const props = withDefaults(
  defineProps<{
    selected: boolean
    checkbox?: boolean
    item: DropdownItemDefinition
  }>(),
  { checkbox: false },
);

const emit = defineEmits(['toggle']);

const model = computed<boolean>({
  get: () => props.selected,
  set: (value: boolean) => emit('toggle', value),
});

function toggle(override = !model.value) {
  model.value = override;
}
</script>

<template>
  <button role="button" class="item" @click="() => toggle()">
    <Checkbox v-if="checkbox" v-model="model" tabindex="-1" class="checkbox" />
    <div v-if="item.image || item.icon" class="preview">
      <Thumbnail v-if="item.image" size="small" :src="item.image" :alt="item.label" class="preview-image" />
      <i class="preview-icon" :class="[item.icon]" />
    </div>
    <div class="label">
      {{ item.label }}
    </div>
  </button>
</template>

<style scoped>
.item {
    gap: 8px;
    width: 100%;
    border: none;
    display: flex;
    cursor: pointer;
    user-select: none;
    padding: 12px 16px;
    align-items: center;
    font: var(--text-sm-regular);
    background-color: var(--base-white);
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
