<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { ColorInput, ColorPicker } from '~/components';

const colorv3 = ref('#A8B1FFFF');

const color = ref('#A8B1FFFF');

function updateColor(newColor: string) {
  color.value = newColor;
}
</script>

<template>
  <div class="container">
    <ColorInput :model-value="color" @update:modelValue="updateColor" />
  </div>
  <div class="container">
    <ColorPicker :preserve-transparency="false" :model-value="colorv3" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  margin: 30px;
  padding: 10%;
  background-color: var(--gray-200);
  gap: 0.5rem;
}
</style>
