<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { ColorInput } from '~/components';

const color = ref('#a8b1ff');
</script>

<template>
  <div class="container">
    <ColorInput
      v-model="color"
      :preserve-transparency="false"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  margin: 10%;
  gap: 30px;
}
</style>
