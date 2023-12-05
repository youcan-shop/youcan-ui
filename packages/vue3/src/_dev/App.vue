<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref, watch } from 'vue';
import { MediaInput, UploadedMedia } from '~/components';

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
      <UploadedMedia v-for="(attachment, index) in attachments" :key="index" :file="attachment"
        @delete="deleteFile(attachment)" />
    </div>
    <MediaInput v-model="attachments" :limit="limit" :disabled="disabled" />
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

.files-grid {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
</style>
