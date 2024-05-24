<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Preset, PresetsProps } from '~/types';
import { Button } from '~/components';

const props = defineProps<PresetsProps>();

const emit = defineEmits(['select']);

const show = ref(false);

const list = computed(() => props.presets?.slice(0, 6));

function select(index: number, preset: Preset) {
  if (preset.disabled) {
    return;
  }
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
      <li v-for="(preset, index) in list" :key="index" class="list-item" :class="[{ active: preset.active }, { disabled: preset.disabled }]">
        <button @click="select(index, preset)">
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

.presets .presets-list .list-item button {
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

.presets .presets-list .list-item.active button {
  cursor: default;
}

.presets .presets-list .list-item.disabled button {
  color: var(--gray-300);
  cursor: not-allowed;
}

.presets .presets-list .list-item.active:not(.disabled) button,
.presets .presets-list .list-item:not(.disabled) button:hover {
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
