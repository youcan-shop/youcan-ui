<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { FileInput, UploadedMedia } from '~/components';
const attachment = ref<File | null>(null);

const uploadFile = (file: File[]) => {
  attachment.value = file[0];
};
const deleteFile = () => {
  attachment.value = null;
};
</script>

<template>
  <div class="container">
    <UploadedMedia
      v-if="attachment"
      :file="attachment"
      @delete="deleteFile"
    />
    <div class="file-input">
      <FileInput @input="uploadFile" />
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

.file-input {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
