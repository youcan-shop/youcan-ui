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
    <MediaInput v-model="attachments" label="test" :limit="limit" :disabled="disabled" sub-label="test" highlighted-label="test 2" />
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
