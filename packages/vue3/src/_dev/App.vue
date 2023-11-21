<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref, watch } from 'vue';
import { FileInput, UploadedFile } from '~/components';

const attachments = ref<File[]>([]);
const disabled = ref(false);
const limit = ref(4);

const checkLimit = () => {
  disabled.value = attachments.value.length >= limit.value;
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
      <UploadedFile
        v-for="(attachment, index) in attachments"
        :key="index"
        :file="attachment"
        @delete="deleteFile(attachment)"
      />
    </div>
    <FileInput v-model="attachments" :limit="limit" :disabled="disabled">
      <template #label>
        <span>Upload files</span>
      </template>
    </FileInput>
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
