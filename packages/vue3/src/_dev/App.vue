<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { ColorInput, TextArea } from '~/components';

const comment = ref('');
const color = ref('');
</script>

<template>
  <div class="container">
    <TextArea v-model="comment" placeholder="Leave your comment" />
    <ColorInput v-model="color" :preserve-transparency="false" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  height: 100vh;
  margin: auto;
}

p {
  margin-bottom: 0;
  color: var(--gray-600);
  font: var(--text-sm-regular);
}
</style>
