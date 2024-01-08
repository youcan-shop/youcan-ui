<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref, watch } from 'vue';
import { FileInput, UploadedFile } from '~/components';

const attachments = ref<File[]>([]);
const disabled = ref(false);
const limit = 1;

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
  <Toast :show="show" :close-after-duration="3000" position="bottom-right" type="success" @close="show = false">
    <template #title>
      Profile Updated
    </template>
    <template #description>
      Your profile information has been successfully updated.
    </template>
  </Toast>
  <div class="container">
    <div class="files-grid">
      <UploadedFile
        v-for="(attachment, index) in attachments"
        :key="index"
        :file="attachment"
        @delete="deleteFile(attachment)"
      />
    </div>
    <FileInput v-model="attachments" :limit="limit" :disabled="disabled" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  gap: 30px;
  margin: 10%;
}

.file-input {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
