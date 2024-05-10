<script setup lang="ts">
import type { PresetsProps } from '~/types';

defineProps<PresetsProps>();

const emit = defineEmits(['select']);
</script>

<template>
  <div class="presets">
    <ul class="presets-list">
      <li v-for="(preset, index) in presets?.slice(0, 6)" :key="index" class="presets-list-item" :class="{ active: preset.active }">
        <button @click="() => emit('select', index)">
          {{ preset.label }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.presets {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  height: 100%;
  padding: 12px 0;
  overflow: hidden;
  user-select: none;
}

.presets .presets-list {
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0;
  padding: 0;
  padding: 0 12px;
  list-style-type: none;
  border-right: 1px solid var(--gray-200);
  row-gap: 5px;
}

.presets .presets-list .presets-list-item button {
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  transition: background-color 250ms ease-in-out;
  border: 0;
  border-radius: 8px;
  outline: none;
  background-color: var(--base-white);
  color: var(--gray-900);
  font: var(--text-sm-regular);
  cursor: pointer;
}

.presets .presets-list .presets-list-item.active button {
  cursor: default;
}

.presets .presets-list .presets-list-item.active button,
.presets .presets-list .presets-list-item button:hover {
  background-color: var(--brand-50);
}
</style>
