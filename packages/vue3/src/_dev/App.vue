<script setup lang="ts">
import { ref } from 'vue';
import RichText from '~/components/RichText/RichText.vue';

const content = ref('');

const UPLOAD_IMAGE_BASE_URL = 'https://seller-area.youcan.shop/admin/upload/file/others';

async function uploadImage(file: File): Promise<string> {
  alert('nice');
  const data = new FormData();
  data.append('image', file);
  const response = await fetch(UPLOAD_IMAGE_BASE_URL, {
    method: 'POST',
    body: data,
  });

  const responseData = await response.json();

  if (response.ok) {
    const { link } = responseData;
    return link;
  }

  throw new Error('failed to upload image');
}
</script>

<template>
  <div>
    <RichText v-model="content" :upload-image-handler="uploadImage" />
    <h1>Output</h1>
    <div v-html="content" />
  </div>
</template>

<style scoped>

</style>
