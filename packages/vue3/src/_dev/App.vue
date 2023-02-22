<script setup lang="ts">
import { ref } from 'vue';
import RangeSlider from '~/components/RangeSlider/RangeSlider.vue';

const model = ref(7);
</script>

<template>
  <div style="max-width: 300px;">
    <div style="height: 100px;" />
    <RangeSlider v-model="model" :format-tool-tip="(v:string) => `${v}px`" :tooltip-visible="true" :disabled="true" :step="1" tooltip="hola" />
  </div>
</template>
