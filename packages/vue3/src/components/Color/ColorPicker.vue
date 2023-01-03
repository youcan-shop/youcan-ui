<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import type { HSV, RGBA } from '@youcan/ui-core';
import { parseColor, rgbToHex, rgbaToHex } from '@youcan/ui-core';
import Override from './Override.vue';
import Swatches from './Swatches.vue';
import Saturation from './Saturation.vue';
import Hue from './Hue.vue';
import Alpha from './Alpha.vue';
import Backdrop from './Backdrop.vue';

const { color, defaults } = withDefaults(
  defineProps<{ color: string; defaults: string[] }>(),
  { color: '#000000', defaults: () => [] },
);

const emit = defineEmits(['setcolor']);

const saturationElement = ref();
const hueElement = ref();

const hexModel = ref<string>('');
const hexaModel = ref <string>('');
const rgbaModel = ref<string>('');
const currentColor = ref<RGBA & HSV>({ r: 0, g: 0, b: 0, a: 1, h: 0, s: 0, v: 0 });

const rgba = computed<RGBA>(() => ({ r: currentColor.value.r, g: currentColor.value.g, b: currentColor.value.b, a: currentColor.value.a } as RGBA));
const hsv = computed<HSV>(() => ({ h: currentColor.value.h, s: currentColor.value.s, v: currentColor.value.v } as HSV));

const hexString = computed(() => rgbToHex(rgba.value));
const hexaString = computed(() => rgbaToHex(rgba.value));
const rgbaString = computed(() => `${currentColor.value.r}, ${currentColor.value.g}, ${currentColor.value.b}, ${currentColor.value.a}`);
const rgbFuncString = computed(() => `rgb(${currentColor.value.r}, ${currentColor.value.g}, ${currentColor.value.b})`);
const rgbaFuncString = computed(() => `rgba(${rgbaString.value})`);

const setModels = () => {
  hexModel.value = hexString.value;
  rgbaModel.value = rgbaString.value;
  hexaModel.value = hexaString.value;
};

onMounted(() => {
  currentColor.value = parseColor(color);
  setModels();
});

const setSaturation = (color: unknown) => {
  currentColor.value = parseColor(color);
  setModels();
};

const setHue = (color: unknown) => {
  currentColor.value = parseColor(color);
  setModels();

  nextTick(() => {
    saturationElement.value.renderColor();
    saturationElement.value.renderSlider();
  });
};

const setAlpha = (a: number) => {
  currentColor.value.a = a;
  setModels();
};

const inputHex = (color: string) => {
  currentColor.value = parseColor(color);
  hexModel.value = color;
  rgbaModel.value = rgbaString.value;

  nextTick(() => {
    hueElement.value.renderSlider();
    saturationElement.value.renderColor();
    saturationElement.value.renderSlider();
  });
};

const setColor = (color: string) => {
  currentColor.value = parseColor(color);
  setModels();

  nextTick(() => {
    hueElement.value.renderSlider();
    saturationElement.value.renderColor();
    saturationElement.value.renderSlider();
  });
};

watch(
  rgba,
  () => emit('setcolor', { rgba: rgba.value, hsv: hsv.value, hex: hexModel.value, hexa: hexaModel.value }),
);
</script>

<template>
  <div class="color-picker">
    <div class="color-settings">
      <Saturation
        ref="saturationElement" class="color-saturation" :color="rgbFuncString" :hsv="hsv" :size="160"
        @setsaturation="setSaturation"
      />
      <Hue ref="hueElement" class="color-hue" :hsv="hsv" :width="24" :height="160" @sethue="setHue" />
      <Alpha class="color-alpha" :color="rgbFuncString" :rgba="rgba" :width="24" :height="160" @setalpha="setAlpha" />
    </div>
    <div class="input-group">
      <Backdrop class="color-preview" :color="rgbaFuncString" :width="38" :height="38" />
      <Override class="hex-input" type="#" :color="hexaModel" @overridecolor="inputHex" />
    </div>
    <div class="swatches">
      <Swatches :color="rgbaFuncString" :default-swatches="defaults" @setcolor="setColor" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.color-picker {
  width: min-content;
}

.color-settings {
  display: flex;
}

.input-group {
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 8px;

  &>*+* {
    margin-left: 8px;
  }
}

.color-preview {
  border-radius: 4px;
}
</style>
