<script setup lang="ts">
import { computed, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { swatches as _swatches } from './swatches';
import { TertiaryButton } from '~/components';
import ColorInput from '~/components/Color/ColorInput.vue';

const props = withDefaults(
  defineProps<{
    modelValue: string
    icon: string
    swatches?: string[]
  }>(),
  {
    swatches: () => _swatches,
  },
);

const emit = defineEmits(['update:modelValue']);

const dropdownRef = ref();
const showDropdown = ref(false);

const model = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value);
  },
});

const setColor = (hex: string) => {
  model.value = hex;
};

const toggleDropdown = (show = !showDropdown.value) => (showDropdown.value = show);

onClickOutside(dropdownRef, () => {
  toggleDropdown(false);
});
</script>

<template>
  <div class="input-color">
    <TertiaryButton size="sm" icon-position="only" @click="toggleDropdown()">
      <template #icon>
        <i :class="icon" />
      </template>
    </TertiaryButton>
    <div v-show="showDropdown" ref="dropdownRef" class="colors-dropdown">
      <ul class="swatches">
        <li
          v-for="(color, i) in swatches"
          :key="i"
          class="swatch"
          :style="{ backgroundColor: color }"
          @click="setColor(color)"
        />
      </ul>
      <ColorInput v-model="model" placeholder="hex color" />
    </div>
  </div>
</template>

<style scoped>
.input-color {
  position: relative;
}

.colors-dropdown {
  position: absolute;
  z-index: 999999;
  width: 250px;
  margin-top: 10px;
  padding: 12px;
  border: 1px solid var(--gray-200);
  border-radius: 4px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-xs-gray);
  color: var(--gray-500);
}

.swatches {
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: start;
  margin: 0;
  margin-bottom: 10px;
  padding: 0;
  list-style: none;
  gap: 10px;
}

.swatches .swatch {
  width: 30px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;
}

@media screen and (width < 768px) {
  .colors-dropdown {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
