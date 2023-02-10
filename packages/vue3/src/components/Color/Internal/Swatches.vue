<script setup lang="ts">
import { onUnmounted, ref } from 'vue';
import { CLR_WHITE, constructAlphaBackdrop } from '@youcan/ui-core';

const props = withDefaults(
  defineProps<{ color: string; defaultSwatches: string[] }>(),
  { color: CLR_WHITE, defaultSwatches: () => [] },
);

const emit = defineEmits(['setcolor']);

const SWATCH_STORAGE_KEY = 'youcan-theme-editor-colors';

const colorBase64Encoded = ref(constructAlphaBackdrop(4).toDataURL());

const swatchHistory = ref<string[]>([]);
if (localStorage && SWATCH_STORAGE_KEY) {
  swatchHistory.value = JSON.parse(localStorage.getItem(SWATCH_STORAGE_KEY)!) || [];
}

const persistSwatch = (color: string) => {
  if (!color) {
    return;
  }

  const colors = swatchHistory.value || [];
  const index = colors.indexOf(color);

  if (index >= 0) {
    colors.splice(index, 1);
  }

  if (colors.length >= 7) {
    colors.pop();
  }

  colors.unshift(color);

  swatchHistory.value = colors || [];
  if (localStorage && SWATCH_STORAGE_KEY) {
    localStorage.setItem(SWATCH_STORAGE_KEY, JSON.stringify(colors));
  }
};

const selectColor = (color: string) => {
  emit('setcolor', color);
};

onUnmounted(() => persistSwatch(props.color));
</script>

<template>
  <div v-if="swatchHistory.length" class="swatch-wrapper storage">
    <div class="swatches storage">
      <div v-for="swatch in swatchHistory" :key="swatch" class="swatch" @click="selectColor(swatch)">
        <div :style="{ background: `url(${colorBase64Encoded})` }" class="alpha" />
        <div :style="{ background: swatch }" class="color" />
      </div>
    </div>
  </div>

  <div class="swatches">
    <div v-for="swatch in defaultSwatches" :key="swatch" class="swatch" @click="selectColor(swatch)">
      <div :style="{ background: `url(${colorBase64Encoded})` }" class="alpha" />
      <div :style="{ background: swatch }" class="color" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.swatch-wrapper {
  margin-top: 6px;
}

.swatches {
  display: flex;

  & > * + * {
    margin-left: 5px;
  }
}

.swatches .swatch {
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 100px;
  cursor: pointer;

  &:nth-child(7n + 1) {
    margin-left: 0;
  }

  &:hover {
    transform: scale(1.1);
  }

  .alpha {
    height: 100%;
    border-radius: 100px;
  }

  .color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100px;
  }
}
</style>
