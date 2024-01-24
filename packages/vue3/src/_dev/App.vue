<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref, watch } from 'vue';
import { MediaInput, UploadedMedia } from '~/components';

const attachments = ref<File[]>([]);
const disabled = ref(false);
const limit = 4;

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
    <div class="files-grid">
      <UploadedMedia
        v-for="(attachment, index) in attachments"
        :key="index"
        :file="attachment"
        @delete="deleteFile(attachment)"
      />
    </div>
    <MediaInput v-model="attachments" :limit="limit" :disabled="disabled" />
    <div class="files-grid">
      <UploadedMedia
        file="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  min-height: 140px;
}

.file-grid {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
