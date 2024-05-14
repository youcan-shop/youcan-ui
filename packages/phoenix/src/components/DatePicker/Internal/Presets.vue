<script setup lang="ts">
import { ref } from 'vue';
import type { PresetsProps } from '~/types';
import { Button } from '~/components';

defineProps<PresetsProps>();

const emit = defineEmits(['select']);

const show = ref(false);

function select(index: number) {
  emit('select', index);
  show.value = false;
}
</script>

<template>
  <div class="presets">
    <Button size="xs" class="presets-button" variant="secondary" @click="show = !show">
      {{ presetsTitle }}
    </Button>
    <ul class="presets-list" :class="{ show }">
      <li v-for="(preset, index) in presets?.slice(0, 6)" :key="index" class="presets-list-item" :class="{ active: preset.active }">
        <button @click="select(index)">
          {{ preset.label }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.presets {
  --md: 768px;

  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  height: 100%;
  padding: 12px 0;
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
  border-radius: 4px;
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

.presets .presets-button {
  display: none;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .presets {
    padding: 12px;
  }

  .presets .presets-list {
    position: absolute;
    z-index: 99;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    align-items: center;
    width: 100%;
    height: 100%;
    max-height: calc(100% - 60px);
    padding: 12px;
    transform: translateY(100%);
    transition: transform 250ms ease-in-out;
    border-right: 0;
    border-radius: 8px;
    background-color: var(--base-white);
  }

  .presets .presets-list.show {
    transform: translateY(0%);
  }

  .presets .presets-button {
    display: flex;
  }
}
</style>
