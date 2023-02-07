<script setup lang="ts">
import { ref } from 'vue';
import RichText from '~/components/RichText/RichText.vue';

const content = ref('');

async function uploadImage(file: File): Promise<string> {
  console.info('file:', file);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('https://placeholder.com/assets/images/150x150-2-500x500.png');
    }, 2000);
  });
}
</script>

<template>
  <div>
    <RichText v-model="content" :upload-image-handler="uploadImage" />
    <h1>Output</h1>
    <div v-html="content" />
    <textarea>{{ content }}</textarea>
  </div>
</template>

<style scoped>

</style>
