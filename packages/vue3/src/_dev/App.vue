<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { FileInput, UploadedFile } from '~/components';

const attachments = ref<File[]>([]);

const deleteFile = (file: File) => {
  const idx = attachments.value.indexOf(file);
  if (idx > -1) {
    attachments.value.splice(idx, 1);
  }
};
</script>

<template>
  <div class="container">
    <div class="files-grid">
      <UploadedFile
        v-for="(attachment, index) in attachments"
        :key="index"
        :file="attachment"
        @delete="deleteFile(attachment)"
      />
    </div>
    <FileInput v-model="attachments" :limit="1" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
  margin-top: 60px;
  row-gap: 15px;
}

.files-grid {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
</style>
