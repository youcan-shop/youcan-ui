<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import type { HSV, RGBA } from '@youcan/ui-core';
import { parseColor, rgbToHex, rgbaToHex } from '@youcan/ui-core';
import Override from './Internal/Override.vue';
import Swatches from './Internal/Swatches.vue';
import Saturation from './Internal/Saturation.vue';
import Hue from './Internal/Hue.vue';
import Alpha from './Internal/Alpha.vue';
import type { ColorPickerProps } from './types';

const props = withDefaults(
  defineProps<ColorPickerProps>(),
  {
    color: '#ffffff',
    defaults: () => [],
    preserveTransparency: false,
  },
);

const emit = defineEmits(['setcolor']);

const saturationElement = ref();
const hueElement = ref();

const hexModel = ref<string>('');
const hexaModel = ref<string>('');
const rgbaModel = ref<string>('');
const currentColor = ref<RGBA & HSV>({ r: 255, g: 255, b: 255, a: 1, h: 0, s: 0, v: 0 });

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
  currentColor.value = constructColor(props.color);
  setModels();
});

const setSaturation = (color: unknown) => {
  currentColor.value = constructColor(color);
  setModels();
};

const setHue = (color: unknown) => {
  currentColor.value = constructColor(color);
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
  currentColor.value = constructColor(color);
  hexModel.value = color;
  hexaModel.value = color;
  rgbaModel.value = rgbaString.value;

  nextTick(() => {
    hueElement.value.renderSlider();
    saturationElement.value.renderColor();
    saturationElement.value.renderSlider();
  });
};

const setColor = (color: string) => {
  currentColor.value = constructColor(color);
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

function constructColor(color: unknown) {
  return props.preserveTransparency ? parseColor(color, currentColor.value.a) : parseColor(color);
}
</script>

<template>
  <div class="color-picker">
    <Saturation
      ref="saturationElement" class="color-saturation" :color="rgbFuncString" :hsv="hsv" :size="224"
      @setsaturation="setSaturation"
    />
    <div class="sliders">
      <Hue ref="hueElement" class="color-hue" :hsv="hsv" :width="224" :height="10" @sethue="setHue" />
      <Alpha class="color-alpha" :color="rgbFuncString" :rgba="rgba" :width="224" :height="10" @setalpha="setAlpha" />
    </div>
    <div class="color-override">
      <label>HEX</label>
      <Override class="hex-input" type="#" :color="hexaModel" @overridecolor="inputHex" />
    </div>
    <hr>
    <div class="swatches">
      <Swatches :color="rgbaFuncString" :default-swatches="defaults" @setcolor="setColor" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.color-picker {
  box-sizing: border-box;
  width: min-content;
  padding: 12px;
  border-radius: 8px;
  background-color: var(--base-white);
  box-shadow: var(--shadow-md);
}

.sliders {
  margin-top: 12px;
}

.sliders > * + * {
  margin-top: 8px;
}

.color-override {
  margin-top: 12px;
}

.color-override label {
  display: block;
  margin-bottom: 4px;
  font: var(--text-sm-medium);
}

hr {
  margin: 12px 0;
  border: none;
  border-top: 1px solid var(--gray-200);
}
</style>
