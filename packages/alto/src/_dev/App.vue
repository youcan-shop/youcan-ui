<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { ColorInput } from '~/components';

const color1 = ref('#CBC3F5');
const color2 = ref('#CBC3F5');

function updateColor1(newColor: string) {
  if (newColor) {
    color1.value = newColor;
  }
}

function updateColor2(newColor: string) {
  if (newColor) {
    color2.value = newColor;
  }
}
</script>

<template>
  <div class="container">
    <ColorInput v-model="color1" @update:v-model="updateColor1" />
    {{ color1 }}
    <ColorInput v-model="color2" :preserve-transparency="false" :disabled="true" @update:v-model="updateColor2" />
    <ColorInput v-model="color2" :preserve-transparency="false" @update:v-model="updateColor2" />
    {{ color2 }}
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  gap: 80px;
  margin: 20px;
}
</style>
