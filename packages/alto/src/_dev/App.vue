<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref, watch } from 'vue';
import { Upload, UploadPreview } from '~/components';

const attachments = ref<File[]>([]);
const disabled = ref(false);
const limit = 5;
const file = new File(['meditations_marcus_aurelius'], 'Meditations.pdf', {
  type: 'application/pdf',
});
const media = new File(['meditations_marcus_aurelius'], 'Meditations.jpg', {
  type: 'image/*',
});

const checkLimit = () => {
  disabled.value = attachments.value.length >= limit;
};

const deleteFile = (file: File) => {
  const idx = attachments.value.indexOf(file);
  if (idx > -1) {
    attachments.value.splice(idx, 1);
    checkLimit();
  }
};
watch(attachments, () => {
  checkLimit();
});
</script>

<template>
  <div class="container">
    <Upload v-model="attachments" :limit="limit" :disabled="disabled" accept=".pdf, image/jpeg, video/*" />
  </div>
  <div class="container">
    <div class="files-grid">
      <UploadPreview
        v-for="(attachment, index) in attachments"
        :key="index"
        :file="attachment"
        @delete="deleteFile(attachment)"
      />
    </div>
  </div>
  <div class="container">
    <div class="files-grid">
      <UploadPreview
        :progress="10" :file="file"
      />
      <UploadPreview :file="file" />
      <UploadPreview :file="file" error="Failed to upload file" />
      <UploadPreview :file="media" />
      <UploadPreview :file="media" error="Failed to upload file" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  margin: auto;
  padding: 0 40px;
  gap: 40px;
}
</style>
