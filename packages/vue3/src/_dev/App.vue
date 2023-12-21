<script setup lang="ts">
import { ref } from 'vue';
import 'uno.css';
import '../assets/main.css';
import { RichText } from '~/components';
const content = ref('');

async function uploadImage(file: File): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('https://placeholder.com/assets/images/150x150-2-500x500.png');
    }, 2000);
  });
}
</script>

<template>
  <div class="container">
    <RichText v-model="content" :upload-image-handler="uploadImage" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  height: 90vh;
  margin: 20px;
}

.selected-option {
  margin: 10%;
}
</style>
