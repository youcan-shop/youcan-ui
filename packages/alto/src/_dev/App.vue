<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { RichText } from '~/components';

const content = ref();
</script>

<template>
  <div class="container">
    <RichText v-model="content" />
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

.container .label {
  font: var(--text-xl-medium);
  text-align: center;
  text-transform: uppercase;
}

.container .grid {
  display: grid;
  grid-template-columns: repeat(8, auto);
  gap: 40px;
}
</style>
