<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { CLR_WHITE, constructAlphaBackdrop } from '@youcan/ui-core';
import type { BackdropProps } from '~/types';

const props = withDefaults(
  defineProps<BackdropProps>(),
  { color: CLR_WHITE, width: 100, height: 30 },
);

const ALPHA_BACKDROP_SIZE = 5;
const canvas = ref<HTMLCanvasElement>();

const render = () => {
  const backdrop = constructAlphaBackdrop(ALPHA_BACKDROP_SIZE);

  const context = canvas.value!.getContext('2d', { willReadFrequently: true })!;
  canvas.value!.width = props.width;
  canvas.value!.height = props.height;

  context.fillStyle = context.createPattern(backdrop, 'repeat')!;
  context.fillRect(0, 0, props.width, props.height);

  context.fillStyle = props.color;
  context.fillRect(0, 0, props.width, props.height);
};

onMounted(() => render());
watch(() => props.color, () => render());
</script>

<template>
  <canvas ref="canvas" class="canvas" />
</template>
